"use strict";

var makePerson = function(persArr){
//Skappar ett bojekt.    
var result = {};
//Skapar en array.
var ages = [];
// Skapar en array.
var names = [];
//Deklerar en variable.
var sum;
	// Din kod här...
//Följande kod tar en person ålder i en array.
ages = persArr.map(function(person){
   return  person.age;
});


//Räkna Max ålder med reduce som reduce i sin tur läser den första sin andra sen sista nummer och komma ihåg dom och kollar vilken nummer är MAX.
result.maxAge = ages.reduce(function(prevAge, age){
    return Math.max(prevAge, age);
});
//Räkna Min ålder med reduce som reduce i sin tur läser den första sin andra sen sista nummer och komma ihåg dom och kollar vilken nummer är MIN.
result.minAge = ages.reduce(function(prevAge, age) {
    return Math.min(prevAge, age);
});
//Summa ihop alla tre ålderna med hjälp av metoden reduce.
sum = ages.reduce(function(prevAge, age){
    return prevAge + age;
});
//Följande kod tar en person namn i en array.
names = persArr.map(function(person) {
    return person.name;
});
//Sortera bokstäverna i rätt ordning.
names.sort(function(a, b){
   return a.localeCompare(b); 
});
//SKriva ut namn i rätt ordning med komma tecken efter vaje namn.
result.names = names.reduce(function(prevName, name) {
    return prevName + ", " + name;
});
//Math round för att ändra 39,6666666 till 40! och i det här fallet jag kunde dela summan med 3 för att få rätt värde , med jag valde att dela det med persArr.length för att ifall det blir mer än tre personer(ages) så programet kan hantera detta och dela det med rätt antal personer.
result.averageAge = Math.round(sum/persArr.length);

//För att skiva det i konsolet för mig själv för att se att jag gör rätt!
console.log(result.names);
console.log(ages);
console.log(sum);
console.log(result.maxAge);

//Retunerar resulatet!    
return result;
};


