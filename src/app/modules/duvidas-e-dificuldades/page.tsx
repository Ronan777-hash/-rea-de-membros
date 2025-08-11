
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
                <div className="flex flex-col gap-4">
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">🥲</span> Tenho dificuldade para pegar no sono, mesmo cansado(a)
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">🌒</span> Fico acordando várias vezes durante a noite
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">🌌</span> Quando acordo no meio da noite, não consigo dormir novamente
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">🧠</span> Tenho pensamentos acelerados na hora de dormir
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">⏰</span> Acordo sempre no mesmo horário, mesmo sem querer
                  </Button>
                </div>
              </CardContent>
            </Card>
           </div>
      </div>
    </div>
  );
}
