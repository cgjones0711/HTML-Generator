const Employee = require("./Employee")

class Engineer extends Employee{
constructor(github){

    super(name, id, email, github)
this.github = github
    
}

getGithub()

getRole(){
    return "Engineer"
}
}