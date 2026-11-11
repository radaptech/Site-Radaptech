# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Dono ou gestor de pequena/média empresa** (indústria, comércio, serviços, microempreendedor) que controla o dia a dia em papel, planilha ou conversa de WhatsApp e procura quem construa um sistema, site ou landing page.
- **Quem responde pelos EPIs** numa empresa com trabalhadores expostos a risco (frigorífico, obra, fábrica): Técnico de Segurança do Trabalho, RH, jurídico e o dono. Querem provar a entrega de EPI na fiscalização e em processo trabalhista.

## Product Purpose

Site institucional da RadapTech. Duas portas com o mesmo peso:
1. **Desenvolvimento sob medida**: sistemas web, sites institucionais, landing pages e painéis administrativos para PMEs.
2. **SGEPI**, produto próprio: gestão e entrega de EPIs com assinatura digital, ficha em PDF e estoque por lote, com página própria (`/sistema-epi`).

Sucesso = o visitante chama no WhatsApp: pedido de orçamento (home) ou agendamento de demonstração (SGEPI). Não há back-end; o formulário monta a mensagem e abre o WhatsApp.

## Positioning

- Sistemas do tamanho da empresa: entende o processo antes de desenhar tela e entrega só o que a equipe usa, sem sistema gigante e caro.
- O SGEPI foi construído pela própria RadapTech, do banco de dados à tela; é a prova de como ela trabalha.
- SGEPI: o risco não é não comprar EPI, é não conseguir provar que entregou. Entrega assinada, token de auditoria, ficha em PDF, bloqueio de lote vencido.

## Operating Context

- Contato só por WhatsApp (Davi (34) 99897-2788, Paloma (83) 99157-5314), centralizado em `src/contato.js`.
- Demonstração do SGEPI agendada pelo WhatsApp, feita com os EPIs do próprio cliente (~20 min).
- Deploy automático por FTP a cada push na `main` (`.github/workflows/deploy.yml`).

## Capabilities and Constraints

- Stack: Vite + React 19 + Tailwind 4 + framer-motion + lucide-react + react-router (rotas `/` e `/sistema-epi`).
- SEO já configurado: title/description/OG em `index.html`, `sitemap.xml`, `robots.txt`, `.htaccess`.
- Toda funcionalidade do SGEPI citada no site existe hoje (ver comentário em `src/pages/sistema-epi/data.js`). Não acrescentar promessas como "validade jurídica total" ou "zera multa".
- Preço e limites dos planos não são publicados ("depende do plano, fale na demonstração").

## Brand Commitments

- Nome: **RadapTech** (logo em `public/logo-radaptech.png`, favicon `public/logo-pd.png`).
- Voz: português direto, concreto, sem jargão de marketing; fala de processos reais (planilha, ficha de papel, auditor fiscal).
- A empresa se apresenta como marca, sem rostos; os nomes das pessoas aparecem só nos contatos de WhatsApp.

## Evidence on Hand

- Telas reais do SGEPI: `src/pages/sistema-epi/imagens/` (pc.png, pc-estoque.png, tablet.png, celular.png).
- Ficha de entrega ilustrativa com dados fictícios (HeroSystem).
- **Não existem** clientes citáveis, logos de clientes, depoimentos, portfólio de projetos nem números de uso. Não inventar nenhum deles.

## Product Principles

1. Concreto antes de bonito: cada afirmação aponta para algo que o produto ou o processo faz de fato.
2. Duas portas, mesmo peso: quem procura desenvolvimento e quem procura o SGEPI acham o seu caminho na primeira tela.
3. Um próximo passo claro por página: orçamento ou demonstração, sempre pelo WhatsApp.
4. Sem prova inventada: na falta de clientes e números, a prova é o próprio produto mostrado com honestidade.
