"use client"

function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 max-md:pt-20 pb-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl max-md:text-xl border-l-yellow-300 py-2 md:py-6 md:px-8 px-4 border-l-4 mb-4 md:mb-8">
          Latest News from <span className="font-bold">Haridwar</span>
        </h1>

        {/* Skeleton for Main News */}
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-8 gap-2">
          <div className="lg:col-span-3 animate-pulse bg-gray-200 h-96 rounded-md" />
          <div className="col-span-2 flex flex-col gap-2">
            <div className="h-32 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="h-32 bg-gray-200 animate-pulse rounded-md"></div>
            <div className="h-32 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
        </div>

        {/* Skeleton for Trending News */}
        <h1 className="text-md md:text-xl font-semibold mt-8">Trending News</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-48 bg-gray-200 animate-pulse rounded-md"></div>
          ))}
        </div>

        {/* Skeleton for Pagination */}
        <div className="flex justify-center mt-8">
          <div className="h-10 w-32 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;