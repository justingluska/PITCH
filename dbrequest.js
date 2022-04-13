//failed attempt at db connection
//written by Ryan Czirr, referenced from mongoDB template connecton 
import axios from 'axios';

// API Key: dzQgVFptSPSPEPulLgHASD7CwxdL9ErX9Kiz1aidjsgDiWmC4toQlspmNQlR0s46

var axios = require('axios');
var data = JSON.stringify({
    "collection": "UserAccounts",
    "database": "Pitch",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-nbdzu/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'dzQgVFptSPSPEPulLgHASD7CwxdL9ErX9Kiz1aidjsgDiWmC4toQlspmNQlR0s46'
    },
    data: data
};

axios(config)
    .then(function (response) {
        document.write((JSON.stringify(response.data));
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
