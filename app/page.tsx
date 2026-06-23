import Image from "next/image";
import PageSkeleton from "@/app/components/PageSkeleton";

export default function Home() {
  return (
    <PageSkeleton>

      <div className="flex flex-col w-full">
        <h1 className="font-light text-5xl tracking-tight text-black dark:text-zinc-50">Zeigen!</h1>
        <Image
          className="block dark:hidden h-auto"
          src="/logo.svg"
          alt="Sann showcase"
          width={350}
          height={0}
          priority
        />
        <Image
          className="hidden dark:block h-auto"
          src="/logo-dark.svg"
          alt="Sann showcase"
          width={350}
          height={0}
          priority
        />
        <h2 className="font-light text-3xl tracking-tight text-black dark:text-zinc-50 mt-6">Frontend bauen. Testen. Optimieren.</h2>
      </div>

      {/*<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-10">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          To get started, edit the page.tsx file.
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Looking for a starting point or more instructions? Head over to{" "}
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Templates
          </a>{" "}
          or the{" "}
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            Learning
          </a>{" "}
          center.
        </p>
      </div>*/}

      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-6 my-12 font-light text-black dark:text-zinc-50">
          <div className="md:col-span-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className="md:col-span-4">Image</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-6 my-12 font-light text-black dark:text-zinc-50">
          <div className="md:col-span-4">Image</div>
          <div className="md:col-span-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row my-10">
        <a
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy Now
        </a>
        <a
          className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 text-black dark:text-zinc-50transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
    </PageSkeleton>
  );
}