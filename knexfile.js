require('dotenv').config({path: __dirname + '/.env'});

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${process.env.USER}:${process.env.PWD}@${process.env.SERVER}:${process.env.PORT}/${process.env.DATABASE}`,
    pool: {
      min: 2,
      max: 10
    }
  },
  test: {
    client: 'pg',
    connection: `postgres://${process.env.USER}:${process.env.PWD}@${process.env.SERVER}:${process.env.PORT}/${process.env.DATABASE}`,
    pool: {
      min: 2,
      max: 10
    }
  }
};
