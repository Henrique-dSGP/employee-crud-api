/**
 * arquivo: router/employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');
const jobControler = require('../controllers/job.controller');

//Definição das rodas do CRUD Employee
router.post('/employees', employeeController.createEmployee);
router.post('/job_roles', jobControler.createJobRole);
router.get('/employees', employeeController.listAllEmployees);
router.get('/job_roles', jobControler.listAllJobRoles);
router.get('/employees/:id', employeeController.selectEmployeeById);
router.get('/job_roles/:id', jobControler.selectJobRoleById);
router.post('/employees/:id', employeeController.updateEmployee);
router.post('/job_roles/:id', jobControler.updateJobRole);
router.delete('/employees/:id', employeeController.deleteEmployee);
router.delete('/job_roles/:id', jobControler.deleteJobRole);
module.exports = router;