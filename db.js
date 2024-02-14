/** Database setup for BizTime. */
const { Client } = require("pg")

DB_URI = "biztime"

const client = new Client({
    host: "/var/run/postgresql",
    database: DB_URI
})

client.connect()

module.exports = client;
