
"use client";

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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

export function ContinueWatchingList() {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {continueWatchingItems.map((item) => (
          <CarouselItem key={item.title} className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <CardContent className="p-4 flex flex-col items-start gap-4 flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover w-24 h-24"
                    data-ai-hint={item.dataAiHint}
                  />
                  <div className="flex-1 w-full flex flex-col">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.module}</p>
                      <h3 className="font-semibold font-headline text-lg leading-tight mb-2">{item.title}</h3>
                      <div className="flex items-center gap-3 mb-4">
                        <Progress value={item.progress} className="w-full h-2" />
                        <span className="text-sm font-medium text-muted-foreground">{item.progress}%</span>
                      </div>
                    </div>
                    <Button className="w-full mt-auto">
                      <Play className="mr-2 h-4 w-4" />
                      Retomar agora
                    </Button>
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
  )
}
