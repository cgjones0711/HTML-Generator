const Employee = require("./employee.js");

describe(`Employee`,() => {
it ("should return a name when I pass a name to Employee", () => {
        let employeeName = "Clay";
        let newEmployee = new Employee(employeeName);
            expect (newEmployee.name).toBe("Clay")
   });

it ("should return an id when I pass an id to Employee", () => {
        let employeeId = "001";
        let newEmployeeId = new Employee(employeeId);
            expect (newEmployeeId.Id).toBe("001");
});

it ("should return an email when I pass an email to Employee", () => {
        let employeeEmail = "001";
        let newEmployeeEmail = new Employee(employeeEmail);
            expect (newEmployeeEmail.email).toBe("something");
});

it ("should return an role when I pass a role to Employee", () => {
        let employeeRole = "laborer";
        let newEmployeeRole = new Employee(employeeRole);
            expect (newEmployeeRole.role).toBe("laborer");
});

});

