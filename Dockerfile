FROM node:8-alpine
MAINTAINER Ariel <zuoxiaofang222@gmail.com>

RUN yarn config set registry 'https://registry.npm.taobao.org'

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
