
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

type ViewState = 'selection' | 'secao1' | 'secao2' | 'secao3' | 'secao4' | 'secao5' | 'bonus';

const sectionData = {
  secao1: { title: '🧠 Seção 1: A Relação entre Comida e Sono', content: 'Conteúdo da Seção 1 em breve.' },
  secao2: { title: '🚫 Seção 2: O que Evitar à Noite', content: 'Conteúdo da Seção 2 em breve.' },
  secao3: { title: '✅ Seção 3: O que Comer para Dormir Melhor', content: 'Conteúdo da Seção 3 em breve.' },
  secao4: { title: '🍞 Seção 4: Carboidrato à Noite – Inimigo ou Aliado?', content: 'Conteúdo da Seção 4 em breve.' },
  secao5: { title: '🔍 Seção 5: Seu Estilo de Vida e Hábitos Alimentares', content: 'Conteúdo da Seção 5 em breve.' },
  bonus: { title: '🎉 Seção Bônus: “Quero Chutar o Balde no Fim de Semana!”', content: 'Conteúdo da Seção Bônus em breve.' },
};

export default function AlimentacaoNoturnaPage() {
  const [view, setView] = useState<ViewState>('selection');

  const renderContent = () => {
    switch (view) {
      case 'selection':
        return (
          <div className="text-center p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Sono e Alimentação</h1>
              <p className="text-muted-foreground mt-1">Descubra como o que você come impacta suas noites.</p>
            </header>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Button size="lg" variant="outline" onClick={() => setView('secao1')}>
                <span className="mr-2">🧠</span> Seção 1: A Relação entre Comida e Sono
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao2')}>
                <span className="mr-2">🚫</span> Seção 2: O que Evitar à Noite
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao3')}>
                <span className="mr-2">✅</span> Seção 3: O que Comer para Dormir Melhor
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao4')}>
                <span className="mr-2">🍞</span> Seção 4: Carboidrato à Noite – Inimigo ou Aliado?
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao5')}>
                <span className="mr-2">🔍</span> Seção 5: Seu Estilo de Vida e Hábitos Alimentares
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('bonus')}>
                <span className="mr-2">🎉</span> Seção Bônus: “Quero Chutar o Balde no Fim de Semana!”
              </Button>
            </div>
          </div>
        );
      default:
        const currentSection = sectionData[view];
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{currentSection.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>{currentSection.content}</p>
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
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        {renderContent()}
      </div>
      <div className="absolute top-4 right-4 z-20">
          <Button asChild variant="ghost" size="icon">
              <Link href="/">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Tela Principal</span>
              </Link>
          </Button>
      </div>
    </div>
  );
}
