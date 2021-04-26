/**
 * arquivo: config/employee.database.js
 * descrição: arquivo responsável pelas 'connectionStrings' (Cosmos DB & PostgreSQL)
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const { Pool, Client } = require('pg');
const connectionString = process.env.DATABASE_URL;
const dotenv = require('dotenv');

dotenv.config();

// Conexão com a base de dados
/*const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});
*/
const pool = new Pool({
    connectionString

})
const client = new Client({
    connectionString
})

pool.on('connect', () => {
    console.log('Db conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};