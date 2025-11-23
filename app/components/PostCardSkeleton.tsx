export default function PostCardSkeleton() {
  return (
    <div className="w-full max-w-[550px] mx-auto">
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-white dark:bg-zinc-900">
        <div className="flex items-start gap-3">
          {/* Avatar skeleton */}
          <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
          <div className="flex-1">
            {/* Name and handle skeleton */}
            <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse mb-2" />
            <div className="h-3 w-24 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse mb-3" />
            {/* Tweet text skeleton */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
              <div className="h-3 w-4/5 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
