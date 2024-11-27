# Use the official Nginx image
FROM nginx:alpine

# Copy all files and subdirectories from src to the Nginx html directory
COPY src/ /usr/share/nginx/html/

# Copy the custom Nginx configuration
COPY default.conf /etc/nginx/conf.d/

# Expose port 80
EXPOSE 80
