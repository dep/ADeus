import React from 'react'
import { Button } from './ui/button';
import { SupabaseClient } from '@supabase/supabase-js';
import { LogOut } from 'lucide-react';

export default function LogoutButton({
  supabaseClient,
}: {
  supabaseClient: SupabaseClient;
}) {
  return (
    <Button
      size={'icon'}
      className="rounded-full bg-muted/20 text-muted-foreground hover:bg-muted/40"
      onClick={async () => await supabaseClient.auth.signOut()}
    >
      <LogOut size={20} />
    </Button>
  )
}
