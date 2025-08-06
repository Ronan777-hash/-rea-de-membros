import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const sections = [
  { emoji: '🧠', text: 'Seção 1: A Relação entre Comida e Sono', href: '#' },
  { emoji: '🚫', text: 'Seção 2: O que Evitar à Noite', href: '#' },
  { emoji: '✅', text: 'Seção 3: O que Comer para Dormir Melhor', href: '#' },
  { emoji: '🍞', text: 'Seção 4: Carboidrato à Noite – Inimigo ou Aliado?', href: '#' },
  { emoji: '🔍', text: 'Seção 5: Seu Estilo de Vida e Hábitos Alimentares', href: '#' },
  { emoji: '🎉', text: 'Seção Bônus: “Quero Chutar o Balde no Fim de Semana!”', href: '#' },
];

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

      <div className="w-full space-y-4">
        {sections.map((section) => (
          <Button
            key={section.text}
            asChild
            variant="outline"
            size="lg"
            className="w-full h-auto justify-start p-4 text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={section.href}>
              <span className="text-2xl mr-4">{section.emoji}</span>
              <span className="flex-1 whitespace-normal">{section.text}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
