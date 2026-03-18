"use server";

import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirectTo") ?? "/settings");

  const base = `/login?redirectTo=${encodeURIComponent(redirectTo)}`;
  if (!email || !password) {
    redirect(`${base}&error=${encodeURIComponent("Email and password are required.")}`);
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`${base}&error=${encodeURIComponent(error.message)}`);
  }

  redirect(redirectTo);
}

