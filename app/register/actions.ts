"use server";

import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function register(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("full_name") ?? "");

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect(`/register?error=${encodeURIComponent(error.message)}`);
  }

  // Create a corresponding `profiles` row (requires RLS policy allowing the user to insert their own profile).
  const userId = data.user?.id;
  if (userId) {
    const { error: profileError } = await supabase.from("profiles").upsert(
      {
        id: userId,
        email,
        full_name: fullName || null,
        avatar_url: null,
      },
      { onConflict: "id" },
    );

    if (profileError) {
      redirect(`/register?error=${encodeURIComponent(profileError.message)}`);
    }
  }

  // If email confirmation is enabled, session may not exist yet; user must confirm before accessing protected pages.
  redirect("/settings");
}

