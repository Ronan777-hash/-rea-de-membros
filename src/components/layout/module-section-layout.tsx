
'use client';

import { useState, type ReactNode } from 'react';
import { ChevronUp, ChevronDown, BookOpen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackButton } from '@/components/layout/back-button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ModuleSectionLayoutProps {
  children: ReactNode;
  sectionTitle: string;
  sectionIcon?: ReactNode;
}

export function ModuleSectionLayout({
  children,
  sectionTitle,
  sectionIcon = <BookOpen />,
}: ModuleSectionLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative pb-20">
      {/* Back button, always visible */}
      <div className="absolute top-4 left-4 z-20">
        <BackButton />
      </div>
      
      {/* Home button, always visible */}
      <div className="absolute top-4 right-4 z-20">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="sr-only">Tela Principal</span>
          </Link>
        </Button>
      </div>


      {/* Main Content Area */}
      <div
        className={cn(
          'transition-opacity duration-500 ease-in-out',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        {children}
      </div>

      {/* Fixed Bottom Bar */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-10 border-t bg-card text-card-foreground shadow-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="container mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">{sectionIcon}</div>
            <span className="font-semibold text-lg">{sectionTitle}</span>
          </div>
          {isOpen ? <ChevronDown className="text-primary" /> : <ChevronUp className="text-primary" />}
        </div>
      </footer>
    </div>
  );
}
