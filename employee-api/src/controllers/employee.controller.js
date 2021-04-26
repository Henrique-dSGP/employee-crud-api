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
        `SELECT employee_id,
         name, job_role, salary,
          employee_registration,
           to_char(date_of_birth, 'dd-MM-yyyy') as date_of_birth
            FROM employee
             ORDER BY name ASC`,
    );
    res.status(200).send(response.rows);
}
exports.selectEmployeeById = async (req, res) => {
    const employeeId = req.params.id;
    try {
        const response = await db.query(
            `SELECT employee_id,
         name, job_role, salary,
          employee_registration,
           to_char(date_of_birth, 'dd-MM-yyyy') as date_of_birth
            FROM employee
            WHERE employee_id =$1`, [employeeId]
        );
        if (response.rows.lenght == 0) {
            throw 'employee_not_found';
        }
        res.status(200).send(response.rows[0]);
    } catch (err) {
        console.error('selectEmployeById', err);
        if (err == 'employee_not_found') {
            res.status(404).send({
                message: "Employee not found."
            });
        } else {
            res.status(500).send({
                message: "Ocorreu um erro."
            })
        }
    }
}
///exports.updateEmployee = async (req, res) => {
    
//}
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