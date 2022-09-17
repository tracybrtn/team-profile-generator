//Import file system and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//import functions and objects from other folders
const generateHTML = require('./src/page-template');
const { Employee, employeeQuestionsArr, addEmployeeArr } = require('./lib/Employee');
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');

// Employee Array
const teamArray = [];

//inquirer questions arrays 
const managerQuestions = employeeQuestionsArr.concat(managerQuestionsArr, addEmployeeArr);
const engineerQuestions = engineerQuestionsArr.concat(addEmployeeArr);
const internQuestions = internQuestionsArr.concat(addEmployeeArr);


//Array of questions for user input
const startApp = () => {
    return inquirer.prompt(managerQuestions)
    .then(managerInput => {
        //Create new object with employee information captured by inquirer
        const { name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        
        //push the object into the array
        teamArray.push(manager);
        console.log(manager);
        console.log(teamArray);
        console.log(engineerQuestions);
        console.log(internQuestions);
    })

}

// Create index.html
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

//Start App
startApp()
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });