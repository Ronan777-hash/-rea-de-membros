
'use client';

import { Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DuvidasEDificuldadesPage() {

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
        <div className="text-center p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <Card className="w-full max-w-2xl">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">Dúvidas e Dificuldades: Seu Último Passo para Dormir Bem</CardTitle>
                <CardDescription className="text-lg pt-2">7 caminhos para entender seu sono, acalmar a mente e descansar de verdade.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* O conteúdo futuro será adicionado aqui */}
              </CardContent>
            </Card>
           </div>
      </div>
    </div>
  );
}
