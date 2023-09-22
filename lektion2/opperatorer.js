//Aritmetiska operatorer:  addition +, subtraktion -, multiplikation *, division /, moduloräkning %
//Tilldelningsoperatorer: Tilldela = x= 5, lägga till och tilldela
//jämförelseoperatorer: lika med == 5 == ‘5’ 
//Logiska Operatorer: Och && true&&false//false
// Eller || true || false, Inte !, !true//false

//typeof - är en operator som hjälper dig att identifiera datatyper i JavaScript.

let something = "Hej"
console.log(typeof something) // string

something = 3
console.log(typeof something) // number

something = false
console.log(typeof something) // boolean

//instanceof - är en mycket användbar operator för att avgöra om ett objekt är en instans av en viss klass eller konstruktor.

class Person {
  constructor(name) {
    this.name = name;
  }
}

const john = new Person('John');

console.log(john instanceof Person);  // Output: true
console.log(john instanceof Object);  // Output: true
console.log(john instanceof Array);   // Output: false