[![Coverage Status](https://coveralls.io/repos/github/vbeloti/food-recipes-api/badge.svg?branch=master)](https://coveralls.io/github/vbeloti/food-recipes-api?branch=master)
[![Build Status](https://travis-ci.org/vbeloti/food-recipes-api.svg?branch=master)](https://travis-ci.org/vbeloti/food-recipes-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# Food Recipes Api

- [Food-recipes-api]
    - [Resumo](#resumo)
    - [Link Demonstração API](#link-demonstracao-api)
    - [Pré Requisitos](#pre-requisitos)
    - [Instalando](#instalando)
    - [Executando o ambiente de desenvolvimento](#executando-o-ambiente-de-desenvolvimento)
    - [Executando os testes](#executando-os-testes)
    - [Recursos](#recursos)
    - [Rotas](#rotas)
    - [Rota teste](#rota-teste)
    - [Rota Usuários](#rota-usuários)
    - [Rota Autenticação](#rota-autenticacao)
    - [Rota Receitas](#rota-receitas)

## Resumo

Esta é uma API RESTful construída com Typescript + NodeJS + Express + Postgres que recebe todos os dados relacionados com receitas e fornece ao cliente todos esses dados através de uma API REST

## Link Demonstração API

<a href="https://food-recipes-api-1.herokuapp.com/">https://food-recipes-api-1.herokuapp.com/</a>


### Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com o NodeJS 14+ instalado.
Para usar o banco de dados, você precisará ter o Postgress instalado e em execução em sua máquina na porta 5433 ou configura-lá.

Para configurar o banco de dados voce precisará localizar o arquivo connection.example alerá-lo para connection.ts (src/config) e mudar a porta ("port"), o nome de usuário ("username"), a senha("password") e o banco de dados("database").

Para configurar o upload das imagens existem duas opções
1º utilizar o upload local e pra isso você deverá localizar o arquivo .env.example renomealo para .env e alterar STORAGE_TYPE para STORAGE_TYPE=local
2º utilizar o Amazon s3 e pra isso você deverá ter um bucket criado e alterar as configurações no arquivo .env, (STORAGE_TYPE=s3) e adicionar as outras propriedades conforme o bucket criado na Amazon s3

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
| `GET /      `              | Retorna se a API está funcionando                                     |
| `POST /users`              | Cria um novo usuário                                                  |
| `POST /auth`               | Faz a autenticação do usuário retornando um JWT                       |
| `POST /recipes`            | Cria uma nova receita                                                 |
| `PUT /recipes/:recipeId`   | Atualizar uma receita                                                 |
| `GET /recipes/:recipeId`   | Retorna uma receita                                                   |
| `DELETE /recipes/:recipeId`| Apaga uma receita                                                     |
| `GET /recipes`             | retorna uma lista de todas as receitas                                |

## Rotas

Você poderá testar as rotas: <a href="https://food-recipes-api-1.herokuapp.com/">https://food-recipes-api-1.herokuapp.com/</a> ou http://localhost:3333/

### Rota teste

- **Essa é uma rota para verificar se a API está funcionando**

> / ou https://food-recipes-api-1.herokuapp.com/ 

| Test              |                                                                       |
|:------------------|:----------------------------------------------------------------------|
| Recurso           |                         **/**                                         |
| Metodo            |                         **GET**                                       |
| Parametros        |                         ****                                          |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ message:  "API is Working!!! 🔥" }`  | 
| Resposta do erro  |  **Code:** 500 **Content:** `{ error:  Internal server error }`       |

### Rota Usuários

- **Essa é uma rota para criar um usuário**

> /users ou https://food-recipes-api-1.herokuapp.com/users

| Teste             |                                                                            |
|:------------------|:---------------------------------------------------------------------------|
| Recurso           |                         **/users**                                         |
| Metodo            |                         **POST**                                           |
| Parametros        |                         ****                                               |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "message":  "User has been created }`     | 
| Resposta do erro  |  **Code:** 401 **Content:** `{ "message": "Email address already used" }`  |
| Envio             | { "name": "name", "email": "email", "password": "password" }               |

### Rota Autenticação

- **Essa é uma rota para autenticar um usuário**

> /auth ou https://food-recipes-api-1.herokuapp.com/auth

| Autenticação      |                                                                                                                                                                       |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Recurso           |                         **/auth**                                                                                                                                     |
| Metodo            |                         **POST**                                                                                                                                      |
| Parametros        |                         ****                                                                                                                                          |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{"user": { "id": "id", "name": "name", "email": "email", "created_at": "created_at", "updated_at": "updated_at" }, "token": "token" }` | 
| Resposta do erro  |  **Code:** 401 **Content:** `{ "message":  "Incorrect email/password combination" }`                                                                                  |
| Envio             | { "email": "email", "password": "password" }                                                                                                                          |

### Rota Receitas

- **Essa é uma rota para criar uma receita**

> /recipes ou https://food-recipes-api-1.herokuapp.com/recipes

| Receitas          |                                                                                                                                                                       |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Recurso           |                         **/recipes**                                                                                                                                  |
| Metodo            |                         **POST**                                                                                                                                      |
| Parametros        |                         ****                                                                                                                                          |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "user_id": "user_id", "name": "name", "image": "image", "ingredients": "ingredients", "mode_prepare": "mode_prepare", "time": "time", "id": "id", "created_at": "created_at", "updated_at": "updated_at"}`                                                                                                                        | 
| Resposta do erro  |  **Code:** 500 **Content:** `{ "error":  "Internal server error" }`                                                                                                   |
| Envio             | MULTIPART FORM image=[FILE=image], name=name, ingredients=ingredients, mode_prepare=mode_prepare, time=time}                                                          |


- **Essa é uma rota para editar uma receita**

> /recipes ou https://food-recipes-api-1.herokuapp.com/recipes

| Receitas          |                                                                                                                                                                       |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Recurso           |                         **recipes/:recipeId**                                                                                                                         |
| Metodo            |                         **PUT**                                                                                                                                       |
| Parametros        |                         **:recipeId**                                                                                                                                 |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "user_id": "user_id", "name": "name", "image": "image", "ingredients": "ingredients", "mode_prepare": "mode_prepare", "time": "time", "id": "id", "created_at": "created_at", "updated_at": "updated_at"}`                                                                                                                                                  | 
| Resposta do erro  |  **Code:** 400 **Content:** `{ message:  "This recipes does not exists" }`                                                                                            |
| Envio             | MULTIPART FORM image=[FILE=image], name=name, ingredients=ingredients, mode_prepare=mode_prepare, time=time}                                                          |

- **Essa é uma rota para retornar uma receita**

> /recipes ou https://food-recipes-api-1.herokuapp.com/recipes

| Receitas          |                                                                                                                                                                       |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Recurso           |                         **recipes/:recipeId**                                                                                                                         |
| Metodo            |                         **GET**                                                                                                                                       |
| Parametros        |                         **:recipeId**                                                                                                                                 |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "user_id": "user_id", "name": "name", "image": "image", "ingredients": "ingredients", "mode_prepare": "mode_prepare", "time": "time", "id": "id", "created_at": "created_at", "updated_at": "updated_at"}`                                                                                                                                                  | 
| Resposta do erro  |  **Code:** 400 **Content:** `{ "message":  "This recipe does not exists" }`                                                                                           |
| Envio             | MULTIPART FORM image=[FILE=image], name=name, ingredients=ingredients, mode_prepare=mode_prepare, time=time}                                                          |

- **Essa é uma rota para apagar uma receita**

> /recipes ou https://food-recipes-api-1.herokuapp.com/recipes

| Receitas          |                                                                                                                  |
|:------------------|:-----------------------------------------------------------------------------------------------------------------|
| Recurso           |                         **recipes/:recipeId**                                                                    |
| Metodo            |                         **DELETE**                                                                               |
| Parametros        |                         **:recipeId**                                                                            |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `{ "message": "Recipe has been deleted"}                                           | 
| Resposta do erro  |  **Code:** 400 **Content:** `{ "message":  "This recipes does not exists" }`                                     |

- **Essa é uma rota para retornar todas as receitas**

> /recipes ou https://food-recipes-api-1.herokuapp.com/recipes

| Receitas          |                                                                                                                                                                        |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Recurso           |                         **recipes**                                                                                                                                    |
| Metodo            |                         **GET**                                                                                                                                        |
| Parametros        |                         ****                                                                                                                                           |
| Resposta Sucesso  | **Código:** 200 **Conteúdo:** `[{ "user_id": "user_id", "name": "name", "image": "image", "ingredients": "ingredients", "mode_prepare": "mode_prepare", "time": "time", "id": "id", "created_at": "created_at", "updated_at": "updated_at"}]`                                                                                                                                                  | 
| Resposta do erro  |  **Code:** 400 **Content:** `{ "message":  "Does not exists recipes registered"  }`                                                                                    |


