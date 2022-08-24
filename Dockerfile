FROM node:16-alpine
WORKDIR /nodejs/node/app
COPY nodejs /nodejs/node/app
RUN npm install
CMD npm run start
EXPOSE 8080