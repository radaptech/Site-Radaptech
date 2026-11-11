import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_CONTATO } from '../../contato';
import CodigoBarras from '../../components/CodigoBarras';
import { botaoPrimario, linkSeta } from '../../components/botoes';

// As três portas do site, como etiquetas coladas na cartela.
const etiquetas = [
  {
    codigo: 'RT-SIS',
    tipo: 'Desenvolvimento',
    titulo: 'Sistemas web',
    texto: 'Cadastro, estoque, pedidos e relatórios da sua empresa num sistema que abre no navegador.',
    href: '#servicos',
    acao: 'Ver serviços',
    giro: '-1.2deg',
  },
  {
    codigo: 'RT-EPI',
    tipo: 'Produto próprio',
    titulo: 'SGEPI',
    texto: 'Gestão e entrega de EPIs com assinatura digital, ficha em PDF e estoque por lote.',
    to: '/sistema-epi',
    acao: 'Conhecer o SGEPI',
    giro: '0.8deg',
    carimbo: true,
  },
  {
    codigo: 'RT-WEB',
    tipo: 'Desenvolvimento',
    titulo: 'Sites e landing pages',
    texto: 'Páginas rápidas, que funcionam bem no celular e levam o visitante a falar com você.',
    href: '#servicos',
    acao: 'Ver serviços',
    giro: '-0.4deg',
  },
];

function Etiqueta({ e, i }) {
  const conteudo = (
    <>
      <div className="relative">
        <strong className="titulo block text-2xl">{e.titulo}</strong>
        {e.carimbo && (
          <span className="carimbo carimbar absolute -top-1 right-0 text-[0.7rem]">Feito por nós</span>
        )}
        <span className="mt-2 block max-w-[46ch] leading-snug text-mudo">{e.texto}</span>
      </div>
      <div className="mt-4 flex items-end justify-between gap-6">
        <div>
          <CodigoBarras texto={e.codigo} className="h-7 w-28 text-tinta" />
          <span className="mt-1 flex items-baseline gap-2"><span className="font-mono text-[0.7rem] text-mudo">{e.codigo}</span><span className="rotulo">{e.tipo}</span></span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-azul [font-stretch:90%]">
          {e.acao}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </>
  );
  const classe = 'etiqueta colar group foco block p-5 transition-shadow hover:shadow-[0_1px_1px_rgb(11_13_16/0.12),0_18px_32px_-16px_rgb(11_13_16/0.45)]';
  const estilo = { '--giro': e.giro, animationDelay: `${0.15 + i * 0.18}s` };
  // Atrás de cada etiqueta, o recorte vazio no forro de onde ela foi descolada.
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-md border border-dashed border-mudo/40" aria-hidden="true" />
      {e.to ? (
        <Link to={e.to} className={classe} style={estilo}>{conteudo}</Link>
      ) : (
        <a href={e.href} className={classe} style={estilo}>{conteudo}</a>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-16">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.15fr_1fr]">
        <div className="flex flex-col justify-center px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
          <h1 className="titulo text-[2.6rem] sm:text-6xl xl:text-[4.6rem]">
            Sistemas sob medida para empresas que ainda dependem do{' '}
            <span className="relative whitespace-nowrap text-azul">
              papel
              <svg viewBox="0 0 120 12" className="absolute -bottom-1 left-0 h-3 w-full text-azul" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 8c30-5 70-6 116-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-mudo">
            Planilha, caderno, grupo de WhatsApp. A RadapTech desenvolve sistemas web, sites e landing pages para
            pequenas e médias empresas: você conta como o trabalho é feito hoje e a gente transforma isso num
            sistema que o seu time consegue usar desde o primeiro dia.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a href={WHATSAPP_CONTATO} target="_blank" rel="noopener noreferrer" className={botaoPrimario}>
              Solicitar orçamento pelo WhatsApp
            </a>
            <a href="#processo" className={linkSeta}>
              Como funciona um projeto
            </a>
          </div>
        </div>

        <div className="relative bg-forro px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
          <div className="absolute inset-y-0 left-full hidden w-[50vw] bg-forro lg:block" aria-hidden="true" />
          <div className="relative grid gap-5">
            {etiquetas.map((e, i) => (
              <Etiqueta key={e.codigo} e={e} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
