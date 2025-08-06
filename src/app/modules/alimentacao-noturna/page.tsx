
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type ViewState = 'selection' | 'secao1' | 'secao2' | 'secao3' | 'secao4' | 'secao5' | 'secaoBonus';

const sections: { id: ViewState; title: string; emoji: string }[] = [
    { id: 'secao1', title: 'A Relação entre Comida e Sono', emoji: '🧠' },
    { id: 'secao2', title: 'O que Evitar à Noite', emoji: '🚫' },
    { id: 'secao3', title: 'O que Comer para Dormir Melhor', emoji: '✅' },
    { id: 'secao4', title: 'Carboidrato à Noite – Inimigo ou Aliado?', emoji: '🍞' },
    { id: 'secao5', title: 'Seu Estilo de Vida e Hábitos Alimentares', emoji: '🔍' },
    { id: 'secaoBonus', title: '“Quero Chutar o Balde no Fim de Semana!”', emoji: '🎉' },
];

export default function AlimentacaoNoturnaPage() {
  const [view, setView] = useState<ViewState>('selection');

  const renderContent = () => {
    if (view === 'selection') {
      return (
        <div className="w-full max-w-md space-y-4">
            {sections.map((section) => (
                <Button 
                    key={section.id} 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start text-left h-auto py-3"
                    onClick={() => setView(section.id)}
                >
                   <span className="mr-4 text-xl">{section.emoji}</span>
                   <span className="flex-1 whitespace-normal">{section.title}</span>
                </Button>
            ))}
        </div>
      );
    }

    const currentSection = sections.find(s => s.id === view);

    return (
        <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center">
                        <span className="mr-3 text-2xl">{currentSection?.emoji}</span>
                        {currentSection?.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>Em breve, o conteúdo completo desta seção estará disponível aqui.</p>
                    <p>Estamos preparando um material incrível para você. Volte em breve!</p>
                </CardContent>
            </Card>
            <div className="text-center">
                <Button onClick={() => setView('selection')}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Button>
            </div>
      </div>
    );
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

      <header className={cn("text-center mb-8", { 'hidden': view !== 'selection' })}>
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Sono e Alimentação
        </h1>
        <p className="text-muted-foreground mt-2">
          Descubra como o que você come pode transformar suas noites.
        </p>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
}
