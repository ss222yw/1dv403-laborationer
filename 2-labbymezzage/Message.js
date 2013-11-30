function Message (message, date){
    this.getText = function(){
        return message;
    };
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
    this.setDate = function(_date){
        date = _date;
    };
    
    }
    
    Message.prototype.toString = function() {
		return this.getText()+" ("+this.getDate()+")";
} ;

//Ersätter radbrytningarna, \n med <br />
Message.prototype.getHTMLText = function() {
	return this.getText().replace(/[\n]/g, "<br />");
};

