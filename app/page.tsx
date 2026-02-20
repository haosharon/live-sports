import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Hello World!
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Your Next.js dev server is working correctly.
        </p>
      </main>
    </div>
  );
}
