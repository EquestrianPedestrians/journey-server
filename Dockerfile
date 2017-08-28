FROM node:slim

RUN mkdir -p /src/app

WORKDIR /src

COPY /package.json /src

RUN npm install -g nodemon -q
RUN npm install -g pm2 -q
RUN npm install -q 

COPY . /src/app

WORKDIR /src/app

RUN cp docker-entrypoint.sh /usr/local/bin/ && \
  chmod 0755 /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]