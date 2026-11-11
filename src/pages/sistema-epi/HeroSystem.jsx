import { ArrowRight, CalendarCheck } from 'lucide-react';
import { WHATSAPP_DEMO_EPI } from '../../contato';
import CodigoBarras from '../../components/CodigoBarras';
import { botaoPrimario, linkSeta } from '../../components/botoes';

const garantias = [
  'Assinatura digital ou foto em cada entrega',
  'CA e validade cadastrados por EPI',
  'Ficha de EPI em PDF com código de barras',
];

// Dados fictícios da ilustração.
const itensFicha = [
  { epi: 'Protetor auricular plug', ca: '00001', qtd: 2 },
  { epi: 'Luva nitrílica', ca: '00002', qtd: 1 },
  { epi: 'Botina de segurança', ca: '00003', qtd: 1 },
];

export default function HeroSystem() {
  return (
    <section className="overflow-hidden bg-white pt-16">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <h1 className="titulo text-[2.4rem] sm:text-[3.4rem] xl:text-[3.9rem]">
            Toda entrega de EPI assinada, registrada e pronta para a fiscalização.
          </h1>

          <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-mudo">
            O SGEPI substitui a ficha de papel por um registro eletrônico com assinatura do colaborador na tela do
            celular ou tablet, token de auditoria e ficha em PDF gerada na hora. Quando o auditor fiscal ou um
            processo trabalhista pedirem a prova, você tem.
          </p>

          <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a href={WHATSAPP_DEMO_EPI} target="_blank" rel="noopener noreferrer" className={botaoPrimario}>
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Agendar demonstração
            </a>
            <a href="#como-funciona" className={linkSeta}>
              Ver como funciona a entrega
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 grid border-t border-linha text-sm text-tinta sm:grid-cols-3">
            {garantias.map((texto, i) => (
              <li key={texto} className={`border-b border-linha py-3 sm:border-b-0 sm:pr-4 ${i ? 'sm:border-l sm:pl-4' : ''}`}>
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative bg-forro px-4 py-12 sm:px-8 lg:py-20 lg:pl-12">
          <div className="absolute inset-y-0 left-full hidden w-[50vw] bg-forro lg:block" aria-hidden="true" />
          <figure className="etiqueta colar relative mx-auto max-w-md p-6 sm:p-8" style={{ '--giro': '1deg', '--giro-inicial': '4deg' }}>
            <div className="flex items-start justify-between gap-4 border-b-2 border-tinta pb-4">
              <div>
                <p className="rotulo">Ficha de entrega de EPI</p>
                <p className="titulo mt-2 text-xl">Carlos Henrique Souza</p>
                <p className="text-sm text-mudo">Operador de produção · Abate</p>
              </div>
              <CodigoBarras texto="ENT4F9A" className="h-9 w-20 shrink-0 text-tinta" />
            </div>

            <table className="mt-4 w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="rotulo pb-2">EPI</th>
                  <th className="rotulo pb-2">CA</th>
                  <th className="rotulo pb-2 text-right">Qtd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linha border-y border-linha">
                {itensFicha.map((item) => (
                  <tr key={item.epi}>
                    <td className="py-2.5 font-medium">{item.epi}</td>
                    <td className="py-2.5 font-mono text-mudo">{item.ca}</td>
                    <td className="py-2.5 text-right font-mono">{item.qtd}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="relative mt-5 border border-tinta px-4 pb-2 pt-2.5">
              <p className="rotulo">Assinatura do colaborador</p>
              <svg viewBox="0 0 240 50" className="mt-1 h-12 w-full text-tinta" aria-hidden="true">
                <path
                  d="M6 34c14-22 22-24 24-10s-6 18 4 6 16-22 20-8-2 18 10 4 14-14 20-4 6 12 18 2 20-10 30-2 14 6 24 0 24-8 40-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="carimbo carimbar absolute -top-4 right-3 bg-white/0 text-base">Assinada</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-mudo">
              <span>Entregue em 01/10/2026 · 07:42</span>
              <span className="font-mono text-tinta">ENT-4F9A2C71B0D3E8A6</span>
            </div>
            <figcaption className="sr-only">
              Exemplo de ficha de entrega de EPI gerada pelo SGEPI, com itens, CA, assinatura e token de auditoria.
            </figcaption>
          </figure>
          <p className="mx-auto mt-4 max-w-md text-xs text-mudo">Ilustração com dados fictícios.</p>
        </div>
      </div>
    </section>
  );
}
