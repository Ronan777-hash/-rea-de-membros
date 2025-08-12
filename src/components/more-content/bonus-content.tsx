
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { bonusContent } from '@/lib/data';
import { useAuth } from '@/context/auth-context';
import { Button } from '../ui/button';
import { Lock } from 'lucide-react';

export function BonusContent() {
  const { user } = useAuth();

  // If user is not logged in or is a basic user, show the upsell content
  if (!user || user.plan === 'basic') {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-accent/30 rounded-lg">
        <Lock className="h-16 w-16 text-primary mb-4" />
        <h2 className="text-2xl font-bold font-headline text-foreground">
          Acesso Exclusivo para Membros Premium
        </h2>
        <p className="text-muted-foreground mt-2 mb-6 max-w-md">
          Para desbloquear este e outros módulos exclusivos, faça o upgrade do seu plano.
        </p>
        <Button asChild size="lg">
          <a href="https://pay.kiwify.com.br/0qvDuIH" target="_blank" rel="noopener noreferrer">
            Tornar-se Premium Agora
          </a>
        </Button>
      </div>
    );
  }

  // If the user is premium, show the content
  return (
    <Carousel
      opts={{
        align: 'start',
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
  );
}
