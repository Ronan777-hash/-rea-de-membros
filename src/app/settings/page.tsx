import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeSwitcher } from '@/components/settings/theme-switcher';
import { SupportLink } from '@/components/settings/support-link';

export default function SettingsPage() {
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
      </div>
    </div>
  );
}
