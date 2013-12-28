"use strict";
var personalWebDesktop = {
    
    init : function(){
        // skapar icon via id som ska öppna fönstret.
        var icon = document.getElementById("icon");
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
        
       
        
        
    }
};

window.onload = personalWebDesktop.init;