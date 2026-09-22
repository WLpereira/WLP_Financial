# 📘 Manual & Guia do Usuário — WLP Financial

Seja muito bem-vindo ao **WLP Financial**! Este guia foi elaborado de forma simples, direta e ilustrada para você entender tudo sobre o sistema e utilizá-lo no seu dia a dia sem qualquer complicação.

---

## 🎯 1. O que é o WLP Financial e para que serve?

O **WLP Financial** é um sistema completo de **gestão e controle financeiro pessoal e empresarial**. 

Com ele você tem total clareza sobre:
- *"Para onde foi o meu dinheiro este mês?"*
- *"Quanto eu gastei com alimentação, contas fixas, lazer ou saúde?"*
- *"Quais contas eu tenho a pagar ou receber nos próximos dias?"*
- *"Qual o saldo em cada banco, carteira ou meio de movimentação?"*

Tudo isso de forma visual, organizada e acessível em tempo real pelo computador, tablet ou celular.

---

## 🧭 2. Como acessar o Sistema (Hospedado na Vercel)

O sistema está implantado em nuvem e disponível 24 horas por dia:

1. **Link oficial de acesso (Vercel):** [https://wlp-financial-green.vercel.app](https://wlp-financial-green.vercel.app)
2. **Criar sua conta:** Caso seja seu primeiro acesso, clique em **Registrar**, informe seu nome, e-mail e crie uma senha.
3. **Fazer Login:** Digite seu e-mail e senha para entrar no painel.

> 📱 **Dica para celular:** Você pode adicionar o WLP Financial à tela de início do seu smartphone (Chrome ou Safari) para utilizá-lo como se fosse um aplicativo nativo!

---

## 🧩 3. Conhecendo as Principais Áreas do Menu

No menu lateral esquerdo do sistema, você encontra todas as funcionalidades organizadas:

```text
┌─────────────────────────────────────────────────────────────┐
│  📊 Dashboard          (Visão Geral, Totais e Gráficos)     │
│  🏦 Locais             (Contas Bancárias, Carteira, Caixas) │
│  💵 Fluxo de Caixa     (Entradas e Saídas Diárias)          │
│  💳 Tipos de Despesas  (Meios de Movimentação: Pix, Cartão) │
│  📅 Agenda             (Calendário e Contas Programadas)    │
│  📂 Categorias         (Elementos, Subelementos, Tipos)     │
│  👤 Meu Perfil         (Dados Pessoais e Foto)              │
│  🚪 Sair               (Logout seguro do sistema)           │
└─────────────────────────────────────────────────────────────┘
```

---

### 📊 3.1. Dashboard (Painel Principal)
O **Dashboard** é o seu painel de controle financeiro:
- **Total de Receitas:** Todas as entradas de dinheiro no período selecionado.
- **Total de Despesas:** Tudo o que foi pago ou gasto.
- **Saldo Atual:** Saldo líquido resultante (Entradas menos Saídas).
- **Gráficos Interativos:** Visualização da distribuição dos seus gastos por categoria e histórico mensal.

---

### 🏦 3.2. Locais (Onde seu dinheiro está guardado)
Os **Locais** representam as contas onde você guarda e movimenta recursos.
- **Exemplos:** *Nubank, Banco Itaú, Carteira (Dinheiro Físico), Bradesco, Inter, Poupança*.
- **Como cadastrar:** Acesse **Locais** ➔ Clique em **Adicionar +** ➔ Digite o nome do local e salve.
- **Utilidade:** Ao lançar qualquer entrada ou saída, você escolhe de qual conta/local o dinheiro saiu ou entrou.

---

### 💳 3.3. Tipos de Despesas (Meios de Movimentação)
Esta tela define **a forma de pagamento/recebimento** utilizada nas suas transações.
- **Exemplos:** *PIX, Cartão de Crédito, Cartão de Débito, Dinheiro, Boleto Bancário, Transferência TED*.
- **Como cadastrar:**
  1. No menu lateral, clique em **Tipos de Despesas**.
  2. Clique no botão **`Adicionar +`** no topo da tela.
  3. Digite o nome do meio de movimentação (ex: *Cartão de Crédito Nubank* ou *PIX*).
  4. Clique em **Salvar +**.
- **Na prática:** Ao criar ou editar um lançamento no Fluxo de Caixa, essas opções aparecem na lista do campo **"Meio de movimentação"**.

---

### 📂 3.4. Categorias (Árvore Hierárquica em 4 Níveis)
Para uma organização financeira profunda e relatórios precisos, o sistema utiliza uma **estrutura em cascata**:

```text
1. Elementos (Categoria Raiz)
    └── 2. Subelementos
         └── 3. Tipos
              └── 4. Subtipos
```

#### Como navegar e cadastrar cada nível:

1. **Nível 1 — Elementos (Raiz):**
   - Acesse **Categorias** ➔ **Elementos**.
   - Clique em **`Adicionar +`** para criar um elemento macro (ex: *Alimentação*, *Moradia*, *Transporte*, *Lazer*).

2. **Nível 2 — Subelementos:**
   - Na tabela de Elementos, **clique em cima do nome do Elemento** (ex: clique no texto *"Alimentação"*).
   - Você entrará na tela de Subelementos daquela categoria.
   - Clique em **`Adicionar +`** para criar os subelementos (ex: *Supermercado*, *Refeições Fora*).

3. **Nível 3 — Tipos:**
   - Na lista de Subelementos, **clique em cima do nome do Subelemento** desejado.
   - A tela de **Tipos** daquele subelemento será aberta.
   - Clique em **`Adicionar +`** para cadastrar (ex: *Restaurante*, *Delivery*, *Padaria*).

4. **Nível 4 — Subtipos (Mais específico):**
   - Na lista de Tipos, **clique em cima do nome do Tipo**.
   - A lista de **Subtipos** será aberta para você clicar em **`Adicionar +`** (ex: *Ifood*, *Almoço Trabalho*).

---

### 💵 3.5. Fluxo de Caixa (Lançamentos Diários)
Onde você registra todas as suas movimentações cotidianas:

- **Registrar Entrada (Receita):** Salários, transferências recebidas, rendimentos, vendas.
- **Registrar Saída (Despesa):** Compras de mercado, contas de consumo, abastecimento, lazer.

**Passo a passo para um novo lançamento:**
1. Acesse **Fluxo de Caixa** ➔ Clique em **Adicionar Novo Item**.
2. Escolha se é uma **Entrada (🟢)** ou **Saída (🔴)**.
3. Preencha a **Data e Hora**, a **Descrição** e o **Valor**.
4. Selecione a classificação desejada: **Elemento**, **Subelemento**, **Tipo** e **Subtipo**.
5. Escolha o **Local** (qual banco/conta) e o **Meio de movimentação** (Pix, Cartão, etc.).
6. Clique em **Salvar**.

---

### 📅 3.6. Agenda & Programação (Contas Futuras e Recorrentes)
Para você nunca mais esquecer a data de vencimento de um boleto ou fatura:
- **Programação:** Cadastre contas recorrentes (aluguel, condomínio, assinaturas, parcelas) informando o valor previsto e dia do mês.
- **Agenda:** Visualize em formato de calendário os vencimentos de cada semana e mês.

---

### 👤 3.7. Meu Perfil
- Acessível clicando no seu nome ou avatar no topo superior direito.
- Permite alterar seus dados cadastrais (nome, telefone, etc.).
- **Foto de Perfil:** Arraste e solte uma imagem na área designada e clique em salvar para personalizar sua conta.

---

## 💡 4. Boas Práticas para o Sucesso Financeiro

1. **Lance na hora:** Gastou no cartão ou fez um Pix? Abra o sistema no celular e anote na mesma hora.
2. **Classifique corretamente:** Use os Elementos e Tipos adequados para saber exatamente para onde seu dinheiro foi ao final do mês.
3. **Monitore o Dashboard:** Toda semana faça uma checagem rápida para ver se seus gastos estão dentro do planejado.

---

## ❓ 5. Perguntas Frequentes (FAQ)

**1. Onde fica hospedada a aplicação?**
> A aplicação está hospedada na infraestrutura em nuvem de alta performance da **Vercel** ([https://wlp-financial-green.vercel.app](https://wlp-financial-green.vercel.app)).

**2. As informações ficam salvas automaticamente?**
> Sim! Todas as inclusões, edições e exclusões são sincronizadas em tempo real no banco de dados seguro do sistema.

**3. Posso editar ou excluir um lançamento errado?**
> Sim! Em qualquer tela de listagem (Fluxo de Caixa, Locais, Tipos de Despesas, etc.), cada item possui botões de ação à direita para **Visualizar (👁️)**, **Editar (✏️)** ou **Excluir (🗑️)**.

---

*Manual atualizado para o WLP Financial — Versão Produção (Vercel)*
