class Engineer extends Employee{
    constructor(school, name, id, email ){
     super(name, id, email, school)
    this.school = school;
    this.name= name;
    this.id= id;
    this.email= email;
 }


getSchool()

getRole(){
    return "Intern"

}
};

module.exports = {
    Intern,
    intern

};