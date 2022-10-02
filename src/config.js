const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.admin,
  host: process.env.HOST || 'localhost',
  database: process.env.database,
  password: process.env.password,
  port: process.env.port || 5432,
})

module.exports = {
  pool,
}
