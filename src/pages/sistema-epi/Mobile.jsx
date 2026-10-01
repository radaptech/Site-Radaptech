import Reveal from '../../components/Reveal';
import SectionTitle from '../../components/SectionTitle';
import { guaranteesData } from './data';
import imgDesktop from './imagens/pc.png';
import imgTablet from './imagens/tablet.png';
import imgMobile from './imagens/celular.png';

function Mobile() {
  return (
    <section className="bg-slate-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative mx-auto h-[320px] w-full max-w-2xl sm:h-[420px] lg:h-[500px]">
            <div className="absolute right-0 top-0 z-10 w-[90%] overflow-hidden rounded-2xl border border-slate-800 bg-white shadow-2xl lg:w-[85%]">
              <img src={imgDesktop} alt="SGEPI no computador" className="h-auto w-full" />
            </div>
            <div className="absolute bottom-[5%] left-0 z-20 w-[48%] overflow-hidden rounded-2xl border border-slate-800 bg-white shadow-2xl lg:w-[42%]">
              <img src={imgTablet} alt="SGEPI no tablet" className="h-auto w-full" />
            </div>
            <div className="absolute bottom-[10%] right-[10%] z-30 w-[28%] overflow-hidden rounded-[1.5rem] border-4 border-slate-900 bg-white shadow-2xl md:rounded-[2rem] md:border-[6px] lg:right-[15%] lg:w-[24%]">
              <img src={imgMobile} alt="SGEPI no celular" className="h-auto w-full" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <SectionTitle
              dark
              center={false}
              eyebrow="Celular, tablet e computador"
              title="Segurança para os seus dados. Segurança para a sua defesa."
              text="O SGEPI roda no navegador, sem instalar nada. O TST registra a entrega no setor, pelo celular ou tablet, e o escritório vê tudo na mesma hora."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {guaranteesData.map(({ icon: Icone, text }) => (
                <li key={text} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                  <Icone className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  <p className="mt-4 leading-relaxed text-slate-300">{text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Mobile;
