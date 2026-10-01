import { useEffect } from 'react';
import HeroSystem from './HeroSystem';
import Problems from './Problems';
import ComoFunciona from './ComoFunciona';
import Dashboard from './Dashboard';
import Benefits from './Benefits';
import Mobile from './Mobile';
import FAQ from './FAQ';
import CTA from './CTA';

const SystemPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const tituloAnterior = document.title;
    document.title = 'SGEPI | Gestão e entrega de EPIs com assinatura digital — RadapTech';
    return () => {
      document.title = tituloAnterior;
    };
  }, []);

  return (
    <>
      <HeroSystem />
      <Problems />
      <ComoFunciona />
      <Dashboard />
      <Benefits />
      <Mobile />
      <FAQ />
      <CTA />
    </>
  );
};

export default SystemPage;
