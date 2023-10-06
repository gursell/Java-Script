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

  console.log(userName);
  console.log(todaysDate);


  function loadQuestions() {
    try {
      const data = fs.readFileSync("./questions.json");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error loading questions:", error.message);
      return [];
    }
  }

  function saveAnswers(answers) {
    try {
      fs.writeFileSync('./answers.json', JSON.stringify(answers, null, 2));
    } catch (error) {
      console.error('Failed to save results:', error);
    }
  }

  const questions = loadQuestions();

  // Define a pet score object to keep track of scores for each pet.
  const petScores = {
    Dog: 0,
    Cat: 0,
    Bunny: 0,
    Fish: 0,
  };

  for (let index = 0; index < question.questions.length; index++) {
    let running = true;

    while (running) {
      const userAnswer = prompt(question.questions[index].question).toLowerCase();

      if (userAnswer === "yes") {
        running = false;
      } else if (userAnswer === "no") {
        running = false;
      } else {
        console.log("Wrong answer");
      }
    }

    // Update the pet scores based on the user's answers.
    const userAnswers = question.questions[index].answers;

    for (const pet in userAnswers) {
      if (userAnswers.hasOwnProperty(pet)) {
        if (userAnswers[pet].toLowerCase() === "yes") {
          petScores[pet]++;
        }
      }
    }
  }

  // Find the pet with the highest score.
  let bestPet = "";
  let highestScore = -1;

  for (const pet in petScores) {
    if (petScores.hasOwnProperty(pet)) {
      if (petScores[pet] > highestScore) {
        highestScore = petScores[pet];
        bestPet = pet;
      }
    }
  }

console.log(`Based on your answers, the best pet for you is a ${bestPet}.`);
saveAnswers(petScores);




