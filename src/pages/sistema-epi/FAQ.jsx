import { Plus } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle';
import { faqData } from './data';

const FAQ = () => (
  <section id="duvidas" className="bg-white py-20 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:px-8">
      <SectionTitle title="Dúvidas frequentes" />
      <div className="border-t-2 border-tinta">
        {faqData.map(({ question, answer }) => (
          <details key={question} className="group border-b border-linha">
            <summary className="foco flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold [font-stretch:95%] [&::-webkit-details-marker]:hidden">
              {question}
              <Plus className="h-5 w-5 shrink-0 text-azul transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="max-w-[65ch] pb-5 leading-relaxed text-mudo">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
