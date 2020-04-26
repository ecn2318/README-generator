const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title"
    },
    {
        type: "input",
        name: "badge",
        message: "Made with",
    },
    {
        type: "rawlist",
        name: "color",
        message: "Badge Color",
        choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey']
    },
    {
        type: "input",
        name: "description",
        message: "Description"
    },
    {
        type: "input",
        name: "install",
        message: "Installation"
    },
    {
        type: "input",
        name: "license",
        message: "License"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests"
    },
    {
        type: "input",
        name: "acknowledgements",
        message: "Acknowledgements"
    },
    {
        type: "input",
        name: "username",
        message: "github username"
    }
]

const promptUser = async () => {
    const results = await inquirer
        .prompt(questions)
        .catch(err => {
            console.log(err)
        })
    return results;
}

module.exports = promptUser; 