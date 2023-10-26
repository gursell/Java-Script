
//Name
//Information text
//Year of birth
//List of bands the musician is currently a part of
//List of previous bands the musician has been a part of
//The instruments that the musician plays


export default class Musician {
  #name
  #birthYear
  #currentBands
  #previousBands
  #instruments

  
  constructor(name, birthYear, currentBands, previousBands, instruments) {
    this.name = name;
    this.birthYear = birthYear;
    this.currentBands = currentBands;
    this.previousBands = previousBands;
    this.instruments = instruments;
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

  getName() {
        return this.name;
    }

  getBirthYear() {
    return this.birthYear;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

     getJoinYear() {
        return this.joinYear;
    }

    getLeaveYear() {
        return this.leaveYear;
    }

    getInstruments() {
        return this.instruments;
    }

    setName(name) {
        this.name = name;
    }

    setBirthYear(birthYear) {
        this.birthYear = birthYear;
    }

    setJoinYear(joinYear) {
        this.joinYear = joinYear;
    }

    setLeaveYear(leaveYear) {
        this.leaveYear = leaveYear;
    }

    setInstruments(instruments) {
        this.instruments = instruments;
    }
}



