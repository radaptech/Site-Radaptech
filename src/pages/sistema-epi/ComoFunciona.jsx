import SectionTitle from '../../components/SectionTitle';
import { stepsData } from './data';

// O caminho de um lote: da nota fiscal até a ficha, numa linha só.
const ComoFunciona = () => (
  <section id="como-funciona" className="bg-forro py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Da nota fiscal do fornecedor até a assinatura do trabalhador, tudo rastreado." />

      <ol className="relative mt-14 grid gap-10 before:absolute before:left-6 before:top-0 before:h-full before:w-0.5 before:bg-tinta md:grid-cols-3 md:before:left-0 md:before:top-6 md:before:h-0.5 md:before:w-full">
        {stepsData.map(({ title, desc }, i) => (
          <li key={title} className="relative pl-16 md:pl-0 md:pt-16 md:pr-6">
            <span className="absolute left-1.5 top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-tinta bg-white font-bold md:left-0 md:top-1.5" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="titulo text-xl sm:text-2xl">{title}</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-mudo">{desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ComoFunciona;
