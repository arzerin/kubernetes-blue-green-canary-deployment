FROM node:16 

WORKDIR /app

# Copy package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy the rest of the application code
COPY ./app /app/

# Expose the app on port 8080
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
