import { type ReactNode } from 'react';
import { BottomNav } from './bottom-nav';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-24">{children}</main>
      <BottomNav />
    </div>
  );
}
