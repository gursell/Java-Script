//Utöka nu övning 2 och låt funktionen ta emot två parameter(två tal) och multiplicera talen. 
//Skriv sedan ut summan.Glöm inte att anropa funktionen med värden!
  
class calculator {
  constructor() {
     
  }
  multi(tal1,tal2) {
    console.log(tal1*tal2);
  }

  //Skriv en funktion som tar emot två parameter (två tal) och dividera talen. Returnera sedan summan. 
  //Glöm inte att anropa funktionen med värden!
  
  division(tal1, tal2) {
    console.log(tal1 / tal2);
  }
  
}

const calc = new calculator();

calc.multi(11, 3);
calc.division(30, 10);

let mynumber1 = calc.multi(11, 3)
let mynumber2 = calc.division(30,10)
console.log(mynumber1);
console.log(mynumber2);
  