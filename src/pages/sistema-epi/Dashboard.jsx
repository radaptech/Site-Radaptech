import { ClipboardCheck } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';
import imgDashboard from './imagens/pc-estoque.png';

const itens = [
  'Valor total do estoque',
  'Alertas de estoque baixo',
  'Controle de validade por lote',
  'Devoluções, trocas e descartes',
  'Relatórios em PDF por período',
];

const Dashboard = () => (
  <section className="bg-white py-20 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
      <Reveal className="lg:col-span-5">
        <SectionTitle
          center={false}
          eyebrow="Painel"
          title="O estoque de EPI inteiro em uma tela."
          text="Acompanhe saldo, entregas do mês, itens acabando e valor em estoque sem abrir planilha nenhuma."
        />
        <ul className="mt-8 space-y-3">
          {itens.map((txt) => (
            <li key={txt} className="flex gap-3 text-slate-600">
              <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              {txt}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.15} className="lg:col-span-7">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xl shadow-slate-900/10 sm:p-4">
          <img src={imgDashboard} alt="Tela de estoque do SGEPI" className="h-auto w-full rounded-2xl" />
        </div>
      </Reveal>
    </div>
  </section>
);

export default Dashboard;
