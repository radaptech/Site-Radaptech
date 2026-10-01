import { useState, useEffect } from 'react';
import { WHATSAPP_CONTATO } from '../../contato';

const words = ['do papel.', 'da planilha.', 'do caderno.', 'do WhatsApp.'];

const destaques = [
  { titulo: 'Sistemas web', texto: 'Cadastro, estoque, pedidos e relatórios da sua empresa num sistema que abre no navegador.' },
  { titulo: 'SGEPI', texto: 'Nosso sistema de gestão e entrega de EPIs, com assinatura digital e ficha em PDF.' },
  { titulo: 'Sites e landing pages', texto: 'Páginas rápidas, que funcionam bem no celular e levam o visitante a falar com você.' },
];

function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.35),transparent_60%)]"
      />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pb-20 pt-32 text-center sm:px-6 lg:px-8">
        <h1 className="flex min-h-[120px] max-w-5xl flex-col justify-center text-4xl font-bold leading-tight tracking-tight sm:min-h-[140px] sm:text-5xl lg:min-h-[160px] lg:text-6xl">
          <span>
            Sistemas sob medida para empresas que ainda dependem{' '}
            <br className="hidden md:block" />
            <span className="text-blue-400">
              {text}
              <span className="animate-pulse opacity-50" aria-hidden="true">|</span>
            </span>
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
          A RadapTech desenvolve sistemas web, sites e landing pages para pequenas e médias empresas.
          Você conta como o trabalho é feito hoje; a gente transforma isso num sistema que o seu time
          consegue usar desde o primeiro dia.
        </p>

        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={WHATSAPP_CONTATO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Solicitar orçamento
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-4 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Ver serviços
          </a>
        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-4 text-left md:grid-cols-3">
          {destaques.map((d) => (
            <div key={d.titulo} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <strong className="block text-xl font-bold text-white">{d.titulo}</strong>
              <span className="mt-2 block leading-relaxed text-slate-300">{d.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
