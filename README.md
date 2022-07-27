<h1 align="center">

<p align="center">
<img src= "imagem\enecrescer.gif" width="50%" height="30%"/>
</p>

<p align="center"><b> EneCrescer </b> 🖤✊🏿 <p>

# <br> Projeto Final {Reprograma} - EneCrescer

## Este é projeto final da iniciativa TeT(Todas em Tech) do curso de Desenvolvedora Backend | Turma On16 da [{Reprograma}](https://www.reprograma.com.br/).

<br>
<br>

 Este projeto é uma API com CRUD completo que contém um banco de dados, Autenticação e Login

<br>
<br>

<!--ts-->

- [👧🏾 Objetivo](#-👧🏾-Objetivo)
- [📁 Arquitetura do Projeto](#-📁-Arquitetura-do-Projeto)
- [👩🏾‍💻 Tecnologias e Dependências Utilizadas](#-👩🏾‍💻-Tecnologias-e-Dependências-Utilizadas)
- [👩🏾‍🔧 Instalação](#-👩🏾‍🔧-Instalação)
- [⚗️ Interface Gráfica Para Realizar os Testes](#-⚗️-Interface-Gráfica-Para-Realizar-os-Testes)
- [🔓 Preparando o Ambiente Para Autenticação](#-🔓-Preparando-o-Ambiente-Para-Autenticação)
- [🔐 Testando Rotas de Login e Rotas Com ou Sem Proteção](#-🔐-Testando-Rotas-de-Login-e-Rotas-Com-ou-Sem-Proteção)
- [🧪 Teste Jest](#-🧪-Teste-Jest)
- [🙋🏾‍♀️ Autora](#-🙋🏾‍♀️-Autora)

<!--te-->

<br>
<br>

## 👧🏾 Objetivo

<br>

O objetivo desta API é criar um local para consulta com livros, filmes, séries e desenhos infanto-juvenis em que o protagonista ou um dos personagens principais sejam pessoas negras. Não somente consulta, mas que seja futuramente um espaço para divulgação de novos conteúdos voltados a pessoas negras como parte importante da construção de identidade de crianças e jovens que não sabem ou não veem divulgação de pessoas como elas.

<br>
<br>


## 📁 Arquitetura do Projeto

<br>

Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. Você pode visualizar meu `Swagger` [aqui](https://enecrescer.herokuapp.com/documentacao-enecrescer/#/).

```
 📁ENECRESCER
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 bookController.js
   |  |    |- 📄 cartoonController.js
   |  |    |- 📄 catalogController.js
   |  |    |- 📄 movieController.js
   |  |    |- 📄 seriesController.js
   |  |    |- 📄 usersController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 bookModel.js
   |  |    |- 📄 cartoonModel.js
   |  |    |- 📄 movieModel.js
   |  |    |- 📄 seriesModel.js
   |  |    |- 📄 userModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 bookRoutes.js
   |  |    |- 📄 cartoonRoutes.js
   |  |    |- 📄 catalogRoutes.js
   |  |    |- 📄 index.js
   |  |    |- 📄 movieRoutes.js
   |  |    |- 📄 seriesRoutes.js
   |  |    |- 📄 userRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |  |--📁 test
   |  |   |- 📄 book.test.js
   |  |   |- 📄 cartoon.test.js
   |  |   |- 📄 movie.test.js
   |  |   |- 📄 serie.test.js
   |  |   |- 📄 user.test.js
   |  |
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```

<br>
<br>


## 👩🏾‍💻 Tecnologias e Dependências Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `jest`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação.|
| `heroku`| hospeda a documentação.|

<br>
<br>

<h1 align="center">

<p align="center">
<img src= "imagem\lets-go.gif" width="500px" height="150"/>
</p>

## 👩🏾‍🔧 Instalação

<br>

```ps
# Clonar o repositório
$ git clone https://github.com/louicosta/EneCrescer

# Entrar na pasta do repositório
$ cd EneCrescer

# Instalar as dependências
$ npm install

# Executar o servidor para que você possa rodar o projeto localmente
$ npm start
```
<br>
<br>


## ⚗️ Interface Gráfica Para Realizar os Testes

<br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br>

▫️ Rota de criação de usuário
<br>

<img src= "imagem\post-user.jpg" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna todos os livros do catálogo
<br>

<img src= "imagem\get-all-livros.jpg" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna a série por título
<br>

<img src= "imagem\get-por-titulo.jpg" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que altera alguma propriedade do desenho
<br>

<img src= "imagem\patch-de-desenho.jpg" width="70%" height="40%"/>
</p>

<br>
<br>


## 🔓 Preparando o Ambiente Para Autenticação

<br>

⚠️ Criar arquivo .env (adicionar no .gitignore) e usar o arquivo .env.example como modelo, colocando assim os seus dados.

Seguir a ordem de instalações no terminal:

- Inicialize o comando de instalação `npm i express cors` para instalar o cors.
- Inicialize o comando de instalação `npm i --save-dev dotenv` para instalar dontenv.
- Inicialize com o comando `npm start` para que você possa executar os testes.

<br>
<br>


## 🔐 Testando Rotas de Login e Rotas Com ou Sem Proteção

<br>

 📢 Todas as rotas existentes neste projeto:

- Usuários

| Verbo  |   EndPoint     |        Descrição da Rota                   | Status | Auth |
| ------ | -------------- | -------------------------------------------| ------ |----- |
| POST   | /registration  | Adicionar um novo usuário                  |   201  |  ✔️  |
| GET    | /search        | Listar todos os usuários                   |   200  |  ❌  |
| DELETE | /delete/:id    | Remove um usuário                          |   200  |  ✔️  |
| POST   | /login         | Devolve o token de um usuário              |   200  |  ✔️  |
<br>

- Catálogo completo

| Verbo  |   EndPoint      | Descrição da Rota                                            | Status | Auth |
| ------ | --------------- | -------------------------------------------------------------| ------ |----- |
| GET    | /catalog        | Lista todo o cátálogo do banco de dados, menos o de usuários |   201  |  ✔️  |
<br>

- Livros

| Verbo  |   EndPoint          | Descrição da Rota                      | Status | Auth |
| ------ | ------------------- | ---------------------------------------| ------ |----- |
| GET    | /books              | Listar todos os filmes cadastrados     |   200  |  ❌  |
| GET    | /book/title         | Mostra o cadastro do livro por título  |   200  |  ❌  |
| GET    | /book/:id           | Mostra o cadastro do livro por ID      |   200  |  ❌  |
| POST   | /books/registration | Registra um novo livro                 |   201  |  ✔️  |
| PATCH  | /book/update/:id    | Altera alguma informação sobre o livro |   201  |  ✔️  |
| DELETE | /book/delete/:id    | Remove o cadastro de um livro          |   200  |  ✔️  |
<br>

- Desenhos

| Verbo  |   EndPoint             |         Descrição da Rota                         | Status | Auth |
| ------ | ---------------------- | --------------------------------------------------| ------ |----- |
| GET    | /cartoons              | Listar todos os desenhos cadastrados              |   200  |  ❌  |
| GET    | /cartoon/title         | Mostra o cadastro do desenho por título           |   200  |  ❌  |
| GET    | /cartoons/age          | Listar todos os desenhos por classificação etária |   200  |  ❌  |
| GET    | /cartoon/:id           | Mostra o cadastro do desenho por ID               |   200  |  ❌  |
| POST   | /cartoons/registration | Registra um novo desenho                          |   201  |  ✔️  |
| PATCH  | /cartoon/update/:id    | Altera alguma informação sobre o desenho          |   201  |  ✔️  |
| DELETE | /cartoon/delete/:id    | Remove o cadastro de um desenho                   |   200  |  ✔️  |
<br>

- Filmes

| Verbo  |   EndPoint           |         Descrição da Rota                       | Status | Auth |
| ------ | -------------------- | ------------------------------------------------| ------ |----- |
| GET    | /movies              | Listar todos os filmes cadastrados              |   200  |  ❌  |
| GET    | /movie/title         | Mostra o cadastro do filme por título           |   200  |  ❌  |
| GET    | /movie/age           | Listar todos os filmes por classificação etária |   200  |  ❌  |
| GET    | /movie/:id           | Mostra o cadastro do filme por ID               |   200  |  ❌  |
| POST   | /movies/registration | Registra um novo filme                          |   201  |  ✔️  |
| PATCH  | /movie/update/:id    | Altera alguma informação sobre o filme          |   201  |  ✔️  |
| DELETE | /movie/delete/:id    | Remove o cadastro de um filme                   |   200  |  ✔️  |
<br>

- Séries

| Verbo  |   EndPoint         |         Descrição da Rota                       | Status | Auth |
| ------ | ------------------ | ------------------------------------------------| ------ |----- |
| GET    | /series            | Listar todas as séries cadastradas              |   200  |  ❌  |
| GET    | /serie/title       | Mostra o cadastro da série por título           |   200  |  ❌  |
| GET    | /serie/age         | Listar todas as séries por classificação etária |   200  |  ❌  |
| GET    | /serie/:id         | Mostra o cadastro da série por ID               |   200  |  ❌  |
| POST   | /series/create     | Registra uma nova série                         |   201  |  ✔️  |
| PATCH  | /series/update/:id | Altera alguma informação sobre a série          |   201  |  ✔️  |
| DELETE | /serie/delete/:id  | Remove o cadastro de uma série                  |   200  |  ✔️  |

<br>

 *PROTEÇÃO* Para testar via Postman, passar bearer token no header de autenticação $ Bearer Token

<br>
<br>


## 🧪 Teste Jest

</br>

📌 Instalar o Jest dentro da pasta EneCrescer

- Inicialize o comando de instalação `npm install --save-exact jest@28.1.0 --save-dev` para instalar o Jest.
- Incluir o no package_json -> `"test:watch": "jest --watchAll"`.
- Inicialize com o comando `npm run test:watch` para testar.

<br>
<br>

Projeto criado com a orientação e cuidado da Professora [Mayhhara F Lilian](https://github.com/mflilian)!<br>
Agradecimento ao meu esposo, minha família, a Jani, nossa facilitadora maravilhosa, a Ju, que nos acolheu em meio aos caos e as incertezas, todas minhas colegas da On16, principalmete àquelas que me acolheram nas minhas inquietações e às pessoas que fizeram parte dessa construção e conhecimento em algum momento!🚀

<br>
<br>

<span align="center">

#  Muito obrigada a você que chegou até aqui! 💜 </h2>

</span>

<p align="center">
<img src= "imagem\giphy.gif" width="50%" height="30%"/>
</p>


## 🙋🏾‍♀️ Autora

<br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="imagem\foto-perfil.jpg" width="100px;" alt="Foto de Perfil de Louise"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/loui-costa/" target="_blank"><img src="https://img.shields.io/badge/-Louise_Costa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/loui-costa/" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>
