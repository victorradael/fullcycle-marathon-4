FROM node:12.14.0-alpine3.11

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]