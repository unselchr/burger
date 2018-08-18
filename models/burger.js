var orm=require("./../config/orm");
var connection=require("./../config/connection");

var burger={
    create:function(name,cb){
        orm.insertOne("burgers","name,devoured","'"+name+"',false",cb);
    },
    devour:function(cb){
        orm.updateOne("burgers","devoured",true,"devoured=false LIMIT 1",cb);
    },
    getAll:function(cb){
        return(orm.selectAll("burgers",cb));
    }
}
module.exports=burger;