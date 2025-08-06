
import { Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NovoModuloPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 min-h-screen flex flex-col">
      <div className="absolute top-4 right-4 z-20">
        <Button asChild variant="ghost" size="icon">
          <Link href="/">
            <Home className="h-5 w-5" />
            <span className="sr-only">Tela Principal</span>
          </Link>
        </Button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Novo Módulo</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Conteúdo do novo módulo em breve.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
