---
name: RadapTech
description: Sistemas sob medida e SGEPI, impressos como etiqueta de lote.
colors:
  tinta: "#0b0d10"
  fita: "#15181d"
  fita-2: "#23272e"
  azul: "#1660f5"
  azul-escuro: "#0f4cc9"
  ciano: "#19c6f0"
  linha: "#c9ced6"
  forro: "#e7eaee"
  mudo: "#4a525c"
  alerta: "#c2261b"
  papel: "#ffffff"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'tnum'"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 75"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  botao: "3px"
  carimbo: "4px"
  etiqueta: "6px"
spacing:
  campo: "16px"
  etiqueta: "20px"
  secao: "80px"
  secao-sm: "112px"
components:
  button-primary:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.papel}"
    rounded: "{rounded.botao}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.azul-escuro}"
  button-claro:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.botao}"
    padding: "16px 24px"
  button-claro-hover:
    backgroundColor: "{colors.forro}"
  etiqueta:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.etiqueta}"
    padding: "{spacing.etiqueta}"
  fita-chip:
    backgroundColor: "{colors.fita}"
    textColor: "{colors.papel}"
    rounded: "{rounded.botao}"
    padding: "10px 16px"
  fita-chip-hover:
    backgroundColor: "{colors.fita-2}"
  carimbo:
    textColor: "{colors.azul}"
    rounded: "{rounded.carimbo}"
    padding: "4px 10px"
  campo-ficha:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    padding: "10px 16px 12px"
---

# Design System: RadapTech

## Overview

**Creative North Star: "Etiqueta de lote"**

Cada processo ganha sua etiqueta. O site fala a língua do que a empresa controla: lote, CA, validade, código. O papel é branco e liso como etiqueta adesiva, a tinta é quase preta, e a fita preta de rotulador fecha a página em cima (cabeçalho) e embaixo (rodapé). O azul do logo funciona como tinta de carimbo: aparece onde algo é confirmado ou acionado, nunca como fundo atmosférico. O ciano só existe sobre a fita escura.

A densidade é de formulário, não de vitrine. Seções separadas por réguas (2px tinta no topo de listas, 1px linha entre itens), campos com rótulo pequeno no canto como numa ficha de EPI ou numa DANFE, etiquetas coladas sobre o forro cinza com código de barras e código RT-XXX. O movimento é um só: etiquetas sendo coladas e o carimbo batendo, uma vez, no carregamento.

O sistema recusa o hero escuro com brilho azul e a grade de cards iguais. Profundidade vem do papel colado sobre o forro, não de vidro, gradiente ou brilho.

