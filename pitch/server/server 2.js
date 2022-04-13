//Referenced from MongoDB.com

// server startup
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // database connection when server runs
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${port}`);
});