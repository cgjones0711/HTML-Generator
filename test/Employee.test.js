const { describe } = require("yargs");

describe(`Employee` , () => {



    it ('should return a neame when I pass a name to Employee' , ( => {

//arrange

        let employeeName = "Clay";
//act
        let(newEmployee = new Employee (employeeName);

//assert
        let (newEmployee.name).toBe("Clay")
    })
}
