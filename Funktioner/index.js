
//Skriv en funktion som tar emot namn och ålder i parameter-fältet. 
//Använd dig av värdena och skriv ut ”Hej jag heter[namn] och är[ålder] år gammal”. 
//Glöm inte att anropa funktionen med värden!

import p from "./person.js"

const Person1 = new p("Gursel", 33);

console.log(Person1.name);
console.log(Person1.age);

Person1.greeting();

