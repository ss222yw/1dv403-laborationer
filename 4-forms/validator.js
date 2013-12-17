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
        
         // Hämtar förmälaret.
        form = document.getElementById("theForm");
        Button = document.getElementById("button");
        fname = document.getElementById("firstName");
        lname = document.getElementById("lastName");
        post = document.getElementById("postcode");
        mail = document.getElementById("email");
        
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

            if(!post.value.match(/^\d{5}$/ )) {
                produceMessage("Fel! Ange en giligt postnummer dvs i formet 12345!", "postprompt", "red");
                return false;
            }
            else{
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
        
      
        
        // Anrop vid onclick för validering av alla onblur innan användaren får genomföra köpet.
            Button.onclick = function () {
            if (!fname.onblur() || !lname.onblur() || !post.onblur() || !mail.onblur()) {
                return false;
            }
            else{
            return true;
            }
            
        };     
        
    }
};
window.onload = Validator.init;