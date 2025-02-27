import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/lib/supabase.types";

export function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or anon key is not set");
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}
