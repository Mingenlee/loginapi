// db.js

var mongoose = require('mongoose');

// const {MongoClient} = require('mongodb');
const uri = "mongodb://192.168.25.79:27017/?useUnifiedTopology=true&poolSize=20&w=majority";

// const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
 //   client.connect();
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected to mongodb'))
.catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
// databasesList = client.db().admin().listDatabases();
// console.log("Database:");
// databasesList.databases.forEach(db => console.log(` - ${db.name}`));