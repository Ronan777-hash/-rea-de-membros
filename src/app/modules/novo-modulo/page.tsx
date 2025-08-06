
import { Home, Moon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MeditacaoGuiadaPage() {
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
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Meditação Guiada para Dormir</CardTitle>
            <CardDescription>Aprenda a meditar de um jeito simples e fácil — sem complicação, sem pressão.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button size="lg" className="w-full">
              <Moon className="mr-2 h-5 w-5" />
              O que é Meditação Guiada e por que ela ajuda no sono?
            </Button>
            <Button size="lg" className="w-full" variant="outline">
              <span className="mr-2 text-lg">🧠</span>
              Benefícios para o Corpo, Mente e Sono
            </Button>
            <Button size="lg" className="w-full" variant="outline">
              <span className="mr-2 text-lg">🚦</span>
              Como Começar do Zero: Guia para Iniciantes Absolutos.
            </Button>
            <Button size="lg" className="w-full" variant="outline">
              <span className="mr-2 text-lg">🙏</span>
              Meditação e Crenças Religiosas: Pode confiar.
            </Button>
            <Button size="lg" className="w-full" variant="outline">
              <span className="mr-2 text-lg">🎧</span>
              Criando um Ritual Noturno com Meditação Guiada.
            </Button>
            <Button size="lg" className="w-full" variant="outline">
              <span className="mr-2 text-lg">🔄</span>
              O que Fazer Quando a Mente Não Para (Mesmo com a Meditação).
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
