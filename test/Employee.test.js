const Employee = require("../employee")


describe(`Employee`,() => {
it ("should return a name when I pass a name to Employee", () => {
        let employeeName = "Clay";
        let newEmployee = new Employee(employeeName);
            expect (newEmployee.name).toBe("Clay")
   });

it ("should return a id when I pass an id to Employee", () => {
        let employeeId = "001";
        let newEmployeeId = new Employee("" ,employeeId);
            expect (newEmployeeId.id).toBe("001");
});

it ("should return a email when I pass an email to Employee", () => {
        let employeeEmail = "something";
        let newEmployeeEmail = new Employee("","",employeeEmail);
            expect (newEmployeeEmail.email).toBe("something");
});

it ("should return a role when I pass a role to Employee", () => {
        let newEmployeeRole = new Employee("","","");
            expect (newEmployeeRole.getRole()).toBe("Employee");
});

});

