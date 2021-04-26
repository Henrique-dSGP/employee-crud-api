/**
 * arquivo: config/employee.controller.js
 * descrição: arquivo responsável pelas 'connectionStrings' (Cosmos DB & PostgreSQL)
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const { Pool, Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Conexão com a base de dados
const pool = new Pool({
    connectionString = process.env.DATABASE_URL
});


pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('Db conectado com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};