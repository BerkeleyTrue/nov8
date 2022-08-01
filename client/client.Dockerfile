FROM node:16-alpine as dev
WORKDIR /root/
CMD echo -e "\n\n=>>***----***\n=>>Dev: Getting latest npm modules\n=>>***----***\n\n" \
    && npm ci \
    && echo -e "\n\n=>>***----***\n=>>Installation complete, starting dev servers \n=>>***----*** \n\n" \
    && npm start

FROM node:16-alpine as migrate
WORKDIR /root
CMD echo -e '\n\n/=>>***----*** /\n=>>Migrate: Getting latest npm modules\n=>>***----*** \n\n' \
    && npm ci --cache .npm\
    && echo -e '\n\n/=>>***----*** /\n=>>Installation complete, starting migrations.\n/ ***----*** /\n\n' \
    && npx prisma migrate dev --name init

FROM node:16-alpine as prod
WORKDIR /root
COPY ./package*.json ./
RUN npm ci --cache .npm
COPY . .
RUN npm run prod
