FROM node:16-alpine as dev
WORKDIR /root/
CMD echo "getting latest npm modules" \
    && npm ci \
    && echo "installation complete, starting" \
    && npm start

FROM node:16-alpine as migrate
WORKDIR /root/
RUN echo $DATABASE_URL
RUN echo "getting latest npm modules" \
    && npm ci \
RUN echo "installation complete, generating client" \
    && npx prisma migrate dev --name init

FROM node:16-alpine as prod
WORKDIR /root
COPY ./package*.json ./
RUN npm ci --cache .npm
COPY . .
RUN npm run prod
