import { CalendarCheck } from 'lucide-react';
import { WHATSAPP_DEMO_EPI } from '../../contato';
import { botaoPrimario } from '../../components/botoes';

const CTA = () => (
  <section id="demonstracao" className="fita border-b border-white/10 py-20 text-white sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:px-8">
      <div>
        <h2 className="titulo text-3xl sm:text-5xl">Deixe a ficha de EPI pronta antes da próxima fiscalização.</h2>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-white/75">
          Veja em 20 minutos como registrar entregas com assinatura e gerar a ficha de EPI de qualquer colaborador em segundos.
        </p>
      </div>
      <div className="lg:justify-self-end">
        <a href={WHATSAPP_DEMO_EPI} target="_blank" rel="noopener noreferrer" className={`${botaoPrimario} foco-claro`}>
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Agendar demonstração
        </a>
        <p className="mt-4 max-w-xs text-sm text-white/70">Sem compromisso. Agendamento pelo WhatsApp, feito com os seus próprios EPIs.</p>
      </div>
    </div>
  </section>
);

export default CTA;
