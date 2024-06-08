import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uiffwexemfotjsrgftjq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZmZ3ZXhlbWZvdGpzcmdmdGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNTE1MjMsImV4cCI6MjAzMTkyNzUyM30.2UwOkNZsaCzbBzxrc6bABW_y9MyoYXmIZnUO2I6uDA4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
