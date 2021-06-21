FROM node:14-alpine as build

ARG BRANCH=main

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install ci

COPY . /app

RUN npm run build:$BRANCH --prod

FROM nginx:alpine

COPY --from=build /app/dist/gdsc-web-frontend /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

LABEL org.opencontainers.image.source=https://github.com/dsc-upt/gdsc-web-frontend
