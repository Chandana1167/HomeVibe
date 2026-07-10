import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oyyddurzryxjmmponnvr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95eWRkdXJ6cnl4am1tcG9ubnZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzQ4NTM0NywiZXhwIjoyMDk5MDYxMzQ3fQ.XQNntuTZquDoZr_31aCdOgkmw5axJst48MfTY5Fpl9s"
;
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);