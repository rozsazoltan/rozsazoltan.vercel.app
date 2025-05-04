import { useState, useRef, useEffect, useCallback } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import clsx from 'clsx';

export interface Step {
  text: string;
  before?: StepHook;
  after?: StepHook;
}

type StepHook = (step: Step, api: StepApi) => void;

interface StepApi {
  currentStep: number;
  totalSteps: number;
  isRunning: boolean;
  reset: () => void;
}

interface UseAnimatedCodeProps {
  initialCode: string;
  steps: Step[];
  options?: {
    hooks?: {
      // Order:   beforeAll, beforeEach, step.before
      //          [step typing]
      //          step.after, afterEach, afterAll
      beforeEach?: StepHook;
      afterEach?: StepHook;
      beforeAll?: StepHook;
      afterAll?: StepHook;
    };
    duration?: number;
  }
}

interface UseAnimatedCodeReturn {
  value: string;
  start: () => void;
  reset: () => void;
  isRunning: boolean;
  currentStep: number;
  isTyping: boolean;
  typingLine: number;
  typingChar: number;
}

export const useAnimatedCode = ({
  initialCode,
  steps,
  options,
}: UseAnimatedCodeProps): UseAnimatedCodeReturn => {
  const [value, setValue] = useState(initialCode);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [pending, setPending] = useState<number | undefined>(undefined);
  const [typingLine, setTypingLine] = useState<number>(0);
  const [typingChar, setTypingChar] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  const defaultOptions = {
    duration: 2000,
  }
  const opts = {
    ...defaultOptions,
    ...options,
  }

  const clearTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (typingRef.current) clearTimeout(typingRef.current);
  };

  const apiRef = useRef<StepApi>({
    currentStep,
    totalSteps: steps.length,
    isRunning,
    reset: () => {},
  });

  // Update API state
  useEffect(() => {
    apiRef.current = {
      currentStep,
      totalSteps: steps.length,
      isRunning,
      reset,
    };
  }, [currentStep, isRunning, steps.length]);

  const insertTextSlowly = (valueWithoutPlaceholder: string, position: number, text: string, onDone: () => void) => {
    let index = 0;
    const hasChange = text.length > 0;
    setIsTyping(hasChange);

    const textWithoutSubSteps = text.replace(/###step\d+###/g, '');

    const typeNext = () => {
      if (index <= textWithoutSubSteps.length) {
        const char = textWithoutSubSteps.slice(0, index)
        const newValue = valueWithoutPlaceholder.slice(0, position) + char + valueWithoutPlaceholder.slice(position);
        setValue(newValue);

        if (char.slice(char.length - 1) === "\n") {
          // TODO: In case of a new line, the number of spaces at the beginning of the previous (current) line
          // should be inserted after the \n in the new line, but not more than the number of spaces present in the current line.
          /*

          const today = new Date().toLocaleDateString("en-US", {
            weekday: "short", // We closed the line with \n, and this line had 2 spaces;
                              // therefore, in the new line, 0, 1, or 2 spaces can be used
                              // since all of them are present in the current line,
                              // so \n space space would require pre-writing.
          __month: "short",

           */
          if (hasChange) {
            setTypingLine((prev) => prev + 1);
            setTypingChar(0);
          }
        }
        if (hasChange) {
          setTypingChar((prev) => prev + 1);
        }

        index++;
        typingRef.current = setTimeout(typeNext, Math.random() * 200 + 30);

        return;
      }
      
      setIsTyping(false);

      if (hasChange) {
        const newValue = valueWithoutPlaceholder.slice(0, position) + text + valueWithoutPlaceholder.slice(position);
        setValue(newValue);
      }

      onDone();
   };

    typeNext();
  };

  const getLine = (value: string, position: number) => {
    // lines before current pos
    const substring = value.slice(0, position);
    const lines = substring.split('\n');

    // without empty step lines
    const filteredLines = lines.filter(line => !/^###step\d+###$/.test(line));

    return filteredLines.length - 1;
  };
  const getCharPosInLine = (value: string, position: number) => {
    // find last line pos
    const substring = value.slice(0, position);
    const lastNewlineIndex = substring.lastIndexOf('\n');

    // return char pos from last break row
    return position - (lastNewlineIndex + 1);
  };

  const proceedToNextStep = (stepIndex = 0) => {
    clearTimers();

    if (! isRunning) return;

    if (stepIndex >= steps.length) {
      done();
      return;
    }

    const step = steps[stepIndex];
    setCurrentStep(stepIndex);

    if (stepIndex === 0 && opts.hooks?.beforeAll) {
      opts.hooks.beforeAll(step, apiRef.current)
    }
    if (opts.hooks?.beforeEach) {
      opts.hooks.beforeEach(step, apiRef.current)
    }
    if (step.before) {
      step.before(step, apiRef.current);
    }

    const placeholder = `###step${stepIndex + 1}###`;
    const position = value.indexOf(placeholder);
    if (step.text.length > 0) {
      setTypingLine(getLine(value, position));
      setTypingChar(getCharPosInLine(value, position));
    }

    if (position === -1) {
      console.warn(`Placeholder ${placeholder} not found.`);
      return;
    }

    const valueWithoutPlaceholder = value.replace(placeholder, '');
    insertTextSlowly(valueWithoutPlaceholder, position, step.text, () => {
      if (step.after) {
        step.after(step, apiRef.current);
      }
      if (opts.hooks?.afterEach) {
        opts.hooks.afterEach(step, apiRef.current)
      }
      if (stepIndex === steps.length - 1 && opts.hooks?.afterAll) {
        opts.hooks.afterAll(step, apiRef.current)
      }

      const nextStepIndex = stepIndex + 1
      if (nextStepIndex >= steps.length) {
        done();
        return;
      }
      timerRef.current = setTimeout(() => setPending(nextStepIndex), opts.duration)
    });
  };

  useEffect(() => {
    if (! isRunning) return;

    const stepIndex = pending || 0;

    setTimeout(() => {
      proceedToNextStep(stepIndex);
    }, 100);
  }, [pending]);

  const start = useCallback(() => {
    if (isRunning) return;

    clearTimers();
    setValue(initialCode);
    setCurrentStep(-1);
    setIsRunning(true);
    setPending(0);
  }, [initialCode, steps]);

  const done = useCallback(() => {
    clearTimers();
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setValue(initialCode);
    setCurrentStep(-1);
    setIsRunning(false);
    setIsTyping(false);
  }, [initialCode]);

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, []);

  return {
    value,
    start,
    reset,
    isRunning,
    currentStep,
    isTyping,
    typingLine,
    typingChar,
  };
};

