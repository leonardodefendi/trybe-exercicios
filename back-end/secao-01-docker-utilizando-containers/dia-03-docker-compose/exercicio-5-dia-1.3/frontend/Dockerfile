FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm clean-install
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 5173
