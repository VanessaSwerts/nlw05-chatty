
<p align="center">  
  <a href="https://github.com/VanessaSwerts/nlw05-chatty/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VanessaSwerts/nlw05-chatty">
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/VanessaSwerts/nlw05-chatty">
</p>

<h4 align="center"> 
	🚧 Chatty - em desenvolvimento 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autora">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

O Chatty é um chat para atendimento de clientes em tempo real. <br />
O Backend desse projeto foi desenvolvido com Node.js durante o Next Level Week #05 da [Rocketseat](https://rocketseat.com.br/)

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

#### Executando o projeto

##### 🧭 Rodando a aplicação Back-end

   ```bash
    # Clone este repositório
    $ git clone https://github.com/VanessaSwerts/nlw05-chatty.git

    # Acesse a pasta do projeto no seu terminal/cmd
    $ cd nlw05-chatty

    # Instale as dependências
    $ yarn install

    # Execute a aplicação
    $ yarn start 
    
    A aplicação estará disponível em http://localhost:3333    
   ```

##### 🧭 Criando o Banco de Dados
  
  Caso não tenha o arquivo **database.sqlite** dentro da pasta **src/database**, crie esse arquivo e depois rode o seguinte comando:

   ```bash
    # Criar as tabelas do Banco de Dados
    $ yarn typeorm migration:run 
   ```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Back-end**  ([Node.js](https://nodejs.org/en/))
- **Dependências**:
  -   **[Express](https://expressjs.com/pt-br/)**
  -   **[SQLite3](https://www.sqlite.org/index.html)**
  -   **[TypeORM](https://typeorm.io/#/)**
  -   **[UUID](https://github.com/uuidjs/uuid)**
  -   **[Reflect Metadata](https://github.com/rbuckton/reflect-metadata)**
  
- **Dependências de Desenvolvimento**:
  -   **[Typescript](https://www.typescriptlang.org)**
  -   **[ts-node-dev](https://github.com/wclr/ts-node-dev)**

Veja o arquivo  [package.json](https://github.com/VanessaSwerts/nlw05-chatty/blob/master/package.json)

---

## 🦸 Autora

<table>
  <tr>   
    <td align="center"><a href="https://github.com/vanessaSwerts/"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/57146734?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Swerts</b></sub></a></td>  
  </tr>
</table>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> 

