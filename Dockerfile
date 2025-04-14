FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build || echo "No build script"

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]
