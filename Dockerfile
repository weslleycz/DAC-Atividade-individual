FROM node:16-alpine

WORKDIR /user/app

COPY package.json  ./
RUN yarn  

COPY . .

EXPOSE 3000

CMD ["yarn","start"]