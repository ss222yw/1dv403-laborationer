"use strict";

var makePerson = function(persArr){
var result = {};
var ages = [];
var names = [];
var sum;
	// Din kod här...

ages = persArr.map(function(person){
   return  person.age;
});



result.maxAge = ages.reduce(function(prevAge, age){
    return Math.max(prevAge, age);
});

result.minAge = ages.reduce(function(prevAge, age) {
    return Math.min(prevAge, age);
});

sum = ages.reduce(function(prevAge, age){
    return prevAge + age;
});

names = persArr.map(function(person) {
    return person.name;
});

names.sort(function(a, b){
   return a.localeCompare(b); 
});

result.names = names.reduce(function(prevName, name) {
    return prevName + ", " + name;
});

result.averageAge = Math.round(sum/3);


console.log(result.names);
console.log(ages);
console.log(sum);
console.log(result.maxAge);

    
return result;
};


