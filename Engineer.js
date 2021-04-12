class Engineer extends Employee{
    constructor(github, name, id, email ){
     super(name, id, email, github)
    this.github = github;
    this.name= name;
    this.id= id;
    this.email= email;
 }


getGithub()

getRole(){
    return "Engineer"
};
};

    module.exports = {
        Engineer,
        engineer

};