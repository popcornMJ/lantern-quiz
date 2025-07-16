const quizQuestions = [
    {
        question: "You see police chasing a thief. What do you do?",
        options: [
            { text: "Run after the thief and tackle them to the ground", corps: {green: 1} },
            { text: "Do nothing and walk away", corps: {yellow: 1} },
            { text: "Film the whole thing and upload it to the Internet for likes", corps: {orange: 1} },
            { text: "Attack the police", corps: {red: 1} },
        ]
    },

    // etc

];

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const corpsResult = document.getElementById('corps-result');

let questionIndex = 0;
let corpsScores = {
    red: 0,
    orange: 0,
    yellow: 0,
    green: 0,
    blue: 0,
    indigo: 0,
    violet: 0,
    black: 0,
    white: 0
};
