import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONTATO, WHATSAPP_EXIBICAO, linkWhatsapp } from '../../contato';

const campo =
  'w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-blue-600';

// Sem back-end: o formulário monta a mensagem e abre a conversa no WhatsApp.
function enviar(e) {
  e.preventDefault();
  const dados = new FormData(e.currentTarget);
  const empresa = dados.get('empresa') ? ` da ${dados.get('empresa')}` : '';
  const mensagem = `Olá! Sou ${dados.get('nome')}${empresa} e vim pelo site da RadapTech.\n\n${dados.get('mensagem')}`;
  window.open(linkWhatsapp(mensagem), '_blank', 'noopener,noreferrer');
}

function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <Reveal>
          <SectionTitle
            center={false}
            eyebrow="Contato"
            title="Conte o que sua empresa precisa."
            text="Descreva o processo que você quer melhorar: como ele é feito hoje e o que costuma dar errado. Respondemos pelo WhatsApp."
          />
          <div className="mt-10">
            <p className="text-sm font-semibold text-slate-500">WhatsApp</p>
            <a
              href={WHATSAPP_CONTATO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-xl font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {WHATSAPP_EXIBICAO}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={enviar} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <label htmlFor="contato-nome" className="mb-2 block text-sm font-semibold text-slate-700">Nome</label>
              <input id="contato-nome" name="nome" type="text" required autoComplete="name" placeholder="Seu nome" className={campo} />
            </div>
            <div>
              <label htmlFor="contato-empresa" className="mb-2 block text-sm font-semibold text-slate-700">
                Empresa <span className="font-normal text-slate-400">(opcional)</span>
              </label>
              <input id="contato-empresa" name="empresa" type="text" autoComplete="organization" placeholder="Nome da sua empresa" className={campo} />
            </div>
            <div>
              <label htmlFor="contato-mensagem" className="mb-2 block text-sm font-semibold text-slate-700">Mensagem</label>
              <textarea id="contato-mensagem" name="mensagem" rows="4" required placeholder="Ex.: controlamos os pedidos numa planilha e sempre perdemos o que já foi entregue..." className={`${campo} resize-none`} />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
