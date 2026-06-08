# Portal das Plantas que Nutrem

Portal educativo e catálogo colaborativo de **Plantas Alimentícias Não Convencionais (PANCs)**, desenvolvido como projeto de extensão universitária. Reúne espécies com rigor técnico, uso culinário e cuidados de segurança alimentar.

🌱 **Acesse o projeto:** [site-guia-pancs-iota.vercel.app](https://site-guia-pancs-iota.vercel.app)

---

## Sobre o projeto

PANCs são plantas com potencial alimentar ainda pouco explorado pela população, mas que há séculos fazem parte da alimentação humana e crescem ao redor das pessoas sem serem reconhecidas. Este portal nasce da necessidade de reunir e democratizar esse conhecimento de forma acessível, segura e com curadoria técnica.

O sistema permite que qualquer pessoa envie uma nova espécie para análise. Antes de ser publicada no catálogo público, a espécie passa por revisão da curadoria de conteúdo — garantindo que apenas informações confiáveis e verificadas sejam exibidas.

### Funcionalidades

- Catálogo público com 12 espécies PANC catalogadas em 4 categorias
- Fichas individuais por espécie: nome popular, nome científico, família botânica, partes comestíveis, uso culinário e cuidados de segurança
- Seção dedicada à segurança alimentar no consumo de PANCs
- Submissão de novas espécies pela comunidade com fluxo de aprovação
- Notificação automática por e-mail para a curadoria ao receber nova submissão
- Painel de gerenciamento de espécies pendentes (rascunho → enviado → em análise → aprovado → publicado)
- Página de metodologia e fluxo de aprovação documentados
- Site responsivo (funciona em celular e computador)

---

## Captura de telas (evidências)

https://github.com/user-attachments/assets/33c717cf-3224-494e-920a-f4e40bfa7533

https://github.com/user-attachments/assets/21b63a33-a300-48ff-98a2-05201a4a29f9

https://github.com/user-attachments/assets/ad3f9a56-ca0a-4fd4-b23f-44824d9e9d77

https://github.com/user-attachments/assets/14a318d8-d91f-4e11-8d69-fc1cbe303055

https://github.com/user-attachments/assets/f708fc80-d4dd-41e1-8d65-abab006b0857

Evidência que a solicitação de analise de uma nova especie é enviada para a curadoria do projeto

<img width="210" height="400" alt="Image" src="https://github.com/user-attachments/assets/ea8fc6a9-7806-4c0a-94a8-688354560c26" />


---

## Tecnologias utilizadas

| Tecnologia | Uso |
|------------|-----|
| [Next.js 15](https://nextjs.org/) (App Router) | Framework React com roteamento e API routes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática em todo o projeto |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de interface acessíveis |
| [Framer Motion](https://www.framer.com/motion/) | Animações de entrada e transições |
| [Lucide React](https://lucide.dev/) | Ícones |
| [Resend](https://resend.com/) | Envio automático de e-mail via API |
| [Vercel](https://vercel.com/) | Deploy e hospedagem |

---

## Estrutura de pastas

```
src/
├── app/                          # Rotas e API (Next.js App Router)
│   ├── api/
│   │   ├── admin/login/          # Autenticação do painel
│   │   ├── admin/logout/
│   │   └── species/submit/       # Envio de e-mail via Resend
│   ├── especies/                 # Página do catálogo público
│   ├── seguranca/                # Página de segurança alimentar
│   ├── projeto/                  # Sobre o projeto
│   ├── fluxo-de-aprovacao/       # Fluxo de curadoria
│   ├── metodologia/              # Metodologia do projeto
│   ├── painel/                   # Painel de submissão e gestão
│   ├── layout.tsx                # Layout raiz (metadados, fontes, SEO)
│   ├── page.tsx                  # Página inicial
│   ├── sitemap.ts                # Sitemap automático
│   └── robots.ts                 # Robots.txt
│
├── components/
│   ├── ui/                       # Componentes shadcn/ui
│   ├── layout/                   # Header, Footer, ContentShell
│   ├── pages/                    # Client wrappers por rota
│   ├── species/                  # SpeciesCard
│   ├── admin/                    # AdminForm, AdminSidebar, PendingList
│   ├── common/                   # StatusBadge, ImageFrame
│   └── illustrations/            # SVGs decorativos e placeholders
│
├── sections/                     # Conteúdo de cada página
│   ├── HomeSection.tsx
│   ├── SpeciesSection.tsx
│   ├── SecuritySection.tsx
│   ├── ProjectSection.tsx
│   ├── AdminSection.tsx
│   └── ApprovalFlowSection.tsx
│
├── hooks/
│   └── useSpecies.ts             # Estado global: busca, filtros, CRUD, persistência
│
├── data/
│   ├── species.ts                # Catálogo inicial de espécies (12 espécies)
│   └── constants.ts              # Classes, e-mails de curadoria, formulário vazio
│
├── types/
│   └── species.ts                # Tipos: Species, SpeciesFormData, SpeciesStatus
│
└── lib/
    ├── utils.ts                  # Utilitários (cn)
    └── adminAuth.ts              # Lógica de autenticação do painel
```

---

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/fariasangelica/site-guia-pancs.git
cd site-guia-pancs

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com seus valores (veja a seção abaixo)

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha os valores:

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL do site (ex.: `http://localhost:3000`) |
| `ADMIN_PASSWORD` | Senha de acesso ao painel administrativo |
| `RESEND_API_KEY` | Chave de API do [Resend](https://resend.com) para envio de e-mails |
| `EMAIL_FROM` | Remetente dos e-mails (ex.: `onboarding@resend.dev` no modo de teste) |

> Sem `RESEND_API_KEY`, o envio de e-mail ao cadastrar uma espécie não funcionará. Em modo de teste (`onboarding@resend.dev`), o Resend entrega apenas para o e-mail da conta cadastrada.

---

## Deploy

O projeto está hospedado na [Vercel](https://vercel.com). Para configurar seu próprio deploy:

1. Importe o repositório no Vercel
2. Configure as variáveis de ambiente em **Settings → Environment Variables**
3. Faça o deploy — o Vercel detecta automaticamente o Next.js

---

## Dados levantados

### Estrutura de dados por espécie

Cada espécie catalogada possui os seguintes campos:

| Campo | Descrição |
|-------|-----------|
| Nome popular | Nome pelo qual a planta é conhecida popularmente |
| Nome científico | Nomenclatura binomial (gênero e espécie) |
| Família botânica | Classificação taxonômica da família |
| Categoria | Grupo alimentar (Folhosas, Flores comestíveis, Raízes e rizomas, Frutos) |
| Partes comestíveis | Quais partes da planta podem ser consumidas |
| Uso culinário | Formas de preparo e receitas |
| Cuidados de segurança | Alertas e instruções para consumo seguro |
| Relevância | Contexto cultural, nutricional ou ambiental da espécie |
| Fonte | Referência da informação |

### Espécies catalogadas (12 espécies / 4 categorias)

**Folhosas**

| Espécie | Nome científico | Família | Destaque |
|---------|----------------|---------|----------|
| Ora-pro-nóbis | *Pereskia aculeata* | Cactaceae | ⭐ |
| Taioba | *Xanthosoma taioba* | Araceae | ⭐ |
| Caruru | *Amaranthus viridis* | Amaranthaceae | ⭐ |
| Bertalha | *Basella alba* | Basellaceae | — |
| Serralha | *Sonchus oleraceus* | Asteraceae | — |
| Major-gomes | *Talinum paniculatum* | Talinaceae | — |
| Beldroega | *Portulaca oleracea* | Portulacaceae | — |
| Trapoeraba | *Commelina benghalensis* | Commelinaceae | — |
| Azedinha | *Oxalis triangularis* | Oxalidaceae | — |
| Tansagem | *Plantago major* | Plantaginaceae | — |

**Flores comestíveis**

| Espécie | Nome científico | Família |
|---------|----------------|---------|
| Capuchinha | *Tropaeolum majus* | Tropaeolaceae |

**Raízes e rizomas**

| Espécie | Nome científico | Família |
|---------|----------------|---------|
| Araruta | *Maranta arundinacea* | Marantaceae |

### O que os dados revelam

- **Diversidade botânica:** as 12 espécies pertencem a 11 famílias botânicas diferentes, mostrando a amplitude das PANCs
- **Predominância de folhosas:** 10 das 12 espécies são folhosas, refletindo a maior facilidade de cultivo e acesso urbano
- **Presença regional:** espécies como taioba (tradição mineira) e caruru (culinária afro-brasileira baiana) mostram o enraizamento cultural das PANCs
- **Risco de confusão:** todas as espécies têm cuidados de segurança documentados — identificação correta e higienização são pontos críticos para o consumo seguro
- **Alto potencial nutricional:** espécies como beldroega (ômega-3), ora-pro-nóbis (proteína vegetal) e caruru (ferro e cálcio) são nutricionalmente expressivas

---

## Fluxo de aprovação de espécies

```
Contribuição → Preenchimento do formulário no painel
     ↓
Envio para análise → E-mail automático para a curadoria
     ↓
Revisão → Curadoria analisa os dados e fontes
     ↓
Publicação → Espécie entra no catálogo público
```

Os status possíveis de uma espécie são:
`rascunho` → `enviado` → `em_analise` → `aprovado` → `publicado` (ou `rejeitado`)

---

## Limitações conhecidas (versão atual)

- Os dados do catálogo são persistidos em `localStorage` do navegador. Cada dispositivo tem sua própria sessão — submissões de diferentes usuários não são compartilhadas em tempo real.
- O fluxo completo de aprovação (publicar/rejeitar) está parcialmente implementado na UI; a transição manual entre status será completada na próxima versão.

---

## Referências

- Kinupp, V. F.; Lorenzi, H. **Plantas Alimentícias Não Convencionais (PANC) no Brasil**. Instituto Plantarum, 2014.
- Diagrama de metodologia adaptado de Robson Camargo, "Diagrama de rede na gestão de projetos".
- Imagens das espécies: [Wikimedia Commons](https://commons.wikimedia.org/) (licenças livres).
- Textos de segurança e descrição das plantas: baseados em pesquisa sobre alimentação alternativa e uso culinário das espécies.

---

## Autora

Desenvolvido por **Angélica Farias de Oliveira** como projeto de extensão universitária.

📧 angelicafarioliveira@gmail.com
