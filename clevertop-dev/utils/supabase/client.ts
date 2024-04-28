import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    //process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    'https://kdpvrzfvqsfawiffnvbx.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkcHZyemZ2cXNmYXdpZmZudmJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMzYzMzgsImV4cCI6MjAyOTcxMjMzOH0.viXJnfviU8VMLmrD2lIrHdvfUUKgLqpX11IhpgLPUIc',
  );
