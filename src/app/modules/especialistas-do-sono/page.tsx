
'use client';

import { useState } from 'react';
import { Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface VideoLinkProps {
  href: string;
  children: React.ReactNode;
}

const VideoLink: React.FC<VideoLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      {children}
    </a>
  </li>
);

export default function EspecialistasDoSonoPage() {
  const [view, setView] = useState('inicio');

  const renderContent = () => {
    switch (view) {
      default:
        return (
           <div className="p-4 md:p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl md:text-3xl">🧠✨ Módulo: Especialistas do Sono — Aulas Selecionadas</CardTitle>
                <CardDescription className="pt-2">Este módulo reúne uma seleção especial de vídeos com especialistas em sono, neurociência e saúde mental, para aprofundar seu conhecimento sobre como dormir melhor e cuidar do seu bem-estar.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">🎓 O que você vai aprender:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Como o sono funciona e por que ele é essencial para a saúde</li>
                    <li>Os impactos da insônia e da ansiedade no corpo e na mente</li>
                    <li>Estratégias práticas para melhorar o sono naturalmente</li>
                    <li>Técnicas de higiene do sono e criação de uma rotina noturna eficaz</li>
                    <li>A relação entre meditação, respiração e qualidade do sono</li>
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <h3 className="font-bold text-foreground text-lg mb-2">📺 Aulas e vídeos selecionados:</h3>
                  <p className="text-sm text-muted-foreground mb-3">Aperte nos nomes para ver os vídeos:</p>
                  <ul className="space-y-2">
                    <VideoLink href="https://youtu.be/k-FOWjgdLXU">Como dormir melhor com a neurociência – Dra. Andrea Bacelar</VideoLink>
                    <VideoLink href="https://youtu.be/8KbgOqnpXYQ">Insônia e ansiedade – Dr. Drauzio Varella</VideoLink>
                    <VideoLink href="https://youtu.be/eN6HD7Hha4o">O poder do sono profundo – Prof. Leandro Teles</VideoLink>
                    <VideoLink href="https://youtube.com/playlist?list=PLKi0yV3JJbpU6DSoUXomiqj9BeKlVztK7">Playlist com 5 vídeos de especialistas</VideoLink>
                    <VideoLink href="https://www.youtube.com/live/H1cahDY92I">Live: Como melhorar o sono naturalmente – com especialistas</VideoLink>
                    <VideoLink href="https://youtu.be/US04p4n4f9A">O impacto da luz azul no sono</VideoLink>
                    <VideoLink href="https://youtu.be/7c-OJ8LpuNg">Sono e saúde mental – entrevista com especialista</VideoLink>
                    <VideoLink href="https://youtu.be/9xwgc0ZZejU">Como criar uma rotina noturna eficaz</VideoLink>
                    <VideoLink href="https://youtu.be/3UK5IPcQFfY">Respiração e relaxamento para dormir melhor</VideoLink>
                    <VideoLink href="https://www.youtube.com/live/FfBAa5ue10g">Live: Sono e qualidade de vida</VideoLink>
                    <VideoLink href="https://youtu.be/OpBsbjxM1bs">Como o cérebro desacelera para dormir – neurociência aplicada</VideoLink>
                    <VideoLink href="https://youtu.be/ef7HlYbBNto">Dicas práticas para combater a insônia</VideoLink>
                  </ul>
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
