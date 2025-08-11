
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ViewState = 'inicio' | 'pegar-no-sono';

export default function DuvidasEDificuldadesPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
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
                          <Textarea id="q1" name="q1" value={answers.q1} onChange={handleAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="q2">Como costuma ser sua rotina na última hora antes de dormir?</Label>
                          <Textarea id="q2" name="q2" value={answers.q2} onChange={handleAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="q3">Que tipo de atividade mental você percebe que te atrapalha mais à noite?</Label>
                          <Textarea id="q3" name="q3" value={answers.q3} onChange={handleAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="q4">Se pudesse mudar apenas um hábito noturno hoje, qual seria?</Label>
                          <Textarea id="q4" name="q4" value={answers.q4} onChange={handleAnswerChange} placeholder="Sua resposta..." />
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
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
                    <span className="mr-2">🌒</span> Fico acordando várias vezes durante a noite
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto">
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
