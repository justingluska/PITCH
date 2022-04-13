//code based on tutsmake.com/insert-data-into-mongodb-using-nodejs
//Last edit 4/12/22 by Ryan Czirr

//initialize required libraries
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const accountModel = require("../models");

//add user page, posts new user to db for registration
router.post("/add_user", async (request, response) => {
    const user = new accountModel({
        username: request.body.username,
        password: request.body.password,
    })

    user.save((err, doc) => {
        if (!err) {
            request.flash("success", "User added sucessfully!");
            response.redirect("/");
        }
        else
            console.log("Error during record insertion : " + err);
});

//retrieve user page; used to login
router.get("/users", async (request, response) => {
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;