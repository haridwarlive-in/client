"use client";
import { News } from "@/types";
import Link from "next/link";
import React from "react";

const BreakingNewsClient = ({ breakingNews }: { breakingNews: News[] }) => {
  return (
    <div className="w-full overflow-hidden mb-4 bg-red-600 text-white py-0 rounded-md">
      <div className="flex items-center">
        <span className="bg-yellow-300 text-black px-3 py-1 font-bold">
          BREAKING NEWS
        </span>
        <div className="w-full overflow-hidden relative">
          <div className="flex space-x-2 animate-scroll hover:paused">
            {breakingNews.map((headline) => (
              <Link
                key={headline._id}
                href={`/news/${headline._id}`}
                className="hover:underline text-sm whitespace-nowrap cursor-pointer font-semibold px-4"
                aria-label={`Read more about: ${headline.title}`}
              >
                {headline.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-500%);
          }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 60s linear infinite;
        }
        .hover\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default React.memo(BreakingNewsClient);