import PromptSync from "prompt-sync";
import Musician from "./musiker.js";
import Band from "./band.js";
import fs from "fs" ;

const prompt = PromptSync({sigint:true});

const musicians = [];
const bands = [];

const userData = { responses: [] };


let run = true;
while (run) {
    console.log(`
    New
    1. Add a new band
    2. Remove a group
    3. Create a new musician
    4. Remove musician
    5. Update information
    6. Exit the program

      
    Val -> `);

    const val =prompt();

    
        switch(val.trim().toUpperCase()){
        case "1" :
            let bandName = prompt("What is the name of new group?");
            let formationYear = prompt("Year the band was formed?");
            const newBand = new Band(bandName, formationYear);
            bands.push(newBand);
            console.log(`Band "${bandName}" has been added.`);
            userData.responses.push({
            choice: val.trim().toUpperCase(),
            band: {
            name: newBand.name,
            formationYear: newBand.formationYear,
        },
    });
    break;

        case "2" :
            console.log("Available band:");
            bands.forEach((band, index) => {
              console.log(`${index + 1}. ${band.name}`);
            });
            let bandIndexToRemove = prompt("Which band do you want to remove? (Enter the number)");
            if (bandIndexToRemove > 0 && bandIndexToRemove <= bands.length) {
              const removedBand = bands.splice(bandIndexToRemove - 1, 1);
              console.log(`Band "${removedBand[0].name}" has been removed.`);
            } else {
              console.log("Invalid choice. Choose a number that corresponds to a band.");
            }
            break;
        
       case "3" :
            let musicianName = prompt("What is the new musician's name?");
            let birthYear = prompt("Birthday?");
            const newMusician = new Musician(musicianName, birthYear);
            musicians.push(newMusician);
            console.log(`Musician "${musicianName}" has been added.`);
            userData.responses.push({
                choice: val.trim().toUpperCase(),
                musician: {
                    name: newMusician.name,
                    birthYear: newMusician.birthYear,
                },


            });
            break;
        case "4":
            console.log("Available musicians:");
            musicians.forEach((musician, index) => {
            console.log(`${index + 1}. ${musician.name}`);
            });
            let musicianIndexToRemove = prompt("Which musician do you want to remove? (Enter the number)");
            if (musicianIndexToRemove > 0 && musicianIndexToRemove <= musicians.length) {
                const removedMusician = musicians.splice(musicianIndexToRemove - 1, 1);
                console.log(`Musician "${removedMusician[0].name}" has been removed.`);
            } else {
            console.log("Invalid choice. Choose a number that corresponds to a musician.");
            }
            break;
        case "5":
            console.log("Available musicians:");
            musicians.forEach((musician, index) => {
            console.log(`${index + 1}. ${musician.name}`);
                });
            let musicianIndexToUpdate = prompt("Which musician do you want to update? (Enter the number)");
            if (musicianIndexToUpdate > 0 && musicianIndexToUpdate <= musicians.length) {
                  const musician = musicians[musicianIndexToUpdate - 1];
                  console.log(`Vald musiker: ${musician.name}`);
                  let updateChoice = prompt("What do you want to update?\n1. Name\n2. birthYear\nVal -> ");
             switch (updateChoice.trim()) {
                case "1":
                const newName = prompt("Enter the new name: ");
                musician.name = newName;
                console.log(`The name has been updated to "${newName}".`);
                break;
                case "2":
                const newBirthYear = prompt("Enter the new birth year: ");
                musician.birthYear = newBirthYear;
                console.log(`The birth year has been updated to "${newBirthYear}".`);
                break;
                default:
                console.log("Invalid choice.");
                 }
                } else {
                  console.log("Invalid choice. Select a number that corresponds to a musician.");
                }
                break;
        case "6":
        run = false;
        console.log("Programmet avslutas.");
        break;
        default:
        console.log("Invalid choice. Please select a valid action (1-6)");
        }


     
    userData.responses.push({ choice: val.trim().toUpperCase() });
    fs.writeFileSync('Data.json', JSON.stringify(userData, null, 2));
}

// Sample usage:
const john = new Musician('John', 1980);
const jane = new Musician('Jane', 1990);

const rockBand = new Band('Rock Band');
const jazzBand = new Band('Jazz Band');

addMusicianToBand(john, rockBand);
addMusicianToBand(jane, jazzBand);

console.log(john.calculateAge()); // Calculate and display John's age

console.log(rockBand.members); // Display members of the Rock Band
console.log(jane.bands); // Display bands that Jane is part of

