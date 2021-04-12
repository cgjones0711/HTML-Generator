const Engineer = require("../engineer")

describe(`Engineer`,() => {
    it ("should return a name when I pass a name to Employee", () => {
            let engineerName = "Dave";
            let newEngineerName = new Engineer(engineerName);
                expect (newEngineerName.name).toBe("Dave")
       });
    
    it ("should return a id when I pass an id to Employee", () => {
            let engineerId = "002";
            let newEngineerId = new Engineer("" ,engineerId);
                expect (newEngineerId.id).toBe("002");
    });
    
    it ("should return a email when I pass an email to Employee", () => {
            let engineerEmail = "engineer@yahoo.com";
            let newEngineerEmail = new Engineer("","",engineerEmail);
                expect (newEngineerEmail.email).toBe("engineer@yahoo.com");
    });

    it ("should return a github when I pass a github to Employee", () => {
            let engineerGitHub = "cgjones0711"
            let newEngineerGithub = new Engineer("","","", engineerGitHub);
                expect (newEngineerGithub.getGithub()).toBe("cgjones0711");
});
    
    it ("should return a role when I pass a role to Engineer", () => {
            let newEngineerRole = new Engineer("","","","", );
                expect (newEngineerRole.getRole()).toBe("Engineer");
    });
    
    });