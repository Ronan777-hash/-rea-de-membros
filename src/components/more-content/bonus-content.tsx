
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
  const isPremium = user?.plan === 'premium';

  return (
    <div className="space-y-6">
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
                <Link href={isPremium ? `/modules/${module.slug}` : '#'}
                  onClick={(e) => {
                    if (!isPremium) {
                      e.preventDefault();
                      // Maybe show a toast or modal here in the future
                      document.getElementById('premium-upsell')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block relative group"
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0 relative">
                      <Image
                        src={module.image}
                        alt={module.title}
                        width={675}
                        height={1200}
                        className="w-full h-auto object-contain aspect-[675/1200]"
                        data-ai-hint={module.dataAiHint}
                      />
                       {!isPremium && (
                        <div className="absolute inset-0 bg-background/70 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                          <Lock className="h-12 w-12 text-primary" />
                        </div>
                      )}
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

      {/* If user is not logged in or is a basic user, show the upsell content */}
      {(!user || user.plan === 'basic') && (
        <div id="premium-upsell" className="text-center p-8 bg-accent/30 rounded-lg flex flex-col items-center">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold font-headline text-foreground">
            Libere Todo o Acesso Premium
            </h2>
            <p className="text-muted-foreground mt-2 mb-6 max-w-md">
            Tenha acesso a todos os módulos, aulas e materiais exclusivos para transformar suas noites.
            </p>
            <Button asChild size="lg" className="w-full max-w-xs">
            <a href="https://pay.kiwify.com.br/Soz2IZl" target="_blank" rel="noopener noreferrer">
                Tornar-se Premium Agora
            </a>
            </Button>
        </div>
      )}
    </div>
  );
}
