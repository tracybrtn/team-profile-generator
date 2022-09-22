const generateManager = function(manager) {
  return `
<div class="card">
    <div class="card-header">
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
    </div>
    <div class="card-body">
      <div class="card-box">ID: ${manager.id}</div>
      <div class="card-box">Email: ${manager.email}</div>
      <div class="card-box">Office Number: ${manager.officeNumber}</div>
    </div>
</div>`
}

const generateEngineer = function(engineer) {
  return `
<div class="card">
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
    </div>
    <div class="card-body">
      <div class="card-box">ID: ${engineer.id}</div>
      <div class="card-box">Email: ${engineer.email}</div>
      <div class="card-box">Github: ${engineer.github}:</div>
    </div>
</div>
`
}

const generateIntern = function(intern) {
  return `
<div class="card">
    <div class="card-header">
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
    </div>
    <div class="card-body">
      <div class="card-box">ID: ${intern.id}</div>
      <div class="card-box">Email: ${intern.email}</div>
      <div class="card-box">School: ${intern.school}</div>
    </div>
</div>
`
}

generateHTML = (data) => {
  console.log('console logging data');
  console.log(data);

  //Create array for cards
  pageArr = [];

  // loop data 
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole(); 

    console.log('console logging employee');
    console.log(employee);

      // call manager function
    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      pageArr.push(managerCard);
    }

    // call engineer function
    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      pageArr.push(engineerCard);
    }

    // call intern function 
    if (role === 'Intern') {
      const internCard = generateIntern(employee);

      pageArr.push(internCard);
    }
  }
    //Array needs to be stringified
    const employeeCards = pageArr.join('');

    console.log('console logging employee cards');
    console.log(employeeCards);

  const generateWebpage = generateTeamProfile(employeeCards);
  return generateWebpage;
}
const generateTeamProfile = function (employeeCards) {
      return`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <title>Team Profile</title>
      </head>
      <body>
          <header>
              <h1>My Team</h1>
          </header>
          <main>
              <div class="container">
              ${employeeCards}
              </div>
          </main>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
      </html>
    `
}

// //Generates HTML
module.exports = generateHTML;