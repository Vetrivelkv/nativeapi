var mysql = require('mysql');


var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "8Lz8m6nJyh",
    password: "97cawUiVl7",
    database: '8Lz8m6nJyh'
  
  });
  
module.exports = con;


//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });