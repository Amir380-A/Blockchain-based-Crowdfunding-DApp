# Use the official Node.js image of Alpine Linux 
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Copy the frontend code to the container
COPY frontend/ frontend/
# Copy the frontend package.json and package-lock.json files to the container
COPY frontend/package*.json frontend/
# Install the frontend dependencies
RUN npm run install:frontend  
# Build the frontend code
RUN npm run build:frontend


# Copy the server package.json and package-lock.json files to the container
COPY server/package*.json server/
# Copy the server code to the container
COPY server/ server/
# Install the server dependencies
RUN npm run install:prod:server


# Set the user to "node"
USER node

# Start the server
CMD ["npm", "run", "start:server"]

# Expose port 8000
EXPOSE 8000