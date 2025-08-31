# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies 
RUN npm install

# Copy the project files to the working directory
COPY . .

# Build the Angular app
RUN npm run build

# Install a simple web server to serve static files
RUN npm install -g serve

# Expose port 80 for the container
EXPOSE 80

# Serve the built Angular app from the dist folder
CMD ["serve", "-s", "dist/FirstApp", "-l", "80"]