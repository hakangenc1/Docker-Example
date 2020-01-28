FROM node:latest

COPY . .

RUN yarn install

CMD [ "node", "src/index.js" ]

