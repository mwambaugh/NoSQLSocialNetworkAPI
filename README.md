# No SQL Social Network API 
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)]

# Table of Contents 

[User Story](#User-Story)

[Usage](#Usage)

[Instlation](#Instalation)

[Links](#Links)

[Contributing](#contributing)

[Questions](#questions)

[Acceptance Criteria](#acceptance-criteria)


## User Story 
* AS A social media startup
* I WANT an API for my social network that uses a NoSQL database
* SO THAT my website can handle large amounts of unstructured data

## Usage 
I built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Instalation 
You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. You'll need to install node dependencies and 'npm run start' and test routes using Insomnia. 
 
## Links  
[Walkthrough Link]()s


## Contributing 
This assignment was worked on by student, M.C. Wambaugh, with the support of her TA's during office hours and meeting regularly with her tutor Matthew, and her classrom peers. The student also used universial resources such as  YouTube.com, shields.io/, and our class repo examples. Many thanks to those who continue to support learning in the technological community.

## Questions 
Please direct questions to Marta Wambaugh at marwambaugh@gmail.com and https://github.com/mwambaugh 

## Acceptance Criteria 
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list