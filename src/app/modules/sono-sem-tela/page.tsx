
'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SonoSemTelaPage() {

  const renderContent = () => {
    return (
        <div className="p-4 md:p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
        <Card className="w-full max-w-2xl">
            <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl">💤 Sono Sem Tela: Desacelere e Durma Melhor</CardTitle>
            <CardDescription className="pt-2">
                Um guia prático para desligar os estímulos digitais, acalmar a mente e transformar suas noites em momentos de descanso profundo.
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-muted-foreground">Em breve, um módulo completo sobre como desacelerar e dormir melhor sem telas.</p>
                <Button className="w-full">📱 Como o Celular Sabota Seu Sono Sem Você Perceber</Button>
            </CardContent>
        </Card>
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
      <div className="flex-grow flex flex-col items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
}
