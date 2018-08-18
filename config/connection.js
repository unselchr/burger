var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"us-cdbr-iron-east-01.cleardb.net",
    port:3306,
    user:"b3596842a7975d",
    password:"3816f549",
    database:"heroku_4afa5abc3a63fa0"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id "+connection.threadId);
});
module.exports=connection;