const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { getThought, getUser, thoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thought
  await Thought.deleteMany({});

  // Drop existing user
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Add Users to the collection and await the results
  await User.collection.insertMany(User);

  // Add thought to the collection and await the results
  // await thoughts.collection.insertOne({
  //   thought: "Holy Smoke",
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
