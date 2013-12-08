"use strict";
// Kolumner 4x4 bilder (8 par) 
var cols = 4;
// Antal rader 4x4 bilder (8 par) 
var rows = 4;
//skapar ett statiskt objekt som kallas Memory. 
var Memory = {
    //En egenskap som kommer att referera till den utslumpade arrayen.
    randomArray:[],
    //Skapar en init-metod och koppla denna till sidans onload-event.
     init: function(){
         // I init-metoden anropar arrayslumpsmetoden och sparar resultatet i egenskapen som skapade i 4an.
        Memory.randomArray =  RandomGenerator.getPictureArray(rows, cols)
        //Test för att se om det går att skriv ut arrayen.
        console.log(Memory.randomArray);
    },
   
};


//När sidan har laddads in så anropas init.
window.onload = Memory.init;