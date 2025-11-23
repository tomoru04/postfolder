import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-center px-16 py-8">
        <Image
          src="/postfolder_logo.png"
          alt="PostFolder logo"
          width={150}
          height={150}
          priority
        />
      </div>
    </header>
  );
}
