const mysql = require('mysql');

const bdConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

bdConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = {
    bdConnection: (text, params) => bdConnection.query(text, params),
};  