export const CodeAnimation: React.FC<{ 
  code: string; 
  language: string;
  steps?: Step[];
  duration?: number;
  onBeforeStep?: StepHook;
  onAfterStep?: StepHook;
}> = ({ code, language, steps = [], duration = 2000, onBeforeStep, onAfterStep }) => {
  const {
    value,
    start: startAnimation,
    reset: resetAnimation,
    isRunning,
    currentStep,
    isTyping,
    typingLine,
    typingChar,
  } = useAnimatedCode({
    initialCode: code,
    steps,
    options: {
      hooks: {
        beforeEach: onBeforeStep,
        afterEach: onAfterStep,
      },
      duration,
    }
  });

  const getHighlightedCode = () => {
    let currentLanguage = language.toLowerCase();
    let nextLanguage: string | undefined;
    const highlightedLines: string[] = [];

    const filteredValue = value.replace(/(?:\n)###step\d+###(?:\n)/g, '\n').replace(/###step\d+###/g, '');
    const valueLines = filteredValue.split('\n');
    valueLines.forEach(line => {
      if (nextLanguage) {
        currentLanguage = nextLanguage;
        nextLanguage = undefined;
      }

      // Language switching logic in HTML
      if (currentLanguage === 'html') {
        if (line.includes('<script ') && !line.includes('</script')) {
          nextLanguage = 'javascript';
        } else if (line.includes('<style ') && !line.includes('</style')) {
          nextLanguage = 'css';
        }
      } else if (currentLanguage === 'javascript' && line.includes('</script')) {
        currentLanguage = 'html';
      } else if (currentLanguage === 'css' && line.includes('</style')) {
        currentLanguage = 'html';
      }

      highlightedLines.push(hljs.highlight(line, { language: currentLanguage }).value);
    });

    return highlightedLines;
  };

  const highlightedCode = getHighlightedCode();

  useEffect(() => {
    if (steps.length > 0 && ! isRunning) {
      startAnimation();
    }
  }, []);

  const [charWidth, setCharWidth] = useState<number>(0);
  const codeRef = useRef<HTMLPreElement | null>(null);
  useEffect(() => {
    if (codeRef.current) {
      const span = document.createElement('span');
      span.style.visibility = 'hidden';
      span.style.whiteSpace = 'nowrap';
      span.textContent = 'W';
      codeRef.current.appendChild(span);

      const width = span.getBoundingClientRect().width;
      setCharWidth(width);

      codeRef.current.removeChild(span);
    }
  }, [code]);

  return (
    <div className={clsx(
      "*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5!",
      "**:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh]",
      "*:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5"
    )}>
      <pre tabIndex={0} className="hljs language-handlebars">
        <code>
          {highlightedCode.map((line, index) => {
            return (
              <span
                key={index}
                className={clsx(
                  "line",
                )}
                ref={codeRef}
              >
                <span dangerouslySetInnerHTML={{ __html: line }} />
                {isTyping && typingLine === index && (
                  <span
                    className="absolute after:animate-typing after:mt-1 after:inline-block after:h-[1.2em] after:w-px after:border-r-2 after:border-sky-400 after:bg-transparent after:content-['']"
                    style={{
                      left: `${(typingChar + 3.5) * charWidth}px`,
                    }}
                  />
                )}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
};
