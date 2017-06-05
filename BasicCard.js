var inquire = require ("inquirer");
var fs = require ('fs');

// The constructor should accept two arguments: front and back.
function BasicCard(front, back){
        
        // The constructed object should have a front property that contains 
        //the text on the front of the card.
       this.front = front;
        // The constructed object should have a back property that contains the text 
        //on the back of the card.
        this.back = back;

}

module.exports = BasicCard;