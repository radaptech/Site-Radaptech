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

// Ordem das etapas importa, então o número fica. Lido como uma guia de tramitação.
function Process() {
  return (
    <section id="processo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Como um projeto acontece."
          text="Quatro etapas, do primeiro contato ao sistema funcionando na sua empresa."
        />

        <ol className="mt-12 grid border-t-2 border-tinta md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className={`border-b border-linha py-6 md:border-b-0 md:px-6 md:py-8 ${i ? 'md:border-l md:border-l-linha' : 'md:pl-0'}`}>
              <h3 className="titulo flex items-baseline gap-3 text-2xl">
                <span className="text-azul">{i + 1}.</span>
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-mudo">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
