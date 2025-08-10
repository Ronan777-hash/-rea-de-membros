
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SupplementPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 space-y-8">
      <div className="relative">
        <Button asChild variant="ghost" size="icon" className="absolute -top-2 left-0">
          <Link href="/continue-watching">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
        <header className="text-center pt-10">
          <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
            🌙 Potencialize Seu Sono
          </h1>
          <p className="text-muted-foreground mt-1">
            Um aliado natural para noites tranquilas.
          </p>
        </header>
      </div>

      <div className="p-6 bg-card rounded-lg shadow-sm space-y-6 text-lg">
        <p className="font-semibold text-center">
          Lembre-se: Este suplemento é apenas um complemento.
        </p>
        <p>
          Se você não quiser comprar, fique totalmente despreocupado — apenas seguindo os módulos da área de membros você já terá 100% das ferramentas para dormir melhor.
        </p>
        <p>
          Mas… se você quer acelerar ainda mais esse processo e sentir resultados imediatos, eu quero te apresentar algo que analisamos, testamos e realmente aprovamos.
        </p>
        
        <Separator />
        
        <p>
          Trata-se de um suplemento natural, seguro, aprovado pela ANVISA, produzido por uma marca confiável e com milhares de clientes satisfeitos. Sua fórmula combina melatonina, triptofano, magnésio e vitamina B6 para ajudar seu corpo e mente a relaxarem profundamente.
        </p>
        <p>
          Após a ingestão, em poucos minutos, você já começa a sentir aquela sensação de sono gostoso chegando — e isso ajuda a pegar no sono mais rápido, além de melhorar a qualidade do descanso durante a noite.
        </p>
        <p>
          O melhor de tudo? É 100% natural, não causa dependência e pode ser um grande aliado para noites tranquilas.
        </p>

        <Separator />

        <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-primary">Quero Dormir Melhor Agora!</h2>
            <p className="text-muted-foreground">clique nesse botão👇</p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold w-full max-w-md py-6 text-xl animate-pulse">
                <a href="https://ev.braip.com/ref?pv=pro4zjrm&af=afizj44j7x" target="_blank" rel="noopener noreferrer">
                    COMPRAR AGORA
                </a>
            </Button>
        </div>

        <Separator />

        <div className="text-center text-sm text-muted-foreground p-4 bg-accent/50 rounded-lg">
          <p className="font-bold">⚠️ Observação importante:</p>
          <p>Este suplemento não substitui orientação médica. Consulte seu médico antes de iniciar o uso.</p>
        </div>
      </div>
    </div>
  );
}
