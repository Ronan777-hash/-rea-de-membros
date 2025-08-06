
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Home, ArrowLeft } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ViewState = 'selection' | 'intro' | 'dia1' | 'dia2';

export default function Desafio7DiasPage() {
  const [view, setView] = useState<ViewState>('selection');
  const [day1Answers, setDay1Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
  });
  const [day2Answers, setDay2Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });

  const handleDay1AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay1Answers((prev) => ({ ...prev, [name]: value }));
  };

  const handleDay2AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay2Answers((prev) => ({ ...prev, [name]: value }));
  };


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
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="d1q1">Que horas fui dormir ontem?</Label>
                          <Textarea id="d1q1" name="q1" value={day1Answers.q1} onChange={handleDay1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d1q2">O que fiz nas 2 horas que antecederam o sono?</Label>
                          <Textarea id="d1q2" name="q2" value={day1Answers.q2} onChange={handleDay1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d1q3">Tive alguma dificuldade para dormir? Quais?</Label>
                          <Textarea id="d1q3" name="q3" value={day1Answers.q3} onChange={handleDay1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d1q4">Dormi bem ou tive interrupções durante a noite?</Label>
                          <Textarea id="d1q4" name="q4" value={day1Answers.q4} onChange={handleDay1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d1q5">Ao acordar, como me senti — física e mentalmente?</Label>
                          <Textarea id="d1q5" name="q5" value={day1Answers.q5} onChange={handleDay1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d1q6">Estimo que dormi por quantas horas?</Label>
                          <Textarea id="d1q6" name="q6" value={day1Answers.q6} onChange={handleDay1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d1q7">Percebo algum hábito que pode estar sabotando meu sono?</Label>
                          <Textarea id="d1q7" name="q7" value={day1Answers.q7} onChange={handleDay1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
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
      case 'dia2':
        return (
            <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Dia 2 – Reprograme o Relógio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Seu corpo ama rotina. Seu sono depende dela.</p>
                <p>🧭 Objetivo do dia:<br/>Hoje, você vai moldar os pilares da sua nova rotina de sono. O foco é criar consistência: horários fixos para dormir e acordar — incluindo fins de semana! Essa prática simples tem um impacto profundo na qualidade do sono e é valorizada pelas populações que dormem melhor no mundo.</p>
                <p>🌍 Como os holandeses fazem?<br/>Na Holanda, dormir é levado tão a sério quanto trabalhar. Eles encaram a hora de deitar como um compromisso pessoal com o bem-estar. Constância é o segredo: ao dormir e acordar sempre nos mesmos horários, o corpo entra em estado de equilíbrio.</p>
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2">📝 Tarefa do dia – Diário do Sono, Dia 2</h3>
                    <p className="mb-2">Escreva a data de hoje e responda:</p>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="d2q1">A que horas decidi ir dormir todos os dias?</Label>
                          <Textarea id="d2q1" name="q1" value={day2Answers.q1} onChange={handleDay2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d2q2">Qual será meu horário padrão para acordar?</Label>
                          <Textarea id="d2q2" name="q2" value={day2Answers.q2} onChange={handleDay2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d2q3">Quais obstáculos podem atrapalhar esses horários?</Label>
                          <Textarea id="d2q3" name="q3" value={day2Answers.q3} onChange={handleDay2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d2q4">O que posso ajustar na rotina para proteger esse novo ritmo?</Label>
                          <Textarea id="d2q4" name="q4" value={day2Answers.q4} onChange={handleDay2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
                </div>
                 <p>📲 Dica prática<br/>Programe um alarme uma hora antes de dormir. Esse alarme não é para correr pra cama, e sim para iniciar seu ritual noturno: desligar as telas, diminuir as luzes e começar a desacelerar.</p>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                    <p className="font-bold">✍️ Frase motivadora para escrever no diário:</p>
                    <p>"Estou ensinando meu corpo a encontrar o ritmo ideal. Quanto mais constante eu for, mais leve serão minhas manhãs."</p>
                </blockquote>
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">💡 Dica do dia</h3>
                    <p>Dormir e acordar sempre nos mesmos horários ajuda seu cérebro a calibrar o relógio biológico — conhecido como ritmo circadiano. Isso regula hormônios, temperatura corporal e até seu humor.<br/>Com o tempo, você vai acordar naturalmente, cheio de energia, sem depender de despertadores.</p>
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
                <Button size="lg" variant="outline" onClick={() => setView('dia2')}>
                  Dia 2: Reprograme o Relógio
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

    