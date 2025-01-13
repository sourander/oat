FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./arviointi/*.json .
COPY ./arviointi/app.js .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY ./arviointi/public /app/public

# Expose the port your app runs on
EXPOSE 3000

CMD ["npm", "start"]
