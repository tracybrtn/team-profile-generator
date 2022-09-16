//Import inquirer
const inquirer = require('inquirer');

//Array of questions for user input
const questions = () => {
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
    ]);
}

questions();