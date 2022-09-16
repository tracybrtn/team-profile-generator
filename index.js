//Import file system and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//import functions and objects from other folders
const generateHTML = require('./src/page-template');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

// Employee Array
const employeeArray = [];

//Array of questions for user input
const addEmployee = () => {
    //that uses inquirer to .prompt questions to user
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            //validate
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the employee?',
            //validate
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
            //validate
        }
    ]).then(employeeInput => {
        //Create new object with employee information captured by inquirer
        const { name, id, email } = employeeInput;
        const employee = new Employee (name, id, email);
        
        //push the object into the array
        employeeArray.push(employee);
        console.log(employee);
    })
}

const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
            // if there's an error
            if (err) {
              console.log(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
            } else {
                console.log("profile created");
            }
        })
}

addEmployee()
    .then(employeeArray => {
        return generateHTML(employeeArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });