FROM node:14-alpine as build

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install ci

COPY . /app

RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build /app/dist/gdsc-web-frontend /usr/share/nginx/html

LABEL org.opencontainers.image.source=https://github.com/dsc-upt/gdsc-web-frontend
