INSERT INTO department (dept_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Intern');

INSERT INTO roles
    (title, salary, department_id)
VALUES 
    ('Vice President of Sales', 200000, 1),
    ('Sales Manager', 150000, 1),
    ('Sales Assistant', 50000, 1),
    ('Senior Engineer', 180000, 2),
    ('Full Stack Developer', 120000, 2),
    ('Accounting Manager', 125000, 3),
    ('Staff Accountant', 80000, 3),
    ('Lead Attorney', 250000, 4),
    ('Corporate Attorney', 115000, 4),
    ('Intern', 30000, 5);

    INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Daniel', 'LaRusso', 2, 1),
    ('Amanda', 'LaRusso', 1, NULL),
    ('Robby', 'Keene', 3, 2),
    ('Miguel', 'Diaz', 4, NULL),
    ('Tory', 'Nichols', 5, 4),
    ('John', 'Kreese', 6, NULL),
    ('Eli', 'Moskowitz', 7, 6),
    ('Carmen', 'Diaz', 8, NULL),
    ('Samantha', 'LaRusso', 9, 8),
    ('Demetri', 'DeCenzo', 10, 1);

