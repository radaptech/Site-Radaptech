import SectionTitle from '../../components/SectionTitle';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONTATOS, linkWhatsapp } from '../../contato';
import { botaoPrimario } from '../../components/botoes';

// Campo de formulário no estilo ficha: rótulo pequeno dentro da caixa, no canto.
const caixa = 'relative block border border-tinta bg-white px-4 pb-3 pt-2.5 transition-colors focus-within:border-azul focus-within:ring-1 focus-within:z-10 focus-within:ring-azul';
const campo = 'mt-1 w-full bg-transparent text-base text-tinta outline-none placeholder:text-mudo/70';

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
    <section id="contato" className="bg-forro py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <SectionTitle
            title="Conte o que sua empresa precisa."
            text="Descreva o processo que você quer melhorar: como ele é feito hoje e o que costuma dar errado. Respondemos pelo WhatsApp."
          />
          <ul className="mt-10 grid gap-3">
            {WHATSAPP_CONTATOS.map(({ nome, exibicao, link }) => (
              <li key={nome}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fita foco inline-flex items-center gap-3 rounded-[3px] px-4 py-2.5 text-white transition-colors hover:bg-fita-2"
                >
                  <MessageCircle className="h-5 w-5 text-ciano" aria-hidden="true" />
                  <span className="font-bold">{nome}</span>
                  <span className="font-mono">{exibicao}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={enviar} className="etiqueta grid gap-0 p-6 sm:p-8">
          <div className="grid sm:grid-cols-2">
            <label className={caixa}>
              <span className="rotulo">Nome</span>
              <input name="nome" type="text" required autoComplete="name" placeholder="Seu nome" className={campo} />
            </label>
            <label className={`${caixa} -mt-px sm:-ml-px sm:mt-0`}>
              <span className="rotulo">Empresa (opcional)</span>
              <input name="empresa" type="text" autoComplete="organization" placeholder="Nome da sua empresa" className={campo} />
            </label>
          </div>
          <label className={`${caixa} -mt-px`}>
            <span className="rotulo">Mensagem</span>
            <textarea
              name="mensagem"
              rows="5"
              required
              placeholder="Ex.: controlamos os pedidos numa planilha e sempre perdemos o que já foi entregue..."
              className={`${campo} resize-none`}
            />
          </label>
          <button type="submit" className={`${botaoPrimario} mt-6 w-full`}>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
