const pg = require('pg');
const pw = require('./pw.js');

const config = {
  user: 'jonathanpizzolato',
  host: 'localhost',
  database: 'dev_crypto_charting',
  password: pw,
  port: 5432
}
const client = new pg.Client(config);

console.log(client)