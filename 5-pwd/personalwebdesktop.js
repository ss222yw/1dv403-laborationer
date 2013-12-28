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
        
        var image = document.createElement("img");
        image.setAttribute("src","icon.png");
        image.className = "img";
        
        var a = document.createElement("a");
        a.setAttribute("href","#");
        a.appendChild(image);
        iconDiv.appendChild(a);
        
       a.onclick = function(){
           
           counter = +1;
           
           if(container > 1){
               return false;
           }
           var container = document.getElementById("container");
            //Skapar div tagg för fönstret.
            var contDiv = document.createElement("div");
            contDiv.className = "window";
            container.appendChild(contDiv);
            
            
            // Skapar div tagg för att stänga fönstret.
            var hDiv = document.createElement("div");
            hDiv.className = "close";
            
            var closeImage = document.createElement("img");
            closeImage.setAttribute("src","kryss3.png");
            
            
            var closeLink = document.createElement("a");
            closeLink.setAttribute("href","#");
            closeLink.appendChild(closeImage);
            hDiv.appendChild(closeLink);
            contDiv.appendChild(hDiv);
            
            var hIcon = document.createElement("img");
            hIcon.className = "headIcon";
            hIcon.setAttribute("src","Apple1.png");
            hDiv.appendChild(hIcon);
        
            
            var text = document.createTextNode("Image Viewer");
            hDiv.appendChild(text);
            
            var bDiv = document.createElement("div");
            bDiv.className = "bDiv";
            contDiv.appendChild(bDiv);
            
            var cDiv = document.createElement("div");
            cDiv.className = "cDiv";
            contDiv.appendChild(cDiv);
            
            closeLink.onclick = function() {
                container.removeChild(contDiv);
            }
       };
        
        
    }
};

window.onload = personalWebDesktop.init;