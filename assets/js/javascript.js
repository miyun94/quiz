//Set gloabl assignments here 
let currQuestion = 0;
let question = [
    {
        question: "Which syntax would create a for loop?",
        choiceA: "(i=0, i > .length; i++)",
        choiceB: "(i=0; i < .length; i++)",
        choiceC: "(i=0; i = length; i++)",
        correctAnswer: "B"
    },

    {
        question: "How would you call a function named 'myCats",
        choiceA: "let function = myCats",
        choiceB: "call myCats()",
        choiceC: "myCats()",
        correctAnswer: "C"
    },

    {
        question: "How do you round a number to the nearest integer?",
        choiceA: "Math.round()",
        choiceB: "round()",
        choiceC: "mathround()",
        correctAnswer: "A"
    },

    {
        question: "What is true about booleans?",
        choiceA: "they can only have one of two values",
        choiceB: "it can be a true or false statement",
        choiceC: "both of the above is correct",
        correctAnswer: "C"
    },

    {
        question: "What does DOM stand for?",
        choiceA: "decorated objects model",
        choiceB: "document object model",
        choiceC: "directory oriented mode",
        correctAnswer: "B"
    }
]
let timeLeft = 0;

// Create variable to keep score
let score = 0

// When start button is clicked, timer and quiz starts
function timer() {
    let timer = document.getElementById('timer')
    timeLeft = 50;
    let ticker = setInterval(function () {
        timer.innerHTML = timeLeft;
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(ticker);
            $("#interface").html(`<h2>Time Up!</h2>`);
        }

        //if (currQuestion === question.length) {
          //  clearInterval(ticker);
        //}

    }, 1000)
}

//Questions should appear after the previous one is answered
function changeQuestion() {
    $("#interface").html(`<h2>${question[currQuestion].question}</h2>
    <button onclick="checkAnswer('A')">${question[currQuestion].choiceA}</button>
    <button onclick="checkAnswer('B')">${question[currQuestion].choiceB}</button>
    <button onclick="checkAnswer('C')">${question[currQuestion].choiceC}</button>`);
}

//If answer is correct, move on; if answer is wrong then subtract time
function checkAnswer(answer) {
    if (answer == question[currQuestion].correctAnswer) {
        // It's correct
    } else {
        if (timeLeft > 9) {
            timeLeft -= 10;
        } else {
            timeLeft == 0;
        }
    }
//Make sure if timer runs out then game over


//Save best score with local storage
    if (currQuestion < question. length - 1) {
        currQuestion++;
        changeQuestion();
    } else {
        saveScore();
        $("#interface").html(`<h2>End of Quiz</h2>
            <p>Your Score: ${timeLeft}</p>
            <p>Best Score: ${localStorage.getItem('currBest')}`);
    }
}
function saveScore() {
    if (localStorage.getItem('currBest') && localStorage.getItem('currBest') > timeLeft) {
        localStorage.setItem('currBest', timeLeft);
    }
}

function setStage() {
    timer();
    currQuestion = 0;
    changeQuestion();
}
