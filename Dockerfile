# Stage 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Build production assets
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN npm run build

# Stage 2 — Run (Production)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3011
ENV NEXT_TELEMETRY_DISABLED=1

# Copy from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Install only production dependencies
RUN npm ci --omit=dev

# Expose the port used by Next.js
EXPOSE 3011

# Healthcheck (optional)
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD wget -qO- http://localhost:3011/en || exit 1

# Start the Next.js server
CMD ["npm", "run", "start"]