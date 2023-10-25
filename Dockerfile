FROM node:lts-alpine as builder

ARG BRANCH=main

WORKDIR /app

COPY package.json yarn-lock.json /app/

RUN yarn install

COPY . /app

RUN yarn build:$BRANCH

FROM node:lts-alpine

COPY --from=builder /app/dist /app/dist

CMD ["node", "/app/dist/server/server.mjs"]


LABEL org.opencontainers.image.source=https://github.com/gdsc-upt/gdsc-web-frontend
