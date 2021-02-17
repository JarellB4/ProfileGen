const fs = require("fs")
const inquirer = require("inquirer")
const generatehtml = require("./html.js")
// const Employee = require ("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const People = []
const questions = [
    {
        type: "input",
        name: "name",
        message: "Whats your name?"
    },
    {
        type: "list",
        name: "position",
        message: "Whats your position?",
        choices: ["manager", "engineer", "intern",]
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: function (email) {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: "input",
        name: "id",
        message: "Whats your id?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "Whats your office number?",
        when: (data) => (data.position).includes("manager")
    },
    {
        type: "input",
        name: "github",
        message: "Whats your github username?",
        when: (data) => (data.position).includes("engineer")
    },
    {
        type: "input",
        name: "school",
        message: "Whats the name of your school?",
        when: (data) => (data.position).includes("intern")
    },
    {
        type: "confirm",
        name: "employee",
        message: "Do you have another employee to add?",

    },
]
function init() {


    inquirer.prompt(questions).then((data) => {
        console.log(data)
        switch (data.position) {
            case "manager":
                const resp = new Manager(data.name, data.id, data.email, data.officenumber)
                People.push(resp)
                break;
            case "engineer":
                const answ = new Engineer(data.name, data.id, data.email, data.github)
                People.push(answ)
                break;
            case "intern":
                const end = new Intern(data.name, data.id, data.email, data.school)
                People.push(end)
                break;
            
                
        }
        if (data.employee === true) {
            init()
        }
        fs.writeFile("index.html", generatehtml(People), (err) =>
            err ? console.log("no") : console.log("good job"));
})
}
init()