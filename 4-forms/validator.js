"use strict";

var validator = {
    firstName: false,
    lastName: false,
    postCode: false,
    eMail: false,
    
    init: function(){
         var form = null;
         var firstName = null;
         var lastName = null;
         var postCode = null;
         var email = null;
         var price = null;
         var buyButton = null;
         form = document.getElementById("theForm");
         firstName = document.getElementById("firstName");
         lastName = document.getElementById("lastName");
         postCode = document.getElementById("postcode");
         email = document.getElementById("email");
         price = document.getElementById("price");
         buyButton = document.getElementById("button");
         
        
        firstName.onblur = function(){
            var fName = form.elements['firstName'].value; 
            if (!fName.match(/\S/)) {
                alert("skriv ditt förnamn!");
                return false;
            
            }
        },
        
        lastName.onblur = function(){
            var lName = form.elements['lastName'].value; 
            if (!lName.match(/\S/)) {
                alert("skriv ditt efternamn!");
                return false;
            }
        },
        
        postCode.onblur = function(){
            var post = form.elements['postcode'].value;
            if (!post.match(/^\d{5}$/ )) {
                alert("Skriv ett gäligt post nummer det vill säga i formet 12345!");
                return false;
            }
        },
        
        email.onblur = function(){
            var Mail = form.elements['email'].value;
            if (!Mail.match(/^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i)) {
                alert("Skriv ett gäligt e-post!");
                return false;
            }
        },
        
        price.onblur = function(){
            //Tom!
        },
        
        buyButton.onclick = function(){
            if (validator.firstName === false || validator.lastName === false || validator.postCode === false || validator.eMail === false) {
                alert("Du måste fylla i forumläret först inann du kan genomföra köpet!");
                return false;
            }
        };
        
        
         
        
    }
    
    
    };
    
    
    
    
    window.onload = validator.init;