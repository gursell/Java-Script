import PromptSync from "prompt-sync";
import Musician from "./musician.js";
import Band from "./band.js";
import fs from "fs" ;

const prompt = PromptSync({sigint:true});

const musicians = [];
const bands = [];

//const userData = { responses: [] };

// Load existing data from a JSON file, if it exists
let userData;
try {
  const data = fs.readFileSync('Data.json', 'utf8');
  userData = JSON.parse(data);
} catch (err) {
  userData = { responses: [] };
}
//

let run = true;
while (run) {

    console.log(`
    New
    1. Add a new group
    2. Remove a group
    3. Create a new musician
    4. Remove musician
    5. Update musician information
    6. Exit the program

      
    Val -> `);

    const val =prompt();

    
        switch(val.trim().toUpperCase()){
        case "1" :
            let bandName = prompt("What is the name of new group?");
            let formationYear = prompt("Year the band was formed?");
            let dissolutionYear = prompt("Year the band was dissolved?");
            let currentMembers = prompt("Who are the current members, what is joining year and which intruments?");
            let previousMembers = prompt("Who are the former members, what is leaving year? ");

                //let dissolution year ekle
            const newBand = new Band(bandName, formationYear, dissolutionYear, currentMembers, previousMembers);
                //buraya da dis. ekle
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
            let joinYear = prompt("Joining year?");
            let leaveYear = prompt("Leaving year?");
            let instruments = prompt("Instruments (comma-separated)?");
            //.split(",");

            const newMusician = new Musician(musicianName, birthYear, joinYear, leaveYear, instruments);
            musicians.push(newMusician);
            console.log(`Musician "${musicianName}" has been added.`);

            userData.responses.push({
            choice: val.trim().toUpperCase(),
            musician: {
            name: newMusician.name,
            birthYear: newMusician.birthYear,
            joinYear: newMusician.joinYear,
            leaveYear: newMusician.leaveYear,
            instruments: newMusician.instruments,
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
                let updateChoice = prompt("What do you want to update?\n1. Name\n2. birthYear\n3. joinYear\n4. leaveYear\nVal -> ");
                //yukarida joining, instrument i ekle digerleri gibi
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
               //
               case "3":
                const newJoinYear = prompt("Enter the new joining year: ");
                musician.joinYear = newJoinYear;
                console.log(`The joining year has been updated to "${newJoinYear}".`);
                break;
               case "4":
                const newLeaveYear = prompt("Enter the new leaving year: ");
                musician.leaveYear = newLeaveYear;
                console.log(`The leaving year has been updated to "${newLeaveYear}".`);
                break;
                //
                default:
                console.log("Invalid choice.");
                 }
                } else {
                  console.log("Invalid choice. Select a number that corresponds to a musician.");
                }
                break;
        case "6":
        run = false;
        console.log("Program is ending.");
        break;
        default:
        console.log("Invalid choice. Please select a valid action (1-6)");
        }


     
    userData.responses.push({ choice: val.trim().toUpperCase() });
    fs.writeFileSync('Data.json', JSON.stringify(userData, null, 2));
}




