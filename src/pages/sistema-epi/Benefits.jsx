import { Check } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';
import { benefitsData } from './data';

const Benefits = () => (
  <section id="beneficios" className="bg-forro py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Para quem responde pela segurança e pelo passivo da empresa." />

      <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
        {benefitsData.map(({ publico, itens }) => (
          <article key={publico}>
            <h3 className="fita inline-block rounded-[3px] px-3 py-1.5 font-bold text-white [font-stretch:90%]">{publico}</h3>
            <ul className="mt-4 border-t-2 border-tinta">
              {itens.map((item) => (
                <li key={item} className="flex gap-3 border-b border-linha py-3 text-tinta">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-azul" strokeWidth={2.5} aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
