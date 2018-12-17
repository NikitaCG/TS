FROM node:latest

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn build

#EXPOSE 9000
