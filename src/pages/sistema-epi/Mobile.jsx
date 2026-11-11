import SectionTitle from '../../components/SectionTitle';
import { guaranteesData } from './data';
import imgDesktop from './imagens/pc.png';
import imgTablet from './imagens/tablet.png';
import imgMobile from './imagens/celular.png';

function Mobile() {
  return (
    <section className="bg-tinta py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto h-[300px] w-full max-w-2xl sm:h-[420px] lg:h-[480px]">
            <div className="absolute right-0 top-0 z-10 w-[90%] overflow-hidden rounded-md bg-white lg:w-[85%]">
              <img src={imgDesktop} alt="SGEPI no computador" className="h-auto w-full" />
            </div>
            <div className="absolute bottom-[5%] left-0 z-20 w-[48%] overflow-hidden rounded-md border-4 border-tinta bg-white lg:w-[42%]">
              <img src={imgTablet} alt="SGEPI no tablet" className="h-auto w-full" />
            </div>
            <div className="absolute bottom-[10%] right-[10%] z-30 w-[28%] overflow-hidden rounded-[1.25rem] border-[5px] border-fita-2 bg-white lg:right-[15%] lg:w-[24%]">
              <img src={imgMobile} alt="SGEPI no celular" className="h-auto w-full" />
            </div>
          </div>

          <div>
            <SectionTitle
              dark
              title="No celular do técnico, no computador do escritório."
              text="O SGEPI roda no navegador, sem instalar nada. O TST registra a entrega no setor, pelo celular ou tablet, e o escritório vê tudo na mesma hora."
            />
            <ul className="mt-10 border-t border-white/15">
              {guaranteesData.map(({ text }) => (
                <li key={text} className="border-b border-white/15 py-3.5 leading-relaxed text-white/85">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mobile;
