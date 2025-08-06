"use client";

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { bonusContent } from "@/lib/data"

export function BonusContent() {
  return (
    <div className="space-y-8">
      <section>
        <Link href="/modules/especialistas-do-sono">
          <Button size="lg" className="w-full text-base h-auto py-3">
            <span className="mr-2 text-lg">🧠✨</span>
            Módulo: Especialistas do Sono — Aulas Selecionadas
          </Button>
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold font-headline mb-4">Vídeos Escolhidos a Dedo</h2>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {bonusContent.videos.map((video) => (
              <CarouselItem key={video.title} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Image
                        src={video.image}
                        alt={video.title}
                        width={400}
                        height={225}
                        className="w-full aspect-video object-cover"
                        data-ai-hint={video.dataAiHint}
                      />
                       <div className="p-4">
                         <h3 className="font-semibold font-headline leading-snug">{video.title}</h3>
                       </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>

      <section>
        <h2 className="text-2xl font-bold font-headline mb-4">Áudios Relaxantes</h2>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {bonusContent.audios.map((audio) => (
              <CarouselItem key={audio.title} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                   <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Image
                        src={audio.image}
                        alt={audio.title}
                        width={400}
                        height={225}
                        className="w-full aspect-video object-cover"
                        data-ai-hint={audio.dataAiHint}
                      />
                       <div className="p-4">
                         <h3 className="font-semibold font-headline leading-snug">{audio.title}</h3>
                       </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>
    </div>
  )
}
