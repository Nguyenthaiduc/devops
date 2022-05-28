FROM node:slim
WORKDIR /usr/src/app
ENV WELCOME_MESSAGE="Welcome to NTD"
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 4000
CMD [ "yarn", "start" ]

