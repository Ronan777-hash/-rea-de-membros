import { MainModulesCarousel } from '@/components/home/main-modules-carousel';
import { SmartModuleSuggestion } from '@/components/home/smart-module-suggestion';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-6 space-y-8">
      <header className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Principal
        </h1>
        <p className="text-muted-foreground mt-1">
          Seu santuário para um sono melhor.
        </p>
      </header>

      <section>
        <SmartModuleSuggestion />
      </section>
      
      <section>
        <h2 className="text-2xl font-bold font-headline mb-4 text-center md:text-left">Módulos Principais</h2>
        <MainModulesCarousel />
      </section>
    </div>
  );
}
