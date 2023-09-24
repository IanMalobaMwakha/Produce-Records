FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install

RUN npm install -g @angular/cli

RUN apt update && apt install -y curl

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


