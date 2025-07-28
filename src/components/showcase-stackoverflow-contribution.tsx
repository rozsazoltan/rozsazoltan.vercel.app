"use client";

import clsx from "clsx";

interface StackOverflowData {
  answers: number;
  reputation: number;
  views: string;
  tags: string[];
  badges: {
    gold: number;
    silver: number;
    bronze: number;
  };
}

interface StackOverflowContributionProps {
  data: StackOverflowData;
}

const StackOverflowContribution = ({ data }: StackOverflowContributionProps) => {
  const totalBadges = data.badges.gold + data.badges.silver + data.badges.bronze;
  
  return (
    <div className="max-w-7xl px-2">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-0 flex-wrap">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
              <StackOverflowIcon />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Stack Overflow Profile
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Community contributions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-x-2 max-sm:flex-wrap">
            <div className="flex items-center gap-x-2">
              <ViewsIcon />
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {data.views}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">views</span>
            </div>
            <div className="flex items-center gap-x-2">
              <ReputationIcon />
              <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {data.reputation.toLocaleString('en-US')}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">reputation</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Answers */}
          <div className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-100 dark:border-green-800 hover:shadow-lg dark:shadow-gray-800 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <AnswerIcon />
              <span className="text-xs font-medium text-green-700 dark:text-green-300 uppercase tracking-wider">
                Answers
              </span>
            </div>
            <div className="text-3xl font-bold text-green-800 dark:text-green-200">
              {data.answers.toLocaleString('en-US')}
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 mt-1">
              Solutions provided
            </div>
          </div>

          {/* Gold Badges */}
          <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-yellow-100 dark:border-yellow-800 hover:shadow-lg dark:shadow-gray-800 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <GoldBadgeIcon />
              <span className="text-xs font-medium text-yellow-700 dark:text-yellow-300 uppercase tracking-wider">
                Gold
              </span>
            </div>
            <div className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">
              {data.badges.gold.toLocaleString('en-US')}
            </div>
            <div className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
              Excellence badges
            </div>
          </div>

          {/* Silver Badges */}
          <div className="group bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:shadow-gray-800 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <SilverBadgeIcon />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Silver
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              {data.badges.silver.toLocaleString('en-US')}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Achievement badges
            </div>
          </div>

          {/* Bronze Badges */}
          <div className="group bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border border-orange-100 dark:border-orange-800 hover:shadow-lg dark:shadow-gray-800 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <BronzeBadgeIcon />
              <span className="text-xs font-medium text-orange-700 dark:text-orange-300 uppercase tracking-wider">
                Bronze
              </span>
            </div>
            <div className="text-3xl font-bold text-orange-800 dark:text-orange-200">
              {data.badges.bronze.toLocaleString('en-US')}
            </div>
            <div className="text-sm text-orange-600 dark:text-orange-400 mt-1">
              Participation badges
            </div>
          </div>
        </div>

        {/* Tags Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <TagIcon />
            <span className="ml-2">Top Tags</span>
          </h4>
          <div className="flex flex-wrap gap-3">
            {data.tags.map((tag, index) => (
              <a
                key={tag}
                className={clsx(
                  "px-4 py-1 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105",
                  "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                )}
                href={`https://stackoverflow.com/search?tab=votes&q=user:15167500+[${tag}]`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tag}
              </a>
            ))}
            <a
              className={clsx(
                "px-4 py-1 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105",
                "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              )}
              href="https://stackoverflow.com/users/15167500/rozsazoltan?tab=tags"
              target="_blank"
              rel="noopener noreferrer"
            >
              ...
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Active community member
          </div>
          
          <a
            href="https://stackoverflow.com/users/15167500/rozsazoltan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-200 hover:shadow-lg"
          >
            View Profile
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

// SVG Icon Components
const StackOverflowIcon = () => (
  <svg className="w-6 h-6 text-white dark:text-gray-950" fill="currentColor" viewBox="0 0 169.61 200">
    <path d="M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z" />
    <path d="M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z" />
  </svg>
);

const ReputationIcon = () => (
  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ViewsIcon = () => (
  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const AnswerIcon = () => (
  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GoldBadgeIcon = () => (
  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 bg-yellow-300 dark:bg-yellow-800 rounded-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const SilverBadgeIcon = () => (
  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-950 rounded-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const BronzeBadgeIcon = () => (
  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400 bg-orange-200 dark:bg-orange-800 rounded-full" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const TagIcon = () => (
  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default StackOverflowContribution;