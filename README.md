# 📊 DNC Sales Dashboard

## Visão Geral
Este projeto faz parte do curso de **React com TypeScript** e consiste na criação de um **dashboard de acompanhamento de vendas** para uma empresa fictícia.  
O objetivo é oferecer uma experiência prática de desenvolvimento de aplicações modernas, cobrindo desde configuração inicial até boas práticas de código e testes automatizados.

> ⚠️ Importante: O projeto utiliza dados fictícios e o logo da DNC apenas para fins educacionais.

---

## 🚀 Funcionalidades Principais
- **Tela de Login**: autenticação de usuários para acesso ao sistema.
- **Homepage**: exibição de informações gerais e gráficos dinâmicos de vendas.
- **Gerenciamento de Leads**: cadastro, listagem e exclusão de leads com atualização em tempo real.
- **Perfil de Usuário**: edição e exclusão de dados do perfil.
- **Tema Claro/Escuro**: alternância entre temas com persistência da preferência.
- **Rotas Protegidas**: segurança para acesso às páginas restritas.

---

## 🔎 Detalhamento das Funcionalidades
### 1. Login e Autenticação
- Formulário de login.
- Usuário de teste para validação.
- Rotas protegidas para usuários não autenticados.

### 2. Homepage
- Informações de vendas: total do mês, meta, leads contactados.
- Gráficos: linha (vendas mensais) e barras (informações adicionais).
- Ranking dos maiores vendedores.
- Seção de notícias relevantes.

### 3. Leads
- Cadastro de novos leads.
- Listagem e exclusão com modal de confirmação.
- Atualização em tempo real.

### 4. Perfil
- Visualização e edição de dados.
- Atualização de informações como nome e telefone.
- Exclusão da conta.

### 5. Tema
- Alternância entre claro e escuro.
- Aplicação global do tema.
- Persistência da escolha do usuário.

---

## 🛠️ Tecnologias Utilizadas
- **React + TypeScript**
- **ESLint + Prettier** (padrões de código e formatação)
- **Husky** (hooks de pre-commit)
- **Jest** (testes unitários com cobertura)
- **Cypress** (testes end-to-end)
- **CSS Responsivo**
- **Simulação de Backend** (requisições e respostas dinâmicas)

---

## ✅ Fluxo de Desenvolvimento
1. **Setup inicial**: configuração do projeto com React + TS.
2. **Componentes básicos**: criação de elementos fundamentais.
3. **Funcionalidades**: login, leads, perfil, tema.
4. **Testes automatizados**: unitários (Jest) e end-to-end (Cypress).
5. **Refinamento**: otimização de performance e UX.

---

## 📐 Padrões Adotados
- **Commits**: convenções com prefixos (`feat`, `fix`, `docs`).
- **Linting**: regras de boas práticas com ESLint.
- **Formatação**: padronização automática com Prettier.
- **Documentação**: comentários claros e README detalhado.

---

## 🧪 Qualidade Garantida
O projeto conta com um fluxo de **pre-commit automatizado** via Husky:
- `Prettier` → formatação automática.
- `ESLint` → validação de estilo e boas práticas.
- `Jest` → execução dos testes unitários.
- `Cypress` → testes end-to-end em páginas críticas (login e cadastro).

Isso garante que nenhum commit seja feito com código quebrado ou fora dos padrões.

---

## 🎨 Recursos Adicionais
- **Figma**: layouts para tema claro/escuro e versão mobile.
- **Documentação complementar**: guias sobre padrões de código e conceitos de React + TS.

---

## 📈 Conclusão
Este projeto combina desafios técnicos com práticas reais do dia a dia de um desenvolvedor.  
Ao final, você terá:
- Habilidades sólidas em **React** e **TypeScript**.
- Experiência com **testes automatizados** e **fluxos de CI local**.
- Conhecimento em **boas práticas e padrões de mercado**.

Tudo isso dentro de um ambiente que simula o trabalho em equipe e prepara para o mercado de tecnologia.
