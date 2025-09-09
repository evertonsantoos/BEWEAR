# 🛍️ E-commerce App

Uma aplicação de e-commerce moderna e completa construída com Next.js 15, TypeScript e tecnologias de ponta.

## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes UI
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **React Query** - Gerenciamento de estado do servidor

### Backend & Banco de Dados

- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM type-safe para TypeScript
- **BetterAuth** - Sistema de autenticação moderno
- **Server Actions** - Ações do servidor do Next.js

### Pagamentos & Integrações

- **Stripe** - Processamento de pagamentos
- **Google OAuth** - Autenticação social

## ✨ Funcionalidades

### 🛒 E-commerce

- **Catálogo de produtos** com categorias
- **Variantes de produtos** (cores, tamanhos, etc.)
- **Carrinho de compras** persistente
- **Sistema de endereços** de entrega
- **Checkout completo** com Stripe
- **Histórico de pedidos**

### 👤 Autenticação

- **Login/Registro** com email e senha
- **Autenticação social** com Google
- **Sessões seguras** com BetterAuth
- **Gerenciamento de perfil** do usuário

### 🎨 Interface

- **Design responsivo** para todos os dispositivos
- **Componentes reutilizáveis** com shadcn/ui
- **Tema moderno** com Tailwind CSS
- **UX otimizada** para conversão

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta no Stripe
- Conta no Google Cloud (para OAuth)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd my-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Google OAuth
GOOGLE_CLIENT_ID="seu_client_id"
GOOGLE_CLIENT_SECRET="seu_client_secret"

# BetterAuth
BETTER_AUTH_SECRET="seu_secret_super_seguro"
BETTER_AUTH_URL="http://localhost:3000"
```

### 4. Configure o banco de dados

```bash
# Execute as migrações
npx drizzle-kit push

# (Opcional) Popule o banco com dados de exemplo
npm run db:seed
```

### 5. Execute o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 📁 Estrutura do Projeto

```
src/
├── actions/           # Server Actions do Next.js
├── app/              # Páginas e rotas (App Router)
│   ├── api/          # API Routes
│   ├── authentication/ # Páginas de login/registro
│   ├── cart/         # Páginas do carrinho
│   ├── category/     # Páginas de categorias
│   ├── checkout/     # Páginas de checkout
│   ├── my-orders/    # Páginas de pedidos
│   └── product-variant/ # Páginas de produtos
├── components/       # Componentes reutilizáveis
│   ├── common/       # Componentes comuns
│   └── ui/           # Componentes UI (shadcn/ui)
├── data/             # Funções de busca de dados
├── db/               # Configuração do banco (Drizzle)
├── hooks/            # Hooks customizados (React Query)
├── lib/              # Utilitários e configurações
└── providers/        # Providers do React
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento

# Produção
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Executa o linter
```

## 🎯 Principais Funcionalidades Implementadas

### Sistema de Carrinho

- Adicionar/remover produtos
- Alterar quantidades
- Persistência entre sessões
- Cálculo automático de totais

### Processo de Checkout

- Seleção de endereço de entrega
- Integração com Stripe
- Webhook para confirmação de pagamento
- Geração de pedidos

### Gerenciamento de Produtos

- Catálogo com categorias
- Variantes de produtos
- Busca e filtros
- Páginas de detalhes

### Autenticação

- Login/registro tradicional
- OAuth com Google
- Sessões seguras
- Middleware de proteção

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras plataformas

A aplicação é compatível com qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
