# Step 1: Use official Node.js image as a base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies (this includes Vite, React, Storybook, etc.)
RUN npm install

# Step 5: Copy the rest of the application source code into the container
COPY . .

# Step 6: Build the app and Storybook
# RUN npm run build
RUN npm run build-storybook

# Step 7: Set up the final container with only necessary runtime environment
FROM nginx:alpine

# Step 8: Copy the built Storybook from the previous image
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Step 9: Expose the port for Storybook to run
EXPOSE 80

# Step 10: Start the Nginx server (this serves Storybook)
CMD ["nginx", "-g", "daemon off;"]
