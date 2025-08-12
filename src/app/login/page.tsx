
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (plan: 'basic' | 'premium') => {
    // In a real app, you would validate email and password
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha o e-mail e a senha.",
        variant: "destructive",
      });
      return;
    }
    
    login(email, plan);
    toast({
      title: "Login realizado com sucesso!",
      description: `Você acessou como usuário ${plan === 'basic' ? 'Básico' : 'Premium'}.`,
    });
    router.push('/');
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Acesse sua Conta</CardTitle>
          <CardDescription>Use seu e-mail e senha para entrar.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <p className="text-xs text-muted-foreground text-center pt-2">
            Esta é uma simulação. Use qualquer e-mail/senha e clique no botão correspondente ao plano que deseja testar.
          </p>
          <div className="flex flex-col gap-2 pt-2">
             <Button onClick={() => handleLogin('basic')} className="w-full">
              Entrar como Usuário Básico
            </Button>
            <Button onClick={() => handleLogin('premium')} className="w-full">
              Entrar como Usuário Premium
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
