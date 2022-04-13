//Referenced from section.io/engineering-education/nodejs-mongoosejs-mongodb
//Last edit 4/12/22 by Ryan Czirr
// server startup
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/record");

//initialize express server
const app = express();

app.use(express.json());

//use mongoose to connect to databse
mongoose.connect('mongodb+srv://TestUser:testdemo@cluster0.3lr1r.mongodb.net/Pitch?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true
    });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    //Display when connection is sucessful
    console.log("Connected sucessfully");
});

app.use(Router);

app.listen(3000, () => {
    //Await user action
    console.log("Server running on port 3000");
});

//Export databse
module.exports = db;

