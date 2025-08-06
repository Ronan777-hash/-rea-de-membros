
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function SonoEAlimentacaoPage() {
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
            Em breve, um novo módulo para transformar suas noites.
          </p>
        </header>
      </div>
    </div>
  );
}
