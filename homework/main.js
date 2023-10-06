/*
//Reads user input
const prompt = require('prompt-sync')({ sigint: true });

//Get Json file for questions and save it
const question = require('./question.json')

//Get answers for questions
const answers = require('./answers.json')

//give opportunity to write the files
const fs = require('fs');

console.log("Welcome. I hope your choice will fit you");
const userName = prompt('What is your name?');
const todaysDate = new Date();
const dateTime = todaysDate.toString();
console.log("Your startdate : ", dateTime);
console.log("Answer your answers with yes/no please");


  function loadQuestions() {
    try {
      const data = fs.readFileSync("./question.json");
      return JSON.parse(data).question;
    } catch (error) {
      console.error("Error loading questions:", error.message);
      return [];
    }
  }

  function saveAnswers(point) {
    try {
      fs.writeFileSync('./answers.json', JSON.stringify(point, null, 2));
    } catch (error) {
      console.error('Failed to save results:', error);
    }
  }

  // Define a pet score object to keep track of scores for each pet.
  const point = {
    Dog: 0,
    Cat: 0,
    Bunny: 0,
    Fish: 0,
  };

    const questions = loadQuestions();

for (let index = 0; index < questions.length; index++) {
  let running = true;

  while (running) {
    const userAnswer = prompt(questions[index].question + ' (Yes/No)').toLowerCase();

    if (userAnswer === "yes" || userAnswer === "no") {
      const animal = userAnswer === "yes" ? questions[index].point.yes : questions[index].point.no;
      Object.keys(animal).forEach((pet) => {
        point[pet] += animal[pet];

      });
      running = false;
    } else {
      console.log("Wrong answer. Please answer with yes/no");
    }
  }
}
const pet = ['Dog', 'Cat', 'Bunny', 'Fish'];

for (const animal of pet) {
  console.log(`${animal}: ${point[animal]} point`);
}

let totalpoint = 0;

for (const animal of pet) {
  totalpoint += point[animal];
}
const percentages = {};

for (const animal of pet) {
  const percentage = (point[animal] / questions.length) * 100;
  percentages[animal] = percentage.toFixed(2);
}
  
let bestPet = "";
let maxpercent = 0;

for (const animal of pet) {
  if (parseFloat(percentages[animal]) > maxpercent) {
    maxpercent = parseFloat(percentages[animal]);
    bestPet = animal;
  }
}

console.log(userName);
console.log(todaysDate);

console.log("According to your answers, best-fitting pet: ", bestPet);
console.log("Percent match:", maxpercent.toFixed(2) + "%");

const userAnswers = [{
  name: userName,
  date: todaysDate,
  result: `According to your answers, best-fitting pet: ${bestPet}.`,
}];

saveAnswers(userAnswers);
  */

const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

console.log("Welcome. I hope your choice will fit you");

const userName = prompt('What is your name?');
const todaysDate = new Date();
const dateTime= todaysDate.toString();
console.log("Your start time: ", dateTime);
console.log("Answer your answers with yes/no please");

function loadQuestions() {
  try {
    const data = fs.readFileSync("./question.json", );
    return JSON.parse(data).questions;
  } catch (error) {
    console.error("Error loading questions:", error);
    return [];
  }
}

function saveAnswers(point) {
  try {
    fs.writeFileSync('./answers.json', JSON.stringify(point, null, 2));
  } catch (error) {
    console.error('Failed to save results:', error);
  }
}

const point = {
  dog: 0,
  cat: 0,
  bunny: 0,
  fish: 0,
};

const questions = loadQuestions();

for (let index = 0; index < questions.length; index++) {
  let running = true;
  while (running) {
    const userAnswer = prompt(questions[index].question + ' (Yes/No)').toLowerCase();
    if (userAnswer === "yes" || userAnswer === "no") {
      const animal = userAnswer === "ja" ? questions[index].point.Yes : questions[index].point.No;
      Object.keys(animal).forEach((pet) => {
        point[pet] += animal[pet];
      });
      running = false;
    } else {
      console.log("Wrong answer!Please answer with 'yes' or 'no'.");
    }
  }
}

const pet = ['dog', 'cat', 'bunny', 'fish'];

for (const animal of pet) {
  console.log(`${animal}: ${point[animal]} point`);
}

let totalpoint = 0;

for (const animal of pet) {
  totalpoint += point[animal];
}

const percentages = {};

for (const animal of pet) {
  const percentage = (point[animal] / questions.length) * 100;
  percentages[animal] = percentage.toFixed(2);
}

let bestPet = "";
let highestpercentage = 0;

for (const animal of pet) {
  if (parseFloat(percentages[animal]) > highestpercentage) {
    highestpercentage = parseFloat(percentages[animal]);
    bestPet = animal;
  }
}

console.log(userName);
console.log(todaysDate);

console.log("According to your answers, best-fitting animal: ", bestPet);
console.log("Percentage matching:", highestpercentage.toFixed(2) + "%");

const userAnswers = [{
  name: userName,
  date: todaysDate,
  result: `According to your answers, best-fitting animal: ${bestPet}.`,
}];

saveAnswers(userAnswers);




