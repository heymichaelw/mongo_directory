const data = require('./data.js');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/mwrobotdb", function(error, db){
  const collection = db.collection("users");
  // data.users.forEach(function(user){
  //   collection.insert({id: user.id, username: user.username, name: user.name, avatar: user.avatar, email: user.email, university: user.university, job: user.job, company: user.company, skills: user.skills, phone: user.phone});
  // });
});
