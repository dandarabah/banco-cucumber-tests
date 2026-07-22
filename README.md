# Banco Cucumber Tests

Projeto de automação de testes **Web** desenvolvido com **JavaScript**, **Cucumber** e **Selenium WebDriver** para validar os principais fluxos da aplicação Banco.
A aplicação utilizada para os estudos consome como backend a API disponibilizada no repositório:

- API: https://github.com/juliodelimas/banco-api

Repositório deste projeto:

- https://github.com/dandarabah/banco-cucumber-tests

---

# Objetivo

Este projeto tem como objetivo automatizar cenários funcionais da aplicação utilizando a abordagem **BDD (Behavior Driven Development)** com Gherkin, tornando os testes mais legíveis, reutilizáveis e de fácil manutenção.
Os cenários automatizados simulam o comportamento do usuário na interface da aplicação utilizando Selenium WebDriver.

---

# Material de estudo

Este projeto foi desenvolvido exclusivamente para fins de estudo e aperfeiçoamento em automação de testes.
Durante seu desenvolvimento foram praticados conceitos como:

- Escrita de cenários em Gherkin;
- Implementação de Step Definitions com Cucumber;
- Automação de testes utilizando Selenium WebDriver;
- Organização de projetos de automação em JavaScript;
- Geração de relatórios HTML;
- Boas práticas de estruturação e manutenção de testes automatizados.

O objetivo é servir como referência para estudos, evolução técnica e demonstração de conhecimentos em automação de testes.

---

# Tecnologias utilizadas

- JavaScript
- Node.js 18.x
- Cucumber.js
- Selenium WebDriver
- Multiple Cucumber HTML Reporter

---

# Pré-requisitos

Antes de executar o projeto é necessário possuir instalado:

- Node.js 18.x
- NPM
- Google Chrome
- Git

Extensão recomendada para o VS Code:

- Cucumber (Gherkin) Full Support

---

# Estrutura do projeto

```text
banco-cucumber-tests
│
├── features
│   ├── step_definitions
│   ├── support
│   └── *.feature
│
├── reports
│   └── html
│
├── cucumber.js
├── package.json
└── package-lock.json
```

---

# Configuração

Este projeto **não utiliza arquivo `.env`**.

Toda a configuração necessária está presente nos próprios arquivos do projeto.

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/dandarabah/banco-cucumber-tests.git
```

Entre na pasta:

```bash
cd banco-cucumber-tests
```

Instale as dependências:

```bash
npm install
```

---

# Versão do Cucumber

Este projeto utiliza uma versão compatível com o **Node.js 18**.

Instalação:

```bash
npm install --save-dev @cucumber/cucumber@11.0.1
```
ou
```bash
npm i -D @cucumber/cucumber@11.0.1
```

Verificar a versão instalada:

```bash
npm list @cucumber/cucumber
```

Consultar versões disponíveis:

```bash
npm view @cucumber/cucumber versions
```

Filtrar versões (Git Bash):

```bash
npm view @cucumber/cucumber versions | grep 10
```

Remover o Cucumber:

```bash
npm uninstall @cucumber/cucumber
```

Confirmar remoção:

```bash
npm list @cucumber/cucumber
```

---

# Relatório HTML

Instalação:

```bash
npm install --save-dev multiple-cucumber-html-reporter@3.8.0
```

Confirmar instalação:

```bash
npm list multiple-cucumber-html-reporter
```

Após executar os testes, o relatório é gerado em:

```text
reports/html/index.html
```

---

# Configuração do Cucumber

Arquivo:

```text
cucumber.js
```

Conteúdo:

```javascript
module.exports = {
    default: '--publish-quiet --require ./features/step_definitions/*.js --format progress',
}
```

---

# Executando os testes

Executar todos os cenários:

```bash
npx cucumber-js
```

Caso exista um script configurado para geração do relatório:

```bash
npm run test:report
```

---

# Documentação

### Cucumber

https://github.com/cucumber/cucumber-js

### Selenium WebDriver

https://www.selenium.dev/documentation/webdriver/

### Multiple Cucumber HTML Reporter

https://www.npmjs.com/package/multiple-cucumber-html-reporter

### Node.js

https://nodejs.org/

---

# Autor

**Bárbara Dandara Moraes**

QA Engineer | Automação de Testes

GitHub:
https://github.com/dandarabah
