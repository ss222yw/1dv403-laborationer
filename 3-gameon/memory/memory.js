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
                a.href = "#";
                li.appendChild(pics);
                td.appendChild(li);
                // Räknar upp.
                count++;
                
            }
        }
        
    }
   
};


//När sidan har laddads in så anropas init.
window.onload = Memory.init;