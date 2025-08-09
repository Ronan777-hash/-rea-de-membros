
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function NovoModuloBonusPage() {
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
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">🌙 Bebidas do Sono Profundo</CardTitle>
                <CardDescription>Chás e sucos que relaxam seu corpo e mente para noites tranquilas.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 pt-4">
                <Button size="lg" className="w-full" variant="outline">
                  🍵 Chá do Apagão Suave
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  🫖 Elixir da Calmaria Instantânea
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  🍹 Suco da Serenidade Noturna
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  ☕ Misturas Secretas para Noites Perfeitas
                </Button>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
