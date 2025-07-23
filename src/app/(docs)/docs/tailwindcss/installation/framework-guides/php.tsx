import { TipCompat, TipHighlight, TipLearn } from "@/components/tips";
import { css, html, js, php, shell, Step, Tab } from "./utils";
import { type Page, type Tile } from "./utils";
import Logo from "@/docs/img/guides/php.react.svg";
import { CodeExample, CodeExampleStack } from "@/components/code-example";

export let tile: Tile = {
  title: "PHP",
  description: "A fast, flexible scripting language powering dynamic websites and web apps.",
  type: "community",

  Logo,
};

export let page: Page = {
  title: "Install Tailwind CSS with PHP",
  description: "Setting up Tailwind CSS in a PHP project.",
};

export let tabs: Tab[] = [
  {
    slug: "cli",
    title: "Using Tailwind CLI",
  },
  {
    slug: "vite",
    title: "Using Vite",
  },
];

export let steps: Step[] = [
  {
    tabs: ["cli"],
    title: "Install Tailwind CSS",
    body: (
      <p>
        Install <code>tailwindcss</code> and <code>@tailwindcss/cli</code> via npm.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/cli
      `,
    },
  },
  {
    tabs: ["cli"],
    title: "Import Tailwind in your CSS",
    body: (
      <p>
        Add the <code>@import "tailwindcss";</code> import to your main CSS file.
      </p>
    ),
    code: {
      name: "resources/css/main.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    tabs: ["cli"],
    title: "Create script for Development",
    body: (
      <>
        <p>
          Creating a PHP script  to start the Tailwind CLI and the PHP development server together.
        </p>
        <TipHighlight>
          It is recommended to name the file simply <code>dev</code>, without the <code>.php</code> extension.
        </TipHighlight>
        <TipLearn>
          With the <code>php -S $host:$port -t $publicDir</code> command, you can start a local HTTP server for any PHP project.
        </TipLearn>
      </>
    ),
    code: {
      name: "dev (PHP file without extension for development)",
      className: "[&_.shiki]:max-h-96",
      lang: "php",
      code: php`
        <?php
        // dev for PHP - Development server launcher by Zoltán Rózsa

        // Default configuration
        $host = 'localhost';
        $port = 8000;
        $publicDir = 'public/';
        $inputCss = './resources/css/main.css';
        $outputCss = './public/generated.css';

        // Parse command line arguments
        $options = getopt('h:p:', ['host:', 'port:', 'help']);

        if (isset($options['help'])) {
            echo "Usage: php dev.php [options]" . PHP_EOL;
            echo "Options:" . PHP_EOL;
            echo "  -h, --host <host>    Server host (default: localhost)" . PHP_EOL;
            echo "  -p, --port <port>    Server port (default: 8000)" . PHP_EOL;
            echo "  --help               Show this help message" . PHP_EOL;
            exit(0);
        }

        if (isset($options['h']) || isset($options['host'])) {
            $host = $options['h'] ?? $options['host'];
        }

        if (isset($options['p']) || isset($options['port'])) {
            $port = $options['p'] ?? $options['port'];
        }

        // Check if input CSS file exists
        if (!file_exists($inputCss)) {
            echo "  ❌ Error: Input CSS file '$inputCss' does not exist!" . PHP_EOL;
            echo "  Please create the file or check the path." . PHP_EOL;
            exit(1);
        }

        echo PHP_EOL . "  🚀 Starting development servers [by rozsazoltan]" . PHP_EOL . PHP_EOL;

        // Start Tailwind CSS watcher in background
        echo "  ➜ 📦 Starting Tailwind CSS watcher..." . PHP_EOL;
        $tailwindCmd = "npx @tailwindcss/cli -i $inputCss -o $outputCss --watch";

        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            // Windows
            pclose(popen("start /B $tailwindCmd", "r"));
        } else {
            // Unix/Linux/macOS
            exec("$tailwindCmd > /dev/null 2>&1 &");
        }

        sleep(2);

        // Start PHP development server
        echo "  ➜ 🐘 Starting PHP development server on http://$host:$port..." . PHP_EOL;
        echo PHP_EOL . "Press Ctrl+C to stop both servers" . PHP_EOL . PHP_EOL;

        // Start PHP server
        passthru("php -S $host:$port -t $publicDir");
      `,
    },
  },
  {
    tabs: ["cli"],
    title: "PHP starter template",
    body: (
      <>
        <p>
          For a native PHP project, we need an <code>autoload.php</code> for proper namespace handling.
        </p>
        <p>
          An <code>index.php</code> where we build the application, and a <code>Kernel.php</code> to construct the application, handle routes, and manage responses.
        </p>
        <p>
          With the previous script, we start the HTTP server from the <code>./public</code> directory, so this is where we need to place our <code>index.php</code> file.
        </p>
        <TipCompat>
          Temporary guide. Will soon be released as a package in the form of a native PHP template.
        </TipCompat>
      </>
    ),
    code: {
      name: "PHP files",
      lang: "other",
      code: (
        <CodeExampleStack className="[&_.shiki]:max-h-96">
          <CodeExample
            filename="autoload.php"
            example={{
              lang: 'php',
              code: php`
                <?php

                spl_autoload_register(function ($class) {
                    require_once __DIR__ . '/src/' . str_replace('\\', '/', $class) . '.php';
                });
              `,
            }}
          />
          <CodeExample
            filename="public/index.php"
            example={{
              lang: 'php',
              code: php`
                <?php

                use Bootstrap\Application;
                use Http\Kernel;

                require_once './../autoload.php';

                $kernel = new Kernel();
                $app = new Application($kernel);
              `,
            }}
          />
          <CodeExample
            filename="src/Bootstrap/Application.php"
            example={{
              lang: 'php',
              code: php`
                <?php

                namespace Bootstrap;

                // use Bootstrap\HandleExceptions;

                class Application
                {
                    // Setting for testing mode
                    public static bool $testing = true;

                    // List of classes to handle
                    private array $handlers = [
                        // HandleExceptions::class,
                    ];

                    // Whether the application is running in console
                    private ?bool $isRunningInConsole = null;

                    /**
                     * Start the application.
                     * - Bootstrap handlers.
                     * - Call Kernel.
                     */
                    public function __construct(Kernel $kernel)
                    {
                        foreach($this->handlers as $handler) {
                            (new $handler)->bootstrap($this);
                        }

                        $kernel->handle();
                    }

                    /**
                     * Determine if the application is running in the console.
                     */
                    public function runningInConsole(): bool
                    {
                        if ($this->isRunningInConsole === null) {
                            $this->isRunningInConsole = \PHP_SAPI === 'cli' || \PHP_SAPI === 'phpdbg';
                        }

                        return $this->isRunningInConsole;
                    }
                }
              `,
            }}
          />
          <CodeExample
            filename="src/Bootstrap/Kernel.php"
            example={{
              lang: 'php',
              code: php`
                <?php

                namespace Bootstrap;

                use Exception;

                class Kernel
                {
                    /**
                     * Handle the execution of the command.
                     *
                     * @throws Exception
                     */
                    public function handle(): void
                    {
                        throw new Exception('Missing handle() function: ' . get_class($this));
                    }
                }
              `,
            }}
          />
          <CodeExample
            filename="src/Http/Kernel.php"
            example={{
              lang: 'php',
              code: php`
                <?php

                namespace Http;

                use Bootstrap\Kernel as DefaultKernel;

                class Kernel extends DefaultKernel
                {
                    public function handle(): void
                    {
                        /**
                         * Routing
                         */
                        $request = $_SERVER['REQUEST_URI'];
                        // If the request ends with "/" we trim it since we don't differentiate between "/path" and "/path/"
                        if (substr($request, -1) === '/') {
                            $request = substr($request, 0, -1);
                        }
                        
                        // Route definitions
                        switch ($request) {
                            case '':
                                // Home page
                                $this->servePageWithSkeleton('/resources/home.html');
                                break;
                                
                            case '/about':
                                // About Page
                                $this->servePageWithSkeleton('/resources/about.html');
                                break;
                                
                            default:
                                // Handle 404 error
                                $this->servePageWithSkeleton('404');
                                break;
                    }
                    
                    /**
                     * Serve page content within skeleton template
                     */
                    private function servePageWithSkeleton(string $filePath): void
                    {
                        $skeletonPath = dirname(__DIR__, 2) . '/resources/skeleton.html';
                        
                        if (file_exists($skeletonPath)) {
                            $skeleton = file_get_contents($skeletonPath);
                            
                            if ($filePath === '404') {
                                // 404 error page
                                $content = '
                                    <div class="min-h-screen flex items-center justify-center bg-gray-50">
                                        <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
                                            <div class="mb-6">
                                                <h1 class="text-6xl font-bold text-red-500 mb-2">404</h1>
                                                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
                                                <p class="text-gray-600 mb-6">The requested page could not be found.</p>
                                            </div>
                                            <a href="/" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                                                Back to Homepage
                                            </a>
                                        </div>
                                    </div>
                                ';
                            } elseif (file_exists(dirname(__DIR__, 2) . $filePath)) {
                                $content = file_get_contents(dirname(__DIR__, 2) . $filePath);
                            } else {
                                // File not found error
                                $content = '
                                    <div class="min-h-screen flex items-center justify-center bg-gray-50">
                                        <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
                                            <div class="mb-6">
                                                <div class="text-red-500 mb-4">
                                                    <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.866-.833-2.598 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                                    </svg>
                                                </div>
                                                <h2 class="text-2xl font-semibold text-gray-800 mb-4">File Not Found</h2>
                                                <p class="text-gray-600 mb-6">The requested file could not be loaded.</p>
                                            </div>
                                            <a href="/" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                                                Back to Homepage
                                            </a>
                                        </div>
                                    </div>
                                ';
                            }
                            
                            // Replace {page} placeholder with content
                            $output = str_replace('{page}', $content, $skeleton);
                            echo $output;
                        } else {
                            // Fallback if skeleton.html is missing
                            echo '
                                <div class="min-h-screen flex items-center justify-center bg-red-50">
                                    <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center border-l-4 border-red-500">
                                        <h2 class="text-2xl font-semibold text-red-800 mb-4">Critical Error</h2>
                                        <p class="text-red-600 mb-6">Skeleton template not found!</p>
                                        <a href="/" class="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                                            Back to Homepage
                                        </a>
                                    </div>
                                </div>
                            ';
                        }
                    }
                }
              `,
            }}
          />
        </CodeExampleStack>
      )
    },
  },
  {
    tabs: ["cli"],
    title: "Start using Tailwind in your HTML",
    body: (
      <>
        <p>
          Add your compiled CSS file to the <code>&lt;head&gt;</code> and start using Tailwind's utility classes to style your content.
        </p>
        <TipLearn>
          The project runs from the <code>./public</code> directory, so the <code>./public/generated.css</code> file created can be accessed directly using <code>./generated.css</code>`.
        </TipLearn>
      </>
    ),
    code: {
      name: "HTML files",
      lang: "other",
      code: (
        <CodeExampleStack>
          <CodeExample
            filename="resources/skeleton.html"
            example={{
              lang: 'html',
              code: html`
                <!doctype html>
                <html>
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <link href="./generated.css" rel="stylesheet">
                </head>
                <body>
                  {page}
                </body>
                </html>
              `,
            }}
          />
          <CodeExample
            filename="resources/home.html"
            example={{
              lang: 'html',
              code: html`
                <h1 class="text-3xl font-bold underline">
                  Hello world!
                </h1>
              `,
            }}
          />
        </CodeExampleStack>
      )
    }
  },
];
