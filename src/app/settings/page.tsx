
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeSwitcher } from '@/components/settings/theme-switcher';
import { SupportLink } from '@/components/settings/support-link';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast({
      title: 'Você saiu da sua conta.',
    });
    router.push('/login');
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 space-y-8">
      <header className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Ajustes</h1>
        <p className="text-muted-foreground mt-1">Personalize sua experiência.</p>
      </header>

      <div className="space-y-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="font-headline">Tema da Interface</CardTitle>
            <CardDescription>Escolha sua aparência preferida para o app.</CardDescription>
          </CardHeader>
          <CardContent>
            <ThemeSwitcher />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="font-headline">Suporte</CardTitle>
            <CardDescription>Precisa de ajuda? Fale com nossa equipe.</CardDescription>
          </CardHeader>
          <CardContent>
            <SupportLink />
          </CardContent>
        </Card>

        {user && (
           <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="font-headline">Sua Conta</CardTitle>
              <CardDescription>
                Você está logado como <span className="font-bold text-primary">{user.email}</span> com o plano <span className="font-bold text-primary">{user.plan === 'basic' ? 'Básico' : 'Premium'}</span>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive" onClick={handleLogout}>
                Sair da Conta
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
