const student1 = {
  namn: "Sara",
  ålder: 21,
  program: "Datavetenskap"
};

const student2 = {
  namn: "Bengt",
  ålder: 26,
  program: "Datavetenskap"
};


const student3 = {
  namn: "Maja",
  ålder: 19,
  program: "Datavetenskap"
};

const studentLista = [student1, student2, student3]

//hämtar data direkt från student-objetet
console.log(`Studenten heter ${student1.namn}, läser på ${student1.program}-programmet och är ${student1.ålder} år gammal.`);

//hämtar data ifrån array med student-objetet
console.log(`Studenten heter ${studentLista[1].namn}, läser på ${studentLista[1].program}-programmet och är ${studentLista[1].ålder} år gammal.`);


// Loopar igenom hela studentlistan och skriver ut var student-obejekts information
for (let i = 0; i < studentLista.length; i++) {
  console.log(`Studenten heter ${studentLista[i].namn}, läser på ${studentLista[i].program}-programmet och är ${studentLista[i].ålder} år gammal.`);
}