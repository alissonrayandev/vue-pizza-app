# Stoom pizzaria

> Stoom pizzaria

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# para rodar no IP e poder acessar de outros dispositivos na mesma rede
$ yarn dev:local 

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Para efetuar login
Para logar basta utilizar o user: `harryPotter`
e a senha `marotos`

## Sobre o projeto

Este projeto é um MVP com dados mockados(Sem API) para se um pedido de uma pizza

## Arquitetura

Este projeto possui uma arquitetura inspirada no MVC(Model, View e Control),
onde O componente tem a função de VIEW, apenas para tratar codigos visuais;
O container tem a função de CONTROL, para cuidar da logica e tratamento de dados
mais simples; e a Store que tem a função de MODEL, onde armazena e trata os dados,
em que no caso de uma aplicação completa faria as requisições para o backend.

Também possuímos no projeto A PASTA View, que serve como referencia para criação de rotas;

## Tecnologias
* VueJS 2
* Nuxt
* SCSS
* Vuex

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
