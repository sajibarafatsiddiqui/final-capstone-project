# Frontend - React App

# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the React app will run
EXPOSE 80

# Serve the built React app using a static server
CMD ["npm", "run", "serve"]
