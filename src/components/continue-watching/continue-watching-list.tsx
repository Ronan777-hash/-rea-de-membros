
"use client";

import Image from "next/image"

export function ContinueWatchingList() {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-[675px]">
          <Image
            src="https://placehold.co/675x1200.png"
            alt="Moldura vazia"
            width={675}
            height={1200}
            className="w-full h-auto object-contain rounded-lg border-2 border-dashed border-muted-foreground"
            data-ai-hint="placeholder"
          />
      </div>
    </div>
  )
}
