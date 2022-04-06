require('dotenv/config');

const {
  HOST_PROD,
  HOST_TEST,
  PASSWORD_POSTGRES_PROD,
  PASSWORD_POSTGRES_TEST,
  DATABASE, DB_USERNAME,
  DB_PORT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES_PROD,
    database: DATABASE,
    host: HOST_PROD,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES_TEST,
    database: DATABASE,
    host: HOST_TEST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES_PROD,
    database: DATABASE,
    host: HOST_PROD,
    port: DB_PORT,
    dialect: 'postgres',
  },
};
