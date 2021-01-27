const connection = require('./db/connection');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const promisemysql = require("promise-mysql");

function mainMenu() {
  inquirer
      .prompt({
          name: "userAction",
          type: "list",
          message: "What would you like to do?",
          choices: [
              "View Departments",
              "View Employees",
              "View Roles",
              "View Employees by Manager",
              "View Employees by Department",
              "Add a Department",
              "View Department Budgets",
              "Add a Role",
              "Add an Employee",
              "Update Employee role",
              "Update Employee Manager",
              "Delete Employee",
              "Delete Role",
              "Delete Department",
              "Exit"
          ]
      })

      .then(response => {
        switch (response.userAction) {
            case "View Departments":
                viewDepts();
                break;
            case "View Employees":
                viewEmp();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees by Manager":
                viewAllEmpByMngr();
                break;
            case "View Employees by Department":
                viewAllEmpByDept();
                break;
            case "Add a Department":
                addDept();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmp();
                break;
            case "Update Employee role":
                updateEmpRole();
                break;
            case "Update Employee Manager":
                updateEmpMngr();
                break;
            case "Delete Employee":
                deleteEmp();
                break;
            case "Delete Role":
                deleteRole();
                break;
            case "Delete Department":
                deleteDept();
                break;
            case "View Department Budgets":
                viewDeptBudget();
                break;
            case "Exit":
                connection.end();
                break;
        }
    });
}

mainMenu();


// QUERIES BELOW

//View all departments
function viewDepts() {
  let query = `SELECT * FROM department`;
  connection.query(query, function (err,res) {
    console.table(res);
    mainMenu();
  })
}
//View all roles
function viewRoles() {
  let query = `SELECT * FROM roles`;
  connection.query(query, function (err,res) {
    console.table(res);
    mainMenu();
  })
}
//View all employees
function viewEmp() {
  let query = `SELECT * FROM employee`;
  connection.query(query, function (err,res) {
    console.table(res);
    mainMenu();
  })
}


//View Employee by Manager

//View Employee by Department

//Add a department
function addDept() {
  inquirer
      .prompt([
          {
              name: "deptID",
              type: "input",
              message: "What is the ID of the new department?",
          },
          {
              name: "deptName",
              type: "input",
              message: "What is the name of the new department?",
          }
      ])

      .then(function(response) {
          connection.query("INSERT INTO departments SET ?", {
                  id: response.deptID,
                  department_name: response.deptName,
              },
              function(err) {
                  if (err) throw err;
                  console.log("Your department was created successfully!");
                  mainMenu();
              }
          );
      });
};

//Add a Role
function addRole() {
  inquirer
      .prompt([
          {
              name: "roleID",
              type: "input",
              message: "What is the ID of the new role?",
          },
          {
              name: "roleTtile",
              type: "input",
              message: "What is the title of the new role?",
          },
          {
              name: "roleSalary",
              type: "input",
              message: "What is the salary of the new role?",
          },
          {
              name: "roleDepartment",
              type: "input",
              message: "What is the department ID of the new role?",
          }
      ])

      .then(function(response) {
          connection.query("INSERT INTO roles SET ?", {
                  id: response.roleID,
                  title: response.roleTtile,
                  salary: response.roleSalary,
                  department_id: response.roleDepartment,
              },
              function(err) {
                  if (err) throw err;
                  console.log("Your new role was created successfully!");
                  mainMenu();
              }
          );
      });
};
//Add an employee
function addEmp() {
inquirer
            .prompt([
                {
                    name: "employeeID",
                    type: "input",
                    message: "What is the ID of the new employee?",
                },
                {
                    name: "empFirstName",
                    type: "input",
                    message: "What is the first name of the new employee?",
                },
                {
                    name: "empLastName",
                    type: "input",
                    message: "What is the last name of the new employee?",
                },
                {
                    name: "empRole",
                    type: "input",
                    message: "What is the role ID for the new employee?",
                },
                {
                    name: "empManager",
                    type: "input",
                    message: "What is id of the new employee's manager?",
                }
            ])

            .then(function(response) {
                connection.query("INSERT INTO employee SET ?", {
                        id: response.employeeID,
                        first_name: response.empFirstName,
                        last_name: response.empLastName,
                        role_id: response.empRole,
                        manager_id: response.empManager,
                    },
                    function(err) {
                        if (err) throw err;
                        console.log("Your new employee was created successfully!");
                        mainMenu();
                    }
                );
            });
    };

//Update an employee

//Update Employee Managers

//Delete Departments

//Delete Roles

//Delete Employees

//View total utilized budget of department. 
//i.e: Combined salaries of all employees in that dept. 

