
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
                        width={675}
                        height={1200}
                        className="w-full h-auto object-contain"
                        data-ai-hint={video.dataAiHint}
                      />
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
