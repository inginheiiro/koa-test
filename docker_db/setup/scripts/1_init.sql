create table "yellow" (
    "vendorid" integer,
    "tpep_pickup_datetime" timestamptz,
    "tpep_dropoff_datetime" timestamptz,
    "passenger_count" integer,
    "trip_distance" real,
    "ratecodeid" integer,
    "store_and_fwd_flag" varchar(1),
    "pulocationid" integer,
    "dolocationid" integer,
    "payment_type" numeric,
    "fare_amount" numeric,
    "extra" numeric,
    "mta_tax" numeric,
    "tip_amount" numeric,
    "tolls_amount" numeric,
    "improvement_surcharge" numeric,
    "total_amount" numeric,
    "congestion_surcharge" varchar(20) null
    );

CREATE INDEX yellow_index ON "yellow" ("vendorid", "tpep_pickup_datetime","tpep_dropoff_datetime");

