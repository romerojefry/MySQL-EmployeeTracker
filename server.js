// my dependices 
var mysql = require("mysql");
var inquirer = require("inquirer");

// connecting my SQL workbench 
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
    starter () // this will connect to node server.js and direct it to prompt
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
            "Add Department",
            "Add Roles"
         ]

        }
    ])
    .then(function(res){
        switch(res.options){
            case "Add Employee":
            addEmployee();
            break;

            case "add Department":
            addManger();
            break;

            case "Add Roles":
            addRole();

        }
    })
}
function addEmployee() {
    console.log("adding new employee.\n");
    inquirer 
      .prompt ([ 
        {
          type: "input", 
          message: "What is your Name?",
          name: "name",
        },
        {
          type: "list",
          message: "What is the role?",
          name: "title_id", 
          choices: [1,2,3]
        },
      ])
      .then (function(res){
        const query = connection.query(
          "INSERT INTO employees SET ?", 
         res,
          function(err, res) {
            if (err) throw err;
            console.log( "added\n");
    
            starter (); 
          }
        );    
      }).then (function(res){
        connection.query('UPDATE employees SET title_id = ${res.role} WHERE id = ${res.name}',
        function (err, res){
          console.log(res);
          starter()
        }
        );
      })
    }