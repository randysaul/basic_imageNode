FROM node:24-alpine
WORKDIR /app
COPY package*.json .
COPY app.js .
RUN npm install
EXPOSE 5006
ENV color_fuente=blue
ENV fuente=Arial
CMD ["node", "app.js"]