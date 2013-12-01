var MessageBoard = {

 //Array som ska innehålla alla meddelanden.
	messages: [],
	//Applikationens motor.
	init: function(){
     //Retunera en refrens.
      var text = document.getElementById("messagearea");
      // Startar räknaren från 0
      MessageBoard.count();
     // Sätter fokus på textelementet
     text.focus();
     //Ser till att det går att skicka meddelande med enter-tagenten och att skapa ny rad med shift+enter.
     text.onkeypress = function(e){
		if(!e){ e = window.event; }
			if(e.shiftKey === false && e.keyCode == 13){
				MessageBoard.addMessage();
				return false;
			}
		};
		var send = document.getElementById("sendmessage");
		send.onclick = MessageBoard.addMessage;	
	},
   addMessage: function(){	
		// Skapar nytt meddelandeobjekt
		var newMessage = new Message(document.form.messagearea.value, new Date());	
		MessageBoard.messages.push(newMessage);
		MessageBoard.renderMessages();
	},
		
        
        renderMessage: function(messageID){
        // Meddelanderäknare.
		MessageBoard.count();
		// Skapar en p tagg som innehåller datum text
		var time = document.createElement("p");
		time.className = "time";
		time.innerHTML = MessageBoard.messages[messageID].getDateText();
		// Skapar två klickbara a taggar.
		var aTimer = document.createElement("a");
		aTimer.setAttribute("href", "#");
		var aDelete = document.createElement("a");
		aDelete.setAttribute("href", "#");
		// Skapar deleteknappen lägger till denna på a taggen.
		var imgDelete = document.createElement("img");
		imgDelete.src = "pics/DeleteIcon.png";
		imgDelete.alt="Delete";
		imgDelete.title="Ta bort meddelandet.";
		// Skapar tidknappen och lägger till denna på a taggen
		var imgTimer = document.createElement("img");
		imgTimer.src = "pics/timer.png";
		imgTimer.alt="Timestamp";
		imgTimer.title="Se tiden meddelandet postades.";
		aTimer.appendChild(imgDelete);
		aDelete.appendChild(imgTimer);
		var buttons = document.createElement("div");
		buttons.className = "button";
		buttons.appendChild(aTimer);
		buttons.appendChild(aDelete);
		buttons.appendChild(time);
		
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