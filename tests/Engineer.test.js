// import Engineer function
const { Engineer } = require('../lib/Engineer.js');

it('creates an Engineer object', () => {
    const engineer = new Engineer('Misty', 10, 'email', 'mistygithub');

    //test for name, id, and email inherited from Employee
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));

    //test for github
    expect(engineer.github).toEqual(expect.any(String));
})

//getGithub()
it('gets github value', () => {
    const engineer = new Engineer('Misty', 10, 'email', 'mistygithub');

    expect(engineer.getGithub()).toBe(engineer.github);
})

//getRole()
it('gets role value for engineer', () => {
    const engineer = new Engineer('Misty', 10, 'email', 'mistygithub');

    expect(engineer.getRole()).toBe('Engineer');
})