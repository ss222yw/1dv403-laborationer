var MessageBoard = {

 //Array som ska innehålla alla meddelanden.
	messages: [],
	//Applikationens motor.
	init: function(){
      // Startar räknaren från 0
      MessageBoard.count();
     //Retunera en refrens.
      var text = document.getElementById("messagearea");
     // Sätter fokus på textelementet
     text.focus();
     //Ser till att det går att skicka meddelande med enter-tagenten och att skapa ny rad med shift+enter.
     text.onkeypress = function(e){
		if(!e){ e = window.event; }
			if(e.shiftKey === false && e.keyCode == 13){
				MessageBoard.creatMessage();
				return false;
			}
		};
		var send = document.getElementById("sendmessage");
		send.onclick = MessageBoard.creatMessage;	
	},
   creatMessage: function(){	
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
		imgTimer.title="Se när meddelandet postades exakt!.";
		aTimer.appendChild(imgDelete);
		aDelete.appendChild(imgTimer);
		var buttons = document.createElement("div");
		buttons.className = "button";
		buttons.appendChild(aTimer);
		buttons.appendChild(aDelete);
		buttons.appendChild(time);
		// Skapar div tagg som innehåller meddelandet och lägger till datum och länk på denna
		var msg = document.createElement("div");
		msg.className = "msg";
		msg.innerHTML = MessageBoard.messages[messageID].getHTMLText();
		msg.appendChild(buttons);
		// Hämtar div tagg i HTML. där meddelandena ska läggas
		var mess = document.getElementById("messcontainer");
		mess.appendChild(msg);
		
		imgDelete.onclick = function(){
			MessageBoard.delMessage(messageID);
		}; 
		
		imgTimer.onclick = function(){
			MessageBoard.timeMessage(messageID);
		};
		
        },
        
        renderMessages: function(){
		document.getElementById("messcontainer").innerHTML = "";
		for(var i = 0; i < MessageBoard.messages.length; ++i){
			MessageBoard.renderMessage(i);	
		}
		//rensar formulär från tidigare skrift 
		document.form.messagearea.value = "";
	},
         // Funktionen raderar meddelanden
       delMessage: function(messageID){
       // Ruta som frågar om man verkligen vill radera meddelandet
		var del = confirm("Vill du verkligen ta bort meddelandet?");
		if(del){
           // Tar bort ett meddelande med unikt ID
			MessageBoard.messages.splice(messageID, 1);
            //Det ska synas att man har tagit bort meddelandet för man skriva ut dem på nytt
			MessageBoard.renderMessages();
			//Räknare som räknar antal meddlande efter att användren har tagit bort en/några.
			MessageBoard.count();
		}	
	},
	
		timeMessage: function(messageID){
		alert(MessageBoard.messages[messageID].getTimeStamp());
		
	},
	// Meddelanderäknare-funktion
	count: function(){
		var countN = document.getElementById("count");
		countN.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length;
	}

        
};

//När sidan har laddads in så anropas init.
window.onload = MessageBoard.init;