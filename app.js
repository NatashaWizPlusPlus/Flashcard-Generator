var inquire = require ('inquirer');
var fs = require ('fs');
var basic = require('./BasicCard.js');
var cloze = require('./ClozeCard.js');

var cardOne = new BasicCard('What is a way to append a value to an array?','arr[arr.length] = value;');
var cardTwo = new ClozeCard('Can you explain what isNaN function does?','isNaN function will check an argument and return TRUE (1) if the argument does not seem to be a number.');
var cardThree = ClozeCard('How do you create a new object in JavaScript?','var obj = new Object(); or var obj = {};');

console.log(cardOne);
console.log(cardTwo);
console.log(cardThree);