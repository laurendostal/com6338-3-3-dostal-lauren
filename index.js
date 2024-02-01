var questionsArr = [
    {
        question: 'Worms have eyes',
        answer: false
    },
    {
        question: 'The sky is blue',
        answer: true
    },
    {
        question: 'UF is a good school',
        answer: true
    },
    {
        question: 'Unicorns are real',
        answer: false
    },
    {
        question: 'Spiderman can fly',
        answer: false
    }
]

function runQuiz() {

    let score = 0;
    let response = false;

    for (let step = 0; step < questionsArr.length; step++) {

        response = confirm(questionsArr[step].question);

        if (response == questionsArr[step].answer) {
            score++;
        }
    }

    var percentage = Math.round((score / questionsArr.length) * 100);

    alert("Your score is " + percentage + "%!");
}