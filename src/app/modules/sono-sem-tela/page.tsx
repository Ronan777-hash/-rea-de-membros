
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

type ViewState = 'inicio' | 'como-celular-sabota';

export default function SonoSemTelaPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [sabotaAnswers, setSabotaAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });

  const handleSabotaAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSabotaAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const renderContent = () => {
    switch (view) {
      case 'como-celular-sabota':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">📱 Como o Celular Sabota Seu Sono Sem Você Perceber</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>O celular parece inofensivo quando estamos deitados, rolando a tela antes de dormir. Mas ele é um dos maiores vilões invisíveis da qualidade do sono. Vamos entender por quê:</p>
                
                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🔵 Luz Azul: O Inimigo da Melatonina</h3>
                  <p className="mt-2">A tela do celular emite uma luz azul intensa, semelhante à luz do dia. Isso engana o cérebro, fazendo-o acreditar que ainda é hora de estar alerta.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Melatonina, o hormônio do sono, começa a ser produzido naturalmente quando o ambiente escurece.</li>
                    <li>A luz azul bloqueia essa produção, atrasando o início do sono e prejudicando a profundidade do descanso.</li>
                    <li>Mesmo com o “modo noturno” ativado, o estímulo visual ainda é forte o suficiente para interferir no ritmo circadiano.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    É como se você estivesse dizendo ao seu corpo: “Ainda não é hora de dormir” — mesmo que já sejam 23h.
                  </blockquote>
                </div>
                
                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🔔 Notificações e Estímulos: O Cérebro em Alerta</h3>
                  <p className="mt-2">Cada notificação, mensagem ou curtida ativa o sistema de recompensa do cérebro, liberando dopamina — o neurotransmissor do prazer e da expectativa.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                      <li>Isso mantém o cérebro em estado de vigilância, dificultando o relaxamento.</li>
                      <li>Mesmo que você não abra a notificação, o simples som ou vibração já gera microalertas cerebrais.</li>
                      <li>O resultado? Um cérebro agitado, que demora mais para entrar em ondas cerebrais lentas — essenciais para o sono profundo.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O celular vira uma máquina de ansiedade noturna, mesmo quando está em silêncio.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">📲 Redes Sociais e Vídeos Curtos: O Loop Infinito</h3>
                  <p className="mt-2">Você já disse “só mais um vídeo” e, quando viu, passou 40 minutos rolando a tela? Isso não é coincidência — é design.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                      <li>Plataformas como TikTok, Instagram e YouTube são programadas para prender sua atenção, com vídeos curtos e recompensas rápidas.</li>
                      <li>Esse consumo fragmentado estimula o cérebro como se estivesse em uma maratona de estímulos, dificultando o desligamento mental.</li>
                      <li>Quanto mais tempo você passa rolando, mais difícil é entrar no estado de relaxamento necessário para dormir.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O tempo que você perde tentando dormir é o tempo que o cérebro leva para se recuperar da hiperestimulação.
                  </blockquote>
                </div>

                <Separator />
                
                <div>
                  <h3 className="font-bold text-foreground text-lg">🧠 Em resumo:</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>A luz azul engana o corpo.</li>
                    <li>As notificações mantêm o cérebro em alerta.</li>
                    <li>Os vídeos curtos viciam e atrasam o sono.</li>
                  </ul>
                  <p className="mt-2">Tudo isso acontece sem que você perceba — até que o cansaço se acumule, o humor oscile e a produtividade caia.</p>
                </div>
                
                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas para refletir:</h3>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="sabota-q1">O que costuma te manter acordado por mais tempo: vídeos curtos, conversas no WhatsApp ou rolar o feed das redes sociais?</Label>
                          <Textarea id="sabota-q1" name="q1" value={sabotaAnswers.q1} onChange={handleSabotaAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sabota-q2">Você já tentou dormir e ficou com a mente acelerada por causa de algo que viu no celular?</Label>
                          <Textarea id="sabota-q2" name="q2" value={sabotaAnswers.q2} onChange={handleSabotaAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sabota-q3">Quantas vezes você já perdeu a hora de dormir por causa do “só mais um vídeo”?</Label>
                          <Textarea id="sabota-q3" name="q3" value={sabotaAnswers.q3} onChange={handleSabotaAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sabota-q4">Seu celular está configurado para reduzir estímulos à noite — ou ele continua vibrando e iluminando a tela mesmo na madrugada?</Label>
                          <Textarea id="sabota-q4" name="q4" value={sabotaAnswers.q4} onChange={handleSabotaAnswerChange} placeholder="Sua resposta..." />
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
          <div className="p-4 md:p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl md:text-3xl">💤 Sono Sem Tela: Desacelere e Durma Melhor</CardTitle>
                <CardDescription className="pt-2">
                  Um guia prático para desligar os estímulos digitais, acalmar a mente e transformar suas noites em momentos de descanso profundo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" onClick={() => setView('como-celular-sabota')}>📱 Como o Celular Sabota Seu Sono Sem Você Perceber</Button>
                <Button className="w-full">🕒 A Regra dos 90 Minutos Antes de Dormir</Button>
                <Button className="w-full">🌙 Criando o “Modo Noite” no Ambiente</Button>
                <Button className="w-full">💡 Substitutos Inteligentes para o Celular à Noite</Button>
                <Button className="w-full">✨ Desafio 30 Noites Sem Tela</Button>
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
