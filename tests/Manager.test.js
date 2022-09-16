const { Manager } = require('../lib/Manager.js');

it('creates a manager object', () => {
    const manager = new Manager('Misty', 10, 'email.com', 896);

    //test for name, id, and email inherited from Employee
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    //test for office number
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

//getRole() which returns 'Manager'
it('gets role value for employee', () => {
    const manager = new Manager('Misty', 10, 'email.com', 896);

    expect(manager.getRole()).toBe(manager.role);
})