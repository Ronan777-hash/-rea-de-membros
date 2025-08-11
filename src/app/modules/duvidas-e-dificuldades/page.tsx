
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ViewState = 'inicio' | 'pegar-no-sono' | 'acordando-a-noite' | 'nao-consigo-dormir-novamente';

export default function DuvidasEDificuldadesPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [pegarNoSonoAnswers, setPegarNoSonoAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [acordandoAnswers, setAcordandoAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [naoConsigoDormirNovamenteAnswers, setNaoConsigoDormirNovamenteAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });


  const handlePegarNoSonoAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPegarNoSonoAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleAcordandoAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAcordandoAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleNaoConsigoDormirNovamenteAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNaoConsigoDormirNovamenteAnswers((prev) => ({ ...prev, [name]: value }));
  };


  const renderContent = () => {
    switch(view) {
      case 'pegar-no-sono':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">😴 Dificuldade para Pegar no Sono (Mesmo Cansado)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Você chega ao fim do dia exausto, mas quando deita… o sono simplesmente não vem? Essa é uma das queixas mais comuns — e a boa notícia é que existem estratégias simples e eficazes para ajudar seu corpo e mente a entrarem no modo descanso.</p>
                
                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🧘‍♂️ 1. Relaxamento Muscular Progressivo</h3>
                  <p className="mt-1">Essa técnica envolve contrair e relaxar grupos musculares, um por um, começando pelos pés e subindo até o rosto.<br/>Ela ajuda a liberar tensões acumuladas e sinaliza ao corpo que é hora de desligar.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌬️ 2. Respiração 4-7-8</h3>
                  <p className="mt-1">Inspirar por 4 segundos, segurar por 7, expirar por 8.<br/>Esse ritmo ativa o sistema nervoso parassimpático, responsável por acalmar o corpo.<br/>Ideal para desacelerar a mente e reduzir batimentos cardíacos.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🧠 3. Evite Sobrecarga Mental Antes de Dormir</h3>
                  <p className="mt-1">Evite reuniões, discussões, redes sociais ou tarefas complexas na última hora antes de dormir.<br/>Esse tempo deve ser reservado para atividades leves e relaxantes — como leitura tranquila, banho morno ou ouvir música suave.</p>
                </div>
                
                <Separator />
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">🟡 Perguntas Interativas</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="q1">Você já tentou alguma dessas técnicas? Qual funcionou melhor para você?</Label>
                          <Textarea id="q1" name="q1" value={pegarNoSonoAnswers.q1} onChange={handlePegarNoSonoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="q2">Como costuma ser sua rotina na última hora antes de dormir?</Label>
                          <Textarea id="q2" name="q2" value={pegarNoSonoAnswers.q2} onChange={handlePegarNoSonoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="q3">Que tipo de atividade mental você percebe que te atrapalha mais à noite?</Label>
                          <Textarea id="q3" name="q3" value={pegarNoSonoAnswers.q3} onChange={handlePegarNoSonoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="q4">Se pudesse mudar apenas um hábito noturno hoje, qual seria?</Label>
                          <Textarea id="q4" name="q4" value={pegarNoSonoAnswers.q4} onChange={handlePegarNoSonoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
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
      case 'acordando-a-noite':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🌙 Acorda Várias Vezes Durante a Noite?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Você dorme… mas não permanece dormindo. Acorda uma, duas, três vezes — e isso afeta diretamente sua energia no dia seguinte. Esse tipo de interrupção pode ter várias causas, mas também tem soluções simples e eficazes.</p>

                <Separator />
                
                <div>
                  <h3 className="font-bold text-foreground text-lg">❄️ 1. Ajuste de Temperatura do Quarto</h3>
                  <p className="mt-1">Ambientes muito quentes ou frios atrapalham o ciclo natural do sono.<br/>A temperatura ideal gira em torno de 18 a 22°C.<br/>Ventilação leve, roupas de cama respiráveis e pijamas confortáveis fazem diferença.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">☕ 2. Redução de Cafeína e Açúcar no Fim do Dia</h3>
                  <p className="mt-1">Mesmo que você não sinta os efeitos imediatamente, cafeína e açúcar podem manter seu sistema em alerta por horas.<br/>Evite café, chá preto, refrigerantes e doces após as 17h.<br/>Prefira opções leves e naturais à noite.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🛌 3. Três Técnicas para Voltar a Dormir em Menos de 10 Minutos</h3>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Respiração em contagem regressiva: inspire e conte de 100 até 0, lentamente.</li>
                    <li>Visualização guiada: imagine um lugar tranquilo e reconfortante, com detalhes sensoriais.</li>
                    <li>Relaxamento por escaneamento corporal: concentre-se em cada parte do corpo, da cabeça aos pés, soltando a tensão.</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">🟡 Perguntas Interativas</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="aq1">Você costuma acordar em horários específicos ou aleatórios?</Label>
                          <Textarea id="aq1" name="q1" value={acordandoAnswers.q1} onChange={handleAcordandoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="aq2">Já percebeu se a temperatura do quarto influencia seu sono?</Label>
                          <Textarea id="aq2" name="q2" value={acordandoAnswers.q2} onChange={handleAcordandoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="aq3">Qual foi sua última refeição ou bebida antes de dormir ontem?</Label>
                          <Textarea id="aq3" name="q3" value={acordandoAnswers.q3} onChange={handleAcordandoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="aq4">Das três técnicas para voltar a dormir, qual você gostaria de testar hoje?</Label>
                          <Textarea id="aq4" name="q4" value={acordandoAnswers.q4} onChange={handleAcordandoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
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
      case 'nao-consigo-dormir-novamente':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🌌 Acordou no Meio da Noite e Não Consegue Voltar a Dormir?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Esse momento pode ser frustrante: o silêncio da madrugada, o corpo cansado, mas a mente desperta. A boa notícia é que existem formas suaves e eficazes de reconduzir o corpo ao estado de sono — sem esforço e sem ansiedade.</p>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">📵 1. Evite Olhar para o Celular ou Relógio</h3>
                  <p className="mt-1">A luz azul da tela ativa o cérebro e interrompe a produção de melatonina.<br/>Além disso, ver as horas pode gerar ansiedade (“já são 3h da manhã!”), dificultando ainda mais o retorno ao sono.<br/>Deixe o celular longe da cama e confie no seu corpo.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🖼️ 2. Exercício de Foco em Imagens Mentais Calmas</h3>
                  <p className="mt-1">Feche os olhos e imagine um lugar tranquilo — uma praia deserta, um campo florido, uma cabana na montanha.<br/>Inclua detalhes sensoriais: o som do vento, o cheiro da natureza, a textura do ambiente.<br/>Esse tipo de visualização ajuda a acalmar a mente e reconectar com o sono.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🍵 3. Chá de Camomila Antes de Dormir</h3>
                  <p className="mt-1">A camomila é uma das ervas mais estudadas e premiadas por seus efeitos calmantes.<br/>Ela atua como um leve sedativo natural, ajudando a reduzir a ansiedade e preparar o corpo para um sono profundo.<br/>Ideal para incluir na rotina noturna — especialmente em noites mais agitadas.</p>
                </div>
                
                <Separator />
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">🟡 Perguntas Interativas</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="ncdn1">O que você costuma fazer quando acorda no meio da noite?</Label>
                          <Textarea id="ncdn1" name="q1" value={naoConsigoDormirNovamenteAnswers.q1} onChange={handleNaoConsigoDormirNovamenteAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ncdn2">Já percebeu se olhar o celular te deixa mais desperto?</Label>
                          <Textarea id="ncdn2" name="q2" value={naoConsigoDormirNovamenteAnswers.q2} onChange={handleNaoConsigoDormirNovamenteAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ncdn3">Qual imagem mental te transmite mais calma e segurança?</Label>
                          <Textarea id="ncdn3" name="q3" value={naoConsigoDormirNovamenteAnswers.q3} onChange={handleNaoConsigoDormirNovamenteAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ncdn4">Você já experimentou o chá de camomila como parte da sua rotina de sono?</Label>
                          <Textarea id="ncdn4" name="q4" value={naoConsigoDormirNovamenteAnswers.q4} onChange={handleNaoConsigoDormirNovamenteAnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
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
            <Card className="w-full max-w-2xl">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">Dúvidas e Dificuldades: Seu Último Passo para Dormir Bem</CardTitle>
                <CardDescription className="text-lg pt-2">7 caminhos para entender seu sono, acalmar a mente e descansar de verdade.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto" onClick={() => setView('pegar-no-sono')}>
                    <span className="mr-2">🥲</span> Tenho dificuldade para pegar no sono, mesmo cansado(a)
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto" onClick={() => setView('acordando-a-noite')}>
                    <span className="mr-2">🌒</span> Fico acordando várias vezes durante a noite
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto" onClick={() => setView('nao-consigo-dormir-novamente')}>
                    <span className="mr-2">🌌</span> Quando acordo no meio da noite, não consigo dormir novamente
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">🧠</span> Tenho pensamentos acelerados na hora de dormir
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">⏰</span> Acordo sempre no mesmo horário, mesmo sem querer
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">🔊</span> Meu sono é muito leve e qualquer barulho me acorda
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">😰</span> Tenho dificuldade para dormir quando estou ansioso(a) ou estressado(a)
                  </Button>
                </div>
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
