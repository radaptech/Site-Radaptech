import { Check } from 'lucide-react';
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
        <SectionTitle
          title="O estoque de EPI inteiro em uma tela."
          text="Acompanhe saldo, entregas do mês, itens acabando e valor em estoque sem abrir planilha nenhuma."
        />
        <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
          {itens.map((txt) => (
            <li key={txt} className="flex items-center gap-2 text-tinta">
              <Check className="h-4 w-4 shrink-0 text-azul" strokeWidth={2.5} aria-hidden="true" />
              {txt}
            </li>
          ))}
        </ul>
      </div>

      <figure className="mt-12">
        <div className="overflow-hidden rounded-md border-2 border-tinta">
          <img src={imgDashboard} alt="Tela de controle de estoque do SGEPI, com lotes, CA e validade" className="h-auto w-full" />
        </div>
        <figcaption className="mt-3 rotulo">Tela real: controle de estoque por lote</figcaption>
      </figure>
    </div>
  </section>
);

export default Dashboard;
