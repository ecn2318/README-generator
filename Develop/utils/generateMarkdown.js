function generateMarkdown(answers, results) {
  return `
# **${answers.title}**
![badge](https://img.shields.io/badge/Built%20with-${answers.badge}-${answers.color})

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Contributing](#contributing)
* [Tests](#tests)
* [FAQ](#faq)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)
* [License](#license)

## Description
${answers.description}

## Installation
Open your terminal and run the following:
> ${answers.install}

## Contributing
If you'd like to contribute, please fork the repository and make changes as you'd like. 

## Tests
Tested with ${answers.tests}

## FAQ
Reach out to ${results.name} at ${results.email} 

## Authors
<a href="${results.html_url}" target="_blank"><img src="${results.avatar_url}.png" alt="dp" width="25"/></a> 

## Acknowledgements
${answers.acknowledgements}

## License
![licbadge](https://img.shields.io/badge/license-${answers.license}-green)
<br>
${answers.license} © [${results.name}](${results.html_url})`
};

module.exports = generateMarkdown;
