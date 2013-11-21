"use strict";

window.onload = function(){
    var i = 0; //Deklerar varibale
var result = ''; // Deklerar variable
var Aa = /a/ig; // Deklerar varibale och säger till att det gäller båda A och a.


	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
    //Om input är tom kastas ett udantag med fel meddelande.
    // Vid tomt, kasta ett undantag med ett meddelande till användaren.
    if(str===""){
        throw{message:"Fel! Du måste skriva nåting!"};
    }
// Plats för förändring.
// For loopen för att skriva ut allt.
for (i = 0; i < str.length; i++) {
    //Om input bokstaven är stor ändra till liten och alla A och a bokstäver ändras till #.
     if (str.charAt(i)===str.charAt(i).toUpperCase()) {
       result += str.charAt(i).toLowerCase();
       str = str.replace(Aa, "#");

       
    }
    // Annars om bokstaven är liten ändra den till stor och alla A och a ändras till #.
    else{
       result += str.charAt(i).toUpperCase();
       str = str.replace(Aa, "#");
    }
   
}

// Returnera den konverterade strängen result.
 alert (result);
return result;




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
			var answer = convertString(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};