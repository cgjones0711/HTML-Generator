const inquirer = require('inquirer');
const fs = require('fs');
const util =require("util")
const writeToFile = util.promisify(fs.writeFile);



  
function questions(){
return inquirer  
    .prompt([
    
    {
     type: 'input',
     name: 'manager',
     message: 'What is the team managers name?',
    },
    
    {
      type: 'input',
      name: 'managerId',
      message: 'What is the team managers id?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team managers email?',
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the team managers office number?',
      },
      {
        type: 'input',
        name: 'teamAdd',
        message: 'What type of team member would you like to add?',
      },
      {
        type: 'input',
        name: 'engineer',
        message: 'What is your engineers name?',
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'What is you engineers id?',
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is your engineers email?',
        
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your engineers Github username?',
      },
      {
        type: 'input',
        name: 'teamAdd2',
        message: 'What type of team member would you like to add?',
      },
      {
        type: 'input',
        name: 'intern',
        message: 'What is your interns name?',
      },
      {
        type: 'input',
        name: 'internId',
        message: 'What is your interns id?',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is your interns email?',
        
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Where did you intern go to school?',
        
      },
      {
        type: 'input',
        name: 'teamAdd3',
        message: 'What type of team member would you like to add?',
      },
  ])
  
}
    const newHTML = (answers) =>
    
`<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./dist/styles.css">
</head>

<body>
<div class="header">
  <h1>My Team</h1>
</div>
<div class="row">
  <div class="column box1" style="background-color:rgb(245, 10, 10);">
    <h2>Manager: ${answers.manager}</h2>
    <p> ID:${answers.managerId}</p>
    <p>E-mail:${answers.managerEmail}</p>
    <p>Office Number: ${answers.managerOfficeNumber}</p>
  </div>
  <div class="column box2" style="background-color:rgb(245, 10, 10);">
  <h2>Engineer:${answers.engineer}</h2>
  <p> ID:${answers.engineerId}</p>
  <p>E-mail:${answers.engineerEmail}</p>
  <p>Github Username: ${answers.github}</p>
  </div>
  <div class="column box3" style="background-color:rgb(245, 10, 10);">
    <h2>Intern:${answers.intern}</h2>
    <p> ID:${answers.internId}</p>
    <p>E-mail:${answers.internEmail}</p>
    <p>Education: ${answers.internSchool}</p>
  </div>
</div>

</body>
</html>`
    
    
    




    const init = () => {
    questions()
    .then((answers)=> writeToFile("index.html" , newHTML(answers) ))
    .then(() => console.log("succesfully wrote index.html"))
    .catch((err) => console.log (err));
    
    }
    init()