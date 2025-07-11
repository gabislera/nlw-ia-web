# NLW IA - Web

Projeto front-end desenvolvido em React, utilizando Vite, TypeScript e TailwindCSS.

## Principais Bibliotecas

- **React**: Biblioteca principal para construção da interface.
- **Vite**: Bundler e servidor de desenvolvimento rápido.
- **TypeScript**: Tipagem estática para JavaScript.
- **TailwindCSS**: Framework utilitário para estilização.
- **React Router DOM**: Gerenciamento de rotas SPA.
- **@tanstack/react-query**: Gerenciamento de dados assíncronos e cache.
- **Radix UI**: Componentes acessíveis e semânticos.
- **Lucide React**: Ícones SVG.
- **Class Variance Authority, clsx, tailwind-merge**: Utilitários para composição de classes CSS.

## Ferramentas de Qualidade

- **TypeScript**: Tipagem estática.
- **ESLint**: Linting de código.
- **Biome**: Linting e formatação moderna (arquivo `biome.jsonc`).

## Padrões de Projeto

- **Componentização**: Componentes reutilizáveis em `src/components`.
- **Pages/Rotas**: Páginas em `src/pages`, utilizando React Router.
- **Hooks e Providers**: Uso de React Query para gerenciamento de estado assíncrono.
- **Estilização**: TailwindCSS com utilitários e variantes customizadas.

## Setup e Execução

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   ```
3. Build para produção:
   ```bash
   npm run build
   ```
4. Preview do build:
   ```bash
   npm run preview
   ```
5. Lint do código (ESLint):
   ```bash
   npm run lint
   ```
6. Lint e formatação com Biome (opcional):
   ```bash
   npx biome check .
   npx biome format .
   ```

## Observações

- Arquivos de configuração do TypeScript, Vite, ESLint e Biome já inclusos.
- Para customização de temas, utilize as variáveis do Tailwind em `src/index.css`.
- Estrutura de pastas favorece escalabilidade e organização do código.
