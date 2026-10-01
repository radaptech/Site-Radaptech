const WHATSAPP_NUMERO = '5534997737917';
export const WHATSAPP_EXIBICAO = '(34) 99773-7917';

export const linkWhatsapp = (mensagem) => `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

export const WHATSAPP_CONTATO = linkWhatsapp('Olá! Vim pelo site da RadapTech e quero conversar sobre um projeto.');

export const WHATSAPP_DEMO_EPI = linkWhatsapp(
  'Olá! Vi o site do SGEPI e quero entender como registrar as entregas de EPI com assinatura digital e ficha em PDF. Podemos agendar uma demonstração?'
);
