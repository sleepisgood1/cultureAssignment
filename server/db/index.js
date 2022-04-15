const pgp = require('pg-promise')(/* options */)
require('dotenv').config()

const connection = {
  host: process.env.HOST,
  user: process.env.CURUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: 5432,
  min: 0,
  max: 30
}

module.exports = {
  db: pgp(connection),
  pgp: pgp
}