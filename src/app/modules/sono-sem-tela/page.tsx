
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type ViewState = 'inicio' | 'como-celular-sabota' | 'regra-90-minutos' | 'modo-noite' | 'substitutos-inteligentes' | 'desafio-30-noites';

interface DesafioDia {
  desconectei: string;
  ritual: string;
  dormiMelhor: string;
  observacoes: string;
}

export default function SonoSemTelaPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [sabotaAnswers, setSabotaAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [regra90MinutosAnswers, setRegra90MinutosAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [modoNoiteAnswers, setModoNoiteAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [substitutosAnswers, setSubstitutosAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [desafioAnswers, setDesafioAnswers] = useState<Record<number, DesafioDia>>(() => {
    const initial: Record<number, DesafioDia> = {};
    for (let i = 1; i <= 30; i++) {
      initial[i] = { desconectei: '', ritual: '', dormiMelhor: '', observacoes: '' };
    }
    return initial;
  });


  const handleSabotaAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSabotaAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegra90MinutosAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRegra90MinutosAnswers((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleModoNoiteAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setModoNoiteAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubstitutosAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSubstitutosAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleDesafioChange = (dia: number, campo: keyof DesafioDia, valor: string) => {
    setDesafioAnswers(prev => ({
      ...prev,
      [dia]: {
        ...prev[dia],
        [campo]: valor,
      }
    }));
  };

  const renderContent = () => {
    switch (view) {
      case 'desafio-30-noites':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">✨ Desafio 30 Noites Sem Tela</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Você já aprendeu como o celular interfere no sono, como preparar o corpo e o ambiente, e como substituir os estímulos digitais por práticas relaxantes. Agora é hora de transformar esse conhecimento em hábito — e sentir os efeitos reais de uma rotina noturna livre de telas.</p>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">💬 Antes de Começar: Uma Mensagem Importante</h3>
                  <p className="mt-2">Este desafio não é sobre perfeição — é sobre transformação. Se você perder um dia, ou até alguns, não se culpe e não desista. Levante, recomece e siga em frente. O hábito nasce da repetição, não da rigidez. E quando você persiste, mesmo com falhas, algo muda: o sono melhora, a mente desacelera, e a vida começa a respirar com mais leveza.</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Como Funciona o Desafio</h3>
                  <p className="mt-2">Durante 30 noites seguidas, você vai se desconectar das telas 90 minutos antes de dormir e seguir uma rotina de desaceleração.</p>
                  <p className="font-semibold text-foreground mt-2">Objetivo:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1 pl-2">
                    <li>Reduzir estímulos digitais antes de dormir</li>
                    <li>Criar um ritual noturno consistente</li>
                    <li>Sentir os efeitos reais no sono, no humor e na clareza mental</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-2">Regras básicas:</p>
                  <ul className="list-disc list-inside space-y-1 mt-1 pl-2">
                    <li>Nada de celular, TV ou computador nos 90 minutos finais do dia</li>
                    <li>Escolha pelo menos 2 práticas relaxantes por noite (respiração, leitura, música, etc.)</li>
                    <li>Registre como se sentiu ao acordar</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Não é sobre controlar o tempo — é sobre cuidar de si.
                  </blockquote>
                </div>
                <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">📊 Quadro de Acompanhamento – Desafio 30 Noites Sem Tela</h3>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[50px]">Dia</TableHead>
                                    <TableHead>Desconectei 90 min antes?</TableHead>
                                    <TableHead>Fiz o ritual relaxante?</TableHead>
                                    <TableHead>Dormi melhor?</TableHead>
                                    <TableHead>Observações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.keys(desafioAnswers).map(diaStr => {
                                    const dia = parseInt(diaStr);
                                    return (
                                        <TableRow key={dia}>
                                            <TableCell className="font-medium">{dia}</TableCell>
                                            <TableCell>
                                                <RadioGroup onValueChange={(value) => handleDesafioChange(dia, 'desconectei', value)} value={desafioAnswers[dia].desconectei} className="flex gap-2">
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Sim" id={`d${dia}-d-sim`} />
                                                        <Label htmlFor={`d${dia}-d-sim`}>Sim</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Não" id={`d${dia}-d-nao`} />
                                                        <Label htmlFor={`d${dia}-d-nao`}>Não</Label>
                                                    </div>
                                                </RadioGroup>
                                            </TableCell>
                                            <TableCell>
                                                 <RadioGroup onValueChange={(value) => handleDesafioChange(dia, 'ritual', value)} value={desafioAnswers[dia].ritual} className="flex gap-2">
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Sim" id={`d${dia}-r-sim`} />
                                                        <Label htmlFor={`d${dia}-r-sim`}>Sim</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Não" id={`d${dia}-r-nao`} />
                                                        <Label htmlFor={`d${dia}-r-nao`}>Não</Label>
                                                    </div>
                                                </RadioGroup>
                                            </TableCell>
                                            <TableCell>
                                                  <RadioGroup onValueChange={(value) => handleDesafioChange(dia, 'dormiMelhor', value)} value={desafioAnswers[dia].dormiMelhor} className="flex gap-2">
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Sim" id={`d${dia}-dm-sim`} />
                                                        <Label htmlFor={`d${dia}-dm-sim`}>Sim</Label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="Não" id={`d${dia}-dm-nao`} />
                                                        <Label htmlFor={`d${dia}-dm-nao`}>Não</Label>
                                                    </div>
                                                </RadioGroup>
                                            </TableCell>
                                            <TableCell>
                                                <Textarea
                                                    placeholder="Escreva aqui..."
                                                    value={desafioAnswers[dia].observacoes}
                                                    onChange={(e) => handleDesafioChange(dia, 'observacoes', e.target.value)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                 <Separator />
                  <div>
                    <h3 className="font-bold text-foreground text-lg">🔄 Como Manter o Hábito Após o Desafio</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li>Escolha um ritual noturno que você realmente goste — prazer sustenta o hábito.</li>
                        <li>Deixe o celular fora do quarto ou em modo avião todas as noites.</li>
                        <li>Associe o “modo noite” a algo positivo: um chá, uma música, um momento de carinho.</li>
                        <li>Compartilhe o desafio com alguém — fazer em dupla aumenta o compromisso.</li>
                        <li>Celebre cada semana completada com algo que represente autocuidado.</li>
                    </ul>
                     <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                        O hábito não nasce da força — nasce da repetição com intenção.
                    </blockquote>
                  </div>
                   <Separator />
                   <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas para refletir:</h3>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label>Qual foi o maior desafio ao tentar dormir sem tela — o tédio, a ansiedade ou o impulso automático?</Label>
                          <Textarea placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label>O que você sentiu ao acordar depois de uma noite desconectada?</Label>
                          <Textarea placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                           <Label>Que prática você mais gostou de incluir na sua rotina noturna?</Label>
                          <Textarea placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                           <Label>Como seria sua vida se esse hábito se tornasse permanente?</Label>
                          <Textarea placeholder="Sua resposta..." />
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
      case 'regra-90-minutos':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🕒 A Regra dos 90 Minutos Antes de Dormir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Os últimos 90 minutos antes de dormir são preciosos. É nesse intervalo que o corpo começa a desacelerar, se preparar para o repouso e entrar em estado de transição entre vigília e sono. Mas se esse tempo é invadido por telas e estímulos, o sono perde qualidade — mesmo que você durma por horas.</p>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🧬 O Que Acontece com o Corpo Nesse Período</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Temperatura corporal começa a cair: isso sinaliza ao cérebro que é hora de descansar.</li>
                    <li>Produção de melatonina aumenta naturalmente, desde que não haja luz intensa ou estímulos digitais.</li>
                    <li>Frequência cardíaca desacelera, preparando o corpo para entrar em ondas cerebrais mais lentas.</li>
                    <li>Sistema nervoso entra em modo parassimpático, responsável pelo relaxamento profundo.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Esse é o momento ideal para desacelerar — não para estimular.
                  </blockquote>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">📱 Criando um Bloqueio de Tela Automático</h3>
                  <p className="mt-2">Para proteger esse período, é essencial limitar o uso de telas. E a tecnologia pode ajudar:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Configure o celular para entrar em “modo descanso” automático 90 minutos antes do horário habitual de dormir.</li>
                    <li>Use recursos como bloqueio de apps, filtro de luz azul, modo não perturbe e limite de tempo de uso.</li>
                    <li>Alguns aparelhos permitem desativar notificações e ocultar ícones de redes sociais nesse horário.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O ideal é que o celular se torne invisível — ou irrelevante — nesse intervalo.
                  </blockquote>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🌿 Substituindo o “Só Mais Um Vídeo” por um Ritual Relaxante</h3>
                  <p className="mt-2">O hábito de consumir conteúdo até o último segundo é comum — mas pode ser transformado com pequenas mudanças:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Crie um ritual fixo e prazeroso que sinalize ao corpo que o dia está terminando.</li>
                    <li>Exemplos:
                      <ul className="list-disc list-inside space-y-1 mt-1 pl-4">
                        <li>Tomar um banho morno</li>
                        <li>Fazer um chá calmante</li>
                        <li>Ouvir uma música suave</li>
                        <li>Praticar respiração consciente</li>
                        <li>Conversar com o parceiro sem telas</li>
                      </ul>
                    </li>
                    <li>O segredo está na repetição: quanto mais o ritual se repete, mais o corpo entende que é hora de dormir.</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O ritual não precisa ser longo — só precisa ser constante.
                  </blockquote>
                </div>
                <Separator />
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas para refletir:</h3>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="regra-q1">Você costuma ter um ritual antes de dormir — ou vai direto da tela para o travesseiro?</Label>
                          <Textarea id="regra-q1" name="q1" value={regra90MinutosAnswers.q1} onChange={handleRegra90MinutosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="regra-q2">Seu celular está programado para te ajudar a dormir ou para te manter acordado?</Label>
                          <Textarea id="regra-q2" name="q2" value={regra90MinutosAnswers.q2} onChange={handleRegra90MinutosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="regra-q3">O que você poderia incluir no seu ritual noturno para tornar esse momento mais relaxante?</Label>
                          <Textarea id="regra-q3" name="q3" value={regra90MinutosAnswers.q3} onChange={handleRegra90MinutosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="regra-q4">Já percebeu como seu corpo responde quando você desacelera conscientemente antes de dormir?</Label>
                          <Textarea id="regra-q4" name="q4" value={regra90MinutosAnswers.q4} onChange={handleRegra90MinutosAnswerChange} placeholder="Sua resposta..." />
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
      case 'modo-noite':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🌙 Criando o “Modo Noite” no Ambiente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>O ambiente em que você dorme é tão importante quanto o que você faz antes de dormir. Sons, luzes e temperatura enviam sinais diretos ao cérebro sobre o que esperar: agitação ou descanso. Criar um “Modo Noite” é como preparar o palco para o sono — e cada detalhe conta.</p>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">💡 Iluminação: O Tom da Tranquilidade</h3>
                  <p className="mt-2">A luz tem um impacto direto no sistema nervoso. Tons frios (como branco ou azul) mantêm o cérebro em estado de alerta. Já os tons quentes sinalizam acolhimento e relaxamento.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Prefira luzes âmbar, alaranjadas ou avermelhadas no quarto à noite.</li>
                    <li>Use abajures com baixa intensidade, luz indireta ou até velas seguras.</li>
                    <li>Evite luzes de teto fortes e brancas após o pôr do sol.</li>
                    <li>Se possível, instale dimmers para ajustar a intensidade conforme a noite avança.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    A luz certa não apenas acalma — ela ensina o corpo a dormir melhor.
                  </blockquote>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎶 Sons e Músicas: O Ritmo do Relaxamento</h3>
                  <p className="mt-2">O som é uma ferramenta poderosa para induzir estados mentais. Sons suaves ajudam a desacelerar o ritmo cardíaco e a reduzir a atividade cerebral.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Experimente sons da natureza: chuva, vento, mar, floresta.</li>
                    <li>Ouça músicas instrumentais lentas, com frequência entre 60–80 bpm.</li>
                    <li>Evite músicas com letra, batidas intensas ou mudanças bruscas de ritmo.</li>
                    <li>Use caixas de som ambiente ou fones com isolamento suave, se necessário.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O som ideal não distrai — ele dissolve os pensamentos acelerados.
                  </blockquote>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🌡️ Temperatura e Ventilação: O Conforto Invisível</h3>
                  <p className="mt-2">A temperatura corporal precisa cair levemente para que o sono profundo aconteça. Um quarto abafado ou frio demais pode interromper esse processo.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Mantenha o ambiente entre 18°C e 22°C, ajustando conforme sua preferência.</li>
                    <li>Use ventilação leve e constante, como um ventilador silencioso ou janela entreaberta.</li>
                    <li>Evite cobertores pesados demais ou tecidos que retêm calor.</li>
                    <li>Aromas suaves como lavanda ou camomila também ajudam a criar uma atmosfera de descanso.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O corpo dorme melhor quando não precisa lutar contra o ambiente.
                  </blockquote>
                </div>
                <Separator />
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas para refletir:</h3>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="modo-noite-q1">Sua iluminação noturna transmite calma ou mantém o ambiente em alerta?</Label>
                          <Textarea id="modo-noite-q1" name="q1" value={modoNoiteAnswers.q1} onChange={handleModoNoiteAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="modo-noite-q2">Você costuma dormir com algum som — ou o silêncio absoluto te incomoda?</Label>
                          <Textarea id="modo-noite-q2" name="q2" value={modoNoiteAnswers.q2} onChange={handleModoNoiteAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="modo-noite-q3">O quarto está na temperatura ideal para o seu corpo relaxar — ou você acorda suando ou com frio?</Label>
                          <Textarea id="modo-noite-q3" name="q3" value={modoNoiteAnswers.q3} onChange={handleModoNoiteAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="modo-noite-q4">Que pequenos ajustes você pode fazer hoje para transformar seu quarto em um convite ao descanso?</Label>
                          <Textarea id="modo-noite-q4" name="q4" value={modoNoiteAnswers.q4} onChange={handleModoNoiteAnswerChange} placeholder="Sua resposta..." />
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
      case 'substitutos-inteligentes':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">💡 Substitutos Inteligentes para o Celular à Noite</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Desligar o celular à noite não significa abrir mão do prazer — significa trocar estímulo por presença. O segredo está em substituir o hábito, não apenas removê-lo. E quando as alternativas são agradáveis, o cérebro não sente falta da tela — ele agradece.</p>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎨 Atividades Simples e Prazerosas para Fazer Antes de Dormir</h3>
                  <p className="mt-2">A chave está em escolher ações que tragam leveza, conexão ou introspecção. Nada de tarefas complexas ou exigentes — apenas momentos que acalmam.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Escrever 3 coisas boas do dia (gratidão ou diário rápido)</li>
                    <li>Alongamento leve ou automassagem com óleo ou creme relaxante</li>
                    <li>Escutar um áudio de meditação ou história tranquila (sem olhar para a tela)</li>
                    <li>Organizar pequenos objetos ou preparar o ambiente para o dia seguinte</li>
                    <li>Desenhar, pintar ou fazer algo manual simples — mesmo que seja só rabiscar</li>
                    <li>Conversar com alguém ao vivo, sem celular por perto</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O prazer não está na tela — está na atenção que você dá ao momento.
                  </blockquote>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🌬️ Técnicas de Respiração e Relaxamento Muscular</h3>
                  <p className="mt-2">Essas práticas ajudam a desacelerar o corpo e a mente, reduzindo a tensão acumulada ao longo do dia.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Respiração 4-7-8: inspire por 4 segundos, segure por 7, expire por 8.</li>
                    <li>Respiração em caixa: 4 segundos para inspirar, segurar, expirar e pausar.</li>
                    <li>Relaxamento progressivo: contraia e solte grupos musculares, dos pés à cabeça.</li>
                    <li>Toque consciente: massageie mãos, pés ou pescoço com atenção plena.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O corpo responde ao toque e à respiração com gratidão — e com sono.
                  </blockquote>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">📖 Leituras Rápidas que Induzem Calma (Sem Tela)</h3>
                  <p className="mt-2">A leitura física tem um ritmo diferente — ela convida à introspecção, sem distrações visuais.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Poemas curtos ou reflexões inspiradoras</li>
                    <li>Livros de sabedoria leve, como filosofia prática ou espiritualidade</li>
                    <li>Histórias tranquilas e lentas, sem ação intensa ou suspense</li>
                    <li>Textos de gratidão, meditação ou contemplação</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Ler à noite é como conversar com a alma — sem pressa, sem ruído.
                  </blockquote>
                </div>
                <Separator />
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas para refletir:</h3>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="substitutos-q1">Qual foi a última vez que você fez algo prazeroso à noite sem envolver uma tela?</Label>
                          <Textarea id="substitutos-q1" name="q1" value={substitutosAnswers.q1} onChange={handleSubstitutosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="substitutos-q2">Que tipo de atividade te acalma mais: movimento leve, escrita ou escuta silenciosa?</Label>
                          <Textarea id="substitutos-q2" name="q2" value={substitutosAnswers.q2} onChange={handleSubstitutosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="substitutos-q3">Você tem algum livro físico ao lado da cama — ou só o celular como companhia?</Label>
                          <Textarea id="substitutos-q3" name="q3" value={substitutosAnswers.q3} onChange={handleSubstitutosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="substitutos-q4">Se pudesse escolher uma nova rotina noturna, qual dessas práticas incluiria primeiro?</Label>
                          <Textarea id="substitutos-q4" name="q4" value={substitutosAnswers.q4} onChange={handleSubstitutosAnswerChange} placeholder="Sua resposta..." />
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
              <CardContent className="flex flex-col gap-4">
                <Button className="w-full" variant="outline" onClick={() => setView('como-celular-sabota')}>📱 Como o Celular Sabota Seu Sono Sem Você Perceber</Button>
                <Button className="w-full" variant="outline" onClick={() => setView('regra-90-minutos')}>🕒 A Regra dos 90 Minutos Antes de Dormir</Button>
                <Button className="w-full" variant="outline" onClick={() => setView('modo-noite')}>🌙 Criando o “Modo Noite” no Ambiente</Button>
                <Button className="w-full" variant="outline" onClick={() => setView('substitutos-inteligentes')}>💡 Substitutos Inteligentes para o Celular à Noite</Button>
                <Button className="w-full" onClick={() => setView('desafio-30-noites')}>✨ Desafio 30 Noites Sem Tela</Button>
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
