import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck } from 'lucide-react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
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
    <section id="epi" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <SectionTitle
            center={false}
            eyebrow="Sistema em destaque · SGEPI"
            title="Gestão e entrega de EPIs em conformidade com a NR-6."
            text="Toda entrega de EPI assinada pelo colaborador, registrada e pronta para a fiscalização. Sem ficha de papel perdida, sem entrega sem prova."
          />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-slate-600">
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/sistema-epi"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          >
            Conhecer o sistema
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xl shadow-slate-900/10">
            <img src={imgTablet} alt="Painel do SGEPI no tablet" className="h-auto w-full rounded-2xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default EpiSystem;
