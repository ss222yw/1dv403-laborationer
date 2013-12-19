"use strict";

var Validator = {
    
    init : function() {
        var fname = null;
        var input = null;
        var span = null;
        var lname = null;
        var post = null;
        var mail = null;
        var form = null;
        var Button = null;
        var price = null;
        
         // Hämtar förmälaret via element id.
        form = document.getElementById("theForm");
        Button = document.getElementById("button");
        fname = document.getElementById("firstName");
        lname = document.getElementById("lastName");
        post = document.getElementById("postcode");
        mail = document.getElementById("email");
        price = document.getElementById("price");
        
         // Skapar meddelandet vid anrop av fel eller rätt flying av rutor.
        function produceMessage(message, prompt, color) {
            document.getElementById(prompt).textContent = message;
            document.getElementById(prompt).style.color = color;
        }
     
        // Funktion för att lägga till span taggen efter input taggen.
        function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        
        // Skapar span tagg till förnamn.
         input = document.getElementById("firstName");
        span = document.createElement("span");
        span.setAttribute("id", "fnameprompt");
        insertAfter(input, span);
        fname.focus();

        // Skapar span tagg till efternamn.
        input = document.getElementById("lastName");
        span = document.createElement("span");
        span.setAttribute("id", "lnameprompt");
        insertAfter(input, span);
        
        // Skapar span tagg till post nummer.
        input = document.getElementById("postcode");
        span = document.createElement("span");
        span.setAttribute("id", "postprompt");
        insertAfter(input, span);
        
        // Skapar span tagg till epost.
        input = document.getElementById("email");
        span = document.createElement("span");
        span.setAttribute("id", "mailprompt");
        insertAfter(input, span);
        
        
        // Validerar förnamn med onblur dvs nät användern utanför rutan till kärem.
        fname.onblur = function () {

            if(!fname.value.match(/\S/)) {
                produceMessage("Fel! denna rutan får inte vara tom!", "fnameprompt", "red");
                return false;
            }
            else{
            produceMessage("√", "fnameprompt", "green");
            return true;
            }
        };
        
        // Validerar efternamn med onblur dvs nät användern utanför rutan till kärem.
        lname.onblur = function () {

            if(!lname.value.match(/\S/)) {
                produceMessage("Fel! denna rutan får inte vara tom!", "lnameprompt", "red");
                return false;
            }
           else{
            produceMessage("√", "lnameprompt", "green");
            return true;
           }
        };
        
        // Validerar post nummer med onblur dvs nät användern utanför rutan till kärem.
        post.onblur = function ()  {
            if (!post.value.match(/^(SE)?[\ ]?[\d]{3}(-|\ )?[\d]{2}$/)) {
                produceMessage("Fel! Ange en giligt postnummer dvs i formet 12345!", "postprompt", "red");
                  return false;
                
            }
            
            else  {
                  
               post.value = post.value.replace(/(SE|\ |-)/g,"");
                produceMessage("√", "postprompt", "green");
                  return true;
            }
            
    

           
            
        };
        
        // Validerar epost med onblur dvs nät användern utanför rutan till kärem.
        mail.onblur = function ()  {

            if (!mail.value.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i)) {
                produceMessage("Fel! Ange en giligt epost!", "mailprompt", "red");
                return false;
            }
            else{
            produceMessage("√", "mailprompt", "green");
            return true;
            }
        };
        
         // Funktionen onclick.
         Button.onclick = function () {
             
        if ((!fname.onblur())||(!lname.onblur())||(!post.onblur())||(!post.onblur())) 
        {
         return false;
        }
        
       // Skapar div tagg.
       var background = document.createElement("div");
       background.className = "background";
      document.body.appendChild(background);
      var div = document.createElement("div");
      div.className = "popupWindow";
     document.body.appendChild(div);
     var h2 = document.createElement("h2");
     var title = document.createTextNode("Var vänlig och bekräfta ditt köp!");
     div.appendChild(h2);
     h2.appendChild(title);
     
     // Skapar p tagg för att visar meddlande där står det allt info anävndaren har fyllt i.
       var p = document.createElement("p");
       var fName = document.createTextNode ("Förnamn : " + fname.value);
       p.appendChild(fName);
       div.appendChild(p);  
       p = document.createElement("p");
       var lName = document.createTextNode ("Efternamn : " + lname.value);
       p.appendChild(lName);
       div.appendChild(p);  
       p = document.createElement("p");
       var postnumber = document.createTextNode ("Postnummer : " + post.value);
       p.appendChild(postnumber);
       div.appendChild(p);  
       p   = document.createElement("p");
       var epost = document.createTextNode ("Epost : " + mail.value);
       p.appendChild(epost);
       div.appendChild(p);
       p = document.createElement("p");
       var price1 = document.createTextNode ( "Pris : " + price.value);
       p.appendChild(price1);
       div.appendChild(p);
       
       // Skapar cancel button. 
       var closeButton = document.createElement("input");
       closeButton.type = "button";
       closeButton.value = "Avbryt!";
       div.appendChild(closeButton);
   
       closeButton.onclick = function() {
       fname.disabled = false;
       lname.disabled = false;
       post.disabled = false;
       mail.disabled = false;
       price.disabled = false;
       Button.disabled = false;
       document.body.removeChild(div);
       document.body.removeChild(background);
     }; 
      
      // Skapar submit button.
      var sendButton = document.createElement("input");
      sendButton.type = "submit";
      sendButton.value = "Bekräfta ditt köp!";
      div.appendChild(sendButton);

      sendButton.onclick = function() {
      fname.disabled = false;
      lname.disabled = false;
      post.disabled = false;
      mail.disabled = false;
      price.disabled = false;
      Button.disabled = false;
      form.submit();
     }; 

     fname.disabled = true;
     lname.disabled = true;
     post.disabled = true;
     price.disabled = true;
     mail.disabled = true;
     Button.disabled = true;

  return false;

  };


            
        
    }
};
window.onload = Validator.init;   