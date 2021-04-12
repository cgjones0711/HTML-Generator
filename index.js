const inquirer = require('inquirer');
const fs = require('fs');
const util =require("util")
const writeToFile = util.promisify(fs.writeFile);


  
function questions(){
return inquirer  
    .prompt([
    
    {
     type: 'input',
     name: 'manager name',
     message: 'What is the team managers name?',
    },
    
    {
      type: 'input',
      name: 'manager id',
      message: 'What is the team managers id?',
    },
    {
        type: 'input',
        name: 'manager email',
        message: 'What is the team managers email?',
      },
      {
        type: 'input',
        name: 'manager office Number',
        message: 'What is the team managers office number?',
      },
      {
        type: 'input',
        name: 'team add',
        message: 'What type of team member would you like to add?',
      },
      {
        type: 'input',
        name: 'engineer name',
        message: 'What is your engineers name?',
      },
      {
        type: 'input',
        name: 'engineer id?',
        message: 'What is you engineers id?',
      },
      {
        type: 'input',
        name: 'engineer email',
        message: 'What is your engineers email?',
        
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your engineers Github username?',
      },
      {
        type: 'input',
        name: 'team add',
        message: 'What type of team member would you like to add?',
      },
      {
        type: 'input',
        name: 'intern name',
        message: 'What is your interns name?',
      },
      {
        type: 'input',
        name: 'intern id?',
        message: 'What is your interns id?',
      },
      {
        type: 'input',
        name: 'intern email',
        message: 'What is your interns email?',
        
      },
      {
        type: 'input',
        name: 'intern school',
        message: 'Where did you intern go to school?',
        
      },
      {
        type: 'input',
        name: 'team add',
        message: 'What type of team member would you like to add?',
      },
  ])
  
}
    const newHTML = (answers) =>
 `#${answers.title}
 





    const init = () => {
    questions()
    .then((answers)=> writeToFile("README.md" , newREADME(answers) ))
    .then(() => console.log("succesfully wrote README.md"))
    .catch((err) => console.log (err));
    
    }
    init()