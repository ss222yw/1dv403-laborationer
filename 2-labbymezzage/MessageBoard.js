var MessageBoard = {

 //Array som ska innehålla alla meddelanden.
	messages: [],
	//Applikationens motor.
	init: function(){
	    
      //Retunera en refrens.
      var text = document.getElementById("message");
     
      
       //Ser till att det går att skicka meddelande med enter-tagenten och att skapa ny rad med shift+enter.
      text.onkeypress = function(e){
	if (!e) { 
		e = window.event;
			}
			
			//var code = e.charCode || e.keyCode;
                        if(!e.keyCode){
                                  e.charCode;
                        } 
                        
                        else {
                                   e.keyCode;
                        }
			
			//Om användaren trycker på enter bara!Returena false för att inte skicka med en tom rad.
			if (e.keyCode == 13 &! e.shiftKey) {
				MessageBoard.creatMessage();
				return false;
			}
	      var button = document.getElementById("button");
 //Anropa på fuktionen addMessage när användren trycker på knappen.
      button.onclick = MessageBoard.creatMessage;
      };
     

	},
	
	// Funktion hämtar kommentarerna och skapar nytt meddelande
createMessage: function(){
    // Tar elementet "message"s värde och sätter i variabel 
    var text = document.getElementById("message").value;
    var mess = new Message(text, new Date());
    // Lägger i den ny skapade meddelandet med texten och datumet i arrayen
    MessageBoard.messages.push(mess);
    // Anropar createMessage för att skriva ut meddelande
    MessageBoard.renderMessage();
     alert(mess);
	    alert(mess.getText());
	    mess.setText("annan");
	    alert(mess);
},
	
        //Funktion för att först radera och sedan skriva ut alla meddelanden igen.
        renderMessages: function() {
            
                document.getElementById("message").value = "";
                //Ta bort alla meddelanden
                document.getElementById("messages").innerHTML = "";
                //Skapa alla meddelanden
                for(var i = 0; i < MessageBoard.messages.length; i++){
                        MessageBoard.renderMessage(i);
                }
               
                //Skriv ut antal meddelanden
                var tmp = document.getElementById("counter");
                var tmpStr = "<p>";
                tmpStr += "Antal meddelanden :";
                tmpStr += (MessageBoard.messages.length);
                tmpStr += "</p>";
                tmp.innerHTML = tmpStr;
        },
	
        
        renderMessage: function(messageID){
            
              //Skapa nytt div-element med klassnamnet "main"
                var div = document.createElement("div");
                div.className = "main";
               
                        //Skapa ny p-tagg med klassnamnet "buttons"
                        var msgImg = document.createElement("p");
                        msgImg.className = "buttons";
                        
                        //Skapa knapp för borttagning av meddelande
                                var imgClose = document.createElement("img");
                                imgClose.src = "pics/DeleteIcon.png";
                                imgClose.alt = "Close";
                               
                                //Ta bort meddelande vid klick
                                imgClose.onclick = function() {
                                        MessageBoard.removeMessage(messageID);
                                };
                                
                                
                                //Skapa knapp för klockan
                                var imgClock = document.createElement("img");
                                imgClock.src = "pics/timer.png";
                                imgClock.alt="Time";
                               
                                //Visa när inläggets skrevs vid klick
                                imgClock.onclick = function() {
                                        alert(MessageBoard.messages[messageID].getDateText());
                                };
                                   msgImg.appendChild(imgClock);
                                   msgImg.appendChild(imgClose);
                                   
                                    //Meddelandetexten
                        var msgText = document.createElement("p");
                        //Lägg till meddelandet
                        msgText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
                       
                        //Meddelandets tidsstämpel
                        var msgTime = document.createElement("p");
                        msgTime.className = "date";
                        msgTime.innerHTML = MessageBoard.messages[messageID].getTime();
                        
                         //Lägg allt i div-taggen med ID:t "messages"
                         document.getElementById("messages").appendChild(div);

        },
        
        deleteMessage: function(messageID) {
		//En frågeruta frågar användaren om han verkligen vill radera meddelandet
		if (window.confirm("Är du säker på att du vill radera meddelandet?")) {
         //Plockar bort meddelandet med tillhörande data
  MessageBoard.myMessages.splice(messageID, 1);
 //För att det ska synas att man har plockat bort meddelandet får man rendera dem på nytt
 MessageBoard.renderMessages();
		} 
	},
        
};

//När sidan har laddads in så anropas init.
window.onload = MessageBoard.init;