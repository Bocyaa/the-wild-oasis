import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vjqvnjzvcgxhnncqvjqp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcXZuanp2Y2d4aG5uY3F2anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExNzQ4NzgsImV4cCI6MjA1Njc1MDg3OH0.WEWFt1pCFxqbIU1xZLMldDv-NE_zAt7G6LiRoRRdUn0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
