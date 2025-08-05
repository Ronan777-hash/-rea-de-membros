import { ContinueWatchingList } from '@/components/continue-watching/continue-watching-list';

export default function ContinueWatchingPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 space-y-8">
      <header className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Continuar Assistindo
        </h1>
        <p className="text-muted-foreground mt-1">
          Volte de onde você parou.
        </p>
      </header>
      <ContinueWatchingList />
    </div>
  );
}
