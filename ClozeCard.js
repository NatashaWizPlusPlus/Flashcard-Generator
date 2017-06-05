// The constructor should accept two arguments: text and cloze.
function ClozeCard(text, cloze){
    if(this instanceof ClozeCard){
        // The constructed object should have a cloze property that contains 
        //only the cloze-deleted portion of the text.
        text = text.trim();
        cloze = cloze.trim();

        // The constructed object should have a partial property that 
        //contains only the partial text.
        var partial = this.text.slice(0,this.text.indexOf(this.cloze));
        var endPartial = this.text.slice(this.text.indexOf(this.cloze)+this.close.length,text.length);
        // The constructed object should have a fullText property that 
        //contains only the full text.
        this.partial = partial+endPartial;
        
    }else{
        // The constructor should throw or log an error when the cloze 
        //deletion does not appear in the input text.
        return new ClozeCard(text, cloze);

    }

        // Use prototypes to attach these methods, wherever possible.


    
}

module.exports = ClozeCard;