/**
 * arquivo: app.js
 * descrição: arquivo responsável por realizar a conexão com server.js
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const express = require('express');
const cors = require('cors');
const app = express();

// Rotas da Api(Employee)
const index = require('./routes/index');
const employeeRoute = require('./routes/employee.routes');
const jobRoute = require('./routes/job-roles.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', employeeRoute);
app.use('/api/', jobRoute);

module.exports = app;