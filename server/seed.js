const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const connectDB = require("./db");

const User = require("./models/User");
const Conversation = require("./models/Conversation");
const Message = require("./models/Message");
const Profile = require("./models/ProfileModel");

async function deleteData() {
  try {
    await User.deleteMany();
    await Conversation.deleteMany();
    await Message.deleteMany();
    await Profile.deleteMany();
  } catch (err) {}
}

async function seed() {
  await connectDB();
  await deleteData();

  const demoUser = await User.create({
    username: "test",
    email: "test@gmail.com",
    password: "123123",
  });

  const test1 = await User.create({
    username: "test1",
    email: "test1@gmail.com",
    password: "123123",
  });

  const test2 = await User.create({
    username: "test2",
    email: "test2@gmail.com",
    password: "123123",
  });

  const test3 = await User.create({
    username: "test3",
    email: "test3@gmail.com",
    password: "123123",
  });

  const test4 = await User.create({
    username: "test4",
    email: "test4@gmail.com",
    password: "123123",
  });

  const test5 = await User.create({
    username: "test5",
    email: "test5@gmail.com",
    password: "123123",
  });

  const test6 = await User.create({
    username: "test6",
    email: "test6@gmail.com",
    password: "123123",
  });

  const test7 = await User.create({
    username: "test7",
    email: "test7@gmail.com",
    password: "123123",
  });

  const test8 = await User.create({
    username: "test8",
    email: "test8@gmail.com",
    password: "123123",
  });

  const demoUserProfile = await Profile.create({
    userId: demoUser._id,
    firstName: "DemoFname",
    lastName: "DemoLname",
    address: "Toronto, Ontario",
    phone: "123-123-1234",
    description:
      "Hello! I am a DemoUser. Hello! I am a DemoUser. Hello! I am a DemoUser. Hello! I am a DemoUser. ",
    birth: "2021-01-01",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sky",
      "https://robohash.org/demo-user.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
  });

  const test1Profile = await Profile.create({
    userId: test1._id,
    firstName: "Test1Fname",
    lastName: "Test1Lname",
    address: "Montreal, Quebec",
    phone: "111-222-3333",
    description:
      "Hello! I am Test1. Hello! I am Test1. Hello! I am Test1. Hello! I am Test1. ",
    birth: "2021-02-02",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-1.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Female",
    isSitter: true,
    title: "I love pets1",
    hourlyWage: 11,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 6, 18)],
    },
  });

  const test2Profile = await Profile.create({
    userId: test2._id,
    firstName: "Test2Fname",
    lastName: "Test2Lname",
    address: "Ottawa, Ontario",
    phone: "111-222-3333",
    description:
      "Hello! I am Test2. Hello! I am Test2. Hello! I am Test2. Hello! I am Test2. ",
    birth: "2021-02-02",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-2.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Other",
    isSitter: true,
    title: "I love pets2",
    hourlyWage: 12,
    availability: {
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });

  const test3Profile = await Profile.create({
    userId: test3._id,
    firstName: "Test3Fname",
    lastName: "Test3Lname",
    address: "Ottawa, Ontario",
    phone: "222-333-4444",
    description:
      "Hello! I am Test3. Hello! I am Test3. Hello! I am Test3. Hello! I am Test3. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-3.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets3",
    hourlyWage: 13,
    availability: {
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });

  const test4Profile = await Profile.create({
    userId: test4._id,
    firstName: "Test4Fname",
    lastName: "Test4Lname",
    address: "Toronto, Ontario",
    phone: "222-333-4444",
    description:
      "Hello! I am Test4. Hello! I am Test4. Hello! I am Test4. Hello! I am Test4. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-4.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets4",
    hourlyWage: 14,
    availability: {
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });

  const test5Profile = await Profile.create({
    userId: test5._id,
    firstName: "Test5Fname",
    lastName: "Test5Lname",
    address: "Ottawa, Ontario",
    phone: "222-333-4444",
    description:
      "Hello! I am Test5. Hello! I am Test5. Hello! I am Test5. Hello! I am Test5. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-5.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets5",
    hourlyWage: 15,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 6, 18)],
    },
  });

  const test6Profile = await Profile.create({
    userId: test6._id,
    firstName: "Test6Fname",
    lastName: "Test6Lname",
    address: "Vancouver, British columbia",
    phone: "222-333-4444",
    description:
      "Hello! I am Test6. Hello! I am Test6. Hello! I am Test6. Hello! I am Test6. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-6.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets6",
    hourlyWage: 16,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
      saturday: [new Date(2021, 9, 9, 12), new Date(2021, 9, 9, 18)],
    },
  });

  const test7Profile = await Profile.create({
    userId: test7._id,
    firstName: "Test7Fname",
    lastName: "Test7Lname",
    address: "Burnaby, British columbia",
    phone: "222-333-4444",
    description:
      "Hello! I am Test7. Hello! I am Test7. Hello! I am Test7. Hello! I am Test7. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-7.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Male",
    isSitter: true,
    title: "I love pets7",
    hourlyWage: 17,
    availability: {
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
    },
  });

  const test8Profile = await Profile.create({
    userId: test8._id,
    firstName: "Test8Fname",
    lastName: "Test8Lname",
    address: "Toronto, Ontario",
    phone: "222-333-4444",
    description:
      "Hello! I am Test8. Hello! I am Test8. Hello! I am Test8. Hello! I am Test8. ",
    birth: "2021-03-03",
    photos: [
      "https://source.unsplash.com/600x200/?nature,sea",
      "https://robohash.org/test-sitter-8.png",
      "https://source.unsplash.com/125x125/?animal,puppy",
      "https://source.unsplash.com/125x125/?animal,cat",
      "https://source.unsplash.com/125x125/?animal,dog",
    ],
    gender: "Female",
    isSitter: true,
    title: "I love pets8",
    hourlyWage: 18,
    availability: {
      sunday: [new Date(2021, 9, 3, 12), new Date(2021, 9, 3, 18)],
      monday: [new Date(2021, 9, 4, 12), new Date(2021, 9, 4, 18)],
      tuesday: [new Date(2021, 9, 5, 12), new Date(2021, 9, 5, 18)],
      wednesday: [new Date(2021, 9, 6, 12), new Date(2021, 9, 6, 18)],
      thursday: [new Date(2021, 9, 7, 12), new Date(2021, 9, 7, 18)],
      friday: [new Date(2021, 9, 8, 12), new Date(2021, 9, 8, 18)],
      saturday: [new Date(2021, 9, 9, 12), new Date(2021, 9, 9, 18)],
    },
  });

  const test1Convo = await Conversation.create({
    user1: test1._id,
    user2: test2._id,
  });

  const test1test2Message1 = await Message.create({
    conversation: test1Convo._id,
    sender: test1.id,
    text: "test1 ---> test2",
    recipientRead: false,
  });

  const test1test2Message2 = await Message.create({
    conversation: test1Convo._id,
    sender: test1.id,
    text: "test1 ---> test2 (2nd)",
    recipientRead: false,
  });

  const test2test1Message1 = await Message.create({
    conversation: test1Convo._id,
    sender: test2.id,
    text: "test2 ---> test1",
    recipientRead: false,
  });

  const test2test1Message2 = await Message.create({
    conversation: test1Convo._id,
    sender: test2.id,
    text: "test2 ---> test1 (2nd)",
    recipientRead: false,
  });

  const test1test2Message3 = await Message.create({
    conversation: test1Convo._id,
    sender: test1.id,
    text: "test1 ---> test2 (3rd)",
    recipientRead: false,
  });

  test1Convo.latestMessage = test1test2Message3._id;
  await test1Convo.save();

  const test1Convo2 = await Conversation.create({
    user1: test1._id,
    user2: test3._id,
  });

  const test1test3Message1 = await Message.create({
    conversation: test1Convo2._id,
    sender: test1.id,
    text: "test1 ---> test3",
    recipientRead: false,
  });

  const test1test3Message2 = await Message.create({
    conversation: test1Convo2._id,
    sender: test1.id,
    text: "test1 ---> test3 (2nd)",
    recipientRead: false,
  });

  const test1test3Message3 = await Message.create({
    conversation: test1Convo2._id,
    sender: test1.id,
    text: "test1 ---> test3 (3rd)",
    recipientRead: false,
  });

  const test3test1Message1 = await Message.create({
    conversation: test1Convo2._id,
    sender: test3.id,
    text: "test3 ---> test1",
    recipientRead: false,
  });

  const test3test1Message2 = await Message.create({
    conversation: test1Convo2._id,
    sender: test3.id,
    text: "test3 ---> test1 (2nd)",
    recipientRead: false,
  });

  const test1test3Message4 = await Message.create({
    conversation: test1Convo2._id,
    sender: test1.id,
    text: "test1 ---> test3 (4th)",
    recipientRead: false,
  });

  test1Convo2.latestMessage = test1test3Message4._id;
  await test1Convo2.save();

  const test2Convo = await Conversation.create({
    user1: test2._id,
    user2: test3._id,
  });

  const test2test3Message1 = await Message.create({
    conversation: test2Convo._id,
    sender: test2.id,
    text: "test2 ---> test3",
    recipientRead: false,
  });

  const test2test3Message2 = await Message.create({
    conversation: test2Convo._id,
    sender: test2.id,
    text: "test2 ---> test3 (2nd)",
    recipientRead: false,
  });

  const test3test2Message1 = await Message.create({
    conversation: test2Convo._id,
    sender: test3.id,
    text: "test3 ---> test2",
    recipientRead: false,
  });

  const test3test2Message2 = await Message.create({
    conversation: test2Convo._id,
    sender: test3.id,
    text: "test3 ---> test2 (2nd)",
    recipientRead: false,
  });

  test2Convo.latestMessage = test3test2Message2._id;
  await test2Convo.save();
}

async function runSeed() {
  try {
    await seed();
  } catch (err) {
    process.exitCode = 1;
  } finally {
    process.exit();
  }
}

if (module === require.main) {
  runSeed();
}
