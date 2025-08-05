
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function BackButton() {
  const router = useRouter();

  return (
    <Button variant="outline" size="icon" onClick={() => router.back()}>
      <ChevronLeft className="h-5 w-5" />
      <span className="sr-only">Voltar</span>
    </Button>
  );
}
