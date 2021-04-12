const Manager = require("../manager");
const manager = require("../manager")

describe(`Intern`,() => {
    it ("should return a name when I pass a name to Manager", () => {
            let managerName = "Daunte";
            let newManagerName = new Manager(managerName);
                expect (newManagerName.name).toBe("Daunte")
       });
    
    it ("should return a id when I pass an id to Manager", () => {
            let managerId = "004";
            let newManagerId = new Manager("" ,managerId);
                expect (newManagerId.id).toBe("004");
    });
    
    it ("should return a email when I pass an email to Manager", () => {
            let managerEmail = "manager@yahoo.com";
            let newManagerEmail = new Manager("","",managerEmail);
                expect (newManagerEmail.email).toBe("manager@yahoo.com");
    });

    it ("should return a school when I pass a school to Intern", () => {
            let managerOffice = "201"
            let newManagerOffice = new Manager("","","", managerOffice);
                expect (newManagerOffice.getofficeNumber()).toBe("201");
});
    
    it ("should return a role when I pass a role to Intern", () => {
            let newManagerRole = new Manager("","","","", );
                expect (newManagerRole.getRole()).toBe("Manager");
    });
    
    });