/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável pela chamada da API na aplicação
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Welcome to API Node.js + PostGreSQL + Azure',
        version: '1.0.0'
    });
})

module.exports = router;