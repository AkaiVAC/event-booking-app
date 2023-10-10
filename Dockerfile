### STAGE 1: Build ###
FROM node:18.13.0-alpine3.16 as build
RUN npm i -g pnpm

WORKDIR /app

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

## STAGE 2: SERVE ###
FROM lunaticcat/nginx-brotli as serve
RUN apk add --no-cache brotli findutils bash curl

WORKDIR /usr/share/nginx/html
RUN rm -rf *

COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist ./
ENTRYPOINT nginx -g 'daemon off;'