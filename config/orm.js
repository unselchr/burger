var connection=require("./connection");
var orm={
    selectAll:function(table,cb){
        var query="SELECT * FROM "+table;
        console.log(query);
        connection.query(query,function(err,res){
            if(err) throw err;
            cb(res);
            return(res);
        });
    },
    insertOne:function(table,cols,data,cb){
        var query="INSERT INTO "+table+"("+cols+") VALUES("+data+")";
        console.log(query);
        connection.query(query,function(err,res){
            if(err)throw err;
            cb(res);
        });
    },
    updateOne:function(table,col,data,condition,cb){
        //data is a JSON objects where key names are column names for the DB.
        //condition is a string describing where the changes should be made //EX. 'id = 4' ect...
        var query="UPDATE "+table+" SET "+col+"="+data+" WHERE "+condition;
        
        console.log(query);
        connection.query(query,function(err,res){
            if(err)throw err;
            cb(res);
        })
    }
}
module.exports=orm;