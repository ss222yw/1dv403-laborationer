"use strict";
// Kolumner 4x4 bilder (8 par) 
var cols = 4;
// Antal rader 4x4 bilder (8 par) 
var rows = 4;
//skapar ett statiskt objekt som kallas Memory. 
var Memory = {
    //En egenskap som kommer att referera till den utslumpade arrayen.
    randomArray:[],
    array: [],
    // Räknare för antal försök.
    countTrying: 0,
    // Räknar par
    countPair: 0,
    
    //Skapar en init-metod och koppla denna till sidans onload-event.
     init: function(){
         // I init-metoden anropar arrayslumpsmetoden och sparar resultatet i egenskapen som skapade i 4an.
        Memory.randomArray =  RandomGenerator.getPictureArray(rows, cols)
        //Test för att se om det går att skriv ut arrayen.
        console.log(Memory.randomArray);
        //Anropar generatorUl.
        Memory.generatorUl();
    },
    
    //Generera upp tabellen ul som inhåller bilderna!
    generatorUl: function(){
        var ul = document.createElement("ul");
        var tr = null;
        var pics = null;
        var td = null;
        var li = null;
        var a = null;
        // Varivale som räknar.
        var count = 0;
        // lägger ul i divtaggen content.
        document.getElementById("content").appendChild(ul);
        
        for (var row = 0; row < rows; ++row ){
            tr = document.createElement("tr");
            ul.appendChild(tr);
            
            for(var col = 0; col < cols; ++col){
                 td = document.createElement("td");
                tr.appendChild(td);
                //Skappar bilderna.
                pics = document.createElement("img");
                pics.setAttribute("src", "pics/0.png");
                // Modifierar koden så att varje bild kapslas in i en a-länk och koppla ett onclick-event till a-taggen
                li = document.createElement("li");
                a = document.createElement("a");
                a.appendChild(pics);
                td.appendChild(a);
                a.href = "#";
                td.appendChild(li);
                
                // Anropar turnCount
                Memory.turnCount(count,a);


                // Räknar upp.
                count++;
                
            }
        }
        
    },
    
    //Skapar metoden som onclickeventet anropar och vändar brickan.
   turnCount: function(c,länk){
       länk.onclick = function(){
           // Bilden får inte vara annat än startbild.
           if (this.getElementsByTagName("img")[0].getAttribute("src") !== "pics/0.png")
              {
                return false;
               }

           
          //Lägger till ett nytt element i arrayen.
           Memory.array.push(länk);
           
             // Ifall längden på arrayen är 1 eller 2 så visar bilden
            if (Memory.array.length === 1 || Memory.array.length === 2) {
                this.getElementsByTagName("img")[0].setAttribute("src", "pics/" + Memory.randomArray[c] + ".png");
            }
            
            // Om bilderna stämmer inte överens, anropas checkCount funktionen efter en sekund.
            if(Memory.array.length===2){
                setTimeout(function() {
                    Memory.checkCount(Memory.array);
                }, 500);
            }
       };
   },
   
   checkCount: function(same_array){
       // Testar om brickorna är lika så stannar de uppvända och en räknare räknas upp med ett.
       if (same_array[0].getElementsByTagName("img")[0].getAttribute("src") === same_array[1].getElementsByTagName("img")[0].getAttribute("src")){
           // Räknare för par.
           Memory.countPair++;
           //Kontrollerar räknaren kolla om spelaren har vunnit
           // Om countPair är hälften så mycket är bildrna, så anändaren har vunnit.
           if (Memory.countPair === ((cols*rows)/2)){
               alert("Grattis! Du vann!\nAntal försök är : " + Memory.countTrying);
           }
           // Memory.array är töm.
           Memory.array = [];
       }
       else{
           // Startbild körs en gång till. 
            same_array[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            same_array[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            //Arrayen är töm.
            Memory.array = [];
            // räknar upp ett försök
            Memory.countTrying++;
       }

       
   }
};


//När sidan har laddads in så anropas init.
window.onload = Memory.init;