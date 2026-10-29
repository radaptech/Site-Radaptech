const WHATSAPP_NUMERO = '5534998972788';
const MENSAGEM_CONTATO = 'Olá! Vim pelo site da RadapTech e quero conversar sobre um projeto.';

export const linkWhatsapp = (mensagem, numero = WHATSAPP_NUMERO) => `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

export const WHATSAPP_CONTATO = linkWhatsapp(MENSAGEM_CONTATO);

export const WHATSAPP_CONTATOS = [
  { nome: 'Davi', exibicao: '(34) 99897-2788', link: WHATSAPP_CONTATO },
  { nome: 'Paloma', exibicao: '(83) 9157-5314', link: linkWhatsapp(MENSAGEM_CONTATO, '558391575314') },
];

export const WHATSAPP_DEMO_EPI = linkWhatsapp(
  'Olá! Vi o site do SGEPI e quero entender como registrar as entregas de EPI com assinatura digital e ficha em PDF. Podemos agendar uma demonstração?'
);
