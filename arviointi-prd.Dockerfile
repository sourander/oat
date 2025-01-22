FROM node:22 AS build

WORKDIR /app
ARG REACT_DIR=src/arviointi

# Copy package.json and package-lock.json
COPY "${REACT_DIR}/package.json" "${REACT_DIR}/package-lock.json" /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY "${REACT_DIR}" /app

# Build the React app for production
RUN npm run build

# Step 2: Serve the static files using nginx
FROM nginx:alpine

# Copy the built static files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html
