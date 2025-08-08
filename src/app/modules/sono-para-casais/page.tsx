
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type ViewState = 'inicio' | 'abertura';

export default function SonoParaCasaisPage() {
  const [view, setView] = useState<ViewState>('inicio');

  const renderContent = () => {
    switch (view) {
      case 'abertura':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">✨ Módulo 1: Dormir Juntos é uma Arte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Despertar a consciência de que o sono compartilhado é mais do que uma rotina — é uma prática de intimidade, respeito e conexão. Vamos explorar os desafios e as possibilidades que surgem quando dois corpos e duas mentes dividem o mesmo espaço para descansar.</p>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">💬 Introdução</h3>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                        “Dormir juntos é mais do que dividir um colchão. É dividir vulnerabilidades, silêncios e sonhos.”
                    </blockquote>
                    <p className="mt-4">Dormir a dois pode ser uma das experiências mais íntimas e reveladoras de um relacionamento. É quando as máscaras caem, o corpo relaxa e a mente se entrega. Mas também é quando surgem os atritos: o ronco, o calor, o desconforto, os hábitos diferentes.<br/>Esse módulo é um convite para olhar para o sono como uma arte — uma dança entre dois ritmos que podem aprender a se harmonizar.</p>
                </div>
                
                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🔍 Por que dormir a dois é um desafio?</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><span className="font-semibold">Diferenças de hábitos:</span> um gosta de dormir cedo, o outro é notívago. Um precisa de silêncio absoluto, o outro dorme com música.</li>
                        <li><span className="font-semibold">Ritmos biológicos distintos:</span> os ciclos de sono podem variar entre os parceiros, gerando desencontro de horários e energia.</li>
                        <li><span className="font-semibold">Necessidades emocionais e físicas:</span> alguns precisam de contato físico para se sentir seguros, outros valorizam o espaço pessoal.</li>
                        <li><span className="font-semibold">Sensibilidade ao ambiente:</span> luz, temperatura, colchão, travesseiro — tudo pode ser motivo de desconforto se não for ajustado em conjunto.</li>
                    </ul>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">💞 Como o sono afeta o relacionamento (e vice-versa)</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><span className="font-semibold">Privação de sono = irritabilidade:</span> noites mal dormidas geram impaciência, discussões e afastamento emocional.</li>
                        <li><span className="font-semibold">Sono de qualidade = mais afeto:</span> dormir bem juntos fortalece o vínculo, melhora o humor e aumenta a disposição para lidar com os desafios do dia.</li>
                        <li><span className="font-semibold">Presença física como segurança emocional:</span> saber que o outro está ali, mesmo em silêncio, pode ser profundamente reconfortante.</li>
                    </ul>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🧠 O impacto da presença física e emocional na hora de dormir</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><span className="font-semibold">O corpo percebe o outro:</span> batimentos cardíacos, respiração, calor — tudo influencia no relaxamento.</li>
                        <li><span className="font-semibold">A mente se conecta:</span> dormir ao lado de quem se ama pode reduzir a sensação de solidão e ansiedade.</li>
                        <li><span className="font-semibold">O sono vira ritual:</span> quando o casal transforma o momento de dormir em um ritual de cuidado mútuo, a relação se fortalece.</li>
                    </ul>
                </div>

                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">📝 Exercício Inicial: “O que o sono significa para nós como casal?”</h3>
                    <p className="font-semibold text-foreground">Instruções:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>Cada um escreve, em silêncio, o que o sono representa para si — descanso, fuga, conexão, paz, etc.</li>
                        <li>Depois, compartilhem com o parceiro.</li>
                        <li>Conversem sobre como podem tornar esse momento mais significativo juntos.</li>
                    </ol>
                    <p className="mt-4 italic">Esse exercício abre espaço para vulnerabilidade, escuta e alinhamento. É o primeiro passo para transformar o sono em um ato de amor.</p>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>Dormir juntos é uma arte — e como toda arte, exige prática, sensibilidade e intenção. Ao reconhecer os desafios e abraçar as oportunidades, o casal começa a construir um espaço de descanso que também é um espaço de afeto.</p>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'inicio':
      default:
        return (
          <div className="text-center p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Sono de qualidade para Casais</CardTitle>
                <CardDescription>Dormir junto sem perder o sono.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Button size="lg" onClick={() => setView('abertura')}>
                  ✨ Abertura: Dormir Juntos é uma Arte
                </Button>
                <Button size="lg" variant="outline">
                  🧠 Entendendo o Sono do Corpo e da Mente
                </Button>
                <Button size="lg" variant="outline">
                  🧴 Ritual Noturno do Casal
                </Button>
                <Button size="lg" variant="outline">
                  🥱 Barulhos, Luzes e Clima do Quarto
                </Button>
                <Button size="lg" variant="outline">
                  🫂 O Poder do Toque Antes de Dormir
                </Button>
                <Button size="lg" variant="outline">
                  💑 Dormir de Conchinha ou Separado?
                </Button>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

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
        {renderContent()}
      </div>
    </div>
  );
}
