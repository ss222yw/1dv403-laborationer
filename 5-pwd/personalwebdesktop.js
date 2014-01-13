"use strict";

var personalWebDesktop = {
    
    init : function(){
        
        // skapar icon via id som ska öppna fönstret.
        var icon = document.getElementById("icon");
        
        // Räknar antal tryck på ikonen för att öppna ny fönster.
        var counter = 0;
        
        // Skapar div tagg
        var iconDiv = document.createElement("div");
        
        // Skapar klass namn som i detta fallet kallas jag den iconImage.
        iconDiv.className = "iconImage";
        
        
        // lägger div taggen till iconen.
        icon.appendChild(iconDiv);
        

        
        // Skapar img.
        var image = document.createElement("img");
        //Läser bilden från filen.
        image.setAttribute("src","icon.png");
        
        //Skapar title till ikonen.
        image.title = "Tryck på ikonen för att öppna den!";
        

        //Skapar klass.
        image.className = "clickImg";
        
        // Skapar a taggen.
        var a = document.createElement("a");
        a.setAttribute("href","#");
        
        //Lägg img inuti a taggen.
        a.appendChild(image);
        
        //Lägg a taggen inuti icon div taggen.
        icon.appendChild(a);
        
        
        // Onclick fuktion .
       a.onclick = function(){
           
           counter++;
           // Enbart ett fönster ska kunna vara öppet samtidigt.Hindrar att fler skapas
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
            
            // Skapar title till stäng bilden.
            closeImage.title ="Stäng!";
            
            // Skapar klass till stäng bilden.
            closeImage.className = "kryssImg";
            
            // Skapar a taggen som länk.
            var closeLink = document.createElement("a");
            closeLink.setAttribute("href","#");
            
            // Lägg img inuti a taggen .
            closeLink.appendChild(closeImage);
            
            // Lägg a taggen inuti div taggen.
            hDiv.appendChild(closeLink);
            
            // Lägg h div taggen inuti cont div taggen.
            contDiv.appendChild(hDiv);
            
           
            // Skapar en text .
            var text = document.createTextNode("Image Viewer");
            // Lägg texten inuti h div taggen.
            hDiv.appendChild(text);
            
            
            
            
       
            
            //Onclick fuktionen.
            closeLink.onclick = function() {
                
                //Då användaren klickar på stängknappen ska fönstret stängas.
                container.removeChild(contDiv);
                //Lägger counter med 0 igen för att kunna öppna ny fönster igen efter att man stängt den.
                counter = 0;
            };
                        
            
           
            
            //Skapar div taggen.
            var cDiv = document.createElement("div");
            
            // Skapar klass.
            cDiv.className = "cDiv";
            
            // Lägg c div taggen inuti cont div taggen.
            contDiv.appendChild(cDiv);
            
            
            
             // Skapar div taggen.
            var bDiv = document.createElement("div");
            
            // Skapar klass.
            bDiv.className = "bDiv";
            
            //Lägg b div taggen inuti cont div taggen.
            contDiv.appendChild(bDiv);
            
        // Skapar img för apple ikon som lägger i header.
            var hIcon = document.createElement("img");
            
            //Skapar klass.
            hIcon.className = "headIcon";
            
            // Läser bilden från filen.
            hIcon.setAttribute("src","Apple1.png");
            
            //Skapar title.
            hIcon.title = "Image Viewer ikonen";
            
            // Lägg h icon inuti h div taggen.
            hDiv.appendChild(hIcon);


            // Skapar img till ajax.
            var imageLoad = document.createElement("img");
            
            //Läser bilden från filen.
            imageLoad.setAttribute("src","ajax-loader.gif");
            
            //Skapar title till ajax bilden.
            imageLoad.title ="Laddar.......";
            
            //Skapar klass till ajax bilden.
            imageLoad.className = "imgload";
            
            // Lägg imageLoad inuti b div taggen.
            bDiv.appendChild(imageLoad);
            
              //Skapar ny XHR objekt.
       var url = " http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/ ";

       
       //En function som skickar url och callback.
        new AjaxCon(url, function(data) {
          // Parse json , spara jason.
          var jasonImages = JSON.parse(data);
          var width = 0;
          var height = 0;
          var i = null;
          var node = document.getElementsByTagName("div");


          for(i=0; i < jasonImages.length; i++){
              
              var ajaxImageDiv = document.createElement("div");
              
              ajaxImageDiv.className ="ajaxImg";
              
              cDiv.appendChild(ajaxImageDiv);
              // Hitta största bredd.
              if(jasonImages[i].thumbWidth > width){
                  
                  width = jasonImages[i].thumbWidth;
              }
              
              // Hitta största högt.
              if(jasonImages[i].thumbHeight > height){
                  
                  height = jasonImages[i].thumbHeight;
              }
              
              var ajaxImages = document.createElement("img");
              
              ajaxImages.setAttribute("src",jasonImages[i].thumbURL);
              
              var ajaxImagesLinks = document.createElement("a");
              
              ajaxImagesLinks.setAttribute("href","#");
              
              ajaxImagesLinks.appendChild(ajaxImages);
              
              ajaxImageDiv.appendChild(ajaxImagesLinks);
              
              personalWebDesktop.setBackground(jasonImages[i].URL, ajaxImagesLinks);
              
          }
              for (var x = 0; x < node.length; x++) {
                    if (node[x].className === "ajaxImg") {
                        node[x].style.height = height + "px";
                        node[x].style.width = width + "px";
                    }
                }
          
          bDiv.removeChild(imageLoad);
        });
     return false;


         };
        
    },
    
    
     //Function onclick för att ändra backgrund bilden för container till aktuell bild.
    setBackground: function(backgroundImg, change){
        change.onclick = function(){
            document.getElementById("container").style.backgroundImage = "url(" + backgroundImg + ")";
        };
    }
             
};
   function AjaxCon(url, callback) {
        
    var READY_STATE_UNITIALIZED = 0;
    
    var READY_STATE_OPENED = 1;
    
    var READY_STATE_SENT = 2;
    
    var READY_STATE_LOADING = 3;
    
    var READY_STATE_COMPLETE = 4;

    //Pickar (this) på getXHR funktionen.
    var xhr = this.getXHR();
    xhr.onreadystatechange = function () {

        if (xhr.readyState === READY_STATE_COMPLETE) {
            
             //Ifall xhr är lika med 200 eller större än 200 eller mindre än 300 eller lika med 304 picka på callback.
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            
                callback(xhr.responseText);
                console.log(xhr);
            }

            else
            {
                console.log("läsfel, status:" + xhr.status);  
            }
        }

    };

   xhr.open("get", " http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/ ", true);
   

    xhr.send(null);
}

   AjaxCon.prototype.getXHR = function () {
    var xhr = null;
        try {
        xhr = new XMLHttpRequest();       
    } catch (error){
        
        }

    return xhr;
};
    
    
    
    
window.onload = personalWebDesktop.init;