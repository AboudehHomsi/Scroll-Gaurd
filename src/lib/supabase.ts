import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cnxvfolokjigyjdqpjwu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueHZmb2xva2ppZ3lqZHFwand1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3NTU5MDAsImV4cCI6MjA4MjMzMTkwMH0.geCblJku9s2puUpklOaxG6eOo5_W7pUce_qsqqsUDxk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
