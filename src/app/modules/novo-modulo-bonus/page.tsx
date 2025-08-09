
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ArrowLeft } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

type ViewState = 'inicio' | 'cha-suave';

export default function NovoModuloBonusPage() {
  const [view, setView] = useState<ViewState>('inicio');
  const [chaAnswers, setChaAnswers] = useState({
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
                  <Button size="lg" className="w-full" variant="outline">
                    🍹 Suco da Serenidade Noturna
                  </Button>
                  <Button size="lg" className="w-full" variant="outline">
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
