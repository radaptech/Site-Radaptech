import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';

const pilares = [
  {
    titulo: 'Para quem',
    texto: 'Pequenas e médias empresas, indústrias e microempreendedores que controlam o dia a dia em papel, planilha ou conversa de WhatsApp.',
  },
  {
    titulo: 'O que você recebe',
    texto: 'Um sistema no navegador do computador e do celular, com login para cada pessoa da equipe e os dados guardados em nuvem.',
  },
  {
    titulo: 'Produto próprio',
    texto: 'O SGEPI, sistema de gestão e entrega de EPIs, foi desenvolvido por nós do banco de dados à tela. É a mesma forma de trabalhar que usamos nos projetos de clientes.',
    largo: true,
  },
];

function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
        <Reveal>
          <SectionTitle
            center={false}
            eyebrow="Sobre a RadapTech"
            title="Sistemas do tamanho da sua empresa."
            text="Sua empresa cresceu além da planilha, mas não precisa de um sistema gigante, caro e cheio de módulos que ninguém usa. É para esse espaço que a RadapTech desenvolve."
          />
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-slate-600">
              Antes de desenhar qualquer tela, entendemos como o trabalho acontece hoje: quem preenche
              o quê, onde a informação se perde, o que dá retrabalho. O sistema sai com o que a sua equipe
              usa no dia a dia — e nada além disso.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pilares.map((p, i) => (
              <Reveal
                key={p.titulo}
                delay={0.2 + i * 0.1}
                className={`rounded-3xl border border-slate-200 bg-slate-50 p-7 ${p.largo ? 'sm:col-span-2' : ''}`}
              >
                <h3 className="text-lg font-bold text-slate-900">{p.titulo}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
