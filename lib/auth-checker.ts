"use server";

import { createSupabaseClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function checkIsAuthenticated() {
  const supabase = await createSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/login");
  }
}
