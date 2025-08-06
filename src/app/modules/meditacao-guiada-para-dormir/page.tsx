
import { Home, Play } from 'lucide-react';
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
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl md:text-4xl">Meditação Guiada para Dormir</CardTitle>
            <CardDescription className="text-lg md:text-xl pt-2">
              Aprenda a meditar de um jeito simples e fácil — sem complicação, sem pressão.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-6">
            <p>Conteúdo da meditação em breve.</p>
            <Button size="lg">
              <Play className="mr-2 h-5 w-5" />
              Começar a Meditar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
