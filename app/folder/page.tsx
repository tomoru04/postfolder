import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function FolderPage() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-4 px-6 bg-white dark:bg-black gap-2">
        <h1 className="text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          お気に入り
        </h1>
        <div className="w-full flex flex-col gap-2">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <a
          href="/"
          className="mt-8 flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Back to Home
        </a>
      </main>
    </div>
  );
}
