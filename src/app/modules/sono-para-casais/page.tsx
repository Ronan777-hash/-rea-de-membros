
'use client';

import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type ViewState = 'inicio' | 'abertura' | 'entendendo' | 'ritual' | 'ambiente' | 'toque' | 'conchinha';

export default function SonoParaCasaisPage() {
  const [view, setView] = useState<ViewState>('inicio');

  const renderContent = () => {
    switch (view) {
      case 'abertura':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">✨ Módulo 1: Dormir Juntos é uma Arte</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Despertar a consciência de que o sono compartilhado é mais do que uma rotina — é uma prática de intimidade, respeito e conexão. Vamos explorar os desafios e as possibilidades que surgem quando dois corpos e duas mentes dividem o mesmo espaço para descansar.</p>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">💬 Introdução</h3>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                        “Dormir juntos é mais do que dividir um colchão. É dividir vulnerabilidades, silêncios e sonhos.”
                    </blockquote>
                    <p className="mt-4">Dormir a dois pode ser uma das experiências mais íntimas e reveladoras de um relacionamento. É quando as máscaras caem, o corpo relaxa e a mente se entrega. Mas também é quando surgem os atritos: o ronco, o calor, o desconforto, os hábitos diferentes.<br/>Esse módulo é um convite para olhar para o sono como uma arte — uma dança entre dois ritmos que podem aprender a se harmonizar.</p>
                </div>
                
                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🔍 Por que dormir a dois é um desafio?</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><span className="font-semibold">Diferenças de hábitos:</span> um gosta de dormir cedo, o outro é notívago. Um precisa de silêncio absoluto, o outro dorme com música.</li>
                        <li><span className="font-semibold">Ritmos biológicos distintos:</span> os ciclos de sono podem variar entre os parceiros, gerando desencontro de horários e energia.</li>
                        <li><span className="font-semibold">Necessidades emocionais e físicas:</span> alguns precisam de contato físico para se sentir seguros, outros valorizam o espaço pessoal.</li>
                        <li><span className="font-semibold">Sensibilidade ao ambiente:</span> luz, temperatura, colchão, travesseiro — tudo pode ser motivo de desconforto se não for ajustado em conjunto.</li>
                    </ul>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">💞 Como o sono afeta o relacionamento (e vice-versa)</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><span className="font-semibold">Privação de sono = irritabilidade:</span> noites mal dormidas geram impaciência, discussões e afastamento emocional.</li>
                        <li><span className="font-semibold">Sono de qualidade = mais afeto:</span> dormir bem juntos fortalece o vínculo, melhora o humor e aumenta a disposição para lidar com os desafios do dia.</li>
                        <li><span className="font-semibold">Presença física como segurança emocional:</span> saber que o outro está ali, mesmo em silêncio, pode ser profundamente reconfortante.</li>
                    </ul>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🧠 O impacto da presença física e emocional na hora de dormir</h3>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><span className="font-semibold">O corpo percebe o outro:</span> batimentos cardíacos, respiração, calor — tudo influencia no relaxamento.</li>
                        <li><span className="font-semibold">A mente se conecta:</span> dormir ao lado de quem se ama pode reduzir a sensação de solidão e ansiedade.</li>
                        <li><span className="font-semibold">O sono vira ritual:</span> quando o casal transforma o momento de dormir em um ritual de cuidado mútuo, a relação se fortalece.</li>
                    </ul>
                </div>

                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">📝 Exercício Inicial: “O que o sono significa para nós como casal?”</h3>
                    <p className="font-semibold text-foreground">Instruções:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>Cada um escreve, em silêncio, o que o sono representa para si — descanso, fuga, conexão, paz, etc.</li>
                        <li>Depois, compartilhem com o parceiro.</li>
                        <li>Conversem sobre como podem tornar esse momento mais significativo juntos.</li>
                    </ol>
                    <p className="mt-4 italic">Esse exercício abre espaço para vulnerabilidade, escuta e alinhamento. É o primeiro passo para transformar o sono em um ato de amor.</p>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>Dormir juntos é uma arte — e como toda arte, exige prática, sensibilidade e intenção. Ao reconhecer os desafios e abraçar as oportunidades, o casal começa a construir um espaço de descanso que também é um espaço de afeto.</p>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'entendendo':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🧠 Módulo 2: Entendendo o Sono do Corpo e da Mente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Oferecer uma base clara e prática sobre como o sono funciona biologicamente e emocionalmente — e como essas dinâmicas se manifestam de forma diferente em cada pessoa. Entender isso é essencial para que o casal possa respeitar seus ritmos e criar estratégias juntos.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌙 Ciclos do Sono: O que acontece enquanto dormimos?</h3>
                  <p>O sono não é um estado único — ele é composto por ciclos que se repetem ao longo da noite. Cada ciclo dura cerca de 90 minutos e passa por fases:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Sono leve (estágio 1 e 2): transição entre vigília e sono.</li>
                    <li>Sono profundo (estágio 3): recuperação física, liberação de hormônios, descanso muscular.</li>
                    <li>Sono REM (movimento rápido dos olhos): fase dos sonhos, consolidação da memória, equilíbrio emocional.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Um sono de qualidade depende da repetição saudável desses ciclos. Interrupções constantes (como acordar várias vezes) quebram esse fluxo e afetam o bem-estar.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">👥 Diferença entre Sono Masculino e Feminino</h3>
                  <p>Embora cada pessoa seja única, estudos mostram algumas tendências:</p>
                  <p className='font-semibold mt-2'>Mulheres:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Tendem a ter mais sono profundo, mas também mais despertares noturnos.</li>
                    <li>São mais afetadas por variações hormonais (TPM, menopausa, gravidez).</li>
                    <li>Costumam ser mais sensíveis ao ambiente (luz, ruído, temperatura).</li>
                  </ul>
                  <p className='font-semibold mt-2'>Homens:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Têm maior propensão ao ronco e à apneia do sono.</li>
                    <li>Costumam ter sono mais contínuo, mas menos profundo em algumas fases.</li>
                    <li>Podem demorar mais para perceber os efeitos da privação de sono.</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Essas diferenças não são regras, mas ajudam o casal a entender que o sono não é igual para todos — e que respeitar essas variações é um gesto de cuidado.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">😵‍💫 Emoções e Estresse: Os Sabotadores do Sono</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><span className="font-semibold">Ansiedade:</span> acelera a mente, dificulta o relaxamento e atrasa o início do sono.</li>
                    <li><span className="font-semibold">Preocupações:</span> ativam o sistema de alerta, impedindo que o corpo entre em modo descanso.</li>
                    <li><span className="font-semibold">Discussões antes de dormir:</span> aumentam o cortisol (hormônio do estresse) e dificultam o desligamento emocional.</li>
                    <li><span className="font-semibold">Falta de rotina:</span> dormir em horários irregulares confunde o relógio biológico.</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                     O corpo precisa de previsibilidade para dormir bem. E a mente precisa de segurança.
                  </blockquote>
                </div>

                <Separator />
                
                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">🔍 Pergunta Interativa: “Quais são nossos gatilhos de insônia?”</h3>
                    <p className="font-semibold text-foreground">Instruções:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>Cada um identifica 2 ou 3 situações que costumam atrapalhar o sono (ex: celular antes de dormir, preocupação com trabalho, discussões noturnas).</li>
                        <li>Compartilhem com o parceiro.</li>
                        <li>Conversem sobre como podem ajudar um ao outro a evitar esses gatilhos.</li>
                    </ol>
                    <p className="mt-4 italic">Esse exercício fortalece a empatia e cria um pacto de cuidado mútuo.</p>
                </div>

                <Separator />

                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>Dormir bem começa com entender como o corpo e a mente funcionam. Quando o casal aprende a reconhecer seus ritmos, gatilhos e necessidades, o sono deixa de ser um problema e passa a ser uma prática de parceria.</p>
                </div>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'ritual':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🧴 Módulo 3: Ritual Noturno do Casal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Criar uma rotina noturna que prepare corpo e mente para o sono — e que fortaleça o vínculo entre o casal. O ritual não precisa ser longo nem complexo: o segredo está na constância e na intenção.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🕰️ Passo a Passo: Sinalizando ao Corpo que É Hora de Dormir</h3>
                  <p>O corpo adora previsibilidade. Quando repetimos certos comportamentos antes de dormir, ele entende que está na hora de desacelerar. Aqui vai um modelo de ritual noturno para o casal adaptar:</p>
                  <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>Desconectar-se das telas (30 min antes): luz azul atrasa a produção de melatonina.</li>
                    <li>Higiene pessoal com calma: escovar os dentes, lavar o rosto, aplicar cremes — tudo com presença.</li>
                    <li>Luz baixa e ambiente tranquilo: abajur, velas ou luz quente ajudam a sinalizar o fim do dia.</li>
                    <li>Trocar palavras gentis: um “boa noite” com carinho já muda o clima emocional.</li>
                    <li>Deitar com intenção de descanso, não de fuga: evite usar o sono como escape de conflitos.</li>
                  </ol>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Ritual é repetição com afeto. Quando feito a dois, vira um código de cuidado mútuo.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌿 Atividades Leves que Aumentam o Relaxamento a Dois</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Respiração sincronizada: sentem-se juntos e respirem lentamente por 3 minutos.</li>
                    <li>Alongamento suave: movimentos simples para soltar a tensão do dia.</li>
                    <li>Leitura compartilhada: um trecho de um livro, uma reflexão ou até uma oração.</li>
                    <li>Massagem leve nas mãos ou nos pés: toque afetuoso que acalma.</li>
                    <li>Gratidão do dia: cada um compartilha 1 coisa boa que aconteceu.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Essas práticas não só ajudam a dormir melhor, como fortalecem a intimidade emocional.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🚫 O Que Evitar Antes de Deitar (E Por Quê)</h3>
                  <table className="w-full mt-2 text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 font-semibold text-foreground">Evitar</th>
                        <th className="p-2 font-semibold text-foreground">Por quê</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Discussões intensas</td>
                        <td className="p-2">Aumentam o cortisol e dificultam o relaxamento.</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Celular, TV, computador</td>
                        <td className="p-2">A luz azul bloqueia a melatonina, hormônio do sono.</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Cafeína ou álcool</td>
                        <td className="p-2">Interferem na qualidade do sono profundo.</td>
                      </tr>
                      <tr>
                        <td className="p-2">Atividades estimulantes</td>
                        <td className="p-2">Exercícios intensos ou trabalho mental aceleram o corpo.</td>
                      </tr>
                    </tbody>
                  </table>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O ideal é transformar a noite em um momento de desaceleração, não de agitação.
                  </blockquote>
                </div>

                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">✅ Checklist Noturno Interativo para o Casal</h3>
                    <p>Antes de dormir, façam juntos este checklist. Pode ser divertido, leve e até virar um jogo:</p>
                    <div className="font-mono text-sm bg-background p-3 rounded-md mt-2">
                      <p className="font-bold mb-2">🛏️ Checklist do Ritual Noturno</p>
                      <p>[ ] Desconectamos das telas?</p>
                      <p>[ ] Fizemos nossa higiene com calma?</p>
                      <p>[ ] Criamos um ambiente tranquilo?</p>
                      <p>[ ] Compartilhamos algo bom do dia?</p>
                      <p>[ ] Fizemos uma atividade relaxante juntos?</p>
                      <p>[ ] Evitamos discussões ou assuntos pesados?</p>
                      <p>[ ] Desejamos boa noite com carinho?</p>
                    </div>
                     <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                       Dica: imprimam esse checklist ou deixem visível no quarto. A constância transforma o ritual em hábito — e o hábito em bem-estar.
                    </blockquote>
                </div>

                <Separator />
                
                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>O ritual noturno é mais do que uma rotina: é um convite para o casal desacelerar junto, cuidar um do outro e preparar o terreno para um sono restaurador. Quando feito com intenção, ele vira um dos momentos mais especiais do dia.</p>
                </div>

              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'ambiente':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🥱 Módulo 4: Barulhos, Luzes e Clima do Quarto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Ajudar o casal a transformar o quarto em um ambiente que favoreça o sono profundo, respeitando as preferências de cada um. O espaço onde dormimos influencia diretamente na qualidade do descanso — e pequenos ajustes podem fazer uma grande diferença.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🛏️ Como Preparar o Quarto para um Sono Profundo</h3>
                  <p>Um quarto ideal para dormir é como um abraço: acolhedor, silencioso e escuro. Aqui vão os elementos essenciais:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Temperatura agradável: entre 18°C e 22°C costuma ser ideal para o corpo relaxar.</li>
                    <li>Iluminação suave ou ausente: quanto menos luz, mais melatonina o corpo produz.</li>
                    <li>Silêncio ou sons suaves: o cérebro continua “ouvindo” mesmo dormindo.</li>
                    <li>Cama confortável: colchão e travesseiros adequados ao corpo de cada um.</li>
                    <li>Ambiente limpo e organizado: bagunça visual gera agitação mental.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O quarto deve sinalizar: “aqui é seguro descansar”.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🌡️ Soluções para Diferenças de Preferência</h3>
                  <p>Nem sempre o casal gosta das mesmas condições. Um prefere frio, outro calor? Aqui vão soluções práticas:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Cobertores separados: cada um escolhe o tipo e espessura que prefere.</li>
                    <li>Ventilador direcionado: pode refrescar um sem incomodar o outro.</li>
                    <li>Pijamas personalizados: quem sente mais frio pode usar tecidos mais quentes.</li>
                    <li>Climatizador com controle remoto: permite ajustes sem sair da cama.</li>
                    <li>Negociação com afeto: o importante é conversar e buscar equilíbrio, não vencer a disputa.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O conforto do casal começa com respeito mútuo às diferenças.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🔕 Truques Simples para Reduzir Ruídos e Luzes</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Cortinas blackout: bloqueiam luz externa e ajudam a manter o quarto escuro.</li>
                    <li>Protetores auriculares ou white noise: abafam sons indesejados.</li>
                    <li>Fita adesiva em LEDs de eletrônicos: elimina luzes irritantes.</li>
                    <li>Tapetes e cortinas: ajudam a absorver sons e reduzir eco.</li>
                    <li>Evitar aparelhos barulhentos: como ventiladores antigos ou relógios tic-tac.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O cérebro interpreta luz e som como sinais de alerta. Reduzir esses estímulos é essencial para o sono profundo.
                  </blockquote>
                </div>

                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">🧐 Pergunta Interativa: “Como avaliamos nosso quarto hoje?”</h3>
                    <p className="font-semibold text-foreground">Instruções:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>Cada um dá uma nota de 0 a 10 para o quarto em relação a:
                          <ul className="list-disc list-inside pl-6">
                            <li>Silêncio</li>
                            <li>Escuridão</li>
                            <li>Temperatura</li>
                            <li>Conforto da cama</li>
                            <li>Organização</li>
                          </ul>
                        </li>
                        <li>Compartilhem as notas e conversem sobre o que pode melhorar.</li>
                        <li>Escolham juntos 1 ou 2 ajustes para fazer esta semana.</li>
                    </ol>
                    <p className="mt-4 italic">Esse exercício transforma o quarto em um projeto de bem-estar compartilhado.</p>
                </div>

                <Separator />
                
                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>O quarto é o palco do descanso. Quando o casal cuida desse espaço com atenção e carinho, o sono deixa de ser um desafio e vira um prazer. Pequenas mudanças no ambiente podem gerar grandes mudanças na qualidade de vida.</p>
                </div>

              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'toque':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">🫂 Módulo 5: O Poder do Toque Antes de Dormir</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Explorar como o toque físico pode ser uma ferramenta poderosa para relaxar, criar segurança emocional e melhorar a qualidade do sono — sem exigir grandes gestos, apenas presença e intenção.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">💞 Por que o Toque Físico Antes de Dormir Melhora o Sono?</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Ativa o sistema parassimpático: responsável por desacelerar o corpo e induzir o relaxamento.</li>
                    <li>Libera ocitocina: o “hormônio do vínculo”, que reduz o estresse e aumenta a sensação de bem-estar.</li>
                    <li>Cria segurança emocional: o corpo entende que está protegido, o que facilita o desligamento mental.</li>
                    <li>Fortalece a intimidade: mesmo em silêncio, o toque comunica afeto, cuidado e presença.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O toque é uma linguagem silenciosa que diz: “Você pode descansar. Eu estou aqui.”
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🤲 Pequenos Gestos que Aumentam a Sensação de Segurança e Conforto</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Segurar as mãos por alguns minutos</li>
                    <li>Encostar os pés sob o cobertor</li>
                    <li>Apoiar a cabeça no ombro ou no peito</li>
                    <li>Fazer carinho leve nas costas ou no cabelo</li>
                    <li>Encostar as testas ou respirar juntos em silêncio</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Não é sobre intensidade, é sobre intenção. O toque certo, na hora certa, acalma mais que mil palavras.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">⚖️ Como Equilibrar Contato Físico e Espaço Pessoal</h3>
                  <p>Nem todo mundo gosta de dormir abraçado — e isso é totalmente normal. O segredo está em respeitar os limites e encontrar um meio-termo:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Conchinha para dormir, espaço para descansar: alguns casais começam abraçados e depois se afastam naturalmente.</li>
                    <li>Toque breve antes de dormir: um carinho ou abraço antes de virar para o lado já cria conexão.</li>
                    <li>Comunicação aberta: perguntar “você quer carinho agora?” pode evitar desconfortos e criar segurança.</li>
                    <li>Rotina flexível: o toque pode variar conforme o dia, o humor e a necessidade de cada um.</li>
                  </ul>
                   <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O respeito ao espaço do outro também é uma forma de afeto.
                  </blockquote>
                </div>
                
                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">🧘‍♂️ Exercício Prático: “3 Minutos de Toque Consciente”</h3>
                    <p className="font-semibold text-foreground">Instruções:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                      <li>Sente-se ou deite-se ao lado do parceiro, em silêncio.</li>
                      <li>Escolha um tipo de toque leve (mãos, costas, rosto, cabelo).</li>
                      <li>Durante 3 minutos, mantenha o foco total no toque — sem falar, sem pensar em outra coisa.</li>
                      <li>Respirem juntos e observem como o corpo responde.</li>
                      <li>Ao final, compartilhem como se sentiram.</li>
                    </ol>
                    <p className="mt-4 italic">Esse exercício ajuda a desacelerar, criar presença e transformar o toque em um ritual de cuidado mútuo.</p>
                </div>

                <Separator />
                
                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>O toque é uma ponte entre o corpo e a emoção. Quando o casal aprende a usar esse gesto com intenção e respeito, o sono se torna mais profundo, mais leve — e a relação, mais conectada.</p>
                </div>

              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'conchinha':
        return (
          <div className="w-full space-y-8 py-8 animate-in fade-in-50 duration-300">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">💑 Módulo 6: Dormir de Conchinha ou Separado?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-bold text-foreground text-lg">🎯 Objetivo do Módulo</h3>
                  <p>Ajudar o casal a entender suas preferências na hora de dormir, respeitar os limites de conforto e encontrar uma “posição oficial” que funcione para ambos — com leveza, carinho e bom humor.</p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">⚖️ Vantagens e Desvantagens de Dormir Juntos na Mesma Posição</h3>
                  <table className="w-full mt-2 text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 font-semibold text-foreground">Posição</th>
                        <th className="p-2 font-semibold text-foreground">Vantagens</th>
                        <th className="p-2 font-semibold text-foreground">Desvantagens</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 align-top">Conchinha</td>
                        <td className="p-2 align-top">Cria intimidade, sensação de proteção, aquece o corpo</td>
                        <td className="p-2 align-top">Pode gerar calor excessivo, desconforto em quem se mexe muito</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 align-top">De frente, abraçados</td>
                        <td className="p-2 align-top">Estimula conexão emocional, facilita conversa antes de dormir</td>
                        <td className="p-2 align-top">Pode atrapalhar a respiração ou causar tensão no pescoço</td>
                      </tr>
                       <tr className="border-b">
                        <td className="p-2 align-top">Separados, mas encostando (pés, costas)</td>
                        <td className="p-2 align-top">Equilibra espaço pessoal com toque</td>
                        <td className="p-2 align-top">Menos contato direto, pode parecer “distante” para alguns</td>
                      </tr>
                      <tr>
                        <td className="p-2 align-top">Totalmente separados</td>
                        <td className="p-2 align-top">Mais liberdade de movimento, ideal para quem tem sono leve</td>
                        <td className="p-2 align-top">Pode gerar sensação de desconexão se não houver toque antes</td>
                      </tr>
                    </tbody>
                  </table>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Não existe posição certa — existe o que funciona para vocês dois.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">🛏️ Como Encontrar a Posição Ideal para Ambos</h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Testem diferentes posições por alguns dias e observem como cada um dorme melhor.</li>
                    <li>Conversem sobre o que incomoda: calor, falta de espaço, dor no corpo, etc.</li>
                    <li>Criem uma rotina de toque antes de dormir, mesmo que durmam separados depois.</li>
                    <li>Usem travesseiros estratégicos para apoiar braços, pernas ou criar espaço.</li>
                    <li>Respeitem os momentos individuais: às vezes, dormir separado é só uma fase.</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    Dormir bem é um ato de cuidado — com o outro e consigo mesmo.
                  </blockquote>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold text-foreground text-lg">😴 E se um dos dois se mexe demais ou ronca?</h3>
                  <p className="font-semibold mt-1">Mexer demais:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use colchões que absorvem movimento (caso possível).</li>
                    <li>Dormir separados por um tempo pode ajudar a preservar o sono.</li>
                    <li>Criem um “ritual de toque” antes de dormir para manter a conexão.</li>
                  </ul>
                  <p className="font-semibold mt-2">Ronco:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Avaliem causas médicas (apneia, respiração nasal).</li>
                    <li>Use tampões de ouvido ou ruído branco.</li>
                    <li>Brinquem com leveza: “Você ronca como um urso fofo, mas ainda te amo.”</li>
                  </ul>
                  <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    O importante é transformar o incômodo em conversa — e não em conflito.
                  </blockquote>
                </div>
                
                <Separator />

                <div className="p-4 bg-accent/50 rounded-lg border border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">💬 Pergunta Interativa: Qual será nossa “posição oficial” para dormir?</h3>
                    <p className="font-semibold text-foreground">Proposta:</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                      <li>Experimentem 3 posições diferentes durante a semana.</li>
                      <li>Avaliem juntos: conforto, conexão, qualidade do sono.</li>
                      <li>Escolham uma “posição oficial” — e deixem espaço para mudar quando quiserem.</li>
                      <li>Criem um nome divertido para ela: “Modo conchinha turbo”, “Estilo espaçoso com toque”, “Abraço ninja”, etc.</li>
                    </ol>
                    <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                      A posição oficial não precisa ser fixa — só precisa ser escolhida com carinho.
                    </blockquote>
                </div>

                <Separator />
                
                <div>
                    <h3 className="font-bold text-foreground text-lg">🌙 Encerramento do Módulo</h3>
                    <p>Dormir juntos é mais do que dividir um colchão — é aprender a respeitar os ritmos, os limites e os gestos que fazem cada um se sentir amado. Seja em conchinha ou separados, o que importa é dormir em paz — e acordar com afeto.</p>
                </div>

              </CardContent>
            </Card>
            <div className="text-center">
              <Button onClick={() => setView('inicio')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </div>
          </div>
        );
      case 'inicio':
      default:
        return (
          <div className="text-center p-8 flex flex-col items-center justify-center w-full animate-in fade-in-50 duration-300">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">Sono de qualidade para Casais</CardTitle>
                <CardDescription>Dormir junto sem perder o sono.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Button size="lg" onClick={() => setView('abertura')}>
                  ✨ Abertura: Dormir Juntos é uma Arte
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('entendendo')}>
                  🧠 Entendendo o Sono do Corpo e da Mente
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('ritual')}>
                  🧴 Ritual Noturno do Casal
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('ambiente')}>
                  🥱 Barulhos, Luzes e Clima do Quarto
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('toque')}>
                  🫂 O Poder do Toque Antes de Dormir
                </Button>
                <Button size="lg" variant="outline" onClick={() => setView('conchinha')}>
                  💑 Dormir de Conchinha ou Separado?
                </Button>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

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
        {renderContent()}
      </div>
    </div>
  );
}
