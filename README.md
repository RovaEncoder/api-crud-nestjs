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
- Kubernetes
- NPM

Make sure you have install in your cumputer :

- [Docker](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/fr/download)

## Installation

After clonning my project, in the root directory run :

````
npm install
```

<b> NB: put useful information in the .env file </b>

## Running the app

- Run the app :

```
$ npm run project:start
```

<h3 style="color:red">⚠ Warning !!! : access the nest-api-crud container terminal </h3>

### You can access the <b>nest-api-crud</b> container terminal by:

### Using Docker CLI

```
docker exec -it nest-api-crud sh
```

### Using Docker desktop:

-Open Docker Desktop.
-Click on the container you want to access in the list of running containers.
-Click on the "Terminal" button in the container details page.

### In the terminal run:

```
npx prisma migrate dev
```

This command will sync the database with the API

## Test the API

To test the API you can use (Postman)[https://www.postman.com/downloads/] or (Insomnia)[https://insomnia.rest/download]

NB: all you have to do is connect to your database by entering your identifiers to check the data present in your database.

### Registration via login/password (method POST):

- Access this url : http://localhost:3001/auth/signup

| user register field | type   | required |
| ------------------- | ------ | -------- |
| email               | string | yes      |
| password            | string | yes      |
| firstname           | string | no       |
| lastname            | string | no       |

### Authentication of a user via login / password (method POST):

- Access this url : http://localhost:3001/auth/signin

| user Authentication field | type   | required |
| ------------------------- | ------ | -------- |
| email                     | string | yes      |
| password                  | string | yes      |

NB: this generate an access token

### Search for a product by its barcode on the OpenFoodFacts API (method GET):

NB: In the Headers put - Bearer {accesstoken}

- Access this url : http://localhost:3001/product/{barcode}
  (e.g: "http://localhost:3001/product/04963406")

### Update user (method PUT):

- Access this url : http://localhost:3001/auth/update

Set in the form the data to update

| user update field | type   | required |
| ----------------- | ------ | -------- |
| email             | string | no       |
| password          | string | no       |
| firstname         | string | no       |
| lastname          | string | no       |



## Kubernetes manifest for deployment

In the root directory run :

```
kubectl apply -f kubernestes.deployment.yml
```

You can see the deployment by running:

```
kubectl get deployments
```

Checking which pod(s) are running

```
kubectl get pods
```

## Stay in touch

- Author - [Christ Abessolo](https://rova.vercel.app/)
- Portfolio - [https://rova.vercel.app/](https://rova.vercel.app/)
````
