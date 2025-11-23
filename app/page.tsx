import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black gap-12">
        <div className="flex flex-col items-center gap-6 text-center w-full">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            PostFolder
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The best arrangement tool for your X bookmarks.
            <br />
            Organize and manage your favorite posts with ease.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/folder"
          >
            Go to Folder
          </a>
        </div>
      </main>
    </div>
  );
}
