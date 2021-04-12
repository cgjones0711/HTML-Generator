const inquirer = require('inquirer');
const fs = require('fs');
const util =require("util")
const writeToFile = util.promisify(fs.writeFile);


  
function questions(){
return inquirer  
    .prompt([
    
    {
     type: 'input',
     name: 'manager-name',
     message: 'What is the team managers name?',
    },
    
    {
      type: 'input',
      name: 'manager-id',
      message: 'What is the team managers id?',
    },
    {
        type: 'input',
        name: 'manager-email',
        message: 'What is the team managers email?',
      },
      {
        type: 'input',
        name: 'manager-office-number',
        message: 'What is the team managers office number?',
      },
      {
        type: 'input',
        name: 'team add',
        message: 'What type of team member would you like to add?',
      },
      {
        type: 'input',
        name: 'engineer-name',
        message: 'What is your engineers name?',
      },
      {
        type: 'input',
        name: 'engineer-id?',
        message: 'What is you engineers id?',
      },
      {
        type: 'input',
        name: 'engineer-email',
        message: 'What is your engineers email?',
        
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your engineers Github username?',
      },
      {
        type: 'input',
        name: 'team-add2',
        message: 'What type of team member would you like to add?',
      },
      {
        type: 'input',
        name: 'intern-name',
        message: 'What is your interns name?',
      },
      {
        type: 'input',
        name: 'intern-id?',
        message: 'What is your interns id?',
      },
      {
        type: 'input',
        name: 'intern-email',
        message: 'What is your interns email?',
        
      },
      {
        type: 'input',
        name: 'intern-school',
        message: 'Where did you intern go to school?',
        
      },
      {
        type: 'input',
        name: 'team-add3',
        message: 'What type of team member would you like to add?',
      },
  ])
  
}
    const newHTML = (answers) =>
    
`<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}


.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
</head>
<body>

<h2> My Team </h2>

<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>${answers.manager-name}</h2>
    <p> ID:${answers.manager-id}</p>
    <p>E-mail:${answers.manager-email}</p>
    <p>Office Number: ${answers.manager-office-number}</p>
  </div>
  <div class="column" style="background-color:#ccc;">
  <h2>${answers.engineer-name}</h2>
  <p> ID:${answers.engineer-id}</p>
  <p>E-mail:${answers.engineer-email}</p>
  <p>Github Username: ${answers.github}</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>${answers.intern-name}</h2>
    <p> ID:${answers.intern-id}</p>
    <p>E-mail:${answers.intern-email}</p>
    <p>Education: ${answers.intern-school}</p>
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