FROM node:lts-alpine as build

ARG BRANCH=main

WORKDIR /app

COPY package.json yarn-lock.json /app/

RUN yarn install

COPY . /app

RUN yarn build:$BRANCH

FROM nginx:alpine

COPY --from=build /app/dist/gdsc-web-frontend /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

LABEL org.opencontainers.image.source=https://github.com/dsc-upt/gdsc-web-frontend
