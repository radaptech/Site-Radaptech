import {
  AlertTriangle,
  Building2,
  CloudUpload,
  FileText,
  Gavel,
  HardHat,
  History,
  KeyRound,
  LockKeyhole,
  PackageCheck,
  PenLine,
  Scale,
  Smartphone,
  Users,
} from 'lucide-react';

// Toda funcionalidade citada aqui existe no SGEPI hoje. Não acrescente promessas que o produto não cumpre
// (ex.: "validade jurídica total", "zera multa").

export const problemsData = [
  {
    icon: Gavel,
    title: 'Auto de infração na fiscalização',
    desc: 'O auditor pede o comprovante de entrega de EPI de um colaborador específico. A ficha não está na pasta, ou está sem assinatura. Isso vira autuação.',
  },
  {
    icon: Scale,
    title: 'Processo trabalhista sem defesa',
    desc: 'Ex-funcionário pede adicional de insalubridade alegando que nunca recebeu protetor auricular. Sem a ficha assinada, com data e CA do equipamento, a empresa não tem como provar o contrário.',
  },
  {
    icon: AlertTriangle,
    title: 'EPI vencido na mão do trabalhador',
    desc: 'CA vencido ou lote fora da validade entregue sem ninguém perceber. Em caso de acidente, o problema deixa de ser só administrativo.',
  },
];

export const stepsData = [
  {
    icon: PackageCheck,
    title: 'Entrada por nota fiscal e lote',
    desc: 'Lance a NF do fornecedor com lote, data de fabricação e validade de cada item. O estoque passa a ser controlado lote a lote.',
  },
  {
    icon: PenLine,
    title: 'Entrega com assinatura na hora',
    desc: 'O TST seleciona o colaborador, os EPIs e o tamanho. O trabalhador assina com o dedo na tela do celular ou tablet, ou a entrega é confirmada por foto. Cada registro recebe um token de auditoria único.',
  },
  {
    icon: FileText,
    title: 'Ficha de EPI em PDF, sempre disponível',
    desc: 'A ficha sai com colaborador, função, departamento, EPIs entregues, código de barras e assinatura. Pronta para imprimir, anexar no processo ou mostrar ao auditor.',
  },
];

export const benefitsData = [
  {
    icon: HardHat,
    publico: 'Técnico de Segurança do Trabalho',
    itens: [
      'Entrega registrada em menos tempo do que levaria para achar a ficha de papel.',
      'Histórico de cada colaborador: o que recebeu, quando, quanto e o que devolveu.',
      'Devoluções, trocas e descartes também com assinatura e motivo registrado.',
    ],
  },
  {
    icon: Users,
    publico: 'RH e Jurídico',
    itens: [
      'Ficha de EPI em PDF por entrega, pronta para instruir a defesa.',
      'Token de auditoria em cada entrega e devolução.',
      'Nada é apagado: cancelamentos ficam registrados com o usuário que fez a operação.',
    ],
  },
  {
    icon: Building2,
    publico: 'Dono da empresa e gestão',
    itens: [
      'Estoque por lote: o lote que vence primeiro sai primeiro.',
      'O sistema bloqueia a entrega de lote com validade vencida.',
      'Painel com alertas, movimentação e valor estimado em estoque.',
      'Perfis de acesso: quem administra e quem só registra entregas.',
    ],
  },
  {
    icon: Smartphone,
    publico: 'Equipes em campo: frigorífico, obra, fábrica',
    itens: [
      'Funciona no navegador do celular e do tablet, sem instalar aplicativo.',
      'Importação de departamentos, funções e fornecedores por planilha Excel.',
      'Cada empresa acessa pelo seu próprio endereço, com dados isolados.',
    ],
  },
];

export const guaranteesData = [
  { icon: CloudUpload, text: 'Assinaturas armazenadas em nuvem, vinculadas ao registro da entrega.' },
  { icon: History, text: 'Backup automático do banco de dados em nuvem.' },
  { icon: KeyRound, text: 'Senhas protegidas com criptografia argon2id e login individual.' },
  { icon: LockKeyhole, text: 'Dados de cada empresa isolados dos demais clientes.' },
];

export const faqData = [
  {
    question: 'A assinatura eletrônica vale como comprovante?',
    answer: 'A NR-6 admite o registro do fornecimento de EPI por livros, fichas ou sistema eletrônico. O SGEPI guarda a assinatura do trabalhador, a data, os itens entregues e um token de auditoria para cada registro. Recomendamos validar o procedimento com o seu jurídico.',
  },
  {
    question: 'Preciso instalar algum aplicativo?',
    answer: 'Não. O SGEPI roda no navegador do computador, celular ou tablet.',
  },
  {
    question: 'E se o trabalhador não conseguir assinar na tela?',
    answer: 'A entrega pode ser confirmada por foto, tirada pela câmera do próprio dispositivo.',
  },
  {
    question: 'Já tenho tudo em planilha. Perco esse trabalho?',
    answer: 'Não. Departamentos, funções e fornecedores podem ser importados por planilha Excel.',
  },
  {
    question: 'Quantos colaboradores posso cadastrar?',
    answer: 'Depende do plano contratado. Fale com a gente na demonstração para escolher o plano certo.',
  },
];
