
export default class Bands {
  #allBands = [];
}

function createMusician(name, birthYear) {
  return new Musician(name, birthYear);
}

// Example usage:
const musician1 = createMusician("Musician 1", 1985);
const musician2 = createMusician("Musician 2", 1990);

const band1 = band1.createBand("Band A", 2000, 2010);
const band2 = band1.createBand("Band B", 2012, null);

musician1.addCurrentBand(band1, 2000, ["Guitar"]);
musician1.addCurrentBand(band2, 2015, ["Vocals"]);
musician2.addCurrentBand(band2, 2012, ["Drums"]);

console.log(musician1);
console.log(musician2);
