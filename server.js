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
              "View all Departments",
              "View all Employees",
              "View all Roles",
              "View all Employees by Manager",
              "View all Employees by Department",
              "Add a Department",
              "View department budgets",
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

}

mainMenu();


// QUERIES BELOW

//View all departments

//View all roles

//View all employees

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

