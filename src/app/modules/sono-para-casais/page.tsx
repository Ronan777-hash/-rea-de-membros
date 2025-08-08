
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type ViewState = 'inicio' | 'abertura' | 'entendendo';

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
      case 'entendendo':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🧠 Módulo 2: Entendendo o Sono do Corpo e da Mente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Oferecer uma base clara e prática sobre como o sono funciona biologicamente e emocionalmente — e como essas dinâmicas se manifestam de forma diferente em cada pessoa. Entender isso é essencial para que o casal possa respeitar seus ritmos e criar estratégias juntos.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌙 Ciclos do Sono: O que acontece enquanto dormimos?</h3>
                  <p>O sono não é um estado único — ele é composto por ciclos que se repetem ao longo da noite. Cada ciclo dura cerca de 90 minutos e passa por fases:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Sono leve (estágio 1 e 2): transição entre vigília e sono.</li>
                    <li>Sono profundo (estágio 3): recuperação física, liberação de hormônios, descanso muscular.</li>
                    <li>Sono REM (movimento rápido dos olhos): fase dos sonhos, consolidação da memória, equilíbrio emocional.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Um sono de qualidade depende da repetição saudável desses ciclos. Interrupções constantes (como acordar várias vezes) quebram esse fluxo e afetam o bem-estar.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">👥 Diferença entre Sono Masculino e Feminino</h3>
                  <p>Embora cada pessoa seja única, estudos mostram algumas tendências:</p>
                  <p className='font-semibold mt-2'>Mulheres:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Tendem a ter mais sono profundo, mas também mais despertares noturnos.</li>
                    <li>São mais afetadas por variações hormonais (TPM, menopausa, gravidez).</li>
                    <li>Costumam ser mais sensíveis ao ambiente (luz, ruído, temperatura).</li>
                  </ul>
                  <p className='font-semibold mt-2'>Homens:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Têm maior propensão ao ronco e à apneia do sono.</li>
                    <li>Costumam ter sono mais contínuo, mas menos profundo em algumas fases.</li>
                    <li>Podem demorar mais para perceber os efeitos da privação de sono.</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Essas diferenças não são regras, mas ajudam o casal a entender que o sono não é igual para todos — e que respeitar essas variações é um gesto de cuidado.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">😵‍💫 Emoções e Estresse: Os Sabotadores do Sono</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><span className="font-semibold">Ansiedade:</span> acelera a mente, dificulta o relaxamento e atrasa o início do sono.</li>
                    <li><span className="font-semibold">Preocupações:</span> ativam o sistema de alerta, impedindo que o corpo entre em modo descanso.</li>
                    <li><span className="font-semibold">Discussões antes de dormir:</span> aumentam o cortisol (hormônio do estresse) e dificultam o desligamento emocional.</li>
                    <li><span className="font-semibold">Falta de rotina:</span> dormir em horários irregulares confunde o relógio biológico.</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                     O corpo precisa de previsibilidade para dormir bem. E a mente precisa de segurança.
                  </blockquote>
                </div>

                <Separator />
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">🔍 Pergunta Interativa: “Quais são nossos gatilhos de insônia?”</h3>
                    <p className="font-semibold text-foreground">Instruções:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>Cada um identifica 2 ou 3 situações que costumam atrapalhar o sono (ex: celular antes de dormir, preocupação com trabalho, discussões noturnas).</li>
                        <li>Compartilhem com o parceiro.</li>
                        <li>Conversem sobre como podem ajudar um ao outro a evitar esses gatilhos.</li>
                    </ol>
                    <p className="mt-4 italic">Esse exercício fortalece a empatia e cria um pacto de cuidado mútuo.</p>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>Dormir bem começa com entender como o corpo e a mente funcionam. Quando o casal aprende a reconhecer seus ritmos, gatilhos e necessidades, o sono deixa de ser um problema e passa a ser uma prática de parceria.</p>
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
                <Button size="lg" variant="outline" onClick={() => setView('entendendo')}>
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
