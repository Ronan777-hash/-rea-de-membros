import { Button } from '@/components/ui/button';
import { MessageSquare, Instagram } from 'lucide-react';

export function SupportLink() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button asChild className="w-full sm:w-auto">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <MessageSquare className="mr-2 h-4 w-4" /> Falar no WhatsApp
        </a>
      </Button>
      <Button asChild variant="outline" className="w-full sm:w-auto">
        <a href="https://instagram.com/firebase" target="_blank" rel="noopener noreferrer">
          <Instagram className="mr-2 h-4 w-4" /> Seguir no Instagram
        </a>
      </Button>
    </div>
  );
}
