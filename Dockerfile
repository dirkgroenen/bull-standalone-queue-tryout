FROM node:10-alpine

WORKDIR '/var/www/app'

COPY package.json .

RUN npm i

COPY . .

CMD ['npm', 'start']