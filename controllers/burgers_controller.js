var express = require("express");
var burger = require("./../models/burger");
var router = express.Router();
router.post("/api", function (req, res) {
    var newBurger = req.body.name;
    console.log(req.body.name);
    burger.create(newBurger,function (data) { console.log(data); });
});
router.put("/api", function (req, res) {
    var id = req.body;
    burger.devour(function (data) { console.log(data); });
})
//CATCH ALL MUST BE LAST!
router.get("*", function (req, res) {
    burger.getAll(function(data){
        //console.log({all:data});
        res.render("index",{all:data});
    });
});
module.exports = router;