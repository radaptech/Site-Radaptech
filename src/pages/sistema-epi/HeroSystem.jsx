import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, CalendarCheck, FileText, PenLine, ShieldCheck } from 'lucide-react';
import { WHATSAPP_DEMO_EPI } from '../../contato';

const garantias = [
  { icone: PenLine, texto: 'Assinatura digital ou foto em cada entrega' },
  { icone: BadgeCheck, texto: 'CA e validade cadastrados por EPI' },
  { icone: FileText, texto: 'Ficha de EPI em PDF com código de barras' },
];

// Dados fictícios da ilustração.
const itensFicha = [
  { epi: 'Protetor auricular plug', ca: '00001', qtd: 2 },
  { epi: 'Luva nitrílica', ca: '00002', qtd: 1 },
  { epi: 'Botina de segurança', ca: '00003', qtd: 1 },
];

export default function HeroSystem() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-40">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Conformidade com a NR-6
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Toda entrega de EPI assinada, registrada e{' '}
            <span className="text-blue-400">pronta para a fiscalização.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            O SGEPI substitui a ficha de papel por um registro eletrônico com assinatura do colaborador na
            tela do celular ou tablet, token de auditoria e ficha em PDF gerada na hora. Quando o auditor
            fiscal ou um processo trabalhista pedirem a prova, você tem.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_DEMO_EPI}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Agendar demonstração
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-4 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Ver como funciona a entrega
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {garantias.map(({ icone: Icone, texto }) => (
              <li key={texto} className="flex items-start gap-2">
                <Icone className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                {texto}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="rounded-3xl border border-slate-800 bg-white p-6 text-slate-800 shadow-2xl shadow-black/50 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Ficha de entrega de EPI</p>
                <p className="mt-1 text-lg font-bold text-slate-900">Carlos Henrique Souza</p>
                <p className="text-sm text-slate-500">Operador de produção · Abate</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Assinada
              </span>
            </div>

            <table className="mt-5 w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                  <th className="pb-2 font-semibold">EPI</th>
                  <th className="pb-2 font-semibold">CA</th>
                  <th className="pb-2 text-right font-semibold">Qtd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {itensFicha.map((item) => (
                  <tr key={item.epi}>
                    <td className="py-2.5 font-medium text-slate-700">{item.epi}</td>
                    <td className="py-2.5 font-mono text-slate-500">{item.ca}</td>
                    <td className="py-2.5 text-right text-slate-700">{item.qtd}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-400">Assinatura do colaborador</p>
              <svg viewBox="0 0 240 50" className="mt-1 h-12 w-full text-slate-800" aria-hidden="true">
                <path
                  d="M6 34c14-22 22-24 24-10s-6 18 4 6 16-22 20-8-2 18 10 4 14-14 20-4 6 12 18 2 20-10 30-2 14 6 24 0 24-8 40-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>Entregue em 01/10/2026 · 07:42</span>
              <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-slate-600">ENT-4F9A2C71B0D3E8A6</span>
            </div>
          </div>
          <figcaption className="sr-only">
            Exemplo de ficha de entrega de EPI gerada pelo SGEPI, com itens, CA, assinatura e token de auditoria.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
