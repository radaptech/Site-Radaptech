import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { botaoClaro } from './botoes';
import imgTablet from '../pages/sistema-epi/imagens/tablet.png';

const features = [
  'Entrega com assinatura digital ou foto',
  'Ficha de EPI em PDF com código de barras',
  'CA e validade cadastrados por EPI',
  'Estoque por lote, sem entrega de lote vencido',
  'Devoluções, trocas e descartes registrados',
  'Funciona no celular, tablet e computador',
];

function EpiSystem() {
  return (
    <section id="epi" className="bg-tinta py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-8">
        <div>
          <SectionTitle
            dark
            title="SGEPI: gestão e entrega de EPIs em conformidade com a NR-6."
            text="Toda entrega de EPI assinada pelo colaborador, registrada e pronta para a fiscalização."
          />

          <ul className="mt-10 grid border-t border-white/15 sm:grid-cols-2 sm:gap-x-8">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 border-b border-white/15 py-3.5 text-white/85">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-ciano" strokeWidth={2.5} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <Link to="/sistema-epi" className={`${botaoClaro} foco-claro mt-10`}>
            Conhecer o SGEPI
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <figure className="mx-auto w-full max-w-md">
          <img src={imgTablet} alt="Painel do SGEPI no tablet" className="h-auto w-full rounded-md" />
          <figcaption className="rotulo mt-3 !text-white/60">Tela real do SGEPI no tablet</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default EpiSystem;
