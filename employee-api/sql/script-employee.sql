CREATE TABLE employee (
	employee_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL,
	job_role uuid references job_role(_id) ON UPDATE CASCADE ON DELETE CASCADE,
	salary NUMERIC(9,2),
	date_of_birth DATE NOT NULL,
	employee_registration INTEGER NOT NULL
)
CREATE TABLE job_role (
	_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	name VARCHAR(255) NOT NULL UNIQUE,
	min_wage NUMERIC(9,2) NOT NULL,
	max_wage NUMERIC(9,2) NOT NULL,
	min_w_exp VARCHAR(255) NOT NULL
)