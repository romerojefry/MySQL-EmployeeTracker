var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhoest",

    port: 3306,

    user: "root",

    password: "Gucci!510",
    database: "Employee_TrackerDB"
});

connection.connect(function (err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId + "\n");
})