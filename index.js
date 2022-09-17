//Import file system and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//import functions and objects from other folders
const generateHTML = require('./src/page-template');
const { employeeQuestionsArr, addEmployeeQuestions } = require('./lib/Employee');
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
//Function to add a team member
const addEmployee = () => {
    return inquirer.prompt(addEmployeeQuestions)
    .then(function (employeeInput) {
        // calling a function depending on the role chosen by the user
        switch(employeeInput.role) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            
            default:
                console.log(employeeInput.role);
        }
    })
}

// Manager function is only called once at the beginning
const addManager = () => {
    return inquirer.prompt(managerQuestions)
    .then(managerInput => {
        //Create new object with manager information captured by inquirer
        const { name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        
        //push the object into the array
        teamArray.push(manager);
        console.log(teamArray);
    })
}

const addEngineer = () => {
    return inquirer.prompt(engineerQuestions)
    .then(engineerInput => {
        //Create new object with engineer information captured by inquirer
        const { name, id, email, github} = engineerInput;
        const engineer = new Engineer (name, id, email, github);
        
        //push the object into the array
        teamArray.push(engineer);
        console.log(teamArray);

        //calls the add employee function
        addEmployee();
    })
}

const addIntern = () => {
    return inquirer.prompt(internQuestions)
    .then(internInput => {
        //Create new object with intern information captured by inquirer
        const { name, id, email, school} = internInput;
        const intern = new Intern (name, id, email, school);
        
        //push the object into the array
        teamArray.push(intern);
        console.log(teamArray);

        //calls the add employee function
        addEmployee();
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
addManager()
    .then(teamProfileData => {
        return addEmployee(teamProfileData)
    });

    /*.then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
    });*/