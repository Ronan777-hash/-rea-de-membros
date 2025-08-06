
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Home } from 'lucide-react';

export default function Desafio7DiasPage() {
  const [introVisible, setIntroVisible] = useState(false);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center">
            {!introVisible && (
              <div className="text-center p-8 flex flex-col items-center justify-center w-full">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                        Segredo Holandês: Reprograme seu Sono
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Desafio de 7 Dias para uma vida com mais energia.
                    </p>
                </header>
                <Button size="lg" onClick={() => setIntroVisible(true)}>
                  <BookOpen className="mr-2 h-5 w-5" />
                  Introdução
                </Button>
              </div>
            )}

            {introVisible && (
                <div className="w-full space-y-8 py-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">✨ Introdução – Bem-vindo ao Desafio do Sono</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        Não é só sobre dormir melhor. É sobre acordar para uma nova versão de você.
                      </p>
                      <p>
                        Você já parou para pensar que o sono é uma das atividades mais importantes da sua vida… e talvez a mais negligenciada?
                      </p>
                      <p>
                        Dormir não é desligar — é recarregar, restaurar, renascer.
                      </p>
                      <p>
                        Neste desafio, você não vai seguir regras rígidas, nem buscar perfeição. Vai aprender a cuidar do seu sono com consciência, carinho e consistência. Cada dia traz um passo prático, uma reflexão e uma oportunidade de se reconectar com seu corpo e sua mente.
                      </p>
                      <p className="font-semibold text-foreground">
                        🌙 Este não é um curso sobre técnicas. É um ritual diário de autocuidado. Um reencontro com a paz que mora no silêncio da noite.
                      </p>
                      <p>
                        Durante 7 dias, você vai reprogramar hábitos, criar rituais, transformar seu ambiente e entender como pequenas escolhas podem gerar grandes mudanças — no sono e na vida.
                        Você vai aprender com populações que têm os melhores padrões de descanso do mundo, mas vai adaptar tudo à sua realidade, no seu ritmo.
                      </p>
                      <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                        <h3 className="font-bold text-foreground mb-2">🎯 O objetivo?</h3>
                        <p>
                          Que seu sono deixe de ser um problema… e se torne um aliado.
                          Porque quem dorme bem, vive melhor.
                          E quem vive melhor, se transforma.
                        </p>
                      </div>
                      <p>
                        Prepare seu Diário do Sono, escolha começar com leveza… e lembre-se:
                      </p>
                      <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                        Você não precisa dormir perfeitamente hoje. Só precisa começar a cuidar do seu amanhã, ainda hoje.
                      </blockquote>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center">
                      <Button asChild>
                          <Link href="/">
                              <Home className="mr-2 h-4 w-4" />
                              Voltar à tela principal
                          </Link>
                      </Button>
                  </div>
                </div>
            )}
        </div>
    </div>
  );
}
