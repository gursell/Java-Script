//Reads user input
const prompt = require('prompt-sync')({ sigint: true });

//Get Json file for questions and save it
const question = require('./question.json')

//Get answers for questions
const answers = require('./answers.json')

//give opportunity to write the files
const fs = require('fs')

console.log("Q - " + question.questionnaire[0].question);
console.log(answers);

//write all questions
for (let index = 0; index < question.questionnaire.length; index++) {
  console.log("Q " + index + " - " + question.questionnaire[index].question);
}

//user writes name
const name = prompt("What is your name? ");
console.log(name);

  try {
    const data = JSON.stringify(answers, null, 2);
    fs.writeFileSync('answers.json', data);
    console.log('Successfull saved results to answer.json');
  } catch (error) {
    console.error('Failed to save results:', error);
  }
    
console.log(saveResults);

/*
//questions with score
let running = true
while (running) {
  const question = prompt("Do you like walking a lot?");
  console.log(answers);

  if (answers === "yes") {
    dog += 3, cat += 2, bunny += 2, fish += 0
    running = false
  } else if (answers === "no") {
    dog += 0, cat += 1, bunny += 2, fish += 3
    running = false
  } else {
    console.log("Wrong answer")
  }*/
  // Initialize an empty object to store user answers
const userAnswers = {};

// Loop through the questions
for (let i = 0; i < questions.length; i++) {
  // Use prompt to get user's answer to each question
  const answer = prompt(questions[i]);
  // Store the answer in the userAnswers object
  userAnswers[`question${i + 1}`] = answer;
}
