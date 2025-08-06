'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X } from 'lucide-react';
import { ChatWindow } from './chat-window';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-20 right-4 h-14 w-14 rounded-full shadow-lg z-50"
          size="icon"
          aria-label="Abrir chat com o Coach do Sono"
        >
          <MessageSquare className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="bottom" 
        className="h-[90vh] flex flex-col rounded-t-lg"
      >
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="text-center font-headline">Coach do Sono</SheetTitle>
           <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
          </SheetClose>
        </SheetHeader>
        <div className="flex-grow overflow-hidden">
         <ChatWindow />
        </div>
      </SheetContent>
    </Sheet>
  );
}
