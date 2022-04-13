//Referenced from MongoDB.com

//connection string to database
/*const { MongoClient } = require("mongodb");
const Db = "mongodb+srv://TestUser:testdemo@cluster0.3lr1r.mongodb.net/UserAccounts?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

 //check for successful connection
module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("employees");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
}; */

//

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://TestUser:testdemo@cluster0.3lr1r.mongodb.net/Pitch?retryWrites=true&w=majority";

const client = new MongoClient(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
    });

client.connect(err => {
    console.log("Connected to server");
    const collection = client.db("Pitch").collection("UserAccounts");
    //perform actions on the collection object
    console.log(collection.insertOne(
        {
            username: "test2",
            password: "test2"
        }, client.close()));
});

    