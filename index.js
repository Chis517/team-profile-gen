const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const create = require('./src/page-template.js')

const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html")

const teamMembers = []
const idArray = []

function createPage() {
  function createManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your team manager's ID?"
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your team manager's email?"
      },
      {
        type: "input",
        name: "managerOfficeNum",
        message: "What is your team manager's office number?"
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
      teamMembers.push(manager)
      idArray.push(answers.managerId)
      createTeam()
    })
  }
  function createTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'which member would you like to add?',
        choices: ['Engineer', 'Intern', 'I am Done']
      }
    ]).then(answers => {
      if (answers.choice === 'Engineer') {
        createEngineer()
      }
      else if (answers.choice === 'Intern') {
        createIntern()
      } else {
        buildTeam()
      }
    })
  }

  function createEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your team engineer's ID?"
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your team engineer's email?"
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your team engineer's GitHub user name?"
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer)
      idArray.push(answers.engineerId)
      createTeam()
    })
  }

  function createIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's ID?"
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?"
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern)
      idArray.push(answers.internId)
      createTeam()
    })
  }

  function buildTeam() {
    console.log(teamMembers);
    fs.writeFile('index.html', create(teamMembers), 'utf-8', (err) => {
      err ? console.log(err) : console.log('created HTML file!');;
    })
  }

  createManager()
};

createPage()