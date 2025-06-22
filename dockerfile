FROM node:18-slim AS builder

WORKDIR /app

# Instalacja zależności systemowych potrzebnych do kompilacji node-modules
RUN apt-get update && apt-get install -y python3 make g++

COPY package*.json ./

# Najlepiej czysta, deterministyczna instalacja
RUN npm ci --omit=dev

COPY . .

RUN npm run build

FROM node:18-slim

WORKDIR /app

COPY --from=builder /app/.output .output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
