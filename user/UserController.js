// user/UserController.js
var express = require('express');
var router = express.Router();
var bodyParse = require('body-parser');
router.use(bodyParse.urlencoded({extended: true}));
router.use(bodyParse.json());
var User = require('./User');
router.post('/', function(req, res){
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },
    function(err, user){
        if (err) return res.status(500).send("there was a problem adding infomation to the database.");
        res.status(200).send(user);
    });
});
router.get('/', function(req, res) {
    // console.log("get/1");
    // res.send('Hello World.');
    User.find({}, function(err, users) {
        if (err) return res.status(500).send("There was a problem finding th users.");
        console.log(users);
        res.status(200).send(users);
    });
    // console.log("get/3");
    // res.status(200).send("none");
});
router.get('/:id', function(req, res) {
    User.findById(req.params.id, function(err, user){
        if (err) return res.status(500).send("There was a problem finding ther user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});
router.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        if (!user) return res.status(200).send("User " + req.params.id + " is not found.");
        res.status(200).send("User " + user.name + " was deleted.");
    });
});
router.put('/:id', function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});
module.exports = router;