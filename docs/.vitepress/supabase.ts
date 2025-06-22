import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://sdfdfiacfsbupdibgkke.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZmRmaWFjZnNidXBkaWJna2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MzM4NjMsImV4cCI6MjA2NjAwOTg2M30.CAAxmJGhxJFMfd6Zn9QXy8IHFmJ2iS5Jjw85fw2TXxM'
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };