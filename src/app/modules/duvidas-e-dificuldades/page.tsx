
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ViewState = 'inicio' | 'pegar-no-sono' | 'acordando-a-noite' | 'nao-consigo-dormir-novamente' | 'pensamentos-acelerados' | 'acorda-mesmo-horario' | 'sono-leve';

export default function DuvidasEDificuldadesPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [pegarNoSonoAnswers, setPegarNoSonoAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [acordandoAnswers, setAcordandoAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [naoConsigoDormirNovamenteAnswers, setNaoConsigoDormirNovamenteAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [pensamentosAceleradosAnswers, setPensamentosAceleradosAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [acordaMesmoHorarioAnswers, setAcordaMesmoHorarioAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [sonoLeveAnswers, setSonoLeveAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });


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

  const handlePensamentosAceleradosAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPensamentosAceleradosAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleAcordaMesmoHorarioAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAcordaMesmoHorarioAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSonoLeveAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSonoLeveAnswers((prev) => ({ ...prev, [name]: value }));
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
      case 'pensamentos-acelerados':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🧠 Pensamentos Acelerados na Hora de Dormir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Você deita, apaga a luz… e sua mente decide que é hora de trabalhar. Mil ideias, preocupações e lembranças começam a circular, como se o cérebro tivesse um botão de “modo turbo” noturno. Mas existe uma forma gentil de desacelerar esse fluxo e preparar a mente para o descanso.</p>
                
                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">📝 1. Exercício de “Descarregar” a Mente</h3>
                  <p className="mt-1">Antes de deitar, pegue um bloco de anotações e escreva tudo o que está passando pela sua cabeça — sem filtro.<br/>Pode ser uma lista de tarefas, preocupações, ideias soltas ou até frases desconexas.<br/>Esse ato simples ajuda a tirar os pensamentos da mente e colocá-los no papel, criando uma sensação de alívio e organização.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🎧 2. Áudio de Meditação Guiada</h3>
                  <p className="mt-1">Ouvir uma meditação guiada com foco no relaxamento noturno pode ajudar a redirecionar a atenção e acalmar o sistema nervoso.<br/>Escolha áudios com voz suave, ritmo lento e foco na respiração ou visualização.<br/>Você pode usar esse momento como um ritual de transição entre o dia e o sono.</p>
                </div>
                
                <Separator />
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">🟡 Perguntas Interativas</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="paq1">Você já tentou escrever antes de dormir? Como se sentiu depois?</Label>
                          <Textarea id="paq1" name="q1" value={pensamentosAceleradosAnswers.q1} onChange={handlePensamentosAceleradosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="paq2">Que tipo de pensamento costuma surgir com mais frequência à noite?</Label>
                          <Textarea id="paq2" name="q2" value={pensamentosAceleradosAnswers.q2} onChange={handlePensamentosAceleradosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="paq3">Já experimentou meditação guiada? Prefere com voz masculina, feminina ou sons da natureza?</Label>
                          <Textarea id="paq3" name="q3" value={pensamentosAceleradosAnswers.q3} onChange={handlePensamentosAceleradosAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="paq4">Se pudesse esvaziar a mente de um único pensamento hoje, qual seria?</Label>
                          <Textarea id="paq4" name="q4" value={pensamentosAceleradosAnswers.q4} onChange={handlePensamentosAceleradosAnswerChange} placeholder="Sua resposta..." />
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
      case 'acorda-mesmo-horario':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">⏰ Acorda Sempre no Mesmo Horário (Mesmo Sem Querer)?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Você abre os olhos no mesmo horário todos os dias — às vezes antes do despertador, às vezes no meio da madrugada — e sente que não tem controle sobre isso? Isso pode estar relacionado ao seu relógio biológico, também conhecido como ritmo circadiano. A boa notícia: ele pode ser ajustado com pequenas mudanças na rotina.</p>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🕰️ 1. Como Ajustar o “Relógio Biológico” aos Poucos</h3>
                  <p className="mt-1">Nosso corpo funciona em ciclos de 24 horas, influenciados por luz, temperatura e hábitos.<br/>Para ajustar esse relógio interno, é importante criar uma rotina consistente:<br/>- Vá dormir e acorde no mesmo horário todos os dias (inclusive aos fins de semana).<br/>- Evite cochilos longos durante o dia.<br/>- Faça ajustes de 15 a 30 minutos por vez — mudanças bruscas confundem o corpo.</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌞 2. Uso de Luz Natural ao Acordar e Luz Baixa à Noite</h3>
                  <p className="mt-1">A luz é um dos principais reguladores do ritmo circadiano.<br/>- Pela manhã: exponha-se à luz natural logo ao acordar — abra janelas, caminhe ao ar livre ou tome café perto da luz.<br/>- À noite: reduza a intensidade das luzes, evite telas brilhantes e crie um ambiente aconchegante com luzes quentes e suaves.</p>
                  <p className='mt-2'>Essas práticas ajudam seu corpo a entender quando é hora de estar alerta e quando é hora de descansar.</p>
                </div>

                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">🟡 Perguntas Interativas</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="amh1">Você costuma acordar no mesmo horário até nos fins de semana?</Label>
                          <Textarea id="amh1" name="q1" value={acordaMesmoHorarioAnswers.q1} onChange={handleAcordaMesmoHorarioAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amh2">Como é a iluminação do seu quarto à noite? Usa luzes fortes ou suaves?</Label>
                          <Textarea id="amh2" name="q2" value={acordaMesmoHorarioAnswers.q2} onChange={handleAcordaMesmoHorarioAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amh3">Já tentou ajustar seu horário de sono aos poucos? Como foi a experiência?</Label>
                          <Textarea id="amh3" name="q3" value={acordaMesmoHorarioAnswers.q3} onChange={handleAcordaMesmoHorarioAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amh4">Qual seria o horário ideal para você acordar e se sentir bem?</Label>
                          <Textarea id="amh4" name="q4" value={acordaMesmoHorarioAnswers.q4} onChange={handleAcordaMesmoHorarioAnswerChange} placeholder="Sua resposta..." />
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
      case 'sono-leve':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🔕 Sono Leve: Qualquer Barulho Te Acorda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p>Você está dormindo… e de repente, um carro passando, um cachorro latindo ou até o som do ventilador te desperta. Ter sono leve é mais comum do que parece — e existem formas simples de proteger seu descanso contra esses pequenos invasores sonoros.</p>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🚪 1. Isolamento Sonoro Simples no Quarto</h3>
                  <p className="mt-1">Você não precisa fazer uma reforma acústica para dormir melhor.<br/>Pequenas mudanças já ajudam bastante:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Use cortinas grossas ou blackout para abafar sons externos.</li>
                    <li>Coloque tapetes ou almofadas extras para absorver ruídos.</li>
                    <li>Mantenha portas e janelas bem vedadas — até uma fita de vedação pode ajudar.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌊 2. Uso de Ruído Branco ou Sons da Natureza</h3>
                  <p className="mt-1">Ruído branco é um som constante e suave que “mascara” os ruídos repentinos.<br/>Pode ser o som de um ventilador, chuva leve, ondas do mar ou até uma cachoeira.<br/>Esses sons criam uma espécie de “colchão sonoro” que ajuda o cérebro a se manter em estado de repouso, mesmo quando há barulhos ao redor.</p>
                  <p className='mt-2'>Você pode usar aplicativos, playlists ou até dispositivos próprios para isso — o importante é encontrar um som que te acalme e te proteja dos ruídos externos.</p>
                </div>

                <Separator />
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">🟡 Perguntas Interativas</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="slq1">Que tipo de barulho costuma te acordar com mais frequência?</Label>
                          <Textarea id="slq1" name="q1" value={sonoLeveAnswers.q1} onChange={handleSonoLeveAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slq2">Já testou sons da natureza ou ruído branco? Qual te acalma mais?</Label>
                          <Textarea id="slq2" name="q2" value={sonoLeveAnswers.q2} onChange={handleSonoLeveAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slq3">Como é a acústica do seu quarto hoje? Tem algo que poderia melhorar?</Label>
                          <Textarea id="slq3" name="q3" value={sonoLeveAnswers.q3} onChange={handleSonoLeveAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="slq4">Se pudesse escolher um som para embalar seu sono todas as noites, qual seria?</Label>
                          <Textarea id="slq4" name="q4" value={sonoLeveAnswers.q4} onChange={handleSonoLeveAnswerChange} placeholder="Sua resposta..." />
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
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto" onClick={() => setView('pensamentos-acelerados')}>
                    <span className="mr-2">🧠</span> Tenho pensamentos acelerados na hora de dormir
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto" onClick={() => setView('acorda-mesmo-horario')}>
                    <span className="mr-2">⏰</span> Acordo sempre no mesmo horário, mesmo sem querer
                  </Button>
                  <Button size="lg" variant="outline" className="text-left justify-start whitespace-normal h-auto" onClick={() => setView('sono-leve')}>
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
