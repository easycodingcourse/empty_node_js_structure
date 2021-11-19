FROM node:14.18.0

WORKDIR /usr/src/app/api_emedilife

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# CMD [ "node", "app.js" ]
CMD [ "npm","start" ]