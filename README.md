# login REST API
#
# this project cannot insert collection and it could be mongodb is new version
#
# https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09
# https://github.com/adnanrahic/nodejs-restful-api

# mongodb shell
use loginusers
show collections # display users
db.users.insertOne( {name: "test", email: "test1", password: "test"})
db.users.find()
# nodejs
await db.collection('users').insertOne({name: 'test', email: 'test', password: 'test'});

# use npm to install node 2020.10.14
npm cache clean -f
npm istall -g n
sudo n latest   # to install latest one instead of stable

#
# mongo basic js program
# https://github.com/mongodb-developer/nodejs-quickstart/blob/master/usersCollection.js
# show dbs
# use <db name>
# show collections
# db.<collection name>.find()
# db.stats()
#
git remote remove origin
  378  git remote add origin https://Mingenlee:<gittoken>@github.com/Mingenlee/loginapi.git
  379  git push -u origin main
