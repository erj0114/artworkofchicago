
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'artwork_of_chicago',
  password: 'Thankyou',
  port: 5432,
})

module.exports = {
    pool
}