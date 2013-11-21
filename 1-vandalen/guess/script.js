"use strict";

window.onload = function(){
        
        var secret = Math.floor( Math.random() * 100)+1; // Ett slumpat tal,Randomisera ett nummer.
        var counter = 0;//Antal försök som börjar på noll och sedan ökar.
        // I denna funktion ska du skriva koden för att hantera "spelet"
        var guess = function(number){
                console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
                console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.

                // Plats för förändring.

          // Ifall nummer är större än 0 eller lika med 0 och nummer är mindre än 100 eller lika med 100 körs.
        if(number>=0 && number<=100){
              counter += 1; // Ökar med 1 varje gång användaren göra en ny försök.
              // [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
               if(number == secret){
               alert("Grattis du vann! Det hemliga talet var: " + (secret)+ ". och du behövde " + (counter) +"gissningar för att hitta det.");
                }
                // [false, "Det hemliga talet är högre!"]
                else if(number < secret){
                   alert("Det hemliga talet är högre än" + number);
                }  
                // [false, "Det hemliga talet är lägre!"]
                else if(number >secret){
                        alert("Det hemliga talet är lägre " + number);
                }
        }
        // [false, "Talet är utanför intervallet 0 - 100"]  
        else{
            
                alert("Talet är utanför intervallet 0 - 100");
        }
        //Om den är inte en nummer eller tom så kommer fel meddelande att visas.
    if(isNaN(number)||number === ""){
        alert("Fel! Du måste mata in en siffra mellan 0-100");
    }



                // Returnera exempelvis: 
                
                
                
                              
        };
        
        // ------------------------------------------------------------------------------



        // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
        var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
        var input = document.querySelector("#number");
        var submit = document.querySelector("#send");

        // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
        submit.addEventListener("click", function(e){
                e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

                var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
                p.innerHTML = answer[1];                // Skriver ut texten från arrayen som skapats i funktionen.        

                if(answer[0] === true){                                // Om spelet är slut, avaktivera knappen.
                        submit.disabled = true;
                }
        
        });
};