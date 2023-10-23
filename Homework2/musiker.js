
//Name
//Information text
//Year of birth
//List of bands the musician is currently a part of
//List of previous bands the musician has been a part of
//The instruments that the musician plays

export default class Musician {
  #name
  #birthYear
  #joinYear
  #leaveYear
  #instruments
  
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.currentBands = [];
    this.previousBands = [];
    this.instruments = [];
  }

  addCurrentBand(band, joinYear, instruments) {
    this.currentBands.push({ band, joinYear, instruments });
    band.addCurrentMember(this, joinYear, instruments);
  }

  addPreviousBand(band, leaveYear, instruments) {
    this.previousBands.push({ band, leaveYear, instruments });
    band.addPreviousMember(this, leaveYear, instruments);
  }

  addInstrument(instrument) {
    this.instruments.push(instrument);
  }

  getBands() {
    return {
      currentBands: this.currentBands.map((entry) => ({
        band: entry.band,
        joinYear: entry.joinYear,
        instruments: entry.instruments,
      })),
      previousBands: this.previousBands.map((entry) => ({
        band: entry.band,
        leaveYear: entry.leaveYear,
        instruments: entry.instruments,
      })),
    };
  }

  getBirthYear() {
    return this.birthYear;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}

// Example usage:
/*
const musician1 = new Musician('MusicianName1', 'Info about Musician 1', 1990);
const musician2 = new Musician('MusicianName2', 'Info about Musician 2', 1985);
const band1 = new Band('BandName1', 'Info about Band1 ');
const band2 = new Band('BandName2', 'Info about Band 2');

musician1.joinBand(band, ['Guitar', 'Vocals']);
musician1.playInstrument('Piano');
musician2.joinBand(band, ['Drums']);
musician2.joinBand(band2, ['Bass', 'Keyboards']);

musician2.leaveBand(band);

musician1.displayInfo();
musician2.displayInfo();

band1.displayInfo();
band2.displayInfo();
*/
