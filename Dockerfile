FROM node:20-alpine as build

WORKDIR /app

COPY . /app

COPY package*.json /app

RUN yarn install

RUN yarn run build

ENV API_BASE=$API_BASE

FROM gcr.io/distroless/nodejs20 as prod

WORKDIR /app

COPY --from=build /app/.output /app/.output

ENV NUXT_PUBLIC_API_BASE=$API_BASE

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
CMD ["/app/.output/server/index.mjs"]