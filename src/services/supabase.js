import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qvgsqwsrkevbihmyfvvf.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2Z3Nxd3Nya2V2YmlobXlmdnZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3NzU3MDQsImV4cCI6MjAyMDM1MTcwNH0.mqc7m-Gmw3RvpHLQ8UCXgzz32RgwL-30zT_d9sPY2A8';
export const supabase = createClient(supabaseUrl, supabaseKey);
