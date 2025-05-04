'use client';  // Ensure this is marked as a client-side component

import { useState } from 'react';

interface ShareProps {
  url: string;
  title: string;
  description: string;
  imageSrc?: string;
}

export function Share({ url, title, description, imageSrc }: ShareProps) {
  const [error, setError] = useState<string | null>(null);

  const handleShareClick = () => {
    const shareData = {
      title: title,
      text: description,
      url: url,
      files: [] as File[],
    };

    // Conditionally add image if available
    if (imageSrc) {
      shareData.files = [
        new File([imageSrc], 'image.jpg', { type: 'image/jpeg' }),
      ];
    }

    // Check for Web Share API support and handle errors
    if (navigator.share) {
      navigator
        .share(shareData)
        .catch(() => {
          setError('An error occurred while displaying the sharing dialog.');
        });
    } else {
      setError('Web Share API is not supported in this browser.');
    }
  };

  return (
    <div className="">
      {error ? (
        <div className="bg-rose-100 dark:bg-rose-900 border-l-4 border-rose-500 p-4">
          <p><strong>Error:</strong> {error}</p>
          <p className="mt-2">
            <a
              href={`https://twitter.com/share?url=${encodeURIComponent(window.location.origin + url)}&text=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 underline"
            >
              Share via Twitter
            </a>
          </p>
        </div>
      ) : (
        <div className="flex flex-nowrap items-center gap-4">
          <button
            type="button"
            onClick={handleShareClick}
            className="flex flex-nowrap gap-2 items-center rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <svg className="w-6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <circle cx="4" cy="10" r="2" stroke="currentColor" strokeLinejoin="round"/>
                <circle cx="16" cy="4" r="2" stroke="currentColor" strokeLinejoin="round"/>
                <path d="M5.5 9L14.5 4.5" stroke="currentColor"/>
                <circle cx="16" cy="16" r="2" stroke="currentColor" strokeLinejoin="round"/>
                <path d="M5.5 11L14.5 15.5" stroke="currentColor"/>
              </g>
            </svg>
            Share
          </button>
          <p className="truncate">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
