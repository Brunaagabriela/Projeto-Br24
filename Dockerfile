# Use the official Nginx image
FROM nginx:alpine

# Copy the index.html file to the Nginx html directory
COPY index.html /usr/share/nginx/html/
COPY install.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80