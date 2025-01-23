# Build Stage
FROM node:18-alpine AS client
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=client /app/client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]