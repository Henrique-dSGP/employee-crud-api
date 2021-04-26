/**
 * arquivo: config/employee.controller.js
 * descrição: arquivo responsável pela lógica do CRUD Employee
 * data: 25/04/2021
 * autor: <@hdsgp>
 */

const db = require('../config/database');

//motodo para criar novo employee

exports.createEmployee = async (req, res) => {


    const { name, job_role, salary, date_of_birth, employee_registration } = req.body;
    try {
        //cuidado com a falta de virgulas!, perdi um tempo por isso.
        const { rows } = await db.query(
            "INSERT INTO employee ( name, job_role, salary, date_of_birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
            [name, job_role, salary, date_of_birth, employee_registration]
        );
        res.status(201).send({
            message: 'Employee added successfully!',
            body: {
                employee: {
                    name, job_role, salary, date_of_birth, employee_registration
                }
            },
        });
    } catch (error) {
        console.error('createEmployee', error);
        res.status(500).send({
            message: "Error"
        });
    }
};
exports.listAllEmployees = async (req, res) => {
    const response = await db.query(
        `SELECT employee_id, name, job_role, salary, employee_registration, to_char(date_of_birth, 'dd-MM-yyyy') as date_of_birth FROM employee ORDER BY name ASC`,
    );
    res.status(200).send(response.rows);
}
/*
exports.deleteEmployee = async (req, res) => {


    const { id } = req.params;
    try {
        await db.query("DELETE FROM employee WHERE employee_id = $1", [id]);
        res.status(201).send({
            message: 'Employee deleted successfully!',
        });
    } catch (error) {
        console.error('deleteEmployeeById', error);
        res.status(500).send({
            message: "Error"
        });
    }
};*/