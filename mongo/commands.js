// https://egghead.io/lessons/nodejs-first-api-with-node-js-express-and-mongodb
// http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/
// https://docs.mongodb.org/manual/reference/mongo-shell/

// Insert some data.
mongoimport --db simple --collection people --jsonArray people.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use simple

// Check currently selected db
db

// Show all collections
show collections

// Get count.
db.people.count()

// Query all
db.people.find()

// Query all (formatted)
db.people.find().pretty()

// Find one.
db.people.findOne()

// Query.
db.people.find({position: 'student'}).sort({name: 1}).pretty() // -1 for desc.

// Query with and operator.
db.people.find({
  position: 'student',
  $and: [{"name": /.*And.*/}]
}).pretty() // -1 for desc.

// Insert.
db.people.insert({
  "name": "Rusty Green",
  "position": "student",
  "webpage": "http://rustygreen.com"
})

// Update.
db.people.update(                  // collection
  {position: 'student'},           // update criteria
  {$set: {position: 'hu-student'}},// update action
  {multi: true})                   // update option

// See last insert.
db.people.find().sort({_id: -1}).limit(1)

// Remove all.
db.people.remove({})

// Get count.
db.people.count()

// Exit mongo shell.
quit()

// Drop database.
db.dropDatabase()

// Show DBs
show dbs

// Insert data again.
mongoimport --db simple --collection people --jsonArray people.json

// Connect to mongo.
mongo

// Show DBs
show dbs

// Connect to db.
use simple


//load("scripts/myjstest.js")

// Exit.
//quit()


// Sort.
db.restaurants.find().sort({"borough": 1, "address.zipcode": 1})