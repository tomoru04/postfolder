import Link from "next/link";

export default function FolderPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center py-4 px-6 bg-white dark:bg-black gap-8">
        <h1 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Folder
        </h1>
        <Link
          href="/folder/favorite"
          className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          お気に入り
        </Link>
      </main>
    </div>
  );
}
