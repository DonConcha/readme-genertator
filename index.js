// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown'); 
const generateMarkdown = require('./utils/generateMarkdown'); 

// TODO: Create an array of questions for user input
      const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can someone install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How can someone use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can someone test your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'Other'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address for contact?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Use fs.writeFileSync to write data to a file with the given fileName
  fs.writeFileSync(fileName, data);
  console.log('Entries have been captured and written to the README.md!');
}


// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
         //if there's an error
   
         if (err) {
         console.log(err);
         return;
         // when the ReadMe has been created 
         } else {
         console.log("your README has been successfully created")
         }

};

// TODO: Create a function to initialize app
function init() {
   // Prompt the user with questions
   inquirer.prompt(questions)


// Function call to initialize app
init();
}
