# Nexus Clip

Página estática de achadinhos gamer com Next.js, TypeScript e Tailwind CSS.

## Rodar localmente

Use Node.js 22 ou 24.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

Abra http://localhost:3000 durante o desenvolvimento. O build gera os arquivos estáticos em `out/`.

## Fotos e links

Salve as fotos em `public/products/`, usando estes nomes:

- `suporte-controle.webp`
- `display-lucia-jason.webp`
- `camiseta-vice-city.webp`
- `chaveiros-vice-city.webp`

O build usa automaticamente as fotos encontradas e exibe um indicador visual para arquivos ausentes. Edite os links, nomes ou textos alternativos em `data/products.ts` e gere um novo build após as alterações.

## Publicar na Vercel

Importe o repositório GitHub como um novo projeto, selecione o preset Next.js e mantenha a raiz do repositório como diretório do projeto. A Vercel executará `npm run build` e detectará a exportação estática. Confira os links no endereço gerado antes de usá-lo nas bios.

[Guia de publicação da Vercel](https://vercel.com/academy/ai-summary-app-with-nextjs/deploy-the-app)
