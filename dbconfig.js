var mysql = require('mysql');


var con = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6412753",
    password: "Pk4zjlLLj9",
    database: 'sql6412753'
  
  });
  
module.exports = con;


//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });