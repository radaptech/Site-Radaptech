import { ClipboardCheck } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';
import { benefitsData } from './data';

const Benefits = () => (
  <section id="beneficios" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionTitle eyebrow="Benefícios" title="Feito para quem responde pela segurança — e pelo passivo — da empresa." />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {benefitsData.map(({ icon: Icone, publico, itens }, i) => (
          <Reveal as="article" key={publico} delay={i * 0.08} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Icone className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">{publico}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {itens.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
