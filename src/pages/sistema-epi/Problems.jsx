import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';
import { problemsData } from './data';

const Problems = () => (
  <section id="problema" className="scroll-mt-20 bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Sem assinatura, a entrega não aconteceu"
          title="Para a fiscalização e para a Justiça do Trabalho, EPI entregue sem registro é EPI não entregue."
          text="A NR-6 obriga a empresa a registrar o fornecimento de EPI a cada trabalhador. Ficha de papel some, molha, fica sem assinatura, fica com a data errada. E é justamente esse papel que vai ser pedido quando aparecer um auditor fiscal ou uma reclamatória de insalubridade."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {problemsData.map(({ icon: Icone, title, desc }, i) => (
          <Reveal as="article" key={title} delay={i * 0.1} className="rounded-3xl border border-red-100 bg-red-50/50 p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <Icone className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{desc}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-14 max-w-2xl text-center text-xl font-semibold text-slate-900">
          O risco não está em não comprar EPI. Está em não conseguir provar que entregou.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Problems;
