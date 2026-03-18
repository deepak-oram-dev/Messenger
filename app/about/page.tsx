import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-3">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Messenger
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            This is the About page for your Next.js app. Add your product story,
            mission, or team info here.
          </p>
        </header>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-lg font-medium">What’s in this app?</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Routes live under the <code className="font-mono">app/</code>{" "}
            directory. This page is at{" "}
            <code className="font-mono">app/about/page.tsx</code>, which maps to{" "}
            <code className="font-mono">/about</code>.
          </p>
        </section>

        <div>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

