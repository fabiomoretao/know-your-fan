# Know Your Fan - FURIA

## 🎯 Objetivo do Projeto

O "Know Your Fan" (KYF) é uma aplicação web projetada para permitir que organizações de e-sports, como a FURIA, coletem informações detalhadas sobre seus fãs. O objetivo é entender melhor o público para oferecer experiências, conteúdos e serviços mais personalizados e exclusivos, fortalecendo o relacionamento entre a organização e sua base de fãs.

Este repositório contém o **frontend completo** da aplicação, desenvolvido como parte de um processo seletivo para a vaga de Assistente de Engenharia de Software.

## ✨ Funcionalidades do Frontend

O frontend implementa a interface completa para o usuário final (o fã), incluindo:

*   **Landing Page Imersiva:** Apresentação da iniciativa KYF com a identidade visual da FURIA, incluindo vídeo de fundo e seções informativas.
*   **Cadastro Multi-etapas:** Um fluxo guiado e intuitivo dividido em 4 etapas:
    1.  **Dados Pessoais e Interesses:** Coleta de informações básicas, endereço, preferências de e-sports, eventos frequentados e interesses gerais.
    2.  **Verificação de Identidade (Simulada):** Interface para upload de documento de identidade e selfie, com pré-visualização e simulação de validação.
    3.  **Conexão com Redes Sociais (Simulada):** Interface para simular a conexão com plataformas como Instagram, X (Twitter) e Facebook.
    4.  **Compartilhamento de Perfis E-sports (Simulada):** Interface para simular a conexão com plataformas de jogos (Steam, Battle.net, etc.) e coleta de consentimento.
*   **Interface Responsiva:** Design adaptável para diferentes tamanhos de tela (desktop, tablet, mobile).
*   **Componentização:** Construído com componentes reutilizáveis e modernos.

## 🛠️ Tecnologias Utilizadas (Frontend)

*   **Framework/Biblioteca:** React 18
*   **Linguagem:** TypeScript
*   **Build Tool:** Vite
*   **Estilização:** Tailwind CSS
*   **Componentes UI:** shadcn/ui (Radix UI + Tailwind)
*   **Roteamento:** React Router DOM v6
*   **Gerenciamento de Estado (Local):** React Hooks (`useState`)
*   **Gerenciamento de Estado (Servidor):** @tanstack/react-query (React Query) - Configurado, pronto para integração.
*   **Ícones:** Lucide React
*   **Validação (Intenção):** Zod + React Hook Form (dependências incluídas)
*   **Linting:** ESLint

## ❗ Status do Backend e Simulações

Devido a restrições de tempo inerentes ao desafio proposto, **o backend para esta aplicação não foi implementado**. Como resultado, todas as interações que dependeriam de uma API estão atualmente **simuladas** no frontend:

*   A submissão dos dados do formulário exibe os dados no console do navegador.
*   O upload de documentos apenas exibe a pré-visualização; os arquivos não são enviados.
*   A validação de documentos é simulada com um `setTimeout`.
*   A conexão com redes sociais e plataformas de e-sports apenas atualiza o estado visual da interface, sem realizar autenticação OAuth real.

## 📚 Documentação de Engenharia

Como parte do desenvolvimento, foi elaborada uma documentação detalhada de engenharia de software, refletindo a implementação do frontend e as melhores práticas:

*   **SRS (Software Requirements Specification):** Descreve os requisitos funcionais e não funcionais.
 Você pode encontrar a documentação detalhada (em formato .docx) na pasta [docs](./doc/) deste repositório.

## 🚀 Como Executar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/know-your-fan.git
    cd know-your-fan
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra seu navegador e acesse `http://localhost:8080` (ou a porta indicada pelo Vite).
