var mysql = require("mysql");
var inquirer = require("inquirer");
const { start } = require("repl");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "Gucci!510",
    database: "Employee_TrackerDB"
});

connection.connect(function (err){
    if (err) throw err;
    console.log("connected as id" + connection.threadId + "\n");
    starter ()
});
function starter (){
    inquirer
    .prompt ([
    {
        type: "list",
        message: "access options",
        name: "options",
        chocies: [
            "Add Employee",
            "Add Manger",
            "Add Roles"
         ]

        }
    ])
    .then(function(res){
        switch(res.start){
            case "Add Employee":
            addEmployee
        }
    })
}