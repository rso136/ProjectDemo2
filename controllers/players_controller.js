var express = require('express');
var router = express.Router();
var player = require('../models/player.js');


//local storage access for node
//if (typeof localStorage === "undefined" || localStorage === null) {
//  var LocalStorage = require('node-localstorage').LocalStorage;
//  localStorage = new LocalStorage('./scratch');
//}

// assigns increment base values to local storage

//var objValA = JSON.parse(localStorage.yourObject || '{"mind": "0"}');
//localStorage.yourObject = JSON.stringify(objValA);
var objValA = {"mind": "0"};
var objValB = {"phys": "0"};
var objValC = {"soul": "0"};
var expVal = {"exp": "0"};

//intellect upgrade routes
router.put('/quests/statsM1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 5;
	objValA.mind = parseFloat(objValA.mind) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValA, condition, function () {
		
		console.log("stat updated")
	})

	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsM2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 10;
	objValA.mind = parseFloat(objValA.mind) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);

	player.update(objValA, condition, function () {
	
		console.log("stat updated")
	})

	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})


router.put('/quests/statsM3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 20;
	objValA.mind = parseFloat(objValA.mind) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);

	
	player.update(objValA, condition, function () {
		
		console.log("stat updated")
	})

	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

//body upgrade routes
router.put('/quests/statsB1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 5;
	objValB.phys = parseFloat(objValB.phys) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValB, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsB2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 10;
	objValB.phys = parseFloat(objValB.phys) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValB, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsB3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 20;
	objValB.phys = parseFloat(objValB.phys) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValB, condition, function () {
		
		console.log("stat updated")
	})
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

//soul upgrade routes
router.put('/quests/statsS1/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 5;
	objValC.soul = parseFloat(objValC.soul) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValC, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsS2/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 10;
	objValC.soul = parseFloat(objValC.soul) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValC, condition, function () {
		
		console.log("stat updated")
	})
	
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})

router.put('/quests/statsS3/:playerID', function (req, res) {
	
	console.log("update route");	
	var condition = 'playerID = ' + req.params.playerID;
	var increment = 20;
	objValC.soul = parseFloat(objValC.soul) + increment;
	expVal.exp = parseFloat(expVal.exp) + increment;
	console.log('condition', condition);
	
	player.update(objValC, condition, function () {
		
		console.log("stat updated")
	})
	player.update(expVal, condition, function() {

		res.redirect('/quests');
	})
})


module.exports = router;