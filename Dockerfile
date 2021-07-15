FROM node:lts-alpine

WORKDIR /app

COPY package.json ./

COPY client/package.json client/
RUN yarn install-client --production

COPY server/package.json server/
RUN yarn install-server --production

COPY client/ client/
RUN yarn --cwd ./client/ build

COPY server/ server/

USER node

CMD yarn --cwd ./server/ start

EXPOSE 8000