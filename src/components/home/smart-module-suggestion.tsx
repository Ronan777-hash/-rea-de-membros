'use client';

import { suggestModule, type SuggestModuleOutput } from '@/ai/flows/suggest-module';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

export function SmartModuleSuggestion() {
  const [suggestion, setSuggestion] = useState<SuggestModuleOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function getSuggestion() {
      try {
        setIsLoading(true);
        const result = await suggestModule({
          usagePatterns: 'User has been listening to short meditations before sleep and has completed the "Introduction to Mindfulness" module.',
          goals: 'Improve sleep quality and reduce anxiety.',
        });
        setSuggestion(result);
      } catch (e) {
        console.error(e);
        toast({
          title: "Erro na Sugestão",
          description: "Não foi possível carregar a sugestão de hoje. Por favor, tente novamente mais tarde.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false);
      }
    }
    getSuggestion();
  }, [toast]);

  if (isLoading) {
    return (
      <Card className="bg-accent/20 border-accent/30 shadow-md animate-pulse">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-headline text-primary">
            <Lightbulb />
            Em destaque hoje
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-28" />
        </CardFooter>
      </Card>
    );
  }

  if (!suggestion) {
    return null; // Don't show the component if there's an error or no suggestion
  }

  return (
    <Card className="bg-accent/20 border-accent/30 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-headline text-primary">
          <Lightbulb />
          Em destaque hoje
        </CardTitle>
        <CardDescription className="font-semibold text-lg !text-foreground pt-1">{suggestion.moduleName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{suggestion.reason}</p>
      </CardContent>
      <CardFooter>
        <Button>Acessar módulo</Button>
      </CardFooter>
    </Card>
  );
}
