const Employee = require("./Employee")

class Intern extends Employee{
constructor(school){

    super(name, id, email, school)
this.school = school
    
}

getSchool()

getRole(){
    return "Engineer"
}
}