FROM node:16-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY ./ /app/

RUN npm run build

FROM nginx:1.21-alpine

# copy built app
COPY --from=build-stage /app/dist/ /usr/share/nginx/html

# copy nginx config inside container
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
