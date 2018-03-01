FROM node:9.6.1-alpine

LABEL version="0.1.0"

RUN mkdir -p /home/nodeApp
WORKDIR /home/nodeApp

COPY . /home/nodeApp
RUN npm install

EXPOSE 8877
CMD [ "npm", "start" ]
