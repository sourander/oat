FROM nginx:alpine
COPY ./arviointi/public /usr/share/nginx/html

# Add UTF-8 to Nginx
# RUN cat <<EOF > /etc/nginx/conf.d/charset.conf
# http {
#     charset                utf-8;
# }
# EOF