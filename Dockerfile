FROM node:18.16.0-alpine AS base

WORKDIR /app

COPY package*.json .

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

ENV NODE_ENV=dev

COPY . .

RUN npm install

RUN npx prisma generate

EXPOSE 3001

CMD [ "npm","start"]

FROM base AS prod

ENV NODE_ENV=prod

RUN npm install -g @nestjs/cli

RUN npm install --only=production

COPY . .


RUN npm run build

CMD ["npm", "run", "start:prod"]

