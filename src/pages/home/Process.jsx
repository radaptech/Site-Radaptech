import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';

const steps = [
  {
    title: 'Conversa',
    description: 'Você explica como o processo funciona hoje e onde ele trava. A gente pergunta até entender de verdade.',
  },
  {
    title: 'Proposta',
    description: 'Definimos o que entra na primeira versão, quanto tempo leva e quanto custa. Você aprova antes de começarmos.',
  },
  {
    title: 'Desenvolvimento',
    description: 'Construímos o sistema e mostramos as telas funcionando durante o caminho, para ajustar cedo e não só no final.',
  },
  {
    title: 'Entrega',
    description: 'Colocamos no ar, ensinamos quem vai usar e corrigimos o que aparecer nas primeiras semanas de uso real.',
  },
];

function Process() {
  return (
    <section id="processo" className="scroll-mt-20 bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            dark
            eyebrow="Como trabalhamos"
            title="Como um projeto acontece."
            text="Quatro etapas, do primeiro contato ao sistema funcionando na sua empresa."
          />
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.08} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
              <span className="text-4xl font-bold text-blue-400/40" aria-hidden="true">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-300">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
