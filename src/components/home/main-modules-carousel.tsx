"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { mainModules } from "@/lib/data"

export function MainModulesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {mainModules.map((module) => (
          <CarouselItem key={module.title} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={675}
                    height={1200}
                    className="object-cover w-full h-full"
                    data-ai-hint={module.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white font-headline">
                    {module.title}
                  </h3>
                </CardContent>
                <CardFooter className="p-4 bg-card">
                  <Button className="w-full">Acessar</Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}
