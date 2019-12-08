FROM mysql:latest


# GETTING ENVs from .env (env-file in docker-compose) (same impact)

# MANDATORY TO SET
# ENV MYSQL_ROOT_PASSWORD 12345

# # [OPTIONAL]
# ENV MYSQL_DATABASE my_db  
# ENV MYSQL_USER users_service  
# ENV MYSQL_PASSWORD 123

ADD setup.sql /docker-entrypoint-initdb.d
