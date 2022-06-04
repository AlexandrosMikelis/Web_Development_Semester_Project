const dotenv = require("dotenv");

dotenv.config();

const { Client } = require('pg');
const Pool = require('pg').Pool;
const client = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'patras-league-db',
    password: 'koko1234',
    port: 5433
});

client.connect((err) => {
    if (err)
        throw err;
    else console.log("Connected to Patras League database")
});


module.exports = client;