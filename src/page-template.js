const Engineer = require("../lib/Engineer")

const createOurTeam = (team) => {
  const createManager = (manager) => {
    return `
  <div class="col">
    <div class='card h-100 text-dark bg-light mb-3 managerCard' style="max-width: 16rem;">
      <div class='card-header bg-primary text-white'>
        <h5 class="card-title">Name: ${manager.getName()}</h5>
        <p class="card-text">Role: ${manager.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush bg-white">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: ${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
      </ul>
    </div>
  </div>
    `
  }

  const createEngineer = (engineer) => {
    return `
  <div class="col">
    <div class='card h-100 text-dark bg-light mb-3 engineerCard' style="max-width: 16rem;">
      <div class='card-header bg-primary text-white'>
        <h5 class="card-title">Name: ${engineer.getName()}</h5>
        <p class="card-text">Role: ${engineer.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush bg-white">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
    `
  }
  const createIntern = (intern) => {
    return `
      <div class="col">
        <div class='card h-100 text-dark bg-light mb-3 internCard' style="max-width: 16rem;">
          <div class='card-header bg-primary text-white'>
            <h5 class="card-title">Name: ${intern.getName()}</h5>
            <p class="card-text">Role: ${intern.getRole()}</p>
          </div>
          <ul class="container-md list-group list-group-flush bg-white">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: ${intern.getEmail()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
    `
  }

  const all = [];

  all.push(team.filter(person => person.getRole() === "Manager").map(manager => createManager(manager)))
  all.push(team.filter(person => person.getRole() === "Engineer").map(engineer => createEngineer(engineer)))
  all.push(team.filter(person => person.getRole() === "Intern").map(intern => createIntern(intern)))
  return all.join("")
}


module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel='stylesheet' href='../dist/style.css'>
    <title>My Team</title>
  </head>
  <body>
    <header>
    <h1 class="display-4 text-center">My Team</h1>
    </header>

    <div class="row row-cols-1 row-cols-md-3 g-4">
    ${createOurTeam(team)}
    </div>
  </body>
  </html>
  `
}