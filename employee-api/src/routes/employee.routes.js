/**
 * arquivo: router/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

//Definição das rodas do CRUD Employee
router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.listAllEmployees);
router.get('/employees/:id', employeeController.selectEmployeeById);
//router.delete('/employees:id', employeeController.deleteEmployee);
module.exports = router;