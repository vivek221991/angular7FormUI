FROM node:10.9.0
# Create app directory
WORKDIR /var/www/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

COPY . .
#To bundle your app’s source code inside the Docker image, use the COPY instruction:
#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 4200
CMD [“npm”, “start”]

CMD apachectl -D FOREGROUND

