const mysql = require("mysql");

const config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "esports2"
};


const pool = mysql.createPool(config);


module.exports = pool;