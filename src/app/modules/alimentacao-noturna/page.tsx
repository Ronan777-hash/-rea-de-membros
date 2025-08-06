import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function AlimentacaoNoturnaPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-6 min-h-screen flex flex-col items-center">
      <div className="w-full relative flex justify-center items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground text-center">
          Sono e Alimentação
        </h1>
        <div className="absolute top-0 right-0 z-20">
          <Button asChild variant="ghost" size="icon">
            <Link href="/">
              <Home className="h-5 w-5" />
              <span className="sr-only">Tela Principal</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full text-center">
        <p>Página restaurada. Pronta para reconstrução.</p>
      </div>
    </div>
  );
}
