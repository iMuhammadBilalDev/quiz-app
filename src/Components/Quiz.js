import React, { useState } from 'react';
import QuestionList from './QuestionList';

function Quiz() {
    const questions = [
        {
            question: "What Is React?",
            options: ["CSS", "React Library", "React Framework", "All"],
            answer: "React Library"
        },
        {
            question: "What Is 2+2?",
            options: ['3', '4', '5', '1'],
            answer: "4"
        },
        {
            question: "What Is CSS?",
            options: ["Cascading Style Sheet", "React Library", "React Framework", "All"],
            answer: "Cascading Style Sheet"
        },
    ];

    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [CurrentAnswer, setCurrentAnswer] = useState(null);
    const [Score, setScore] = useState(0);

    const handleClick = (option) => {
        setCurrentAnswer(option);
    };

    const handleNextQuestion = () => {
        if (CurrentAnswer === questions[CurrentQuestion].answer) {
            setScore(Score + 1);
        }
        setCurrentQuestion(CurrentQuestion + 1);
        setCurrentAnswer(null);
    };

    return (
        <div>
            {CurrentQuestion < questions.length ? (
                <>
                    <QuestionList
                        question={questions[CurrentQuestion].question}
                        options={questions[CurrentQuestion].options}
                        handleClick={handleClick}
                        CurrentAnswer={CurrentAnswer}
                    />
                    <button
                        disabled={CurrentAnswer === null}
                        className={CurrentAnswer === null ? "button-disable" : "button"}
                        onClick={handleNextQuestion}
                    >
                        Next Question
                    </button>
                </>
            ) : (
                <div>Quiz Complete!
                    <h5>Your Score Is: {Score}</h5>
                </div>
            )}
        </div>
    );
}

export default Quiz;
