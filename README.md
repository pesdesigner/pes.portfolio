# Portfolio | Paulo Eduardo

Portfolio pessoal desenvolvido com React e Vite para apresentar perfil profissional, projetos em destaque, hobbies e canais de contato.

## Tecnologias

- React 18
- Vite 5
- CSS customizado com suporte a tema claro e escuro
- GitHub Actions para deploy no GitHub Pages

## Funcionalidades

- Hero section com foto, capa e resumo profissional
- Cards de projetos com stacks e links para os repositórios
- Sessão de hobbies com links externos
- Footer com redes sociais
- Alternância entre modo claro e dark mode com persistência em `localStorage`
- Deploy automatizado para GitHub Pages via GitHub Actions

## Como executar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Os arquivos finais são gerados na pasta `dist`.

## Deploy

O projeto possui workflow em `.github/workflows/deploy-pages.yml`.

Ao publicar mudanças na branch `main`, o GitHub Actions:

1. instala as dependências
2. executa o build com Vite
3. publica o conteúdo de `dist` no GitHub Pages

Depois do primeiro push, habilite em `Settings > Pages` a opção `Build and deployment: GitHub Actions`.

## Repositório

https://github.com/pesdesigner/pes.portfolio
