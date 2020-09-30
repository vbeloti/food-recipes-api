[![Coverage Status](https://coveralls.io/repos/github/vbeloti/food-recipes-api/badge.svg?branch=master)](https://coveralls.io/github/vbeloti/food-recipes-api?branch=master)
[![Build Status](https://travis-ci.org/vbeloti/food-recipes-api.svg?branch=master)](https://travis-ci.org/vbeloti/food-recipes-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Food Recipes Api

- [Food-recipes-api]
    - [Resumo](#resumo)
    - [Pré Requisitos](#pre-requisitos)
    - [Instalando](#instalando)

<!-- ## Link -->


## Resumo

Esta é uma API RESTful construída com Typescript + NodeJS + Express + Postgres que recebe todos os dados relacionados com receitas e fornece ao cliente todos esses dados através de uma API REST


### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com o NodeJS 14+ instalado.
Para usar o banco de dados, você precisará ter o Postgress instalado e em execução em sua máquina na porta 5433 ou configura-lá.

Para configurar o banco de dados voce precisará localizar o arquivo connection.example alerá-lo para connection.ts (src/config) e mudar a porta ("port"), o nome de usuário ("username"), a senha("password") e o banco de dados("database").


### Instalando

** Clonando o Repositório **

$ git clone https://github.com/vbeloti/food-recipes-api

$ cd food-recipes-api

** Instalando dependências **

$ yarn

_ou_

$ npm install

** Rodando as migrações **

$ yarn typeorm migration:run

_ou_

$ npm run typeorm migration:run

### Executando o ambiente de desenvolvimento

$ yarn dev

_ou_

$ npm run dev

### Executando os testes

$ yarn test

_ou_

$ npm run test

## Recursos

| Recurso                    | Descrição                                                             |
|:--------------             |:----------------------------------------------------------------------|
| `POST /users`              | Cria um novo usuário                                                  |
| `POST /auth`               | Faz a autenticação do usuário retornando um JWT                       |
| `POST /recipes`            | Cria uma nova receita                                                 |
| `PUT /recipes/:recipeId`   | Atualizar uma receita                                                 |
| `GET /recipes/:recipeId`   | Retorna uma receita                                                   |
| `DELETE /recipes/:recipeId`| Apaga uma receita                                                     |
| `GET /recipes`             | retorna uma lista de todas as receitas                                |

