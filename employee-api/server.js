/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do Back-End('Employee')
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const app = require('./src/app.js')
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App online | port: ', port);
})