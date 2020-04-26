const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const util = require('util');
const promptUser = require('./utils/promptUser.js')
const apiCall = require('./utils/apiCall.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
//const appendToMarkdown = require('./utils/appendToMarkdown.js');


const writeFileAsync = util.promisify(fs.writeFile);
//const appendFileAsync = util.promisify(fs.appendFile);


const init = async () => {
    try {
        const answers = await promptUser();
        const results = await apiCall(answers);
        const mdFile = generateMarkdown(answers, results);
        await writeFileAsync("gnrREADME.md", mdFile);
        console.log("Successfully wrote to README");

        /*
        const addToFile = appendToMarkdown();
        await appendFileAsync("gnrREADME.md", addToFile);
        console.log("Successfully added to README");
        */

    } catch (err) {
        console.log(err);
    }
}

init();