# Kao Simple API with Docker running Postgres and uploading a huge CSV

### Node 13.2.0 + NPM 6.13.1 + YARN 1.22.0

## Docker

1. download https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2019-01.csv and save it at docker_db/data/datasource.csv

2. Use DOCKER-COMPOSE to setup the PG container and upload the dataset. 


### Install
Yarn

## Run 
node app.js 

## Running Basic Test
yarn jest

## Web API 

http://localhost:3000/api/v1/db/payment_types/distinct

http://localhost:3000/api/v1/db/vendors/distinct

http://localhost:3000/api/v1/db/all/:page*

*page= optional page number if not provided is 1.
because this is a huge dataset we paginated the results with a step of 100 

