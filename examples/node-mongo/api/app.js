// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();


// local
// const connection = "mongodb://admin:12345@localhost:27017/mongo-test";
// docker
const connection = "mongodb://admin:12345@mongo:27017/mongo-test";
const connectDb = () => {
  const options = {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
  }
  return mongoose.connect(connection, options);
};
const User = require("./User.model");


// routes
app.get("/", async (req, res) => {
  return res.json({ Server: 'is working' });
});
app.get("/users", async (req, res) => {
  const users = await User.find(); 
  return res.json({ users });
});
app.get("/user-create", async (req, res) => {
  const user = new User({ username: "userTest" }); 
  await user.save().then(() => console.log('User created')); 
  return res.send("User created \n");
});


// app launch
const PORT = 8080;
app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});