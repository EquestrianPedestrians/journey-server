FROM node:slim

WORKDIR /app

COPY package.json /app

RUN npm install -g nodemon && npm install --quiet -progress=false

COPY . /app

CMD ["npm", "start"] 

