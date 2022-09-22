# Team Profile Generator

![Badge](https://img.shields.io/badge/License-MIT-lightblue.svg)

## Table of Contents

- [Team Profile Generator](#team-profile-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

### User Story

AS A manager

- I WANT to generate a webpage that displays my team's basic info
  - SO THAT I have quick access to their emails and GitHub profiles
  
### Acceptance Criteria

GIVEN a command-line application that accepts user input

- WHEN I am prompted for my team members and their information
  - THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
  - THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
  - THEN that GitHub profile opens in a new tab
- WHEN I start the application
  - THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
  - THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
  - THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
  - THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
  - THEN I exit the application, and the HTML is generated

## Installation

User should clone this repository from Github and download Node. From your terminal run commands `npm init` and `npm install inquirer`. Then you will be prompted a series of questions.

## Usage

Use inquirer from your command-line to answer questions about the members of your team. That information will be used to generate a team profile webpage. Run the following command at the root of the Team Profile Generator folder to initialize the application:  `node index.js`.

## License

This application is licensed under MIT.

## Contributing

If you would like to contribute to this project reach out to me. You can find my contact information in the [Questions](#questions) section.

## Tests

With jest installed, Run `npm test` to run Jest for tests on constructors.

## Questions

If you have any questions about this project, contact me at tracynburton@gmail.com.
Don't forget to check out my other projects! Visit [my github](https://github.com/tracybrtn).
