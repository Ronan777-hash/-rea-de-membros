
"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { continueWatchingItems } from "@/lib/data"
import { Play } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

export function ContinueWatchingList() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {continueWatchingItems.map((item) => (
          <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Link href="#">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-0 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={675}
                      height={1200}
                      className="w-full h-auto object-contain aspect-[675/1200]"
                      data-ai-hint={item.dataAiHint}
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
