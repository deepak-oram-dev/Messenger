import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-3">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Messenger
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Settings
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Manage preferences for your account and app experience.
          </p>
        </header>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-lg font-medium">General</h2>
          <div className="mt-4 grid gap-4">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-medium">Notifications</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Control when you get notified.
                </p>
              </div>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:text-zinc-300">
                Coming soon
              </span>
            </div>

            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-medium">Theme</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Uses your system appearance for now.
                </p>
              </div>
              <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:text-zinc-300">
                System
              </span>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Back to home
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/[.08] px-5 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            About
          </Link>
        </div>
      </main>
    </div>
  );
}

