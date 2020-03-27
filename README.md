# Kao Simple API with Docker running Postgres and uploading a huge CSV

### Used a Windows box with Webstorm + Node 13.2.0 + NPM 6.13.1 + YARN 1.22.0

### Setup
Yarn

## Run 
node app.js

## Docker

FIRST download https://s3.amazonaws.com/nyc-tlc/trip+data/yellow_tripdata_2019-01.csv and save it at docker_db/data/datasource.csv

SECOND use DOCKER-COMPOSE to setup the PG container and upload the dataset. 

## running tests
yarn jest

## Installing 
yarn 

## Web API

http://localhost:3000/api/v1/db/payment_types/distinct

http://localhost:3000/api/v1/db/vendors/distinct

http://localhost:3000/api/v1/db/all/:page*

*page= optional page number if not provided is 1.
because this is a huge dataset we paginated the results with a step of 100 







