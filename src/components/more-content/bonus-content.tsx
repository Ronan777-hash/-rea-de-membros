
"use client";

import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function BonusContent() {
  // In a real app, you would have logic here to check the user's plan.
  // const { userPlan } = useAuth();
  // const isPremium = userPlan === 'premium';
  
  const isPremium = false; // For demonstration, we assume the user is not premium.

  if (isPremium) {
    // This part would render the premium modules. We'll leave it as is for now.
    return (
       <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Bem-vindo, Membro Premium!</h2>
        <p className="text-muted-foreground">Aqui está seu conteúdo exclusivo.</p>
        {/* The premium content carousel would go here */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 md:p-8">
      <Card className="w-full max-w-lg bg-accent/30 border-dashed border-accent/80">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">
            Acesso Exclusivo para Membros Premium
          </CardTitle>
          <CardDescription className="pt-2 text-base">
            Para desbloquear este e outros módulos exclusivos, faça o upgrade do seu plano.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild size="lg" className="w-full font-bold text-lg py-6">
             {/* IMPORTANT: Replace this with your Kiwify Premium Checkout Link */}
            <a href="https://kiwify.com.br" target="_blank" rel="noopener noreferrer">
              Tornar-se Premium Agora
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
