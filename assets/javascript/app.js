$(document).ready(function () {


    const questions = [
        {
            question: "Which Inn do the Hobbits go to meet Gandalf in the first film",
            answer: "The Prancing Pony",
            answerBank: ["The Dancing Doggy", "The Prancing Pony", "The Fiddles Inn", "Inn at the Brandywine Bridge"],
            answerimg: '',
        },

        {
            question: "Who was never tempted by the one ring?",
            answer: "Samwise",
            answerBank: ["Aragorn", "Boromir", "Galadriel", "Samwise"],
            answerimg: ''
        },

        {
            question: "How are Frodo and Pippin related",
            answer: "Third cousin, twice removed",
            answerBank: ["Third cousin, twice removed", "Brothers", "Pippin is Frodo's Uncle", "They are only neighbours"],
            answerimg: '',
        },

        {
            question: "What is Frodo's armored shirt made of?",
            answer: "Mithril",
            answerBank: ["Steel", "Elven Rope", "Mithril", "Orc Glass"],
            answerimg: '',
        },

        {
            question: "There will always be a Baggins in ______________",
            answer: "Bag End",
            answerBank: ["Bag End", "Underhill", "Hobbiton", "Eyre"],
            answerimg: '',
        },

        {
            question: "Where does Legolas call home?",
            answer: "Mirkwood",
            answerBank: ["Fangorn Forest", "Rivendell", "Mirkwood", "Rohan"],
            answerimg: '',
        }
    ]


    $('#start').on('click', function () {

        $('.button').html('')


        let countdown = 8
        let intervalId;
        const userInput = []


        //starting countdown
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        //decrementing and creating counter html
        function decrement() {
            countdown--;
            $('#clock').text(countdown)

            if (countdown === 0) {
                stop();
                answersPage();
            }
        }

        function stop() {

            clearInterval(intervalId)

        }

        run();

        questions.forEach(function (element) {


            let answer = element.answer
            let answerBank = element.answerBank
            $('.question-box').append(`
            <div>
            <p>${element.question}</p>
            <form>
            <input data-value="${answerBank[0]}" name="answer" id="ans1" type="radio">
            <label for="ans1">${answerBank[0]}</label>
            
            <input data-value="${answerBank[1]}"name="answer" id="ans2" type="radio">
            <label for="ans2">${answerBank[1]}</label>
            
            <input data-value="${answerBank[2]}" name="answer" id="ans3" type="radio">
            <label for="ans3">${answerBank[2]}</label>
            
            <input data-value="${answerBank[3]}" name="answer" id="ans4" type="radio">
            <label for="ans4">${answerBank[3]}</label>
            </form>
            </div>`)
        })

        $('input').on('click', function (e) {
            let userAnswer = e.currentTarget.dataset.value;
            console.log(userAnswer);
            userInput.push(userAnswer)
            // userInput.push(userAnswer);
            // console.log(userInput);
        })

        let correctAns = 0
        let incorrectAns = 0

        let answersPage = function () {


            for (let i = 0; i < questions.length; i++) {
                if (userInput[i] === questions[i].answer){
                    correctAns++
                    console.log('herp')
                } else if(userInput[i] !== questions[i].answer){
                    incorrectAns++
                    console.log('LOSER')
                } else if (userInput[i] == null){
                    console.log('SIBERIAN HUSKY')
                }
            }

            console.log(correctAns)
            console.log(incorrectAns)

            $('.answer-box').html(
                `<h2>Time's Up!</h2>
                <h3>Correct Answers: ${correctAns}</h3>
                <h3>Incorrect Answers: ${incorrectAns}</h3>`



            )        



                // correct answers
                // incorrect answers
                // unanswered





            
        
        //save the selected answer, compare it to the real one.
        
    }})})