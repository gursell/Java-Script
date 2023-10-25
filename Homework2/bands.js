// Import the Band class
import Band from "./band.js";

/*export default class Bands {
  #allBands = [];
}*/

// Create an array to store all bands
const allBands = [];

// Function to create a new band and add it to the allBands array
function createAndAddBand(name, formationYear, dissolutionYear) {
  const band = Band.createBand(name, formationYear, dissolutionYear);
  allBands.push(band);
  return band;
}

// Function to remove a band from the allBands array
function removeBand(band) {
  Band.removeBand(band, allBands);
}

// Example usage:
const band1 = createAndAddBand("Band A", 2000, 2010);
band1.addCurrentMember("Musician 1", 2000, ["Guitar"]);
band1.addCurrentMember("Musician 2", 2005, ["Bass"]);

const band2 = createAndAddBand("Band B", 2012, null);
band2.addCurrentMember("Musician 3", 2012, ["Drums"]);

console.log(allBands);

removeBand(band1);

console.log(allBands);
