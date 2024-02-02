// This function renders a license badge depending on user input
function renderLicenseBadge(license) {
  const badgeOptionsObj = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",    
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "none" : "",
  }

  const licenseOutput = badgeOptionsObj[license];

  return licenseOutput;
}

// this function returns the license link selected by the user
function renderLicenseLink(license) {
  const licenseOptionsLink = {
    "MIT": "[License: MIT](https://opensource.org/licenses/MIT)",
    "GNU GPL v3": "[License: GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)",
    "ISC": "[License: ISC](https://opensource.org/licenses/ISC)",
    "Apache License 2.0": "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)",
    "none" : "",
  }
    const licenseLinkOutput = licenseOptionsLink[license];
    return licenseLinkOutput;
  }


// This function combines the user input from the index with the license badge and link functions to generate the README file
const generateMarkdown = (userInput) => {
  const { title, description, installation, usage, collaborators, contribute, test, githubUrl, email, license } = userInput;
  const licenseBadgeMarkdown = renderLicenseBadge(license);
  const licenseLinkMarkdown = renderLicenseLink(license);
  const outputMarkdown = `# ${title} ${licenseBadgeMarkdown}

  ## Description
  
${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#contribute)
  - [Tests](#test)
  - [Contact](#contact)
  - [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage

  ${usage}

  ## Credits
  
  ${collaborators}

  ## Contribute

  ${contribute}

  ## Test

  ${test}

  ## Contact

  [Follow Me on Github!](https://www.github.com/${githubUrl})

  Email me at <${email}>
  
  ## License
  
  ${licenseLinkMarkdown}
`

  return outputMarkdown;
}

module.exports = generateMarkdown;
