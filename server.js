const connection = require('./db/connection');
const mysql = require('mysql2');
const inquirer = require('inquirer');


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

//Add a Role

//Add an employee

//Update an employee

//Update Employee Managers

//Delete Departments

//Delete Roles

//Delete Employees

//View total utilized budget of department. 
//i.e: Combined salaries of all employees in that dept. 

