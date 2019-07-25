FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

USER node

RUN npm install

EXPOSE 8080
CMD [ "ng", "serve" ]
