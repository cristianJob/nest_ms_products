FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG DATABASE_URL=file:/usr/src/app/dev.db
ENV DATABASE_URL=${DATABASE_URL}

RUN mkdir -p /usr/src/app/prisma
RUN npx prisma generate
RUN npx prisma db push
RUN npx prisma db seed

EXPOSE 3000

