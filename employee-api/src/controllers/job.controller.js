const db = require('../config/database');

exports.createJobRole = async (req, res) => {
    const { name, min_wage, max_wage, min_w_exp } = req.body
    try {
        const { rows } = await db.query(
            "INSER INTO job_role (name, min_wage, max_wage, min_w_exp) VALUES ($1, $2, $3, $4)",
            [name, min_wage, max_wage, min_w_exp]
        );
        res.status(200).send({
            message: 'Job Role Added Successfully',
            body: {
                job_role: {
                    name, min_wage, max_wage, min_w_exp
                }
            },
        });
    } catch (err) {
        res.status(500).send({
            message: 'Error in create new job_role' + err
        });
    }
};
exports.listAllJobRoles = async (req, res) => {
    try {
        const response = await db.query(
            "SELECT name, min_wage, max_wage, min_w_exp FROM job_role ORDER BY name ASC",
        );
        res.status(200).send(response.rows);
    } catch (err) {
        res.status(500).send({
            message: 'Error when try to list all job roles'
        });
    }
}
exports.selectJobRoleById = async (req, res) => {
    const job_role_Id = req.params.id;
    try {
        const response = await db.query("SELECT name, min_wage, max_wage, min_w_exp FROM job_role WHERE _id = $1", [job_role_Id]
        );
        if (response.rows.length == 0) {
            throw 'Job Role Not Found.'
        }
    } catch (err) {
        if (err == 'Job Role Not Found.') {
            res.status(404).send({
                message: 'Job Role Not Found.'
            });
        }
        else {
            res.status(500).send({
                message: 'Error' + err
            })
        }
    }
}
exports.updateJobRole = async (req, res) => {
    const { id } = req.params;
    try {
        const { name, min_wage, max_wage, min_w_exp } = req.body;
        const { response } = await db.query(
            "UPDATE job_role SET name = $1, min_wage = $2, max_wage = $3, min_w_exp = $4 WHERE _id = $5 ",
            [name, min_wage, max_wage, min_w_exp, id]
        );
        res.status(200).send({
            message: 'Job Role Updated'
        })
    } catch (err) {
        res.status(500).send({
            message: 'An Error Occurred: ' + err
        })
    }
}

exports.deleteJobRole = async (req, res) => {
    const { id } = req.params
    try {
        await db.query(
            "DELETE FROM job_role WHERE _id = $1", [id]
        );
        res.status(200).send({
            message: 'Job Role Deleted'
        })
    } catch (err) {
        res.status(500).send({
            message: 'An Error Occurred: ' + err
        })
    }
}