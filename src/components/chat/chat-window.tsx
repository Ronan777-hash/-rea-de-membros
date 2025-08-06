'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { chatWithCoach } from '@/ai/flows/chat-flow';
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Olá! 👋 Sou seu Coach do Sono. Como posso te ajudar a ter uma noite mais tranquila hoje?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();


  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newUserMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    
    // Give a moment for the user message to render and scroll
    setTimeout(scrollToBottom, 100);

    try {
      const history = [...messages, newUserMessage].map(m => ({role: m.role, content: m.content}));
      const result = await chatWithCoach({ history });
      const newModelMessage: Message = { role: 'model', content: result.response };
      setMessages((prev) => [...prev, newModelMessage]);
    } catch (error) {
      console.error("Error chatting with coach:", error);
      toast({
        title: "Erro na Conversa",
        description: "Não foi possível se conectar com o coach. Por favor, tente novamente.",
        variant: "destructive",
      });
      // remove the user message if the call fails
       setMessages(messages);
    } finally {
      setIsLoading(false);
       // Give a moment for the model message to render and scroll
      setTimeout(scrollToBottom, 100);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'model' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <Bot />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-xs md:max-w-md lg:max-w-lg rounded-xl p-3 text-sm',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                )}
              >
                {message.content}
              </div>
              {message.role === 'user' && (
                 <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
             <div className='flex items-start gap-3 justify-start'>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <Bot />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-xl p-3 text-sm">
                  <span className="animate-pulse">Digitando...</span>
                </div>
              </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex-shrink-0 p-4 border-t bg-background">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Converse com seu coach..."
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send />
            <span className="sr-only">Enviar</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
