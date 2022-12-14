// import Employee function
const { Employee } = require('../lib/Employee.js');

//Employee is a parent class that should have the following classes and methods
it('creates an Employee object', () => {
    const employee = new Employee('Tracy', 8, 'email');

    //test for name, id, and email
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

//getName()
it('gets name value for employee', () => {
    const employee = new Employee('Tracy', 8, 'email');

    expect(employee.getName()).toEqual(employee.name);
})

//getId()
it('gets id value for employee', () => {
    const employee = new Employee('Tracy', 8, 'email');

    expect(employee.getId()).toEqual(employee.id);
})

//getEmail()
it('gets email value for employee', () => {
    const employee = new Employee('Tracy', 8, 'email');

    expect(employee.getEmail()).toEqual(employee.email);
})

//getRole() which returns 'Employee'
it('gets role value for employee', () => {
    const employee = new Employee('Tracy', 8, 'email');

    expect(employee.getRole()).toBe("Employee");
})