var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"mysql://b3596842a7975d:3816f549@us-cdbr-iron-east-01.cleardb.net/heroku_4afa5abc3a63fa0?reconnect=true",
    port:3306,
    user:"root",
    password:"Cu3043598",
    database:"burgers"
});
connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id "+connection.threadId);
});
module.exports=connection;