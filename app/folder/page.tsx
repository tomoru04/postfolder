import Link from "next/link";

export default function FolderPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black gap-12">
        <div className="flex flex-col items-center gap-6 text-center w-full">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Folder
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            あろっとのお気に入りポスト一覧です。
          </p>
        </div>
        <div className="w-full max-w-md flex flex-col gap-2">
          <Link
            className="flex items-center px-6 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            href="/folder/favorite"
          >
            <span className="text-base font-medium text-black dark:text-zinc-50">お気に入り</span>
          </Link>
          <Link
            className="flex items-center px-6 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            href="/folder/todome"
          >
            <span className="text-base font-medium text-black dark:text-zinc-50">とどめシリーズ</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
