/**
 * arquivo: router/job-roles.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const router = require('express-promise-router')();
const jobControler = require('../controllers/job.controller');

router.delete('/job_roles/:id', jobControler.deleteJobRole);
router.post('/job_roles', jobControler.createJobRole);
router.post('/job_roles/:id', jobControler.updateJobRole);
router.get('/job_roles/:id', jobControler.selectJobRoleById);
router.get('/job_roles', jobControler.listAllJobRoles);