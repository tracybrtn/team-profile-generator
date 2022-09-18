//Import file system and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//import functions and objects from other folders
const generateHTML = require('./src/page-template');
const { Employee, employeeQuestionsArr, addEmployeeQuestions } = require('./lib/Employee');
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');

// Employee Array
const teamArray = [];

//inquirer questions arrays 
const managerQuestions = employeeQuestionsArr.concat(managerQuestionsArr);
const engineerQuestions = employeeQuestionsArr.concat(engineerQuestionsArr);
const internQuestions =  employeeQuestionsArr.concat(internQuestionsArr);

//EMPLOYEE ROLES FUNCTIONS

const startApp = () => {
    // Manager function is only called once at the beginning
    return inquirer.prompt(managerQuestions)
    .then(managerInput => {
        //Create new object with manager information captured by inquirer
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        
        //push the object into the array
        teamArray.push(manager);
        console.log(manager);
    })
}

//Function to add a team member
const addEmployee = () => {
    
    // asks if user would like to add an employee
    return inquirer.prompt(addEmployeeQuestions)

     // returns role specific questions
    .then(function (employeeInput) {
        switch(employeeInput.role) {

            //Prompts for engineer
            case 'Engineer':
                return inquirer.prompt(engineerQuestions)
                .then(engineerInput => {
                    //Create new object with engineer information captured by inquirer
                    const { name, id, email, github} = engineerInput;
                    const engineer = new Engineer (name, id, email, github);
                    
                    //push the object into the array
                    teamArray.push(engineer);
                    console.log(teamArray);

                    //returns to initial question
                    return addEmployee()
                    })

            //Prompts for Intern
            case 'Intern':
                return inquirer.prompt(internQuestions)
                .then(internInput => {

                    //Create new object with intern information captured by inquirer
                    const { name, id, email, school} = internInput;
                    const intern = new Intern (name, id, email, school);
                    
                    //push the object into the array
                    teamArray.push(intern);
                    console.log(teamArray);

                    //returns to initial question
                    return addEmployee()
                })

            case 'No more team members are needed.':
                return generateHTML(teamArray);
        }
    })
}
// end of EMPLOYEE ROLES FUNCTIONS

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
    .then(addEmployee)
    .then(pageHTML => {
         return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });