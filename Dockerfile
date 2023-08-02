FROM node:20.3.0 AS builder

WORKDIR /src

COPY package.json  package-lock.json ./

RUN npm ci --production

COPY . .

RUN npm run build:prod

FROM node:20.3.0

WORKDIR /app

COPY --from=builder /src/app.js ./
COPY --from=builder /src/build ./build
COPY --from=builder /src/package.json /src/package-lock.json ./

RUN npm ci --production

EXPOSE 3000

CMD [ "npm", "start"]
