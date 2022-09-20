
const generateManager = function(manager) {
  return `
  <div>${manager.name}
  ${manager.id}
  ${manager.email}
  ${manager.officeNumber}
  </div>`
}

const generateEngineer = function(engineer) {
  return `
  <div>${engineer.name}
  ${engineer.id}
  ${engineer.email}
  ${engineer.github}
  </div>`
}

const generateIntern = function(intern) {
  return `
  <div>${intern.name}
  ${intern.id}
  ${intern.email}
  ${intern.school}
  </div>`
}

generateHTML = data => {
  console.info(data);

  //Create array for cards.
  pageArray = [];


  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole(); 
    console.log(employee)

      // call manager function
      if (role === 'Manager') {
        const managerCard = generateManager(employee);
        pageArray.push(managerCard);
      }

    // call engineer function
    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
      const internCard = generateIntern(employee);
      pageArray.push(internCard);
    }
    
    //Array needs to be stringified
    console.info(pageArray);
}



      return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <p></p>

  <body>
    <main>
        <h1>This is a test</h1>  
        <div> 
        </div>
    </main>
  </body>
</html>    
    `

}

// }

// //Generates HTML
module.exports = generateHTML;