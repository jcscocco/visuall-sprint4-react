# VisuAll — Sprint 4 Web Development + Front-end Design

Evolução da landing page VisuAll da Sprint 3 para React. Preserva o conteúdo, a identidade preta e dourada, a fonte Inter, as imagens da equipe e o vídeo do projeto original. Inclui demonstração interativa, avaliação local e área de favoritos.

## Base e inspiração
Utilizamos o site VisuAll original da equipe como base e inspiração visual para esta entrega, mantendo a mesma proposta da Challenge e evoluindo o trabalho da Sprint 3. A versão anterior foi construída com HTML, CSS e JavaScript; nesta versão, a interface foi migrada para React, com componentes JSX, rotas, props e hooks, além do uso de Tailwind CSS. CSS continua sendo utilizado na estilização e na preservação da identidade original.

- GitHub do projeto usado como base: https://github.com/visuall2k26/visuall2k26.github.io
- Site original: https://visuall2k26.github.io/html/index.html
- Versão React desta entrega: https://github.com/jcscocco/visuall-sprint4-react

## Tecnologias
React, JavaScript, Vite, React Router, Tailwind CSS 4 e CSS da landing page original. Projeto sem backend e sem banco de dados: a API mockada é um arquivo JSON servido via HTTP e os dados pessoais de teste são armazenados no localStorage.

## Executar
Instale Node.js 22.12+ ou 24. Na pasta do projeto:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite (normalmente http://localhost:5173).

```bash
npm run build
npm run preview
```

O build gera a pasta `dist`. Não há servidor de backend para iniciar.

## Testar os requisitos
- Componentes funcionais: `Cabecalho`, `Rodape`, `Simulador`, `Avaliacao` e `CartaoSinal`.
- Props: `Area` envia `sinal`, `favorito` e `aoFavoritar` ao componente filho `CartaoSinal`.
- Rotas públicas: `/` e `/login`. Rota privada: `/area`, redirecionando visitantes para `/login`.
- Hooks nativos: `useState` e `useEffect`. Hooks customizados: `useLocalStorage` e `useSinais`.
- API mockada: `fetch('/api/sinais.json')` no hook `useSinais`, com carregamento e tratamento de erro. Teste o endereço diretamente no navegador.
- Tailwind: layouts responsivos, espaçamentos, cores e cartões das novas telas e do simulador.
- Persistência: login demonstrativo, favoritos e avaliações locais com `localStorage`.
- Math: sorteio de palavras no simulador e arredondamento da média de avaliações.

Entre em `/area`: sem login você deve ir para `/login`. Use **aluno@visuall.com** e senha **visuall123**. Salve um favorito, atualize a página e confirme que ele continua marcado. Teste a busca e o filtro. Clique em Sair e confirme o bloqueio da área. Avalie a landing page e recarregue para verificar a média.

O login é somente uma simulação acadêmica no front-end. Não utiliza dados reais nem oferece segurança de autenticação de produção. O simulador sorteia exemplos: o reconhecimento real de Libras pertence ao app Android original.

## Publicação obrigatória: GitHub e Vercel
Versão React publicada no repositório abaixo. Publicação na Vercel concluída.

- Repositório da versão React: https://github.com/jcscocco/visuall-sprint4-react
- Deploy na Vercel: https://visuall-sprint4-react.vercel.app/
- Referência original: https://visuall2k26.github.io/html/index.html

Passos rápidos: crie um repositório no GitHub, envie os arquivos desta pasta (sem `node_modules`), entre na Vercel e importe esse repositório. Selecione Vite, comando de build `npm run build` e diretório de saída `dist`. O arquivo `vercel.json` já configura o retorno ao React nas rotas do navegador. Copie o endereço gerado para este README. Alternativamente, com Vercel CLI instalada e sua conta autenticada: `npx vercel --prod`.

## Integrantes e entrega
Os nomes e RMs fornecidos pela equipe estão em `INTEGRANTES.TXT`. A entrega pede um ZIP com código, README e INTEGRANTES.TXT, além dos links GitHub e Vercel. Não inclua `node_modules` no ZIP.

## Uso de IA
Foi utilizado o Codex para auxiliar na leitura dos requisitos, migração do HTML original para componentes React, configuração do Vite e Tailwind, criação das rotas e hooks, implementação da API mockada e redação desta documentação. O conteúdo visual e a proposta VisuAll foram reaproveitados do projeto original da equipe. A equipe deve revisar e compreender o código antes de apresentar.

## Verificação realizada
Build de produção executado com sucesso (`npm run build`). No site publicado, foram verificados o redirecionamento da rota privada sem login, o login demonstrativo, o carregamento da API mockada e a persistência do favorito após recarregar a página. A página inicial foi inspecionada visualmente em desktop. Os layouts possuem breakpoints responsivos; não foi feita uma inspeção visual completa de todas as telas em tablet e celular. GitHub e Vercel publicados com sucesso.
