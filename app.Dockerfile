FROM node:12.16-alpine as builder

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm ci

COPY . .
ARG env
RUN ./node_modules/@angular/cli/bin/ng build --configuration=${env}

FROM nginx:1.17.1-alpine

COPY --from=builder /app/dist/angular-runtime-config /dist
COPY nginx.conf /etc/nginx/nginx.conf

VOLUME /var/log/nginx/
VOLUME /dist

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
