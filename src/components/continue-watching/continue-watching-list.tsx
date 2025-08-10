
"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ContinueWatchingList() {
  return (
    <div className="flex flex-col items-center p-4 gap-6">
      <div className="w-full max-w-[675px]">
          <Image
            src="https://i.imgur.com/pEsaTYZ.png"
            alt="Suplemento para o sono"
            width={675}
            height={1200}
            className="w-full h-auto object-contain rounded-lg border-2 border-dashed border-muted-foreground"
            data-ai-hint="supplement product"
          />
      </div>

      <div className="max-w-2xl text-left space-y-4 text-muted-foreground">
        <p className="font-semibold">Lembre-se: Este suplemento é apenas um complemento.</p>
        <p>Se você não quiser comprar, fique totalmente despreocupado — apenas seguindo os módulos da área de membros você já terá 100% das ferramentas para dormir melhor.</p>
        <p>Mas… se você quer acelerar ainda mais esse processo e sentir resultados imediatos, eu quero te apresentar algo que analisamos, testamos e realmente aprovamos.</p>
        <p>Trata-se de um suplemento natural, seguro, aprovado pela ANVISA, produzido por uma marca confiável e com milhares de clientes satisfeitos. Sua fórmula combina melatonina, triptofano, magnésio e vitamina B6 para ajudar seu corpo e mente a relaxarem profundamente.</p>
        <p>Após a ingestão, em poucos minutos, você já começa a sentir aquela sensação de sono gostoso chegando — e isso ajuda a pegar no sono mais rápido, além de melhorar a qualidade do descanso durante a noite.</p>
        <p className="font-bold text-foreground">O melhor de tudo? É 100% natural, não causa dependência e pode ser um grande aliado para noites tranquilas.</p>
      </div>

      <Button asChild className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold text-lg" size="lg">
        <a href="https://ev.braip.com/ref?pv=pro4zjrm&af=afizj44j7x" target="_blank" rel="noopener noreferrer">
          Quero Dormir Melhor Agora!
        </a>
      </Button>

      <div className="max-w-2xl text-left space-y-2 text-sm text-muted-foreground">
          <p className="font-bold text-foreground">Observação importante:</p>
          <p>⚠️ Este suplemento não substitui orientação médica. Consulte seu médico antes de iniciar o uso.</p>
      </div>
    </div>
  )
}
