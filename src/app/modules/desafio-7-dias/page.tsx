
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Home, ArrowLeft } from 'lucide-react';

type ViewState = 'selection' | 'intro' | 'dia1';

export default function Desafio7DiasPage() {
  const [view, setView] = useState<ViewState>('selection');

  const renderContent = () => {
    switch (view) {
      case 'intro':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">✨ Introdução – Bem-vindo ao Desafio do Sono</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Não é só sobre dormir melhor. É sobre acordar para uma nova versão de você.</p>
                <p>Você já parou para pensar que o sono é uma das atividades mais importantes da sua vida… e talvez a mais negligenciada?</p>
                <p>Dormir não é desligar — é recarregar, restaurar, renascer.</p>
                <p>Neste desafio, você não vai seguir regras rígidas, nem buscar perfeição. Vai aprender a cuidar do seu sono com consciência, carinho e consistência. Cada dia traz um passo prático, uma reflexão e uma oportunidade de se reconectar com seu corpo e sua mente.</p>
                <p className="font-semibold text-foreground">🌙 Este não é um curso sobre técnicas. É um ritual diário de autocuidado. Um reencontro com a paz que mora no silêncio da noite.</p>
                <p>Durante 7 dias, você vai reprogramar hábitos, criar rituais, transformar seu ambiente e entender como pequenas escolhas podem gerar grandes mudanças — no sono e na vida. Você vai aprender com populações que têm os melhores padrões de descanso do mundo, mas vai adaptar tudo à sua realidade, no seu ritmo.</p>
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                  <h3 className="font-bold text-foreground mb-2">🎯 O objetivo?</h3>
                  <p>Que seu sono deixe de ser um problema… e se torne um aliado. Porque quem dorme bem, vive melhor. E quem vive melhor, se transforma.</p>
                </div>
                <p>Prepare seu Diário do Sono, escolha começar com leveza… e lembre-se:</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">Você não precisa dormir perfeitamente hoje. Só precisa começar a cuidar do seu amanhã, ainda hoje.</blockquote>
              </CardContent>
            </Card>
            <div className="text-center">
                <Button onClick={() => setView('selection')}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Button>
            </div>
          </div>
        );
      case 'dia1':
        return (
            <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Dia 1 – Avalie Seus Hábitos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>O ponto de partida para transformar suas noites começa aqui.</p>
                <p>🧠 Reprogramar seu sono começa com consciência. Antes de mudar qualquer coisa, é essencial entender como você está vivendo suas noites hoje. Nesse primeiro passo, o objetivo é simples: observar sua rotina noturna com atenção e sem julgamentos. É o momento de fazer um verdadeiro raio-x do seu sono — e usar isso como base para acompanhar sua evolução ao longo dos próximos dias.</p>
                <p>🌍 Inspiração internacional: Você sabia que os holandeses têm uma das melhores qualidades de sono do mundo? Eles mantêm rotinas consistentes e conhecem os sinais do próprio corpo. Vamos seguir o exemplo e descobrir como construir um descanso verdadeiramente restaurador.</p>
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2">📝 Tarefa do Dia</h3>
                    <p className="mb-2">Pegue um caderno, diário ou qualquer lugar onde você possa escrever com liberdade. No topo da página, coloque a data de hoje e dê início ao seu Diário do Sono – Dia 1. Responda com sinceridade às perguntas abaixo:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Que horas fui dormir ontem?</li>
                        <li>O que fiz nas 2 horas que antecederam o sono?</li>
                        <li>Tive alguma dificuldade para dormir? Quais?</li>
                        <li>Dormi bem ou tive interrupções durante a noite?</li>
                        <li>Ao acordar, como me senti — física e mentalmente?</li>
                        <li>Estimo que dormi por quantas horas?</li>
                        <li>Percebo algum hábito que pode estar sabotando meu sono?</li>
                    </ul>
                </div>
                <p>📌 Importante: guarde esse diário com carinho. Ele será sua bússola nos próximos dias. Ver sua própria transformação escrita é poderoso e motivador.</p>
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">💡 Dica do dia</h3>
                    <p>A chave da mudança é observar. Hoje, não tente corrigir nada — só enxergue. Entre os vilões que mais atrapalham uma boa noite de sono estão:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Uso excessivo de telas à noite 📱</li>
                        <li>Ansiedade acumulada do dia 😟</li>
                        <li>Falta de horário definido para dormir ⏰</li>
                        <li>Estímulos externos como luz, barulho ou calor 🔊💡🔥</li>
                    </ul>
                    <p className="mt-2">Apenas registre. A mudança começa com clareza — e amanhã daremos o próximo passo para construir noites de descanso profundo e renovador.</p>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
                <Button onClick={() => setView('selection')}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Button>
            </div>
          </div>
        );
      case 'selection':
      default:
        return (
          <div className="text-center p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Segredo Holandês: Reprograme seu Sono</h1>
              <p className="text-muted-foreground mt-1">Desafio de 7 Dias para uma vida com mais energia.</p>
            </header>
            <div className="flex flex-col gap-4 w-full max-w-xs">
                <Button size="lg" onClick={() => setView('intro')}>
                  <BookOpen className="mr-2 h-5 w-5" />
                  Introdução
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('dia1')}>
                  Dia 1: Avalie Seus Hábitos
                </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center">
        {renderContent()}
      </div>
      <div className="absolute top-4 right-4 z-20">
          <Button asChild variant="ghost" size="icon">
              <Link href="/">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Tela Principal</span>
              </Link>
          </Button>
      </div>
    </div>
  );
}
