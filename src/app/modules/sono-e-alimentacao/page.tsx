
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type ViewState = 'inicio' | 'secao1' | 'secao2' | 'secao3' | 'secao4' | 'secao5' | 'secaoBonus';

export default function SonoEAlimentacaoPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [secao1Answers, setSecao1Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [secao2Answers, setSecao2Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [secao3Answers, setSecao3Answers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [secao4Answers, setSecao4Answers] = useState({
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

  const handleSecao4AnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSecao4Answers((prev) => ({ ...prev, [name]: value }));
  };


  const renderContent = () => {
    switch (view) {
      case 'secao1':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
             <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <span>🧠</span> Seção 1: A Relação entre Comida e Sono
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">🍽️ Como a Digestão Influencia o Cérebro na Hora de Dormir</h3>
                  <p>Quando você come, seu corpo entra em modo digestivo. Isso significa que:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>O sangue é direcionado para o sistema digestivo.</li>
                    <li>O metabolismo acelera para quebrar os alimentos.</li>
                    <li>O cérebro recebe sinais químicos que influenciam o estado de alerta ou relaxamento.</li>
                  </ul>
                  <p className="mt-2">Se você come alimentos pesados ou em grande quantidade antes de dormir, o corpo precisa trabalhar mais para digerir — e isso pode:</p>
                   <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Aumentar a temperatura corporal.</li>
                      <li>Causar desconforto abdominal.</li>
                      <li>Reduzir a produção de melatonina (hormônio do sono).</li>
                      <li>Estimular o cérebro em vez de acalmá-lo.</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-4">👉 Resumo simples: Comer demais ou alimentos difíceis de digerir à noite deixa o corpo em modo “ativo”, quando ele deveria estar desacelerando.</p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">⏰ Quanto Tempo Antes de Dormir Você Deve Comer?</h3>
                  <p>O ideal é fazer a última refeição 2 a 3 horas antes de deitar. Esse intervalo permite que:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>A digestão aconteça com calma.</li>
                    <li>O corpo comece a desacelerar.</li>
                    <li>O cérebro receba sinais de relaxamento.</li>
                  </ul>
                   <p className="mt-2">Se você come e deita logo em seguida, pode sentir:</p>
                   <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Refluxo ou azia.</li>
                      <li>Sensação de estufamento.</li>
                      <li>Dificuldade para pegar no sono.</li>
                  </ul>
                  <div className="mt-4 p-4 bg-accent/50 rounded-lg border border-accent">
                    <p><span className="font-bold">💡 Dica prática:</span> Se você costuma dormir às 22h, tente jantar entre 19h e 20h. Se sentir fome mais tarde, opte por um lanche leve (vamos falar disso na Seção 3).</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">🌙 Por Que Comer Muito Tarde Afeta o Ciclo do Sono</h3>
                  <p>Nosso corpo tem um “relógio biológico” chamado ritmo circadiano, que regula sono, fome, temperatura e hormônios. Comer muito tarde pode:</p>
                   <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Confundir esse relógio.</li>
                      <li>Reduzir a produção de melatonina.</li>
                      <li>Aumentar o cortisol (hormônio do estresse).</li>
                      <li>Interromper o ciclo natural de descanso.</li>
                  </ul>
                  <p className="mt-2">Além disso, refeições tardias podem:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Diminuir a qualidade do sono profundo.</li>
                      <li>Fazer você acordar mais vezes durante a noite.</li>
                      <li>Causar sonhos agitados ou sensação de cansaço ao acordar.</li>
                  </ul>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas Interativas</h3>
                   <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="s1q1">1. Que horas você costuma fazer sua última refeição?</Label>
                          <Textarea id="s1q1" name="q1" value={secao1Answers.q1} onChange={handleSecao1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s1q2">2. Já sentiu que comer tarde atrapalhou seu sono?</Label>
                          <Textarea id="s1q2" name="q2" value={secao1Answers.q2} onChange={handleSecao1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s1q3">3. Você costuma dormir com sensação de estômago cheio ou leve?</Label>
                          <Textarea id="s1q3" name="q3" value={secao1Answers.q3} onChange={handleSecao1AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s1q4">4. Que mudança simples você pode testar hoje para dormir melhor?</Label>
                          <Textarea id="s1q4" name="q4" value={secao1Answers.q4} onChange={handleSecao1AnswerChange} placeholder="Sua resposta..." />
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
      case 'secao2':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <span>🚫</span> Seção 2: O que Evitar à Noite
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">🧃 Alimentos que Sabotam o Sono</h3>
                  <p>Alguns alimentos ativam o corpo e o cérebro em vez de acalmá-los. Comer esses itens à noite pode dificultar o relaxamento e prejudicar a qualidade do sono.</p>
                  <p className="font-semibold text-foreground mt-2">Aqui estão os principais sabotadores:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><span className="font-semibold">Cafeína escondida:</span> além do café, ela está presente em chás escuros, refrigerantes, chocolates e até alguns medicamentos.</li>
                    <li><span className="font-semibold">Gorduras em excesso:</span> frituras, fast food e carnes muito gordurosas exigem digestão lenta e podem causar refluxo.</li>
                    <li><span className="font-semibold">Açúcar simples:</span> doces, bolos, biscoitos e sobremesas aumentam a glicose no sangue, gerando picos de energia e dificultando o relaxamento.</li>
                    <li><span className="font-semibold">Alimentos ultraprocessados:</span> embutidos, salgadinhos e produtos industrializados contêm aditivos que podem interferir nos neurotransmissores do sono.</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-4">👉 Resumo simples: Comer alimentos estimulantes à noite é como apertar o “botão de ligar” do corpo quando ele deveria estar desligando.</p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">⚠️ Por Que Esses Alimentos Atrapalham o Relaxamento</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Cafeína bloqueia a adenosina, substância que induz o sono.</li>
                    <li>Gorduras exigem mais tempo de digestão, o que mantém o corpo em alerta.</li>
                    <li>Açúcar provoca picos de energia seguidos de quedas bruscas, o que pode gerar agitação ou ansiedade.</li>
                    <li>Alimentos pesados aumentam a temperatura corporal, dificultando o início do sono profundo.</li>
                  </ul>
                  <p className="mt-2">Além disso, esses alimentos podem:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Alterar o ritmo cardíaco.</li>
                      <li>Provocar sonhos agitados.</li>
                      <li>Reduzir o tempo de sono reparador.</li>
                  </ul>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">❌ Erros Comuns nas Refeições Noturnas</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Comer pizza ou hambúrguer tarde da noite.</li>
                    <li>Tomar refrigerante com a janta.</li>
                    <li>Beliscar chocolate ou doces antes de dormir.</li>
                    <li>Jantar em frente à TV e exagerar na quantidade.</li>
                    <li>Pular o jantar e comer demais na ceia.</li>
                  </ul>
                   <div className="mt-4 p-4 bg-accent/50 rounded-lg border border-accent">
                    <p><span className="font-bold">💡 Dica prática:</span> Se você sente fome à noite, escolha alimentos leves e naturais. Na Seção 3, vamos mostrar ótimas opções.</p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas Interativas</h3>
                   <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="s2q1">1. Você costuma consumir algum desses alimentos à noite?</Label>
                          <Textarea id="s2q1" name="q1" value={secao2Answers.q1} onChange={handleSecao2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s2q2">2. Já percebeu que certos alimentos te deixam mais agitado?</Label>
                          <Textarea id="s2q2" name="q2" value={secao2Answers.q2} onChange={handleSecao2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s2q3">3. Qual desses erros você já cometeu sem perceber?</Label>
                          <Textarea id="s2q3" name="q3" value={secao2Answers.q3} onChange={handleSecao2AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s2q4">4. Que alimento você pode evitar hoje para dormir melhor?</Label>
                          <Textarea id="s2q4" name="q4" value={secao2Answers.q4} onChange={handleSecao2AnswerChange} placeholder="Sua resposta..." />
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
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <span>🥗</span> Seção 3: O que Comer para Dormir Melhor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">🌿 Alimentos que Ajudam o Corpo a Produzir Melatonina e Serotonina</h3>
                  <p>Alguns alimentos contêm nutrientes que estimulam a produção de melatonina (hormônio do sono) e serotonina (neurotransmissor do bem-estar). Esses compostos ajudam o corpo a relaxar e entrar no ciclo natural do descanso.</p>
                  <p className="font-semibold text-foreground mt-2">Principais nutrientes e onde encontrá-los:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><span className="font-semibold">Triptofano:</span> presente em banana, aveia, iogurte natural, ovos e nozes.</li>
                    <li><span className="font-semibold">Magnésio:</span> encontrado em sementes, castanhas, espinafre, abacate e também na banana.</li>
                    <li><span className="font-semibold">Vitamina B6:</span> presente em grão-de-bico, salmão, batata-doce e frutas como banana.</li>
                    <li><span className="font-semibold">Carboidratos leves:</span> ajudam o triptofano a chegar ao cérebro, favorecendo o relaxamento.</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-4">👉 Resumo simples: Comer alimentos ricos em triptofano + carboidratos leves é como dar ao corpo os ingredientes certos para desligar com tranquilidade.</p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">🍽️ Opções de Lanches Noturnos Leves, Saborosos e Funcionais</h3>
                  <p>Aqui estão algumas sugestões de lanches que ajudam a induzir o sono sem pesar:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Banana com aveia e uma colher de mel</li>
                    <li>Iogurte natural com chia ou linhaça</li>
                    <li>Torradas integrais com pasta de amendoim (sem açúcar)</li>
                    <li>Frutas como maçã, pera ou mamão</li>
                    <li>Mix de castanhas (em pequena quantidade)</li>
                    <li>Purê de batata-doce com azeite e ervas suaves</li>
                    <li>Shake leve com whey protein ou proteína vegetal + banana ou mamão</li>
                    <li>Iogurte com uma dose de proteína em pó + aveia ou frutas</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-4">💪 Dica extra para quem treina: incluir uma fonte leve de proteína (como whey ou proteína vegetal) pode ajudar na recuperação muscular sem atrapalhar o sono — desde que não contenha estimulantes como cafeína.</p>
                  <div className="mt-4 p-4 bg-accent/50 rounded-lg border border-accent">
                    <p><span className="font-bold">💡 Dica prática:</span> Evite exagerar na quantidade. O ideal é comer o suficiente para se sentir saciado, mas leve.</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">🌙 Como Montar uma “Ceia do Sono” Simples e Eficaz</h3>
                  <p>A ceia do sono é uma pequena refeição feita cerca de 1 hora antes de dormir (caso você tenha jantado muito cedo ou esteja com fome). Ela deve ser:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Leve</li>
                    <li>Rica em nutrientes calmantes</li>
                    <li>Livre de estimulantes</li>
                  </ul>
                  <p className="mt-2 font-semibold">Exemplo de ceia ideal:</p>
                  <blockquote className="border-l-4 border-primary pl-4 italic my-2">
                    <p>1 banana amassada com aveia + 1 colher de pasta de amendoim natural</p>
                    <p className="text-center my-1 font-sans not-italic">ou</p>
                    <p>1 torrada integral com queijo branco + 1 fatia de mamão</p>
                    <p className="text-center my-1 font-sans not-italic">ou</p>
                    <p>Shake com whey + leite vegetal + 1 colher de aveia + canela</p>
                  </blockquote>
                  <p>Essa combinação ajuda o corpo a relaxar sem sobrecarregar o sistema digestivo.</p>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas Interativas</h3>
                   <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="s3q1">1. Qual desses alimentos você já costuma consumir à noite?</Label>
                          <Textarea id="s3q1" name="q1" value={secao3Answers.q1} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s3q2">2. Você já percebeu que certos alimentos te ajudam a relaxar?</Label>
                          <Textarea id="s3q2" name="q2" value={secao3Answers.q2} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s3q3">3. Que lanche leve você pode testar hoje antes de dormir?</Label>
                          <Textarea id="s3q3" name="q3" value={secao3Answers.q3} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s3q4">4. Se você treina, como incluir proteína na sua ceia sem atrapalhar o sono?</Label>
                          <Textarea id="s3q4" name="q4" value={secao3Answers.q4} onChange={handleSecao3AnswerChange} placeholder="Sua resposta..." />
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
      case 'secao4':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3">
                  <span>🍞</span> Seção 4: Carboidrato à Noite – Inimigo ou Aliado?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">⚖️ A Verdade Sobre Cortar Carboidratos à Noite</h3>
                  <p>Durante muito tempo, os carboidratos foram vistos como vilões noturnos. Mas a ciência mostra que, quando escolhidos com sabedoria, eles podem ser grandes aliados do sono.</p>
                  <p className="font-semibold text-foreground mt-2">🔍 O que acontece quando você corta carboidratos à noite:</p>
                   <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Seu corpo pode entrar em estado de alerta por falta de energia.</li>
                    <li>A produção de triptofano (precursor da melatonina e serotonina) pode ser prejudicada.</li>
                    <li>Você pode sentir mais fome, irritação ou dificuldade para relaxar.</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-4">👉 Resumo simples: Cortar carboidratos de forma radical à noite pode deixar o cérebro mais agitado — e isso atrapalha o sono.</p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">🌙 Por Que Uma Quantidade Moderada Pode Ajudar a Relaxar</h3>
                  <p>Carboidratos leves ajudam o triptofano a atravessar a barreira do cérebro, estimulando a produção de melatonina e serotonina. Isso favorece:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Relaxamento muscular</li>
                    <li>Sensação de saciedade</li>
                    <li>Redução da ansiedade</li>
                    <li>Indução ao sono profundo</li>
                  </ul>
                  <div className="mt-4 p-4 bg-accent/50 rounded-lg border border-accent">
                    <p><span className="font-bold">💡 Importante:</span> A chave está na qualidade e na quantidade. Não é sobre comer uma pizza às 23h, mas sim sobre incluir fontes naturais e leves de carboidrato em pequenas porções.</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">🍛 O Prato Brasileiro Também Pode Ser Saudável à Noite</h3>
                  <p>A clássica combinação brasileira — arroz, feijão, carne e salada — pode sim ser uma refeição equilibrada à noite, desde que adaptada:</p>
                   <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>✅ Arroz e feijão fornecem carboidratos complexos e proteínas vegetais.</li>
                    <li>✅ Carne magra (como frango ou peixe) oferece proteína de qualidade.</li>
                    <li>✅ Salada crua ou legumes cozidos ajudam na digestão e saciedade.</li>
                  </ul>
                  <p className="mt-2"><span className="font-semibold">📌 Dica prática:</span> Se for comer esse prato à noite, prefira porções menores e carnes menos gordurosas. Evite frituras e excesso de sal.</p>
                  <p className="mt-1"><span className="font-semibold">🕘 Horário também importa:</span> Comer até 2 horas antes de dormir ajuda o corpo a digerir melhor e favorece o sono.</p>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">✅ Outros Tipos de Carboidrato para o Período Noturno</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Frutas: banana, mamão, maçã, pera</li>
                    <li>Tubérculos: batata-doce, mandioquinha, inhame</li>
                    <li>Grãos integrais: aveia, arroz integral, quinoa</li>
                    <li>Pães leves: torradas integrais ou pão de fermentação natural</li>
                    <li>Leguminosas: lentilha, grão-de-bico (em pequenas porções)</li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">🍽️ Combinações inteligentes:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Banana com aveia + proteína leve</li>
                    <li>Purê de batata-doce com azeite e frango desfiado</li>
                    <li>Torrada integral com pasta de amendoim natural</li>
                    <li>Arroz integral com legumes cozidos e tofu ou ovo</li>
                  </ul>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="font-bold text-foreground mb-2 text-lg">❓ Perguntas Interativas</h3>
                   <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="s4q1">1. Você costuma evitar carboidratos à noite? Por quê?</Label>
                          <Textarea id="s4q1" name="q1" value={secao4Answers.q1} onChange={handleSecao4AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s4q2">2. Já percebeu que comer um pouco de carboidrato te ajuda a relaxar?</Label>
                          <Textarea id="s4q2" name="q2" value={secao4Answers.q2} onChange={handleSecao4AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s4q3">3. Qual desses alimentos você gostaria de incluir na sua ceia?</Label>
                          <Textarea id="s4q3" name="q3" value={secao4Answers.q3} onChange={handleSecao4AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s4q4">4. Que combinação leve de carboidrato + proteína você pode testar hoje?</Label>
                          <Textarea id="s4q4" name="q4" value={secao4Answers.q4} onChange={handleSecao4AnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="s4q5">5. Como você pode adaptar o prato brasileiro para torná-lo mais leve à noite?</Label>
                          <Textarea id="s4q5" name="q5" value={secao4Answers.q5} onChange={handleSecao4AnswerChange} placeholder="Sua resposta..." />
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
      case 'secao5':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                🔍 Seção 5: Seu Estilo de Vida e Hábitos Alimentares
              </h1>
            </header>
            <div className="text-center text-muted-foreground">
              <p>Conteúdo da Seção 5 aparecerá aqui.</p>
            </div>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
        case 'secaoBonus':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
              🎉 Seção Bônus: “Quero Chutar o Balde no Fim de Semana!”
              </h1>
            </header>
            <div className="text-center text-muted-foreground">
              <p>Conteúdo da Seção Bônus aparecerá aqui.</p>
            </div>
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
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                Sono e Alimentação
              </h1>
              <p className="text-muted-foreground mt-1">
                Descubra como o que você come impacta suas noites.
              </p>
            </header>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Button size="lg" onClick={() => setView('secao1')}>
                <span className="mr-2">🧠</span> Seção 1: A Relação entre Comida e Sono
              </Button>
               <Button size="lg" onClick={() => setView('secao2')}>
                <span className="mr-2">🚫</span> Seção 2: O que Evitar à Noite
              </Button>
               <Button size="lg" onClick={() => setView('secao3')}>
                <span className="mr-2">✅</span> Seção 3: O que Comer para Dormir Melhor
              </Button>
               <Button size="lg" onClick={() => setView('secao4')}>
                <span className="mr-2">🍞</span> Seção 4: Carboidrato à Noite – Inimigo ou Aliado?
              </Button>
               <Button size="lg" onClick={() => setView('secao5')}>
                <span className="mr-2">🔍</span> Seção 5: Seu Estilo de Vida e Hábitos Alimentares
              </Button>
              <Button size="lg" onClick={() => setView('secaoBonus')}>
                <span className="mr-2">🎉</span> Seção Bônus: “Quero Chutar o Balde no Fim de Semana!”
              </Button>
            </div>
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
