const dataObject = {
    questions: [
        {
            img: './img/tech.jpg',
            questionText: 'Here is the first question to answer',
            answers: [
                {
                    text: 'answer1',
                    correct: true
                },
                {
                    text: 'answer2',
                    correct: false
                },
                {
                    text: 'answer3',
                    correct: false
                },
                {
                    text: 'answer4',
                    correct: false
                },
                {
                    text: 'answer5',
                    correct: false
                },
            ]
        },
        {
            img: './img/vr.jpg',
            questionText: 'Here is the second question to answer',
            answers: [
                {
                    text: 'answer1',
                    correct: false
                },
                {
                    text: 'answer2',
                    correct: true
                }
            ]  
        },
        {
            img: './img/hand.jpg',
            questionText: 'Here is the third question to answer',
            answers: [
                {
                    text: 'answer1',
                    correct: false
                },
                {
                    text: 'answer2',
                    correct: false
                },
                {
                    text: 'answer3',
                    correct: true
                }
            ]   
        }
    ]
}


//load questions
const loadQuestions = () => {
    dataObject.questions.forEach(element => {
        let flashcardArea = document.getElementById('flashcard-container');
        
        //create question box
        let questContain = document.createElement('div');
        questContain.classList.add('question-container');

        //create question-area
        let questArea = document.createElement('div');
        questArea.classList.add('question-area');

        //create question image area
        let questImg = document.createElement('div');
        questImg.classList.add('question-image');
        //create img for question
        let img = document.createElement('img');
        img.src = element.img;
        questImg.appendChild(img);

        //create question text area
        let questText = document.createElement('div');
        questText.classList.add('question-text');
        //create text for question
        let p = document.createElement('p');
        p.textContent = element.questionText;
        questText.appendChild(p);

        //append to question-area
        questArea.appendChild(questImg);
        questArea.appendChild(questText);

        //create answer-container
        let answerContain = document.createElement('div');
        answerContain.classList.add('answer-container');
        answerContain.id = 'answer-box';

        //create answer buttons
        element.answers.forEach(element => {
            let button = document.createElement('button');
            button.type = 'button';
            button.classList.add('answer-button');
            button.textContent = element.text;
            button.value = element.correct;

            //add event listener
            button.addEventListener('click', e => {
                if(e.target && e.target.value === 'true'){
                    // console.log('true selected');

                    //if correct answer then correct answer display
                    let correctDisp = document.createElement('div');
                    correctDisp.classList.add('correct-answer');
                    let correctP = document.createElement('p');
                    correctP.textContent = 'Correct';
                    correctDisp.appendChild(correctP);
                    questContain.appendChild(correctDisp);
                } else {
                    //if answer is incorrect than add class 
                    e.target.classList.add('incorrect-answer');
                }
            });

            //append to answer-container
            answerContain.appendChild(button);
        });

        //append to question-container
        questContain.appendChild(questArea);
        questContain.appendChild(answerContain);

        //append to flashcard-container
        flashcardArea.appendChild(questContain);


        
    });
}

loadQuestions();



