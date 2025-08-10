'use client';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Sparkles, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'light', label: 'Claro', icon: Sun },
    { name: 'dark', label: 'Escuro', icon: Moon },
    { name: 'purple', label: 'Roxo', icon: Sparkles },
    { name: 'green', label: 'Verde', icon: Leaf },
  ];

  return (
    <div className="flex items-center space-x-2 rounded-lg bg-muted p-1">
      {themes.map((t) => (
        <Button
          key={t.name}
          variant={theme === t.name ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setTheme(t.name as 'light' | 'dark' | 'purple' | 'green')}
          className={cn("w-full transition-all", theme === t.name && "shadow-sm")}
          aria-label={`Switch to ${t.name} theme`}
        >
          <t.icon className="mr-2 h-4 w-4" />
          {t.label}
        </Button>
      ))}
    </div>
  );
}
