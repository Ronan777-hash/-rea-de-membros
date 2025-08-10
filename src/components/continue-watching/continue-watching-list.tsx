
"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContinueWatchingList() {
  return (
    <div className="flex flex-col items-center p-4 gap-6">
      <Link href="/supplement" className="w-full max-w-[675px] block cursor-pointer">
        <div className="w-full">
            <Image
              src="https://i.imgur.com/pEsaTYZ.png"
              alt="Suplemento para o sono"
              width={675}
              height={1200}
              className="w-full h-auto object-contain rounded-lg border-2 border-dashed border-muted-foreground"
              data-ai-hint="supplement product"
            />
        </div>
      </Link>

      <Button asChild className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-bold text-lg" size="lg">
        <Link href="/supplement">
          Saiba Mais
        </Link>
      </Button>
    </div>
  )
}
