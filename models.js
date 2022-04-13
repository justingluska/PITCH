//code written with the help of tutsmake.com/insert-data-into-mongodb-using-node-js
//Last edit 4/12/22 by Ryan Czirr
//require mongoose library
const mongoose = require("mongoose");

//create new Schema for database storage design
const accountSchema = new mongoose.Schema({
    //accounts contain username and password
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", accountSchema);

//Exort user with Schema
module.export = User;
