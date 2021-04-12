const Intern = require("../intern")

describe(`Intern`,() => {
    it ("should return a name when I pass a name to Intern", () => {
            let internName = "Carol";
            let newInternName = new Intern(internName);
                expect (newInternName.name).toBe("Carol")
       });
    
    it ("should return a id when I pass an id to Intern", () => {
            let internId = "003";
            let newInternId = new Intern("" ,internId);
                expect (newInternId.id).toBe("003");
    });
    
    it ("should return a email when I pass an email to Intern", () => {
            let internEmail = "intern@yahoo.com";
            let newInternEmail = new Intern("","",internEmail);
                expect (newInternEmail.email).toBe("intern@yahoo.com");
    });

    it ("should return a school when I pass a school to Intern", () => {
            let internSchool = "UTD"
            let newInternSchool = new Intern("","","", internSchool);
                expect (newInternSchool.getSchool()).toBe("UTD");
});
    
    it ("should return a role when I pass a role to Intern", () => {
            let newInternRole = new Intern("","","","", );
                expect (newInternRole.getRole()).toBe("Intern");
    });
    
    });