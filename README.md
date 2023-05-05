# api-crud-nestjs

### This is a test for my internship application ☺️

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

The purpose of this test is to create a NestJS API to obtain information on barcodes via the OpenFoodFact API.

## Features

- Allow user registration via login/password

- Allow authentication of a user via login / password

- On an authenticated route, allow the search for a product by its barcode on the OpenFoodFacts API

- Allow user update

- Caching system calls to OpenFoodFacts

- Dockerization

- Kubernetes manifest for deployment

## Tools I use :

- Prisma as my ORM
- PostgresSQL
- Docker
- Redis
- Insomnia

# We will see 2 ways to run our project:

Make sure you have docker install in your cumputer -— if not clic [here](https://www.docker.com/products/docker-desktop/)

# First one

## Installation

After clonning my project, in the root directory run :

```bash
$ npm install
```

<b> NB: put useful information in the .env file </b>

## Running the app

- Run your database first :

````bash
$ npm run db:dev:restart

- Run the app :

```bash
$ npm start

Then open an tools for test the API (you can use (Postman)[https://www.postman.com/downloads/] or (Insomnia)[https://insomnia.rest/download])

### Registration via login/password (methode POST):

Acces this url : http://localhost:3000/auth/signup

### authentication of a user via login / password (methode POST):

Acces this url : http://localhost:3000/auth/signin

NB: this generate an acces token (so in the Headers put - Bearer accesstoken)

### search for a product by its barcode on the OpenFoodFacts API (methode GET):

Acces this url : http://localhost:3000/product/barcode

### Update user  (methode PUT):

Acces this url : http://localhost:3000/auth/update

# Second one

## You can simply acces to my docker image and run the project :

(Docker image)[]


## Stay in touch

- Author - [Christ Abessolo](https://rova.vercel.app/)
- Portfolio - [https://rova.vercel.app/](https://rova.vercel.app/)
````
