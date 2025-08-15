const CardShimmer = () => {
  return (
    <div
      className="group relative rounded-xl p-[2px] overflow-hidden
          bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500
          bg-[length:200%_200%] animate-gradient-slow
          hover:shadow-2xl transition-shadow duration-500"
    >
      <div
        className="relative rounded-xl overflow-hidden
            bg-white dark:bg-[#030712]
            border border-gray-200 dark:border-gray-700
            shadow-md dark:shadow-lg
            transition-transform duration-400 ease-out group-hover:-translate-y-1"
      >
        <div className="animate-pulse select-none">
          <div className="h-48 bg-gray-200 dark:bg-neutral-800 w-full rounded-t-lg relative overflow-hidden">
            <div className="absolute inset-0 skeleton-shimmer rounded-t-lg" />
          </div>
          <div className="p-6 space-y-3">
            <div className="h-6 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 relative overflow-hidden">
              <div className="absolute inset-0 skeleton-shimmer rounded" />
            </div>
            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 skeleton-shimmer rounded" />
            </div>
            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-2/3 relative overflow-hidden">
              <div className="absolute inset-0 skeleton-shimmer rounded" />
            </div>
          </div>
          <div className="absolute top-3 left-3 h-10 w-12 bg-gray-200 dark:bg-neutral-800 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;
