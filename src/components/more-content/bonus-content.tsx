
"use client";

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
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
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent>
        {bonusContent.videos.map((module) => (
          <CarouselItem key={module.title} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Link href={`/modules/${module.slug}`}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-0 relative">
                    <Image
                      src={module.image}
                      alt={module.title}
                      width={675}
                      height={1200}
                      className="w-full h-auto object-contain aspect-[675/1200]"
                      data-ai-hint={module.dataAiHint}
                    />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}
