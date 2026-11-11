import SectionTitle from '../../components/SectionTitle';
import { problemsData } from './data';

const Problems = () => (
  <section id="problema" className="bg-white py-20 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8">
      <div>
        <SectionTitle
          title="Para a fiscalização e para a Justiça do Trabalho, só conta a entrega de EPI que tem registro."
          text="A NR-6 obriga a empresa a registrar o fornecimento de EPI a cada trabalhador. Ficha de papel some, molha, fica sem assinatura, fica com a data errada. E é justamente esse papel que vai ser pedido quando aparecer um auditor fiscal ou uma reclamatória de insalubridade."
        />
      </div>

      <div>
        <ul className="border-t-2 border-tinta">
          {problemsData.map(({ title, desc }) => (
            <li key={title} className="border-b border-linha py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 className="titulo text-xl sm:text-2xl">{title}</h3>
                <span className="rotulo !text-alerta">Sem prova</span>
              </div>
              <p className="mt-2 max-w-[60ch] leading-relaxed text-mudo">{desc}</p>
            </li>
          ))}
        </ul>
        <p className="titulo mt-10 text-2xl text-azul sm:text-[1.75rem]">
          O que a fiscalização cobra é a prova de que o EPI foi entregue.
        </p>
      </div>
    </div>
  </section>
);

export default Problems;
