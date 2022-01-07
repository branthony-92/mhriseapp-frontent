FROM node:17.3-alpine

WORKDIR /core
ENV PATH="./node_modules/.bin:$PATH"
COPY . .

RUN npm install -g npm@8.3.0
RUN npm install
RUN npm run build
CMD ["npm", "start"]