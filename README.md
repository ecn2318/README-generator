# **README-generator**

## Tech
* Node.js
* fs
* util
* inquirer
* axios

## Process
1. Created index.js with init() function
2. promptUser.js
    - define questions 
    - use inquirer to prompt questions
3. apiCall.js
    - use promptUser answers for queryUrl 
    - use axios to make api call to github user API
4. generateMarkdown.js
    - use answers from promptUser and results from apiCall to generate README file content
5. index.js
    - use util.promisfy(fs.writeFile) - write gnrREADME.md file and add generateMarkdown content into gnrREADME.md file

**Demo**
![demo](./Demo_README-generator.gif)