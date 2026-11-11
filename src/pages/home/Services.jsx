import SectionTitle from '../../components/SectionTitle';
import CodigoBarras from '../../components/CodigoBarras';

const services = [
  {
    codigo: 'RT-SIS',
    largura: 'sm:col-span-4',
    title: 'Sistemas web',
    description: 'Cadastros, pedidos, ordens de serviço, aprovações: o processo da sua empresa num sistema com login, acessível do computador ou do celular.',
  },
  {
    codigo: 'RT-INS',
    largura: 'sm:col-span-2',
    title: 'Sites institucionais',
    description: 'Sua empresa, seus serviços e seus contatos numa página que carrega rápido, funciona no celular e já sai com título, descrição e sitemap para o Google.',
  },
  {
    codigo: 'RT-LDP',
    largura: 'sm:col-span-2',
    title: 'Landing pages',
    description: 'Uma página para um produto ou campanha, com um objetivo só: fazer o visitante chamar você no WhatsApp ou pedir orçamento.',
  },
  {
    codigo: 'RT-PNL',
    largura: 'sm:col-span-4',
    title: 'Painéis administrativos',
    description: 'Os números que importam numa tela só (vendas, estoque, entregas, pendências), sem montar relatório na mão toda semana.',
  },
];

// Uma cartela de etiquetas: o forro cinza com as etiquetas recortadas.
function Services() {
  return (
    <section id="servicos" className="bg-forro py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Serviços"
          text="Se hoje a informação da sua empresa está espalhada em papel, planilhas soltas ou conversas de WhatsApp, um destes serviços resolve."
        />

        <ul className="mt-12 grid gap-3 rounded-md border border-mudo/25 bg-white/40 p-3 sm:grid-cols-6">
          {services.map((s) => (
            <li key={s.title} className={`flex flex-col rounded-[10px] bg-white p-6 shadow-[0_0_0_1px_rgb(11_13_16/0.08)] sm:p-7 ${s.largura}`}>
              <h3 className="titulo text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-[52ch] flex-1 leading-relaxed text-mudo">{s.description}</p>
              <dl className="mt-6 flex items-end gap-6 border-t border-dashed border-linha pt-4">
                <CodigoBarras texto={s.codigo} className="h-7 w-24 shrink-0 text-tinta" />
                <div>
                  <dt className="rotulo">Cód.</dt>
                  <dd className="font-mono text-sm">{s.codigo}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
