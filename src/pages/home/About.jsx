import SectionTitle from '../../components/SectionTitle';

// Lida como uma ficha: rótulo do campo à esquerda, conteúdo à direita.
const campos = [
  {
    rotulo: 'Para quem',
    texto: 'Pequenas e médias empresas, indústrias e microempreendedores que controlam o dia a dia em papel, planilha ou conversa de WhatsApp.',
  },
  {
    rotulo: 'O que você recebe',
    texto: 'Um sistema no navegador do computador e do celular, com login para cada pessoa da equipe e os dados guardados em nuvem.',
  },
  {
    rotulo: 'Produto próprio',
    texto: 'O SGEPI, sistema de gestão e entrega de EPIs, foi desenvolvido por nós do banco de dados à tela. É a mesma forma de trabalhar que usamos nos projetos de clientes.',
  },
];

function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <SectionTitle
            title="Sistemas do tamanho da sua empresa."
            text="Sua empresa cresceu além da planilha, mas não precisa de um sistema gigante, caro e cheio de módulos que ninguém usa. É para esse espaço que a RadapTech desenvolve."
          />
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-mudo">
            Antes de desenhar qualquer tela, entendemos como o trabalho acontece hoje: quem preenche o quê, onde a
            informação se perde, o que dá retrabalho. O sistema sai com o que a sua equipe usa no dia a dia, e
            nada além disso.
          </p>
        </div>

        <dl className="self-start border-2 border-tinta">
          {campos.map((c, i) => (
            <div key={c.rotulo} className={`grid sm:grid-cols-[11rem_1fr] ${i ? 'border-t border-tinta' : ''}`}>
              <dt className="rotulo border-b border-linha px-5 pb-2 pt-4 text-tinta sm:border-b-0 sm:border-r sm:border-r-tinta sm:py-5">
                {c.rotulo}
              </dt>
              <dd className="px-5 pb-5 pt-3 leading-relaxed text-tinta sm:py-5">{c.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
