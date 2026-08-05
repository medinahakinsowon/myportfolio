FROM node:18-alpine
EXPOSE 5173
WORKDIR /portfolio
COPY public/ /portfolio/public
COPY src/ /foodApp/src
COPY package*.json /portfolio/
RUN npm install
CMD ["npm", "run", "dev", "--host=0.0.0.0"]