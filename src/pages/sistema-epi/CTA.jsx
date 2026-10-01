import { CalendarCheck, ShieldCheck } from 'lucide-react';
import Reveal from '../../components/Reveal';
import { WHATSAPP_DEMO_EPI } from '../../contato';

const CTA = () => (
  <section id="demonstracao" className="scroll-mt-20 bg-blue-600 py-20 sm:py-24">
    <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <ShieldCheck className="mx-auto h-10 w-10 text-blue-200" aria-hidden="true" />
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        A próxima fiscalização não vai avisar. Sua ficha de EPI precisa estar pronta antes.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
        Veja em 20 minutos como registrar entregas com assinatura e gerar a ficha de EPI de qualquer colaborador em segundos.
      </p>
      <a
        href={WHATSAPP_DEMO_EPI}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-blue-700 shadow-lg shadow-blue-900/30 transition hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        Agendar demonstração
      </a>
      <p className="mt-6 text-sm text-blue-100">Sem compromisso. O agendamento é direto pelo WhatsApp, com os seus próprios EPIs.</p>
    </Reveal>
  </section>
);

export default CTA;
