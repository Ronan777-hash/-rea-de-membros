
import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NewModulePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4 z-20">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="sr-only">Tela Principal</span>
          </Link>
        </Button>
      </div>
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Novo Módulo
        </h1>
        <p className="text-muted-foreground mt-2">
          Conteúdo em breve.
        </p>
      </div>
    </div>
  );
}
