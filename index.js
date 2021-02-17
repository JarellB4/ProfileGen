const fs = require("fs")
const inquirer = require("inquirer")
// const Employee = require ("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const questions = [
    {
        type: "input",
        name: "name",
        message: "Whats your name?"
    } ,
    {
        type: "list",
        name: "position",
        message: "Whats your position?" ,
        choices: ["manager", "engineer", "intern",]
    } ,

    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: function (email)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: "input",
        name: "id",
        message: "Whats your id?"
    } ,
    {
        type: "input",
        name: "officenumber",
        message: "Whats your office number?",
        when: (data) => (data.position).includes("manager")
    } ,
]
inquirer.prompt(questions).then((data) => {
    console.log(data)
})
