Prova Técnica QA - Tray
Este repositório contém a solução para a prova técnica de QA da empresa Tray, utilizando Cypress para realizar testes end-to-end (E2E) e de API.

📋 Descrição
O projeto consiste em uma suíte de testes automatizados desenvolvida para avaliar habilidades em automação de testes, seguindo os requisitos propostos pela Tray para a vaga de QA.

🚀 Tecnologias Utilizadas
Cypress (versão 12.0.0 ou superior)

Node.js (versão 16.x ou superior)

JavaScript/TypeScript

⚙️ Configuração do Ambiente
Pré-requisitos:

Node.js instalado

NPM ou Yarn

Git

Clonar o repositório:

bash
git clone https://github.com/sieiro-iara/TesteQA_Tray
cd prova-tecnica-qa-tray
Instalar dependências:

bash
npm install
# ou
yarn install
🧪 Executando os Testes
Testes E2E
bash
npx cypress run --e2e
# ou para abrir o Cypress em modo interativo
npx cypress open
Testes de API
bash
npx cypress run --spec "cypress/e2e/api/**/*.spec.js"
Executar em modo headless
bash
npx cypress run --headless

🤝 Contribuição
Este projeto foi desenvolvido como parte do processo seletivo e não está aberto a contribuições externas.

🤖 Utilização de IA 
DeepSeek foi utilizado para auxiliar no Regex para a validação de data em formato americano na API, auxílio da valição das chaves de formato Json e por fim na criação desse arquivo README.

📧 Contato
Em caso de dúvidas, entre em contato:
Iara
iarasieiro@gmail.com