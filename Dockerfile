#Stage 1

FROM node:12-alpine as build

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install ci

COPY . /app

RUN npm run build --prod

#Stage 2

FROM nginx:1.17.1-alpine

#RUN mkdir /app/out

COPY --from=build /app/dist/gdsc-web-frontend /usr/share/nginx/html

RUN ls /usr/share/nginx/html

