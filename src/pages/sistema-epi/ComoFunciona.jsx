import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';
import { stepsData } from './data';

const ComoFunciona = () => (
  <section id="como-funciona" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Como o SGEPI fecha essa brecha"
          title="Da nota fiscal do fornecedor até a assinatura do trabalhador, tudo rastreado."
        />
      </Reveal>

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {stepsData.map(({ icon: Icone, title, desc }, i) => (
          <Reveal as="li" key={title} delay={i * 0.1} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Icone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-4xl font-bold text-slate-100" aria-hidden="true">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{desc}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ComoFunciona;
