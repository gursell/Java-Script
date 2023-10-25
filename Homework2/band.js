
//Name
//Information text
//Year the band was formed
//Year the band dissolved for bands that no longer exist
//List of current members and the year they joined the band,
//along with the instrument(s) they played in the band
//List of former members with the same information for each musician as for current members,
//including the year the musician left the band.

import fs from "fs";
import Musician from "./musician.js";

export default class Band {
  #allBands = [];

  constructor(name, formationYear, dissolutionYear) {
    this.name = name;
    this.formationYear = formationYear;
    this.dissolutionYear = dissolutionYear;
    this.currentMembers = [];
    this.previousMembers = [];
  }

  static createBand(name, formationYear, dissolutionYear) {
    return new Band(name, formationYear, dissolutionYear);
  }

  static removeBand(band, allBands) {
    const index = allBands.indexOf(band);
    if (index !== -1) {
      allBands.splice(index, 1);
    }
  }

  addCurrentMember(musician, joinYear, instruments) {
    this.currentMembers.push({ musician, joinYear, instruments });
  }

  addPreviousMember(musician, leaveYear, instruments) {
    this.previousMembers.push({ musician, leaveYear, instruments });
  }

  getMembers() {
    return {
      currentMembers: this.currentMembers.map((entry) => ({
        musician: entry.musician,
        joinYear: entry.joinYear,
        instruments: entry.instruments,
      })),
      previousMembers: this.previousMembers.map((entry) => ({
        musician: entry.musician,
        leaveYear: entry.leaveYear,
        instruments: entry.instruments,
      })),
    };
  }

  getFormationYear() {
    return this.formationYear;
  }

  getDissolutionYear() {
    return this.dissolutionYear;
  }
}

// Example:
/*const band = new band('BandName1', 'Info about Band ', 2000);
band.addCurrentMember('MusicianName1', 'Info about Musician 1', 2001, ['Guitar', 'Vocals']);
band.addCurrentMember('MusicianName2', 'Info about Musician 2', 2002, ['Drums']);
band.dissolveBand(2010);

const band2 = new band('BandName2', 'Info about Band 2', 2015);
band2.addCurrentMember('MusicianName3', 'Info about Musician 3', 2016, ['Bass']);
band2.addFormerMember('MusicianName4', 'Info about Musician 4', 2017, 2019, ['Keyboard']);

band.displayInfo();
band2.displayInfo();*/


