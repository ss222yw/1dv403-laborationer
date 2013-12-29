"use strict";

var personalWebDesktop = {
    
    init : function(){
        
        // skapar icon via id som ska öppna fönstret.
        var icon = document.getElementById("icon");
        
        // Räknar antal tryck på ikonen.
        var counter = 0;
        
        // Skapar div tagg
        var iconDiv = document.createElement("div");
        
        // Skapar klass namn som i detta fallet kallas jag den image.
        iconDiv.className = "iconImage";
        
        // lägger div taggen till iconen.
        icon.appendChild(iconDiv);
        
        // Skapar img.
        var image = document.createElement("img");
        
        //Läser bilden från filen.
        image.setAttribute("src","icon.png");
        
        //Skapar klass.
        image.className = "img";
        
        // Skapar a taggen.
        var a = document.createElement("a");
        a.setAttribute("href","#");
        
        //Lägg img inuti a taggen.
        a.appendChild(image);
        
        //Lägg a taggen inuti icon div taggen.
        iconDiv.appendChild(a);
        
        
        // Onclick fuktion .
       a.onclick = function(){
           counter = +1;
           
           // Enbart ett fönster ska kunna vara öppet samtidigt.
           if(counter > 1){
               return false;
           }
           
           // Hämtar container via id.
           var container = document.getElementById("container");
           
            //Skapar div tagg för fönstret.
            var contDiv = document.createElement("div");
            
            // Skapar klass för fönstret.
            contDiv.className = "window";
            
            // Lägg div taggen inuti container .
            container.appendChild(contDiv);
            
            
            // Skapar div tagg för att stänga fönstret.
            var hDiv = document.createElement("div");
            
            //Skapar klass.
            hDiv.className = "close";
            
            // Skapar img för kyss bilden.
            var closeImage = document.createElement("img");
            
            // Läsar bilden från filen.
            closeImage.setAttribute("src","kryss3.png");
            
            // Skapar a taggen som länk.
            var closeLink = document.createElement("a");
            closeLink.setAttribute("href","#");
            
            // Lägg img inuti a taggen .
            closeLink.appendChild(closeImage);
            
            // Lägg a taggen inuti div taggen.
            hDiv.appendChild(closeLink);
            
            // Lägg h div taggen inuti cont div taggen.
            contDiv.appendChild(hDiv);
            
            // Skapar img för apple ikon som lägger i header.
            var hIcon = document.createElement("img");
            
            //Skapar klass.
            hIcon.className = "headIcon";
            
            // Läser bilden från filen.
            hIcon.setAttribute("src","Apple1.png");
            
            // Lägg h icon inuti h div taggen.
            hDiv.appendChild(hIcon);
        
            // Skapar en text .
            var text = document.createTextNode("Image Viewer");
            
            // Lägg texten inuti h div taggen.
            hDiv.appendChild(text);
            
            // Skapar div taggen.
            var bDiv = document.createElement("div");
            
            // Skapar klass.
            bDiv.className = "bDiv";
            
            //Lägg b div taggen inuti cont div taggen.
            contDiv.appendChild(bDiv);
            
            //Skapar div taggen.
            var cDiv = document.createElement("div");
            
            // Skapar klass.
            cDiv.className = "cDiv";
            
            // Lägg c div taggen inuti cont div taggen.
            contDiv.appendChild(cDiv);
            
            //Onclick fuktionen.
            closeLink.onclick = function() {
                
                //Då användaren klickar på stängknappen ska fönstret stängas.
                container.removeChild(contDiv);
            };
       };
        
        
    }
};

window.onload = personalWebDesktop.init;