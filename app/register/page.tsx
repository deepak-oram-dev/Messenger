import Link from "next/link";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

import { register } from "./actions";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) redirect("/settings");

  const params = (await searchParams) ?? {};
  const error =
    typeof params.error === "string" ? params.error : undefined;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-3">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Messenger
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Create account
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Create an account to access protected pages.
          </p>
        </header>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          {error ? (
            <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          ) : null}

          <form action={register} className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-medium">Full name</span>
              <input
                name="full_name"
                type="text"
                className="h-11 rounded-xl border border-black/10 bg-transparent px-4 outline-none focus:border-black/30 dark:border-white/10 dark:focus:border-white/30"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium">Email</span>
              <input
                name="email"
                type="email"
                required
                className="h-11 rounded-xl border border-black/10 bg-transparent px-4 outline-none focus:border-black/30 dark:border-white/10 dark:focus:border-white/30"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium">Password</span>
              <input
                name="password"
                type="password"
                required
                minLength={6}
                className="h-11 rounded-xl border border-black/10 bg-transparent px-4 outline-none focus:border-black/30 dark:border-white/10 dark:focus:border-white/30"
                placeholder="At least 6 characters"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Create account
            </button>
          </form>

          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              Sign in
            </Link>
            .
          </p>
        </section>

        <div>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-black/[.08] px-5 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

