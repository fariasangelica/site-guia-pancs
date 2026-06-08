# Guia Vivo das PANCs

Portal educativo e catálogo progressivo de **Plantas Alimentícias Não Convencionais (PANCs)**, com curadoria técnica e governança editorial.

## Estrutura do projeto

```
src/
├── app/
│   ├── globals.css         # Variáveis CSS e reset do Tailwind
│   ├── layout.tsx          # Layout raiz (metadados, fonte)
│   └── page.tsx            # Página principal — monta as abas
│
├── types/
│   └── species.ts          # Tipos TypeScript: Species, SpeciesFormData, SpeciesStatus
│
├── data/
│   ├── species.ts          # Dados iniciais do catálogo
│   └── constants.ts        # Classes, e-mails de curadoria, formulário vazio
│
├── hooks/
│   └── useSpecies.ts       # Toda a lógica de estado (busca, filtros, CRUD)
│
├── components/
│   ├── ui/                 # Componentes shadcn/ui (Badge, Button, Card, etc.)
│   ├── illustrations/
│   │   ├── BotanicalLineArt.tsx        # SVG decorativo botânico
│   │   └── PlaceholderSpeciesImage.tsx # Ilustração de fallback para imagens
│   ├── common/
│   │   ├── StatusBadge.tsx  # Badge de status com mapa de cores
│   │   └── ImageFrame.tsx   # Wrapper de imagem com fallback automático
│   ├── species/
│   │   └── SpeciesCard.tsx  # Card completo de uma espécie
│   └── admin/
│       ├── AdminForm.tsx    # Formulário de cadastro/edição de espécie
│       ├── AdminSidebar.tsx # Cards de regras do painel e curadoria
│       └── PendingList.tsx  # Lista de itens pendentes de aprovação
│
└── sections/
    ├── HomeSection.tsx          # Aba "Início"
    ├── SpeciesSection.tsx       # Aba "Espécies" (busca + catálogo)
    ├── SecuritySection.tsx      # Aba "Segurança"
    ├── ProjectSection.tsx       # Aba "Sobre o projeto"
    ├── AdminSection.tsx         # Aba "Painel admin"
    └── ApprovalFlowSection.tsx  # Aba "Fluxo de aprovação"
```

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Tecnologias

- [Next.js 15](https://nextjs.org/) com App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Referências

- Diagrama de metodologia adaptado de Robson Camargo, "Diagrama de rede na gestão de projetos".
- Textos de plantas e segurança baseados em pesquisa de PANCs e fontes de culinária alternativa.
- Capturas de tela e imagens apresentadas no projeto são geradas a partir do sistema em desenvolvimento.
