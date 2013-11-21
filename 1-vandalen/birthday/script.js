"use strict";

window.onload = function(){

	
	var birthday = function(date){
        var now;// Deklarera variable
        var splitBirthDay= [];// Array för att dela upp
        var birthday;// Deklarera variabler
        var msLeft;// Deklarera variabler och kollar på millisekunderna
        var daysLeft;// Deklarera variabler och  kollar på antal dagar kvar

        // Din kod här.
   //Ifall användaren matar inte in födelsedagen på formatet ÅÅÅÅ-MM-DD kastas ett udantag med meddelande.
        if(!date.match(/^(\d{4})([\/-])(\d{1,2})\2(\d{1,2})$/)){
          throw {message: "Fel! Ange födelsedagen på formatet ÅÅÅÅ-MM-DD."};
        }
        // Skapar nytt Date-objekt och döper det till now.
        now = new Date();
        splitBirthDay = date.split("-");
        console.log(splitBirthDay);
        // Skapar nytt Date-objekt och döper det till birthday och skickar in året, månaden  och dagar.
        birthday = new Date(now.getFullYear(), splitBirthDay[1] - 1, splitBirthDay[2]);
        //Räknar födelsedagen för nästa år.
        if(birthday.getTime() < now.getTime() && birthday.getDate() != now.getDate()){
            birthday.setFullYear(now.getFullYear()+1);
        } 
        //Räknar antal dagar kvar med att dela millisekunderna med 1000 för att bli i sekunderna sen med 60 för att bli i minuterna sen med 60 för att bli i timmar sen med 24 för att bli i dagar.
        msLeft = birthday.getTime() - now.getTime();
        daysLeft = Math.floor(((((msLeft /1000) /60) / 60) / 24)+1);
        // Returnera antal dagar kvar
        return daysLeft;



	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};