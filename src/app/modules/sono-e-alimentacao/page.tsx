
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';

type ViewState = 'inicio' | 'secao1';

export default function SonoEAlimentacaoPage() {
  const [view, setView] = useState<ViewState>('inicio');

  const renderContent = () => {
    switch (view) {
      case 'secao1':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                🧠 Seção 1: A Relação entre Comida e Sono
              </h1>
            </header>
            <div className="text-center text-muted-foreground">
              <p>Conteúdo da Seção 1 aparecerá aqui.</p>
            </div>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'inicio':
      default:
        return (
          <div className="text-center p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                Sono e Alimentação
              </h1>
              <p className="text-muted-foreground mt-1">
                Descubra como o que você come impacta suas noites.
              </p>
            </header>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Button size="lg" onClick={() => setView('secao1')}>
                <span className="mr-2">🧠</span> Seção 1: A Relação entre Comida e Sono
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 min-h-screen flex flex-col">
      <div className="absolute top-4 right-4 z-20">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="sr-only">Tela Principal</span>
          </Link>
        </Button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
}
