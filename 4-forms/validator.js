"use strict";

var validator = {
    
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
            
        },
        
        lastName.onblur = function(){
            
        },
        
        postCode.onblur = function(){
            
        },
        
        email.onblur = function(){
            
        },
        
        price.onblur = function(){
            
        },
        
        buyButton.onclick = function(){
            
        };
        
        
         
        
    }
    
    
    };
    
    
    
    
    window.onload = validator.init;