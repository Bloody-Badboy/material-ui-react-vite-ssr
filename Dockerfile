FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn run build

FROM node:20-alpine AS runner

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

COPY --from=builder /usr/src/app/dist ./dist  
COPY server.js ./

ENV NODE_ENV=production
ENV PORT=8080

RUN ls -la /usr/src/app

RUN adduser -D appuser
USER appuser

CMD ["node", "server.js"]