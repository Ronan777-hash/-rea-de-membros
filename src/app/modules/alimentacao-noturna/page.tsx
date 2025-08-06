
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function AlimentacaoNoturnaPage() {
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
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
            Sono e Alimentação
          </h1>
          <p className="text-muted-foreground mt-2">
            Em breve, o conteúdo completo desta seção estará disponível aqui.
          </p>
        </header>
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Módulo em Construção</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Estamos preparando um material incrível para você. Volte em breve!</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
