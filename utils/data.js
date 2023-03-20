// example data
{
  "username"; "lernantino",
  "email"; "lernantino@gmail.com"
}

// example data
{
  "thoughtData"; "Here's a cool thought...",
  "username"; "lernantino",
  "userId"; "5edff358a0fcb779aa7b118b"
}

const username = [
  'Rigby',
  'Alice',
  'Rose',
  'Emmett',
  'Donald',
  'Louie',
  'Maggie',
  'Muffy',
  'Molly',
  'Bonnie',
  'Kaiser',
  'Rhody',
  'Bowie',
  'Abbie',
  'Georgia'
];


const thoughtData = [
  'Decision Trackers are awesome',
  'Find My Phone is a useful app',
  'Learn Piano is not very good for learning Piano',
  'Starbase Defender is a great game, I love it',
  'Tower Defense is okay',
  'Monopoly Money is better than real money IMO',
  'Movie trailers are just the best parts of a movie distilled into 90 seconds',
  'Hello world, this is a comment',
  'Social media is a big waste of time',
  'Notes is my most used app',
  'Messages is open on my computer 24/7',
  'Email is open on my computer',
  'Compass is never opened',
  'Firefox is great for privacy',
];

const emailData = [
  'lorem@gmail.com',
  'imsum@gmail.com',
  'dolor@gmail.com',
  'sit@gmail.com',
  'amet@gmail.com',
  'consectetur@gmail.com',
  'adipiscing@gmail.com',
  'elit@gmail.com',
  'curabitur@gmail.com',
  'vel@gmail.com',
  'hendrerit@gmail.com',
  'libero@gmail.com',
  'eleifend@gmail.com',
  'blandit@gmail.com',
  'nunc@gmail.com',
  'ornare@gmail.com',
  'odio@gmail.com',
  'ut@gmail.com',
];


const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomEmail = () => `${emailData[genRandomIndex(emailData)]}`;

const getRandomThought = (words) => {
  let post = '';
  for (let i = 0; i < words; i++) {
    post += ` ${getRandomThought()}`;
  }
  return post;
};

// Get a random item given an array
const getRandomUserId = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random comments given a number (ex. 10 comments === getRandomComments(10))
const getRandomComments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtData: getRandomArrItem(comments),
      username: getRandomName().split(' ')[0],
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  getRandomUsername,
  getRandomComments,
  getRandomThoughts,
  genRandomUserId,
};