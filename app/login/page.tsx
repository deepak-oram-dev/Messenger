import Link from "next/link";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

import { login } from "./actions";

export default async function LoginPage({
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
  const redirectTo =
    typeof params.redirectTo === "string"
      ? params.redirectTo
      : "/settings";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-3">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Messenger
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Login
          </h1>
          <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Sign in to access your settings and protected pages.
          </p>
        </header>

        <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          {error ? (
            <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          ) : null}

          <form action={login} className="grid gap-4">
            <input type="hidden" name="redirectTo" value={redirectTo} />
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
                className="h-11 rounded-xl border border-black/10 bg-transparent px-4 outline-none focus:border-black/30 dark:border-white/10 dark:focus:border-white/30"
                placeholder="••••••••"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Sign in
            </button>
          </form>

          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              Create one
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

