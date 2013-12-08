"use strict";

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

//Funktionen som returnerar tiden
Message.prototype.getDateText = function() {
        var time = this.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        // Ifall timmen är mindre än 10 lägg till en 0 innan siffran tex 9 blir 09.
if(hours < 10){
                hours = "0" + hours;
        }
        // Ifall minuten är lägre än 10 , lägg till en 0 innan nummret tex: 8 blir 08.
        if (minutes < 10){
                minutes = "0" + minutes;
        }
        // Ifall suknden är mindre än 10 , lägg till en 0 framför siffran tex: 7 blir 07.
        if(seconds < 10){
                seconds = "0" + seconds;
        }
        var dateText = hours +":"+ minutes +":"+seconds;
        return dateText;
};
//Returnerar den fulla tiden.
Message.prototype.getTimeStamp = function(){
        var time = this.getDate();
        var year = time.getFullYear();
        var month = time.getMonth();
        var day = time.getDate();
        // 0 är lika med januari osv tills 11 är lika med december.
        //I den här fallet ändrar vi månaderna siffror till ord, så det ser ut som det finns i själva labben.
        if(month === 0){month = "januari";}
        if(month === 1){month = "februari";}
        if(month === 2){month = "mars";}
        if(month === 3){month = "april";}
        if(month === 4){month = "maj";}
        if(month === 5){month = "juni";}
        if(month === 6){month = "juli";}
        if(month === 7){month = "augusti";}
        if(month === 8){month = "september";}
        if(month === 9){month = "oktober";}
        if(month === 10){month = "november";}
        if(month === 11){month = "december";}
        
        var timeStamp = "Meddlandet skapades den " + day + " "  + month + " " + year + " klockan " + this.getDateText();
        return timeStamp;
};