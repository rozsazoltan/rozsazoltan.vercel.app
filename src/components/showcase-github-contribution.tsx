"use client";

import clsx from "clsx";

interface Contribution {
  name: string;
  stars: number;
  prs: number;
  issues: number;
  discussions: number;
  comments: number;
}

interface GitHubContributionProps {
  contribution: Contribution;
}

const GitHubContribution = ({ contribution }: GitHubContributionProps) => {
  const sum = contribution.prs + contribution.issues + contribution.discussions;

  return (
    <div 
      className="group/card bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg dark:shadow-gray-800 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {contribution.name}
        </h3>
        {false && (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
            Private
          </span>
        )}
      </div>
      
      <div className="flex items-center mb-3">
        <StarIcon />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {contribution.stars.toLocaleString('en-US')}
        </span>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-xs">
        <ContributionStat
          icon={<PullRequestIcon />}
          count={contribution.prs}
          className={clsx(
            "stroke-purple-600 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
            (sum === 0 || contribution.prs === 0) && 'group-hover/card:grayscale-100',
          )}
        />
        
        <ContributionStat 
          icon={<IssueIcon />}
          count={contribution.issues}
          className={clsx(
            "stroke-green-600 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20",
            (sum === 0 || contribution.issues === 0) && 'group-hover/card:grayscale-100',
          )}
        />
        
        <ContributionStat 
          icon={<DiscussionIcon />}
          count={contribution.discussions}
          className={clsx(
            "stroke-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
            (sum === 0 || contribution.discussions === 0) && 'group-hover/card:grayscale-100',
          )}
        />
        
        <div className={clsx(
          "flex flex-col items-center p-2 rounded col-span-3 bg-gray-50 dark:bg-gray-700",
          sum === 0 && 'group-hover/card:bg-sky-50 group-hover/card:dark:bg-sky-700',
        )}>
          <div className="flex items-center">
            <CommentIcon />
            <span className="text-gray-600 dark:text-gray-300 ml-1">
              {contribution.comments} comments
            </span>
          </div>
        </div>
      </div>
      
      <a 
        href={`https://github.com/${contribution.name}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
      >
        View on GitHub
        <ExternalLinkIcon />
      </a>
    </div>
  );
};

// SVG Icon Components
const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const PullRequestIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 16 16">
    <path
      d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5z"
    />
  </svg>
);

const IssueIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DiscussionIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const CommentIcon = () => (
  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Helper component for contribution stats
const ContributionStat = ({ 
  icon, 
  count, 
  className,
  iconClassName
}: { 
  icon: React.ReactNode; 
  count: number;
  className: string;
  iconClassName?: string;
}) => (
  <div className={clsx(className, `group relative p-2 rounded h-12 overflow-hidden`)}>
    <span className={clsx(iconClassName, 'absolute top-2 left-2 w-12 h-12 opacity-10 dark:opacity-30 group-hover:opacity-50 transition-opacity')}>
      {icon}
    </span>
    <span className={clsx(
      `absolute bottom-2 right-2 text-3xl`,
      count < 1 ? 'opacity-50' : 'font-extrabold opacity-50 dark:opacity-70 group-hover:opacity-100 transition-opacity',
    )}>
      {count}
    </span>
  </div>
);

export default GitHubContribution;