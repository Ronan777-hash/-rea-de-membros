import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function AlimentacaoNoturnaPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 min-h-screen flex flex-col items-center justify-center text-center">
       <div className="absolute top-4 right-4 z-20">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="sr-only">Tela Principal</span>
          </Link>
        </Button>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Sono e Alimentação
        </h1>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto">
          O conteúdo para este módulo será adicionado em breve. Estamos preparando o material para garantir a melhor experiência.
        </p>
      </div>
    </div>
  );
}
