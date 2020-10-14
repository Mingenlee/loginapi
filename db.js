// db.js

var mongoose = require('mongoose');
// mongoose.connect('mongodb://u200401/loginusers/users');

// const {MongoClient} = require('mongodb');
const uri = "mongodb://192.168.25.79:27017/?useUnifiedTopology=true&poolSize=20&w=majority";
// const uri = 'mongodb://u200401/test';
// const client = new MongoClient(uri);

    // Connect to the MongoDB cluster
    // await client.connect();
// mongoose.connect(uri, {userNewUrlParser: true, userUnifiedTopology : true})
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected to mongodb'))
.catch((err) => console.log(err));

    // Make the appropriate DB calls
    //await listDatabases(client);