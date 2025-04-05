import { writable } from 'svelte/store';
import { createClient } from '@supabase/supabase-js';

// Initialize and export the Supabase client as a writable store
export const supabase = writable(createClient('https://iapzhidgzaqxybnabnfb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcHpoaWRnemFxeHlibmFibmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MjI0MTQsImV4cCI6MjA1OTM5ODQxNH0.Okn_B4gyWqzzHyXnHbGoxODSRbyag6JzPZywNMkXKlE'));
