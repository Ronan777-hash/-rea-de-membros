
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ViewState = 'inicio' | 'secao1' | 'secao2' | 'secao3';

export default function MeditacaoGuiadaPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [secao1Answers, setSecao1Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });
  const [secao2Answers, setSecao2Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });
  const [secao3Answers, setSecao3Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });


  const handleSecao1AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSecao1Answers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecao2AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSecao2Answers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSecao3AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSecao3Answers((prev) => ({ ...prev, [name]: value }));
  };

  const renderContent = () => {
    switch (view) {
      case 'secao1':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🌙 Seção 1 – O que é Meditação Guiada e por que ela ajuda no sono?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Você já tentou dormir com a mente acelerada, cheia de pensamentos que não param?<br/>Já se pegou rolando na cama, desejando que alguém simplesmente te ajudasse a desligar?</p>
                <p className="font-semibold text-foreground">É exatamente aí que entra a meditação guiada.</p>
                <p>Mas afinal, o que é meditação guiada?<br/>É uma prática em que você é conduzido por uma voz — seja de um instrutor ou uma gravação — que orienta sua atenção, respiração e pensamentos. Diferente da meditação silenciosa, aqui você não precisa “saber meditar”. Basta ouvir e deixar-se levar.</p>
                <p>A meditação guiada para o sono é desenhada para desacelerar o corpo e a mente. Ela utiliza técnicas como:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>🌅 Visualizações relaxantes (como imaginar um pôr do sol ou uma floresta tranquila)</li>
                    <li>🧘 Escaneamento corporal (perceber e relaxar cada parte do corpo)</li>
                    <li>🌬️ Respiração consciente (ritmada e profunda para acalmar o sistema nervoso)</li>
                </ul>
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2">Por que isso funciona tão bem para dormir?</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Reduz a atividade cerebral acelerada que impede o sono</li>
                        <li>Diminui os níveis de cortisol (hormônio do estresse)</li>
                        <li>Estimula o sistema parassimpático, que acalma o corpo</li>
                        <li>Cria uma rotina mental que associa a prática ao momento de dormir</li>
                    </ul>
                </div>
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-bold text-foreground mb-2">Agora pense:</h3>
                   <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="s1q1">🔹 Você já tentou meditar, mas achou difícil ficar em silêncio?</Label>
                          <Textarea id="s1q1" name="q1" value={secao1Answers.q1} onChange={handleSecao1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s1q2">🔹 Como seria ter alguém te guiando suavemente até o sono, como um ritual noturno?</Label>
                          <Textarea id="s1q2" name="q2" value={secao1Answers.q2} onChange={handleSecao1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s1q3">🔹 E se bastasse apertar o play e deixar que seu corpo fizesse o resto?</Label>
                          <Textarea id="s1q3" name="q3" value={secao1Answers.q3} onChange={handleSecao1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                    </div>
                </div>
                <p className="font-semibold text-foreground pt-4">Essa seção é o ponto de partida para transformar suas noites. Vamos juntos?</p>
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
      case 'secao2':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🧠 Seção 2 – Benefícios para o Corpo, Mente e Sono</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Meditar não é só “ficar zen”. É uma prática que transforma o funcionamento do corpo e da mente — especialmente quando o objetivo é dormir melhor.</p>
                <p>A meditação guiada atua diretamente no sistema nervoso, ajudando a desacelerar os pensamentos, reduzir tensões físicas e criar um estado interno de segurança e tranquilidade. Isso é essencial para que o corpo entre no modo descanso.</p>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">🌟 Benefícios para o corpo:</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Redução da frequência cardíaca e da pressão arterial</li>
                    <li>Relaxamento muscular profundo</li>
                    <li>Diminuição da produção de cortisol (hormônio do estresse)</li>
                    <li>Melhora na digestão e na respiração durante o sono</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mt-4 mb-2">🧘 Benefícios para a mente:</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Diminuição da ansiedade e da agitação mental</li>
                    <li>Redução de pensamentos repetitivos e preocupações</li>
                    <li>Aumento da sensação de presença e clareza</li>
                    <li>Estímulo à produção de serotonina (neurotransmissor do bem-estar)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mt-4 mb-2">😴 Benefícios para o sono:</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Facilita o início do sono (menos tempo rolando na cama)</li>
                    <li>Aumenta a profundidade do sono</li>
                    <li>Reduz despertares noturnos</li>
                    <li>Melhora a qualidade do descanso e da recuperação</li>
                  </ul>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 italic mt-4">Meditar antes de dormir é como preparar o terreno para que o sono aconteça naturalmente — sem forçar, sem lutar contra o relógio.</blockquote>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-bold text-foreground mb-2">❓ Perguntas Interativas</h3>
                   <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="s2q1">1. Você costuma sentir seu corpo tenso ou agitado na hora de dormir?</Label>
                          <Textarea id="s2q1" name="q1" value={secao2Answers.q1} onChange={handleSecao2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s2q2">2. Já percebeu que seus pensamentos acelerados atrapalham o sono?</Label>
                          <Textarea id="s2q2" name="q2" value={secao2Answers.q2} onChange={handleSecao2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s2q3">3. Como seria acordar com mais disposição e leveza todos os dias?</Label>
                          <Textarea id="s2q3" name="q3" value={secao2Answers.q3} onChange={handleSecao2AnswerChange} placeholder="Sua resposta..." />
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
      case 'secao3':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🚦 Seção 3 – Como Começar do Zero: Guia para Iniciantes Absolutos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Meditar não exige experiência, nem postura perfeita, nem mente vazia. O segredo está em começar pequeno, com gentileza e consistência.</p>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mt-4 mb-2">🧭 Passo a Passo para Iniciar:</h3>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>
                      <strong>Escolha um momento do dia</strong><br />
                      Pode ser ao acordar, antes de dormir ou em uma pausa tranquila. O importante é que seja um momento em que você possa estar presente.
                    </li>
                    <li>
                      <strong>Encontre um lugar confortável</strong><br />
                      Não precisa ser silencioso ou especial. Uma cadeira, uma almofada ou até a cama servem. O corpo deve estar relaxado, mas desperto.
                    </li>
                    <li>
                      <strong>Defina um tempo curto</strong><br />
                      Comece com 3 a 5 minutos. O objetivo não é meditar por muito tempo, mas criar o hábito com leveza.
                    </li>
                    <li>
                      <strong>Use meditações guiadas</strong><br />
                      Para iniciantes, ouvir uma voz conduzindo ajuda a manter o foco e entender o ritmo da prática.
                    </li>
                    <li>
                      <strong>Foque na respiração</strong><br />
                      Observe o ar entrando e saindo. Se a mente se distrair (e ela vai!), apenas volte para a respiração — sem se julgar.
                    </li>
                    <li>
                      <strong>Repita diariamente</strong><br />
                      A regularidade é mais importante que a duração. Meditar todos os dias, mesmo que por pouco tempo, cria uma base sólida.
                    </li>
                  </ol>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-bold text-foreground mb-2">❓ Perguntas Interativas</h3>
                   <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="s3q1">1. Qual momento do seu dia parece mais tranquilo para começar a meditar?</Label>
                          <Textarea id="s3q1" name="q1" value={secao3Answers.q1} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s3q2">2. Você já tem um cantinho onde se sente confortável para praticar?</Label>
                          <Textarea id="s3q2" name="q2" value={secao3Answers.q2} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s3q3">3. Que tipo de orientação te ajuda mais: ouvir uma voz guiando ou seguir sozinho com foco na respiração?</Label>
                          <Textarea id="s3q3" name="q3" value={secao3Answers.q3} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s3q4">4. Você conseguiria começar com 3 minutos por dia?</Label>
                          <Textarea id="s3q4" name="q4" value={secao3Answers.q4} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s3q5">5. Como acha que seu corpo e mente reagiriam se você criasse esse hábito por uma semana?</Label>
                          <Textarea id="s3q5" name="q5" value={secao3Answers.q5} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
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
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Meditação Guiada para Dormir</CardTitle>
                <CardDescription>Aprenda a meditar de um jeito simples e fácil — sem complicação, sem pressão.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Button size="lg" className="w-full" onClick={() => setView('secao1')}>
                  <span className="mr-2 text-lg">🌙</span>
                  O que é Meditação Guiada e por que ela ajuda no sono?
                </Button>
                <Button size="lg" className="w-full" variant="outline" onClick={() => setView('secao2')}>
                  <span className="mr-2 text-lg">🧠</span>
                  Benefícios para o Corpo, Mente e Sono
                </Button>
                <Button size="lg" className="w-full" variant="outline" onClick={() => setView('secao3')}>
                  <span className="mr-2 text-lg">🚦</span>
                  Como Começar do Zero: Guia para Iniciantes Absolutos.
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  <span className="mr-2 text-lg">🙏</span>
                  Meditação e Crenças Religiosas: Pode confiar.
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  <span className="mr-2 text-lg">🎧</span>
                  Criando um Ritual Noturno com Meditação Guiada.
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  <span className="mr-2 text-lg">🔄</span>
                  O que Fazer Quando a Mente Não Para (Mesmo com a Meditação).
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  <span className="mr-2 text-lg">🌼</span>
                  Técnicas para Relaxar o Corpo e Desacelerar a Respiração.
                </Button>
                <Button size="lg" className="w-full" variant="outline">
                  <span className="mr-2 text-lg">🎁</span>
                  Bônus – Sessões Guiadas para Você Ouvir Antes de Dormir.
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

    