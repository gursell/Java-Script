//Skriv en funktion som skriver ut ditt namn.

export default class Person {

  name ;
  age;

  //Skriv en funktion som adderar två tal med varandra och skriver ut summan.

  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  greeting(){
    console.log('Hej jag heter ${this.name} och jag är ${this.age} år gammal.');
  }
}
  const Person1 = new Person("Gursel", 33);
  console.log(Person1.name);
  console.log(Person1.age);

Person1.greeting();


