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

Make sure you have docker install in your cumputer — if not click [here](https://www.docker.com/products/docker-desktop/)

## Installation

After clonning my project, in the root directory run :

<b> NB: put useful information in the .env file </b>

## Running the app

- Run the app :

```bash
$ npm run project:start
```

<h3 style="color:red">⚠Warning !!! : access the nest-api-crud container terminal </h3>

### You can access the <b>nest-api-crud</b> container terminal by:

- Using Docker CLI

```bash
docker exec -it nest-api-crud sh
```

- Using Docker desktop:

Open Docker Desktop.
Click on the container you want to access in the list of running containers.
Click on the "Terminal" button in the container details page.

### In the terminal run:

```bash
npx prisma migrate dev
```
This command will sync the database with the API

## Test the API

To test the API (you can use (Postman)[https://www.postman.com/downloads/] or (Insomnia)[https://insomnia.rest/download])

### Registration via login/password (method POST):

Acces this url : http://localhost:3001/auth/signup

### authentication of a user via login / password (method POST):

Acces this url : http://localhost:3001/auth/signin

NB: this generate an access token

### search for a product by its barcode on the OpenFoodFacts API (method GET):

NB: In the Headers put - Bearer <accesstoken>

Access this url : http://localhost:3001/product/<barcode> (e.g: "http://localhost:3001/product/04963406")

### Update user (method PUT):

Acces this url : http://localhost:3001/auth/update

Set in the form the data to update

## Kubernetes manifest for deployment

In the root directory run :

```bash
kubectl apply -f kubernestes.deployment.yml
```

You can see the deployment by running:

```bash
kubectl get deployments
```

Checking which pod(s) are running

```bash
kubectl get pods
```

## Stay in touch

- Author - [Christ Abessolo](https://rova.vercel.app/)
- Portfolio - [https://rova.vercel.app/](https://rova.vercel.app/)
