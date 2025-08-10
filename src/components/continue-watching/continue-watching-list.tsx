
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

      <Button className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold text-lg" size="lg">
        Saiba Mais
      </Button>
    </div>
  )
}
