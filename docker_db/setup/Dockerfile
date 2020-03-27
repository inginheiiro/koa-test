FROM postgres:alpine
# COPY *.sql /docker-entrypoint-initdb.d/
ADD scripts/1_init.sql /docker-entrypoint-initdb.d
ADD scripts/2_upload.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
EXPOSE 5432
