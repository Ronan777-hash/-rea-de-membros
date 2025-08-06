
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

type ViewState = 'inicio' | 'secao1' | 'secao2' | 'secao3' | 'secao4' | 'secao5' | 'secaoBonus';

export default function SonoEAlimentacaoPage() {
  const [view, setView] = useState<ViewState>('inicio');

  const renderContent = () => {
    switch (view) {
      case 'secao1':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🧠 Seção 1: A Relação entre Comida e Sono</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Conteúdo da Seção 1...</p>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'secao2':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🚫 Seção 2: O que Evitar à Noite</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Conteúdo da Seção 2...</p>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'secao3':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">✅ Seção 3: O que Comer para Dormir Melhor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Conteúdo da Seção 3...</p>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'secao4':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🍞 Seção 4: Carboidrato à Noite – Inimigo ou Aliado?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Conteúdo da Seção 4...</p>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'secao5':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🔍 Seção 5: Seu Estilo de Vida e Hábitos Alimentares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Conteúdo da Seção 5...</p>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'secaoBonus':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🎉 Seção Bônus: “Quero Chutar o Balde no Fim de Semana!”</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Conteúdo da Seção Bônus...</p>
              </CardContent>
            </Card>
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
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Sono e Alimentação</h1>
              <p className="text-muted-foreground mt-1">Descubra como o que você come impacta suas noites.</p>
            </header>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Button size="lg" variant="outline" onClick={() => setView('secao1')}>
                🧠 Seção 1: A Relação entre Comida e Sono
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao2')}>
                🚫 Seção 2: O que Evitar à Noite
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao3')}>
                ✅ Seção 3: O que Comer para Dormir Melhor
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao4')}>
                🍞 Seção 4: Carboidrato à Noite – Inimigo ou Aliado?
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secao5')}>
                🔍 Seção 5: Seu Estilo de Vida e Hábitos Alimentares
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView('secaoBonus')}>
                🎉 Seção Bônus: “Quero Chutar o Balde no Fim de Semana!”
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
