
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ArrowLeft } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


type ViewState = 'inicio' | 'cha-suave' | 'suco-serenidade' | 'misturas-secretas';

export default function NovoModuloBonusPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [chaAnswers, setChaAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const [sucoAnswers, setSucoAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

    const [misturasAnswers, setMisturasAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });


  const handleChaAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setChaAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSucoAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSucoAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleMisturasAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMisturasAnswers((prev) => ({ ...prev, [name]: value }));
  };
  
  const renderContent = () => {
    switch (view) {
      case 'cha-suave':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🍵 Chá do Apagão Suave</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p><strong>Objetivo:</strong> Relaxar corpo e mente com infusões calmantes que preparam o terreno para um sono profundo e restaurador.</p>
                
                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌿 Ervas que Realmente Ajudam no Sono</h3>
                  <p className="mt-2">Essas plantas são conhecidas por suas propriedades sedativas e ansiolíticas naturais:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li><strong>Camomila:</strong> Rica em apigenina, um antioxidante que se liga a receptores cerebrais e induz sonolência.</li>
                    <li><strong>Melissa (erva-cidreira):</strong> Reduz a atividade do sistema nervoso central, aliviando ansiedade leve.</li>
                    <li><strong>Passiflora (flor do maracujá):</strong> Atua como tranquilizante natural, ideal para insônia causada por agitação mental.</li>
                    <li><strong>Lavanda:</strong> Seu aroma é tão eficaz quanto sua infusão — reduz frequência cardíaca e melhora a qualidade do sono.</li>
                  </ul>
                  <div className="mt-4 p-3 bg-accent/50 rounded-md border border-accent">
                    <p>💡 <strong>Extra:</strong> Você pode adicionar valeriana (em pequenas doses) para casos de insônia mais persistente, mas ela tem sabor forte e deve ser usada com cautela.</p>
                  </div>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🕰️ Melhor Horário para Tomar</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li><strong>Ideal:</strong> Entre 30 a 60 minutos antes de dormir.</li>
                        <li><strong>Evite:</strong> Tomar imediatamente após refeições pesadas ou muito tarde da noite (para não acordar com vontade de ir ao banheiro).</li>
                    </ul>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🔥 Como Potencializar o Efeito</h3>
                     <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li><strong>Temperatura:</strong> Prefira o chá morno — o calor ajuda a relaxar os músculos e induz sensação de conforto.</li>
                        <li><strong>Aroma:</strong> Inale profundamente o vapor do chá por alguns segundos antes de beber. Isso ativa o sistema límbico, responsável pelas emoções e memória.</li>
                        <li><strong>Ambiente:</strong> Tome o chá em luz baixa, com música suave ou silêncio. O ritual importa tanto quanto o conteúdo.</li>
                    </ul>
                </div>

                <Separator />
                
                <div>
                    <h3 className="font-bold text-foreground text-lg">🧪 Receita Base (Modo Simples)</h3>
                    <p className="mt-2">Se você quiser fazer um chá de maneira rápida, siga este passo a passo:</p>
                    <div className="mt-2 p-4 bg-muted/50 rounded-lg font-mono text-sm">
                        <p>1. Esquente a água até começar a borbulhar.</p>
                        <p>2. Coloque uma colher de chá da erva escolhida diretamente em uma xícara resistente ao calor.</p>
                        <p>3. Despeje a água quente sobre a erva.</p>
                        <p>4. Deixe em infusão por alguns minutos (5 a 7 é o ideal).</p>
                        <p>5. Coe e beba morno, aproveitando o aroma e o momento de pausa.</p>
                    </div>
                </div>

                <Separator />

                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 text-destructive-foreground">
                    <h3 className="font-bold mb-2">⚠️ Aviso Importante</h3>
                    <p className="text-sm">Consulte seu médico antes de iniciar o consumo regular, especialmente se você usa medicamentos, tem pressão baixa, está grávida ou possui condições de saúde específicas.</p>
                </div>

                <Separator />
                
                <div>
                    <h3 className="font-bold text-foreground text-lg">📅 Frequência Recomendada</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li><strong>Uso ideal:</strong> 4 a 5 noites por semana.</li>
                        <li><strong>Pausa necessária:</strong> Evite uso contínuo por mais de 3 semanas sem intervalo de pelo menos 5 dias.</li>
                    </ul>
                </div>
                
                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">❓ Perguntas para Refletir e Responder</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cha-q1">Qual dessas ervas você já experimentou e como foi sua experiência?</Label>
                          <Textarea id="cha-q1" name="q1" value={chaAnswers.q1} onChange={handleChaAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cha-q2">Você costuma ter dificuldade para dormir por causa de ansiedade ou agitação física?</Label>
                          <Textarea id="cha-q2" name="q2" value={chaAnswers.q2} onChange={handleChaAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cha-q3">Que tipo de ambiente você cria antes de dormir — luz, som, temperatura?</Label>
                          <Textarea id="cha-q3" name="q3" value={chaAnswers.q3} onChange={handleChaAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cha-q4">Já tentou associar aromas ao seu ritual noturno? Qual te acalma mais?</Label>
                          <Textarea id="cha-q4" name="q4" value={chaAnswers.q4} onChange={handleChaAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cha-q5">Você prefere preparar o chá com calma ou de forma prática e rápida?</Label>
                          <Textarea id="cha-q5" name="q5" value={chaAnswers.q5} onChange={handleChaAnswerChange} placeholder="Sua resposta..." />
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
      case 'suco-serenidade':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🍹 Suco da Serenidade Noturna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p><strong>Objetivo:</strong> Hidratar e nutrir o corpo com ingredientes naturais que favorecem o relaxamento e a qualidade do sono.</p>
                <Separator />
                <div>
                  <h3 className="font-bold text-foreground text-lg">🍓 Ingredientes Calmantes e Funcionais</h3>
                  <p className="mt-2">Esses alimentos são ricos em nutrientes que ajudam a desacelerar o corpo e preparar a mente para o descanso:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li><strong>Maracujá:</strong> Fonte de flavonoides e alcaloides que atuam como sedativos naturais.</li>
                    <li><strong>Banana:</strong> Rica em triptofano, magnésio e potássio — nutrientes que ajudam a relaxar os músculos e estimular a produção de melatonina.</li>
                    <li><strong>Maçã:</strong> Leve, digestiva e rica em antioxidantes; ajuda a acalmar o sistema digestivo.</li>
                    <li><strong>Ervas como camomila ou melissa:</strong> Podem ser infundidas e misturadas ao suco para potencializar o efeito calmante.</li>
                  </ul>
                   <div className="mt-4 p-3 bg-accent/50 rounded-md border border-accent">
                    <p>💡 <strong>Dica extra:</strong> Evite frutas muito ácidas ou com alto teor de açúcar à noite, como abacaxi ou uva, para não estimular o organismo.</p>
                  </div>
                </div>
                <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg">❄️ Truque da Temperatura Ideal</h3>
                     <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li>Prefira sucos gelados ou em temperatura ambiente, especialmente em noites quentes.</li>
                        <li>Evite bebidas muito frias com gelo excessivo, que podem causar desconforto digestivo ou agitação corporal.</li>
                    </ul>
                </div>
                <Separator />
                 <div>
                    <h3 className="font-bold text-foreground text-lg">🧊 Opções Geladas para Noites Quentes</h3>
                     <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li><strong>Smoothie de banana com camomila:</strong> Bata banana congelada com infusão de camomila fria e uma colher de mel.</li>
                        <li><strong>Suco de maçã com melissa:</strong> Prepare a infusão de melissa, deixe esfriar e misture com suco natural de maçã.</li>
                        <li><strong>Maracujá com hortelã:</strong> Refrescante e calmante — ideal para dias quentes e estressantes.</li>
                    </ul>
                </div>
                <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg">🧼 Receita Detox Leve para Acompanhar o Sono</h3>
                    <p className="mt-1 font-semibold">Suco Noturno Calmante e Digestivo</p>
                    <div className="mt-2 p-4 bg-muted/50 rounded-lg text-sm">
                        <p className="font-bold">Ingredientes:</p>
                        <ul className="list-disc list-inside mt-1 pl-4">
                           <li>1/2 banana madura</li>
                           <li>1/2 maçã sem casca</li>
                           <li>100 ml de infusão de camomila fria</li>
                           <li>1 colher de chá de sementes de linhaça (opcional)</li>
                           <li>Água filtrada para ajustar a textura</li>
                        </ul>
                        <p className="font-bold mt-2">Modo de preparo:</p>
                        <ol className="list-decimal list-inside mt-1 pl-4">
                           <li>Bata todos os ingredientes no liquidificador até ficar homogêneo.</li>
                           <li>Sirva em temperatura ambiente ou levemente gelado.</li>
                           <li>Beba cerca de 1 hora antes de dormir.</li>
                        </ol>
                    </div>
                     <p className="mt-2">Esse suco ajuda a relaxar, hidratar e ainda favorece o funcionamento intestinal — ideal para quem busca leveza antes de dormir.</p>
                </div>
                 <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg">📅 Frequência Recomendada</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li>Pode ser consumido até 5 vezes por semana, preferindo alternar sabores e ingredientes para evitar repetição e estimular variedade nutricional.</li>
                    </ul>
                </div>
                 <Separator />
                 <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">❓ Perguntas para Refletir e Responder</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="suco-q1">Qual fruta te acalma mais à noite: banana, maçã ou maracujá?</Label>
                          <Textarea id="suco-q1" name="q1" value={sucoAnswers.q1} onChange={handleSucoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="suco-q2">Você já experimentou misturar ervas com sucos? Como foi?</Label>
                          <Textarea id="suco-q2" name="q2" value={sucoAnswers.q2} onChange={handleSucoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="suco-q3">Prefere sucos gelados ou em temperatura ambiente antes de dormir?</Label>
                          <Textarea id="suco-q3" name="q3" value={sucoAnswers.q3} onChange={handleSucoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="suco-q4">Já percebeu diferença na qualidade do sono quando se alimenta de forma mais leve à noite?</Label>
                          <Textarea id="suco-q4" name="q4" value={sucoAnswers.q4} onChange={handleSucoAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="suco-q5">Que sabor você gostaria de transformar em uma bebida calmante?</Label>
                          <Textarea id="suco-q5" name="q5" value={sucoAnswers.q5} onChange={handleSucoAnswerChange} placeholder="Sua resposta..." />
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
      case 'misturas-secretas':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">☕ Misturas Secretas para Noites Perfeitas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                 <p><strong>Objetivo:</strong> Criar receitas personalizadas que se adaptam ao seu ritmo, humor e necessidades — seja para desacelerar à noite ou despertar com leveza pela manhã.</p>
                <Separator />

                 <div>
                  <h3 className="font-bold text-foreground text-lg">⚠️ Observação Importante Antes de Misturar Chás</h3>
                  <p className="mt-2">Antes de explorar as combinações, é essencial lembrar que, apesar de naturais, os chás podem ter efeitos potentes no organismo.</p>
                  <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                    <li>Evite misturar muitas ervas de uma vez. O excesso pode causar desconfortos como sonolência intensa, queda de pressão ou irritações gástricas.</li>
                    <li>Comece com no máximo duas ervas por infusão. Observe como seu corpo reage nos primeiros dias.</li>
                    <li>Consulte um profissional de saúde antes de iniciar qualquer rotina com chás, especialmente se estiver grávida, amamentando, tomando medicamentos ou tiver alguma condição clínica.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O natural também exige responsabilidade. Ouça seu corpo, respeite seus limites e busque orientação quando necessário.
                  </blockquote>
                </div>
                <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg">🧭 Guia de Combinações de Ingredientes</h3>
                    <p className="mt-2">A chave está em entender o efeito de cada ingrediente e como eles se complementam:</p>
                    <div className="rounded-md border mt-2">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Tipo de Mistura</TableHead>
                                    <TableHead>Ingredientes Principais</TableHead>
                                    <TableHead>Efeito Esperado</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Calmante Noturna</TableCell>
                                    <TableCell>Camomila, lavanda, melissa, maçã, maracujá</TableCell>
                                    <TableCell>Relaxamento e sono profundo</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Energizante Matinal</TableCell>
                                    <TableCell>Gengibre, hortelã, limão, chá verde, maçã verde</TableCell>
                                    <TableCell>Clareza mental e disposição</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Equilibrada Digestiva</TableCell>
                                    <TableCell>Erva-doce, hibisco, hortelã, pepino, melancia</TableCell>
                                    <TableCell>Leveza e conforto digestivo</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Anti-estresse leve</TableCell>
                                    <TableCell>Passiflora, banana, leite vegetal, baunilha</TableCell>
                                    <TableCell>Redução de ansiedade</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                     <div className="mt-4 p-3 bg-accent/50 rounded-md border border-accent">
                        <p>💡 <strong>Dica:</strong> Você pode ajustar sabores conforme seu paladar — mais doce, mais cítrico ou mais herbal.</p>
                    </div>
                </div>
                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🎒 Como Preparar “Kits” Prontos para Uso Rápido</h3>
                    <p className="mt-2">Monte porções individuais para facilitar o preparo, especialmente em noites cansativas:</p>
                     <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li><strong>Chás secos:</strong> Misture as ervas em saquinhos ou potes pequenos com dosagem exata.</li>
                        <li><strong>Cubos congelados:</strong> Bata frutas com infusões e congele em formas de gelo — basta adicionar água ou leite vegetal.</li>
                        <li><strong>Pó funcional:</strong> Combine ingredientes secos como cacau, canela, camomila em pó e leite vegetal em pó para misturas instantâneas.</li>
                    </ul>
                    <p className="mt-2">Esses kits economizam tempo e mantêm o ritual prático e prazeroso.</p>
                </div>
                <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg">🌞 Mistura Energizante para Manhã & 🌙 Calmante para Noite</h3>
                    <p className="font-semibold mt-2">Manhã:</p>
                    <div className="mt-1 p-4 bg-muted/50 rounded-lg text-sm">
                        <p>Infusão de gengibre com hortelã + suco de limão + maçã verde batida.<br/>Serve para despertar com frescor e foco.</p>
                    </div>
                     <p className="font-semibold mt-2">Noite:</p>
                    <div className="mt-1 p-4 bg-muted/50 rounded-lg text-sm">
                        <p>Infusão de camomila + banana amassada + leite vegetal morno.<br/>Serve para desacelerar e induzir o sono.</p>
                    </div>
                    <p className="mt-2">Você pode alternar entre essas duas receitas conforme seu ritmo diário.</p>
                </div>
                <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg">🧊 Dicas para Armazenar e Manter Frescor</h3>
                     <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li><strong>Ervas secas:</strong> Guarde em potes herméticos, longe da luz e umidade.</li>
                        <li><strong>Frutas batidas:</strong> Congele em porções pequenas ou use dentro de 24h.</li>
                        <li><strong>Infusões prontas:</strong> Mantenha na geladeira por até 2 dias, em garrafas de vidro.</li>
                    </ul>
                     <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                       Evite recipientes plásticos para armazenar líquidos quentes ou ácidos — o vidro conserva melhor sabor e propriedades.
                    </blockquote>
                </div>
                <Separator />
                <div>
                    <h3 className="font-bold text-foreground text-lg">📅 Frequência Recomendada</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2 pl-2">
                        <li>Personalize conforme sua rotina e sensibilidade.</li>
                        <li>Respeite pausas: após 2 a 3 semanas de uso contínuo, faça uma pausa de alguns dias para evitar tolerância e manter eficácia.</li>
                    </ul>
                </div>
                 <Separator />
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground mb-4 text-lg">❓ Perguntas para Refletir e Responder</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="misturas-q1">Você prefere misturas prontas ou gosta de preparar na hora?</Label>
                          <Textarea id="misturas-q1" name="q1" value={misturasAnswers.q1} onChange={handleMisturasAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="misturas-q2">Qual horário do dia você sente mais necessidade de apoio — manhã ou noite?</Label>
                          <Textarea id="misturas-q2" name="q2" value={misturasAnswers.q2} onChange={handleMisturasAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="misturas-q3">Que sabores te trazem conforto imediato?</Label>
                          <Textarea id="misturas-q3" name="q3" value={misturasAnswers.q3} onChange={handleMisturasAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="misturas-q4">Já pensou em montar seus próprios kits de chá ou suco?</Label>
                          <Textarea id="misturas-q4" name="q4" value={misturasAnswers.q4} onChange={handleMisturasAnswerChange} placeholder="Sua resposta..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="misturas-q5">Que tipo de efeito você busca: relaxar, energizar, equilibrar ou desintoxicar?</Label>
                          <Textarea id="misturas-q5" name="q5" value={misturasAnswers.q5} onChange={handleMisturasAnswerChange} placeholder="Sua resposta..." />
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
                  <CardTitle className="font-headline text-3xl">🌙 Bebidas do Sono Profundo</CardTitle>
                  <CardDescription>Chás e sucos que relaxam seu corpo e mente para noites tranquilas.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 pt-4">
                  <Button size="lg" className="w-full" variant="outline" onClick={() => setView('cha-suave')}>
                    🍵 Chá do Apagão Suave
                  </Button>
                  <Button size="lg" className="w-full" variant="outline" onClick={() => setView('suco-serenidade')}>
                    🍹 Suco da Serenidade Noturna
                  </Button>
                   <Button size="lg" className="w-full" variant="outline" onClick={() => setView('misturas-secretas')}>
                    ☕ Misturas Secretas para Noites Perfeitas
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
