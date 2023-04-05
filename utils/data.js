const users = [
  {
    username: "Micheal Phelps",
    email: "mphelps@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Micheal Jordan",
    email: "mj23@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Babe Ruth",
    email: "brthegreat@gmail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Tiger Woods",
    email: "tiger@aol.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Patrick Mahomes",
    email: "patm@hotmail.com",
    thoughts: [],
    friends: [],
  },
];

thoughts = [
  {
    thoughtText: "I love driving fast",
    username: "Tiger Woods",
  },
  {
    thoughtText: "I'm the greatest QB",
    username: "Patrick Mahomes",
  },
  {
    thoughtText: "Lebron sucks",
    username: "Micheal Jordan",
  },
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = { users, thoughts };
