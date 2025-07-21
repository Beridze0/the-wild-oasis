import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jjbjixvfcnbhjiuvinuw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYmppeHZmY25iaGppdXZpbnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODM4MzAsImV4cCI6MjA2ODM1OTgzMH0.x_GNNLT5SEnw1sim5_VoBVzy_mrIVtztjUJflc7OnTc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
