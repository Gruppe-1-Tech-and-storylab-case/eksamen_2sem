import { createClient } from '@supabase/supabase-js';

// Erstat med dine Supabase-oplysninger
const supabaseUrl = 'https://ztxzipatdcssuqhtzgkx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eHppcGF0ZGNzc3VxaHR6Z2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MzYxMDIsImV4cCI6MjA1MDAxMjEwMn0.7VGmxGK5-Qk4Ng8Xn1shGH1eZXtBNIU-p-o40fwiaZI';  // Sørg for at bruge din Supabase API-nøgle

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
