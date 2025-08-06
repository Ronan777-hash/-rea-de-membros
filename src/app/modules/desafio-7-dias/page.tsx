
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Home, ArrowLeft } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ViewState = 'selection' | 'intro' | 'dia1' | 'dia2' | 'dia3' | 'dia4' | 'dia5' | 'dia6';

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
  const [day3Answers, setDay3Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [day4Answers, setDay4Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });
  const [day5Answers, setDay5Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [day6Answers, setDay6Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  const handleDay1AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay1Answers((prev) => ({ ...prev, [name]: value }));
  };

  const handleDay2AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay2Answers((prev) => ({ ...prev, [name]: value }));
  };

  const handleDay3AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay3Answers((prev) => ({ ...prev, [name]: value }));
  };

  const handleDay4AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay4Answers((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleDay5AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay5Answers((prev) => ({ ...prev, [name]: value }));
  };

  const handleDay6AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDay6Answers((prev) => ({ ...prev, [name]: value }));
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
      case 'dia3':
        return (
            <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Dia 3 – Construindo Seu Santuário do Sono</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Seu ambiente fala com seu cérebro. Vamos ensinar ele a desligar.</p>
                <p>🧭 Objetivo do dia:<br/>Hoje, você vai transformar seu quarto em um verdadeiro santuário do descanso. O ambiente em que você dorme pode ser seu maior aliado ou um vilão invisível — luzes, ruídos e temperatura desregulada podem sabotar seu sono sem que você perceba.</p>
                <p>🌍 Como os holandeses fazem?<br/>Na Holanda, o quarto é tratado como um templo do sono. Ele costuma ser escuro, silencioso, arejado e livre de estímulos visuais ou tecnológicos. Essa configuração ensina o cérebro que, ali, é hora de descansar — e não de se distrair.</p>
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2">📝 Tarefa do dia – Diário do Sono, Dia 3:</h3>
                    <p className="mb-2">Responda com sinceridade:</p>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="d3q1">Como está meu quarto hoje? (Iluminação, ruídos, temperatura, colchão, travesseiro)</Label>
                          <Textarea id="d3q1" name="q1" value={day3Answers.q1} onChange={handleDay3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d3q2">O que posso melhorar com o que já tenho em casa?</Label>
                          <Textarea id="d3q2" name="q2" value={day3Answers.q2} onChange={handleDay3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d3q3">O que me incomoda quando tento dormir?</Label>
                          <Textarea id="d3q3" name="q3" value={day3Answers.q3} onChange={handleDay3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d3q4">Quais 3 ações concretas vou implementar hoje para melhorar meu ambiente de sono?</Label>
                          <Textarea id="d3q4" name="q4" value={day3Answers.q4} onChange={handleDay3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
                </div>
                 <div className="p-4 bg-muted/50 rounded-lg mt-4">
                    <h3 className="font-bold text-foreground mb-2">🔧 Exemplos de ações que funcionam:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Fechar janelas e cortinas 30 min antes de deitar</li>
                        <li>Usar luz âmbar ou abajur com luz quente</li>
                        <li>Colocar o celular longe da cama e ativar o “não perturbe”</li>
                        <li>Trocar a roupa de cama por uma mais fresca e limpa</li>
                        <li>Iniciar uma trilha sonora suave com sons relaxantes (sem tela acesa)</li>
                        <li>Borrifar essência de lavanda ou usar um difusor de aroma calmante</li>
                    </ul>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                    <p className="font-bold">💬 Frase motivadora para seu diário:</p>
                    <p>"Estou criando um espaço de paz. Cada detalhe conta para que meu corpo confie e se entregue ao descanso."</p>
                </blockquote>
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">💡 Dica do dia:</h3>
                    <p>Seu cérebro é altamente condicionado ao ambiente. Se você usa sua cama para trabalhar, comer ou ficar no celular, ele não entende que é hora de dormir. A partir de hoje, transforme sua cama num espaço sagrado. Use-a apenas para dormir e relaxar.</p>
                    <p className="italic mt-2">"Quanto mais neutro, confortável e livre de estímulos for seu quarto, mais rápido sua mente desliga e mergulha no descanso profundo."</p>
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
      case 'dia4':
        return (
            <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Dia 4 – Relaxe a Mente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Você não precisa dormir no meio do caos. Precisa de um ritual.</p>
                <p>🧭 Objetivo do dia:<br/>Eliminar os estímulos que mantêm sua mente acelerada à noite. Mesmo quando o corpo quer descansar, pensamentos agitados podem impedir o sono profundo. Hoje, você vai criar um ritual mental que ensina o cérebro a desacelerar e entrar em modo repouso.</p>
                <p>🌍 Como os holandeses fazem?<br/>Na Holanda, o descanso começa antes de deitar. Eles evitam luzes intensas e telas ao menos 1 hora antes de dormir. Muitos leem livros físicos, preparam um chá, respiram fundo ou apenas contemplam o silêncio.<br/>Celular no rosto até apagar? Por lá, isso é sinal de insônia anunciada.</p>
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2">📝 Tarefa do dia – Diário do Sono, Dia 4</h3>
                    <p className="mb-2">Reflexões para registrar:</p>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="d4q1">O que costumo fazer nas 2 horas antes de dormir?</Label>
                          <Textarea id="d4q1" name="q1" value={day4Answers.q1} onChange={handleDay4AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d4q2">Quais dessas atividades me deixam em estado de alerta — e quais me acalmam?</Label>
                          <Textarea id="d4q2" name="q2" value={day4Answers.q2} onChange={handleDay4AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d4q3">Qual será meu novo ritual de relaxamento a partir de hoje?</Label>
                          <Textarea id="d4q3" name="q3" value={day4Answers.q3} onChange={handleDay4AnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
                </div>
                 <div className="p-4 bg-muted/50 rounded-lg mt-4">
                    <h3 className="font-bold text-foreground mb-2">🎯 Escolha 1 ou 2 hábitos relaxantes e coloque em prática hoje à noite:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Tomar um banho quente, com pouca luz e em silêncio</li>
                        <li>Ler um livro leve, com toque suave nas páginas</li>
                        <li>Ouvir uma meditação guiada ou música instrumental suave</li>
                        <li>Respirar fundo por 5 minutos: inspire 4s, segure 4s, expire 4s</li>
                        <li>Escrever no diário: como foi o dia, o que quero soltar</li>
                        <li>Acender uma vela aromática ou usar óleo essencial de lavanda</li>
                    </ul>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                    <p className="font-bold">💬 Frase motivadora para escrever no diário:</p>
                    <p>"Desacelerar é um ato de cuidado. Quando eu acalmo a mente, convido o sono a me envolver com gentileza."</p>
                </blockquote>
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">💡 Dica do dia:</h3>
                    <p>Evite telas, redes sociais e conteúdos pesados antes de dormir. Eles ativam áreas do cérebro ligadas à atenção e dificultam o desligamento.</p>
                    <p className="italic mt-2">"Criar um ritual noturno é como colocar o corpo no modo avião — ele entende que está tudo bem se desligar."</p>
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
        case 'dia5':
        return (
            <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Dia 5 – Nutrição Noturna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>O que você come à noite pode estar roubando seu sono.</p>
                <p>🧭 Objetivo do dia:<br/>Hoje vamos explorar como a alimentação influencia diretamente a qualidade do seu descanso. Comer na hora errada — ou os alimentos errados — pode manter o corpo em alerta, dificultar o sono profundo e trazer consequências que se estendem até o dia seguinte. A meta: comer com sabedoria para dormir com leveza.</p>
                <p>🌍 Como os holandeses fazem?<br/>Eles jantam cedo, com pratos leves e nutritivos. Evitam álcool, cafeína e grandes porções. Muitos optam por refeições à base de vegetais, grãos suaves e chás calmantes. Tudo isso ensina o corpo a se preparar gradualmente para o repouso, sem estímulos em excesso.</p>
                <p>🕒 Qual é o tempo ideal entre jantar e dormir?<br/>Espere entre 2 a 3 horas depois da última refeição antes de ir para cama. Esse intervalo permite que a digestão ocorra sem sobrecarregar o organismo, evitando sintomas como refluxo, agitação noturna, pesadelos e sono fragmentado.</p>
                <p>🍞 E os carboidratos? Não fuja deles!<br/>Carboidratos leves estimulam a liberação de triptofano, um aminoácido essencial para a produção de melatonina e serotonina — substâncias que regulam o sono e o humor. Cortá-los completamente pode deixar sua mente inquieta e dificultar o relaxamento.</p>

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2">📝 Tarefa do dia – Diário do Sono, Dia 5:</h3>
                    <p className="mb-2">Responda com atenção:</p>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="d5q1">O que comi ontem à noite? (Descreva com detalhes)</Label>
                          <Textarea id="d5q1" name="q1" value={day5Answers.q1} onChange={handleDay5AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d5q2">Quantas horas antes de deitar foi essa refeição?</Label>
                          <Textarea id="d5q2" name="q2" value={day5Answers.q2} onChange={handleDay5AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d5q3">Como me senti ao deitar: leve, estufado, relaxado, ansioso?</Label>
                          <Textarea id="d5q3" name="q3" value={day5Answers.q3} onChange={handleDay5AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d5q4">Qual será meu plano alimentar noturno ideal para os próximos dias?</Label>
                          <Textarea id="d5q4" name="q4" value={day5Answers.q4} onChange={handleDay5AnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg mt-4">
                    <h3 className="font-bold text-foreground mb-2">🔎 Recomendações úteis:</h3>
                    <h4 className='font-semibold text-destructive'>❌ Evite:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Cafeína (café, chá preto ou verde, refrigerantes)</li>
                        <li>Bebidas alcoólicas</li>
                        <li>Frituras, chocolates e alimentos pesados</li>
                        <li>Comer muito tarde</li>
                    </ul>
                    <h4 className='font-semibold text-green-600 mt-2'>✅ Prefira:</h4>
                     <ul className="list-disc list-inside space-y-1">
                        <li>Banana, aveia, iogurte natural, nozes</li>
                        <li>Torradas leves, sopas suaves ou caldos nutritivos</li>
                        <li>Chá de camomila, erva-doce ou maracujá</li>
                        <li>Pouca água à noite (para evitar acordar com vontade de ir ao banheiro)</li>
                    </ul>
                </div>
                
                <blockquote className="border-l-4 border-primary pl-4 italic">
                    <p className="font-bold">💬 Frase motivadora para seu diário:</p>
                    <p>"Comer bem à noite é como plantar o descanso. Meu corpo agradece no silêncio da madrugada."</p>
                </blockquote>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">💡 Dica do dia:</h3>
                    <p>A produção de melatonina depende de nutrientes como triptofano, magnésio e vitamina B6. Ao incluir esses alimentos naturalmente ricos em compostos do sono, seu corpo entra em sintonia com o descanso — de dentro para fora.</p>
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
      case 'dia6':
        return (
            <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Dia 6 – Relaxando de Dentro pra Fora</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Você não precisa forçar o sono. Precisa liberar o que te impede de descansar.</p>
                <p>🧭 Objetivo do dia:<br/>Hoje você vai conhecer técnicas simples e eficazes para acalmar corpo e mente. Quando ambos estão em harmonia, o sono surge como consequência — não como obrigação. O foco é abandonar os estímulos da noite, desconectar e entrar num estado de paz interior.</p>
                <p>🌍 Como os holandeses fazem?<br/>Muitos cultivam o silêncio como hábito noturno. Evitam luzes intensas e telas pelo menos 1 hora antes de dormir. Técnicas como respiração consciente, meditação leve ou apenas contemplar o silêncio são comuns — e funcionam como antídotos para o estresse do dia.</p>
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2">📝 Tarefa do dia – Diário do Sono, Dia 6</h3>
                    <p className="mb-2">Reflita e escreva:</p>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="d6q1">Como costumo me sentir à noite? Ansioso, calmo, acelerado?</Label>
                          <Textarea id="d6q1" name="q1" value={day6Answers.q1} onChange={handleDay6AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d6q2">Quais pensamentos geralmente invadem minha mente antes de dormir?</Label>
                          <Textarea id="d6q2" name="q2" value={day6Answers.q2} onChange={handleDay6AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="d6q3">Qual técnica de relaxamento vou experimentar hoje?</Label>
                          <Textarea id="d6q3" name="q3" value={day6Answers.q3} onChange={handleDay6AnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg mt-4">
                    <h3 className="font-bold text-foreground mb-2">🧘‍♂️ Escolha 1 ou mais técnicas para praticar hoje à noite:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Meditação Guiada: Ouça o áudio do método, respire fundo e apenas siga a condução gentil da voz.</li>
                        <li>Respiração 4-4-4: Inspire em 4 segundos, segure por 4 segundos, expire em 4 segundos. Repita por 2 a 5 minutos.</li>
                        <li>Escrita Liberadora: Pegue papel e caneta e despeje tudo o que está na sua mente. Sem censura, sem ordem. Apenas solte.</li>
                    </ul>
                </div>
                
                <p>📱 Desconecte-se:<br/>Evite telas e redes sociais pelo menos 1 hora antes de dormir. A luz azul e o excesso de informação ativam o cérebro e sabotam o sono profundo.</p>

                <blockquote className="border-l-4 border-primary pl-4 italic">
                    <p className="font-bold">💬 Frase motivadora para seu diário:</p>
                    <p>"Quando escolho desacelerar, dou permissão ao meu corpo para descansar. A paz começa na mente."</p>
                </blockquote>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-bold text-foreground mb-2">💡 Dica do dia:</h3>
                    <p>Seu corpo não precisa ser empurrado para dormir — ele precisa ser tranquilizado. O estresse acumulado se dissolve quando você encontra pequenas pausas para respirar, liberar e cuidar de si.</p>
                    <p className="italic mt-2">"Dormir bem começa muito antes da cama — começa na forma como você trata a sua mente ao cair da noite."</p>
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
                <Button size="lg" variant="outline" onClick={() => setView('dia3')}>
                  Dia 3: Construindo Seu Santuário do Sono
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('dia4')}>
                  Dia 4: Relaxe a Mente
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('dia5')}>
                  Dia 5: Nutrição Noturna
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('dia6')}>
                  Dia 6: Relaxando de Dentro pra Fora
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
