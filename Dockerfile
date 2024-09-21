# Use the official Nginx base image
FROM nginx:latest

# Copy your custom nginx.conf to the container's config directory
COPY ./nginx-conf/nginx.conf /etc/nginx/conf.d/default.conf

# Copy your front-end files (HTML, CSS, JS) to the container's web root
COPY ./frontend/ /usr/share/nginx/html/

# Copy your music files to /music directory inside the container
COPY ./music/ /music/

# Expose port 80 for the web server
EXPOSE 80
