import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';

const services = [
  {
    title: 'Sistemas web',
    description: 'Cadastros, pedidos, ordens de serviço, aprovações: o processo da sua empresa num sistema com login, acessível do computador ou do celular.',
  },
  {
    title: 'Sites institucionais',
    description: 'Sua empresa, seus serviços e seus contatos numa página que carrega rápido, funciona no celular e já sai com título, descrição e sitemap para o Google.',
  },
  {
    title: 'Landing pages',
    description: 'Uma página para um produto ou campanha, com um objetivo só: fazer o visitante chamar você no WhatsApp ou pedir orçamento.',
  },
  {
    title: 'Painéis administrativos',
    description: 'Os números que importam numa tela só — vendas, estoque, entregas, pendências — sem montar relatório na mão toda semana.',
  },
];

function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionTitle
            title="Serviços"
            text="Se hoje a informação da sua empresa está espalhada em papel, planilhas soltas ou conversas de WhatsApp, um destes serviços resolve."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal
              as="article"
              key={service.title}
              delay={index * 0.08}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-sm font-bold text-blue-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