**Key Characteristics:**
- Papel branco e forro cinza (#e7eaee) alternando por seção; fita preta só no topo, no rodapé e no bloco final de CTA.
- Azul (#1660f5) como tinta de carimbo e de ação, ciano (#19c6f0) apenas sobre a fita.
- Archivo larga e pesada nos títulos, condensada nos rótulos; JetBrains Mono só em código, CA, telefone e token.
- Etiquetas adesivas com leve giro, código de barras gerado do texto e recorte tracejado no forro.
- Réguas e células de formulário em vez de cards com sombra.

## Colors

Paleta de papel e tinta com um único acento de carimbo; tudo o mais é neutro.

### Primary
- **Azul Carimbo** (azul): botões primários, o carimbo, links de ação nas etiquetas, a palavra destacada do título, números de etapa, ícones de abertura do FAQ, seleção de texto, cursor e anel de foco.
- **Azul Carimbo Fundo** (azul-escuro): somente o hover do botão primário.

### Secondary
- **Ciano de Fita** (ciano): ícones e marcas sobre fundos escuros (check do SGEPI, ícone de WhatsApp na fita) e anel de foco claro sobre a fita. Nunca sobre papel.

### Tertiary
- **Vermelho de Pendência** (alerta): só no rótulo "Sem prova" da lista de problemas do SGEPI. Marca de não conformidade, não decoração.

### Neutral
- **Tinta** (tinta): todo texto principal, réguas grossas (2px) de abertura de lista, bordas dos campos de ficha, o código de barras. Também é o fundo das duas seções escuras (ver Do's and Don'ts).
- **Fita de Rotulador** (fita): cabeçalho, rodapé, CTA final do SGEPI, chips de WhatsApp, rótulos de público e o botão de voltar ao topo. Sempre com o friso interno da fita.
- **Fita Gasta** (fita-2): hover de elementos de fita e moldura do celular no mockup.
- **Mudo** (mudo): texto de apoio, rótulos de campo, recorte tracejado (a 40%).
- **Linha** (linha): réguas finas entre itens, divisórias tracejadas dentro das etiquetas.
- **Forro** (forro): fundo das seções de cartela (Serviços, Contato), coluna direita dos heróis, hover do botão claro, trilho da barra de rolagem.
- **Papel** (papel): fundo da página e de toda etiqueta.

### Named Rules
**The Tinta de Carimbo Rule.** O azul marca ação ou confirmação: botão, carimbo, link de ação, uma palavra no título. Nunca vira fundo de seção, gradiente ou brilho.

**The Ciano Só na Fita Rule.** Ciano aparece apenas sobre fita ou tinta. Sobre papel ele some; use azul.

## Typography

**Display Font:** Archivo, eixo de largura (com ui-sans-serif, system-ui)
**Body Font:** Archivo (mesma família, largura normal)
**Label/Mono Font:** Archivo condensada (75%) para rótulos; JetBrains Mono para dados

**Character:** Uma família só, esticada e comprimida como a impressão de uma etiqueta: título largo e pesado, rótulo estreito em caixa alta. A mono entra apenas onde o dado é código.

### Hierarchy
- **Display** (800, largura 112%, 2.4rem a 4.6rem, 1.02): só o h1 de cada herói. Home vai a 4.6rem em telas xl; SGEPI para em 3.9rem.
- **Headline** (800, largura 112%, 1.875rem a 2.6rem, 1.02): título de seção, sempre pelo cabeçalho de seção compartilhado. CTA final vai a 3rem.
- **Title** (800, largura 112%, 1.5rem a 1.75rem): nome da etiqueta, título de serviço, etapa, problema. Quebra balanceada.
- **Body** (400, 1.125rem, 1.625): parágrafo de apoio em mudo, limitado a 56 a 62ch. Texto corrido de itens a 1rem, até 65ch. Números tabulares no corpo inteiro.
- **Label** (600, largura 75%, 0.72rem, 0.08em, caixa alta, mudo): rótulo de campo, cabeçalho de tabela, legenda de figura, "Cód.", célula de termo da ficha "Sobre".
- **Mono** (400, 0.7rem a 0.875rem): códigos RT-XXX, CA, quantidades, token de auditoria, telefones.

### Named Rules
**The Rótulo É Campo Rule.** O rótulo condensado nomeia um campo, uma coluna ou uma legenda; fica dentro ou ao lado do dado que descreve. Nunca sobe acima de um título de seção como sobretítulo.

**The Mono É Dado Rule.** JetBrains Mono só para o que seria impresso por máquina: código, CA, token, telefone, quantidade.

## Layout

Contêiner único de 80rem (max-w-7xl) com respiro lateral de 16px, 24px a partir de 640px e 32px a partir de 1024px. Seções com 80px de altura de respiro vertical, 112px a partir de 640px (CTA final: 96px). Fundos alternam papel e forro por seção; a alternância é o separador, não há bordas entre seções.

Os heróis são duas colunas assimétricas (1.15fr/1fr na home, 1.1fr/1fr no SGEPI): texto em papel à esquerda, coluna de forro à direita que sangra até a borda da janela. Seções de leitura usam grades assimétricas (1fr/1.1fr, 1fr/1.6fr, 1.4fr/1fr) com título de um lado e lista regrada do outro. Listas abrem com régua de 2px tinta e separam itens com 1px linha; em colunas, as células são divididas por régua vertical. Navegação ancorada com rolagem suave e 5rem de compensação para o cabeçalho fixo.

Abaixo de 1024px tudo empilha em uma coluna; a navegação vira menu de fita.

## Elevation & Depth

Plano por padrão. A única profundidade é a do papel colado: a etiqueta tem uma sombra curta de contato mais uma sombra longa e difusa que cai embaixo, e ela cresce no hover. A fita tem friso interno (luz em cima, sombra embaixo) para ler como fita plástica, não como sombra projetada. O resto do site é chapado e separado por réguas e troca de fundo.

### Shadow Vocabulary
- **Etiqueta colada** (`box-shadow: 0 1px 1px rgb(11 13 16 / 0.12), 0 10px 24px -14px rgb(11 13 16 / 0.35)`): toda etiqueta e o formulário de contato.
- **Etiqueta erguida** (`box-shadow: 0 1px 1px rgb(11 13 16 / 0.12), 0 18px 32px -16px rgb(11 13 16 / 0.45)`): hover de etiqueta clicável.
- **Friso da fita** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.06), inset 0 -1px 0 rgb(0 0 0 / 0.5)`): todo elemento de fita.

### Named Rules
**The Papel Colado Rule.** Só etiqueta tem sombra, e é sombra de adesivo: curta e próxima. Nenhuma sombra dura deslocada, nenhum brilho, nenhum vidro.

## Shapes

Cantos pequenos e funcionais. Botões e chips de fita com 3px; carimbo com 4px; etiqueta com 6px, o canto arredondado do corte. Campos de ficha não têm raio: são células de 1px tinta que se sobrepõem (margem -1px) formando uma grade de formulário. Telas reais do produto ficam em molduras de 6px. Recortes tracejados (1px, mudo a 40%) marcam onde a etiqueta estava no forro; divisórias tracejadas em linha separam o rodapé de dados dentro da etiqueta. O único círculo é o marcador numerado da linha do tempo em Como funciona.

Etiquetas do herói recebem giro leve (entre -1.2deg e 1deg) pela variável de giro; o carimbo gira -6deg.

## Components

### Buttons
Diretos, de balcão: retângulo quase reto, peso bold levemente condensado.
- **Shape:** quase reto (3px)
- **Primary:** azul com texto papel, 16px por 24px, Archivo 700 a 90% de largura, 1rem. Pode levar ícone de 20px à esquerda.
- **Hover / Focus:** hover troca para azul-escuro (transição de cor). Foco visível: contorno de 2px azul a 3px de distância; sobre fita ou tinta o contorno é ciano.
- **Claro:** papel com texto tinta, hover forro. Usado só sobre fundo escuro.
- **Link com seta:** texto bold tinta com sublinhado de 2px em linha a 6px; no hover o sublinhado vira azul.

### Chips
- **Fita:** fundo fita com friso, texto papel, 3px de raio. Usado para contatos de WhatsApp (nome bold + telefone em mono + ícone ciano) e para o público-alvo nos Benefícios. Hover em fita-2.

### Cards / Containers
- **Etiqueta:** papel, 6px, sombra de etiqueta colada, 20px de padding (24 a 32px em formulário e ficha). Rodapé de dados com código de barras e código RT em mono, separado por régua tracejada.
- **Cartela (Serviços):** forro com borda de 1px mudo a 25%, etiquetas de larguras desiguais numa grade de 6 colunas (4+2 / 2+4). As células usam hoje 10px de raio e contorno de 1px em vez da sombra de etiqueta (ver Do's and Don'ts).
- **Ficha regrada (Sobre):** lista de termos com célula de rótulo de 11rem à esquerda separada por régua tinta.

### Inputs / Fields
- **Style:** célula de ficha: borda de 1px tinta, papel, sem raio, rótulo condensado em mudo dentro da caixa no canto superior, valor em 1rem logo abaixo. Células vizinhas se sobrepõem 1px.
- **Focus:** borda e anel de 1px azul, a célula sobe de camada. Cursor de texto azul.
- **Placeholder:** mudo a 70%.

### Navigation
Fita fixa no topo, logo à esquerda, links em Archivo 600 a 85% de largura, 0.95rem, papel a 75%, hover papel cheio. CTA azul compacto à direita (10px por 16px, 0.875rem). Em telas menores que 1024px, menu de fita em painel abaixo do cabeçalho com itens separados por régua papel a 10% e CTA azul em largura total. Links mudam por rota (home ou SGEPI).

### Carimbo
Borda de 3px na cor atual (azul), 4px de raio, Archivo 800 a 80% de largura, 0.875rem, 0.12em, caixa alta, girado -6deg, mistura multiply sobre o papel. Bate uma vez (escala 1.6 para 1, 0.45s, atraso 0.9s). Usado para confirmar: "Feito por nós" na etiqueta do SGEPI, "Assinada" na ficha.

### Código de barras
SVG gerado deterministicamente do texto do código (mesmo texto, mesmo desenho), preenchido com a cor atual, decorativo (aria-hidden). Sempre acompanha um código RT-XXX ou de entrega legível em mono.

## Do's and Don'ts

### Do:
- **Do** usar azul só para ação e confirmação, e ciano só sobre fita ou tinta.
- **Do** abrir listas com régua de 2px tinta e separar itens com 1px linha.
- **Do** colocar o rótulo condensado dentro ou ao lado do dado que ele nomeia (campo, coluna, legenda).
- **Do** acompanhar todo código de barras de um código legível em JetBrains Mono.
- **Do** limitar o movimento a colar etiqueta (0.7s, cubic-bezier(0.16, 1, 0.3, 1)) e bater carimbo, desligados com prefers-reduced-motion.
- **Do** usar o anel de foco de 2px azul com 3px de distância, ciano sobre fundo escuro.
- **Do** alternar papel e forro entre seções em vez de traçar bordas entre elas.

### Don't:
- **Don't** fazer hero escuro com brilho azul nem grade de cards iguais.
- **Don't** pôr rótulo ou sobretítulo acima do título de seção.
- **Don't** usar sombra fora da etiqueta, nem sombra dura deslocada, vidro ou gradiente.
- **Don't** usar mono em texto corrido ou em títulos.
- **Don't** usar o vermelho de alerta fora de marcação de não conformidade.
- **Don't** tomar como padrão as duas seções inteiras em tinta (bloco SGEPI da home e bloco Mobile do SGEPI): o mundo prevê fita só no topo e no rodapé; são desvios do build atual.
- **Don't** copiar o raio de 10px e o contorno de 1px das células da cartela de Serviços: a etiqueta do sistema é 6px com sombra de etiqueta colada.

### Pendências do mundo (contrato ainda não cumprido pelo build)
- Etiquetas ainda não têm o canto de corte da cartela.
- O carimbo é uma borda sólida girada, sem textura de tinta.
