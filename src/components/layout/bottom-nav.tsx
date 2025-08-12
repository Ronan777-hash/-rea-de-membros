
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, History, Library, Settings, Sparkles, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Básico', icon: Home },
  { href: '/continue-watching', label: 'Extra', icon: Sparkles },
  { href: '/more-content', label: 'Premium', icon: Star },
  { href: '/settings', label: 'Ajustes', icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border/50 shadow-t-2xl z-50">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.href} className="flex flex-col items-center justify-center flex-1 text-center text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg" aria-current={isActive ? 'page' : undefined}>
              <item.icon className={cn("h-6 w-6 mb-1 transition-all", isActive ? "text-primary scale-110" : "scale-100")} />
              <span className={cn("text-xs transition-colors", isActive ? "text-primary font-semibold" : "font-normal")}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
