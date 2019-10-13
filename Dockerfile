FROM node:10

RUN mkdir -p /var/app/dist /var/app/logs
WORKDIR /var/app

COPY package.json /var/app/
RUN npm install

COPY . /var/app
