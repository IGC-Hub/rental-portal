// lib/supabase/server.ts
import { createClient } from '@supabase/supabase-js';

// Client pour les opérations côté serveur (API Routes, Server Components)
export const supabaseServer = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  );
  
  // lib/supabase/client.ts
  // Client pour les opérations côté client (avec clé publique uniquement)
  export const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );