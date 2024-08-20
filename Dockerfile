FROM node:alpine3.19 AS base

FROM base AS build
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm fetch --frozen-lockfile
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM base AS final

WORKDIR /app
COPY --from=build /app/dist /app/dist
ENV NODE_ENV=production
CMD ["node", "./dist/server/server.mjs"]
EXPOSE 4000

#FROM nginx:latest
#
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build /app/dist /usr/share/nginx/html
#
#EXPOSE 80


