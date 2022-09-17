// import Employee function
const { Intern } = require('../lib/Intern.js');

it('creates an intern object', () => {
    const intern = new Intern('Stacy', 10, 'email', 'WashU');

    //test for name, id, and email inherited from parent class Employee
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    
    //Intern specific property
    expect(intern.school).toEqual(expect.any(String));
})

//getSchool();
it('gets string value for school', () => {
    const intern = new Intern('Stacy', 10, 'email', 'WashU');

    expect(intern.getSchool()).toBe(intern.school);
})

//getRole();
it('gets role value for intern', () => {
    const intern = new Intern('Stacy', 10, 'email', 'WashU');

    expect(intern.getRole()).toBe('Intern');
})

