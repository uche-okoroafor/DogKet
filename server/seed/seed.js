const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const connectDB = require("../db");
const seedUsers = require("../seed/seedUsers");
const seedProfiles = require("../seed/seedProfiles");

const User = require("../models/User");
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

async function deleteData() {
  try {
    await User.deleteMany();
    console.log("Users are deleted..");

    await Conversation.deleteMany();
    console.log("Conversations are deleted..");

    await Message.deleteMany();
    console.log("Messages are deleted..");

    await Profile.deleteMany();
    console.log("Profiles are deleted..\n");
  } catch (err) {
    console.error(err);
  }
}

async function seed() {
  await connectDB();
  await deleteData();

  // Total 9 users.
  // DemoUser: testUsers[0], OtherUsers: testUsers[1] ~ testUsers[8]
  const testUsers = await seedUsers();
  console.log(testUsers.length + " testUsers are created..");

  // Total 9 profiles.
  // DemoUserProfile: testProfiles[0], OtherUserProfiles: testProfiles[1] ~ testProfiles[8]
  const testProfiles = await seedProfiles(testUsers);
  console.log(testProfiles.length + " testProfiles are created..");

  // Initial conversation between demoUser and test1
  const demoUserConvo = await Conversation.create({
    user1Profile: testProfiles[0]._id,
    user2Profile: testProfiles[1]._id,
  });

  const demoUserTest1Message1 = await Message.create({
    conversation: demoUserConvo._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test1",
    recipientRead: false,
  });

  const demoUserTest1Message2 = await Message.create({
    conversation: demoUserConvo._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test1 (2nd)",
    recipientRead: false,
  });

  const demoUserTest1Message3 = await Message.create({
    conversation: demoUserConvo._id,
    senderProfile: testProfiles[1]._id,
    text: "Test1 ---> DemoUser",
    recipientRead: false,
  });

  demoUserConvo.latestMessage = demoUserTest1Message3._id;
  await demoUserConvo.save();

  // Initial conversation between demoUser and test2
  const demoUserConvo2 = await Conversation.create({
    user1Profile: testProfiles[0]._id,
    user2Profile: testProfiles[2]._id,
  });

  const demoUserTest2Message1 = await Message.create({
    conversation: demoUserConvo2._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test2",
    recipientRead: false,
  });

  const demoUserTest2Message2 = await Message.create({
    conversation: demoUserConvo2._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> test2 (2nd)",
    recipientRead: false,
  });

  const demoUserTest2Message3 = await Message.create({
    conversation: demoUserConvo2._id,
    senderProfile: testProfiles[2]._id,
    text: "Test2 ---> DemoUser",
    recipientRead: false,
  });

  demoUserConvo2.latestMessage = demoUserTest2Message3._id;
  await demoUserConvo2.save();

  // Initial conversation between demoUser and test3 (Test3 starts the conversation)
  const demoUserConvo3 = await Conversation.create({
    user1Profile: testProfiles[3]._id,
    user2Profile: testProfiles[0]._id,
  });

  const demoUserTest3Message1 = await Message.create({
    conversation: demoUserConvo3._id,
    senderProfile: testProfiles[3]._id,
    text: "Test3 ---> DemoUser",
    recipientRead: false,
  });

  const demoUserTest3Message2 = await Message.create({
    conversation: demoUserConvo3._id,
    senderProfile: testProfiles[3]._id,
    text: "Test3 ---> DemoUser (2nd)",
    recipientRead: false,
  });

  const demoUserTest3Message3 = await Message.create({
    conversation: demoUserConvo3._id,
    senderProfile: testProfiles[0]._id,
    text: "DemoUser ---> Test3",
    recipientRead: false,
  });

  demoUserConvo3.latestMessage = demoUserTest3Message3._id;
  await demoUserConvo3.save();
}

async function runSeed() {
  console.log("seeding..");
  try {
    await seed();
    console.log("data seeded successfully..");
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("MongoDB connection closed..".cyan.underline + "\n");
    process.exit();
  }
}

if (module === require.main) {
  runSeed();
}
