
'use client';

import { type ReactNode, useEffect } from 'react';
import { BottomNav } from './bottom-nav';
import { useAuth } from '@/context/auth-context';
import { usePathname, useRouter } from 'next/navigation';

export function AppShell({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If there is no user and the current page is not the login page, redirect to login.
    if (!user && pathname !== '/login') {
      router.push('/login');
    }
  }, [user, pathname, router]);
  
  // If we are on the login page, we don't need the main layout with the bottom nav.
  if (pathname === '/login') {
    return (
       <main className="pb-24">{children}</main>
    )
  }

  // If there's no user, we show nothing while redirecting.
  // This prevents a flicker of content before the redirect happens.
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-24">{children}</main>
      <BottomNav />
    </div>
  );
}
