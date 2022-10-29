import React, { useState } from 'react';
import './App.css';
import QuestionList from './Components/Questionlist';
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app-wrapper'>
      {showScore ? (
        <div>
          <div className='completed'>COMPLETED !</div>
          <div className='score-section'>
            Your Score: {score}/{QuestionList.length}
          </div>
        </div>
      ) : (
          <div className='question-section-wrapper'>
            <div className='question-count'>
              Question {currentQuestion + 1} of {QuestionList.length}
            </div>
            <div className='question'>
              {QuestionList[currentQuestion].question}
            </div>
          
          <div className='answer-section-wrapper'>
            {QuestionList[currentQuestion].answersList.map((answerOption) => (
              <li className='answer-list ' key={uuidv4}>
                <button className={`answer-button ${
                  clicked && answerOption.isCorrect ? "correct" : ""
                }`}
                  onClick={ () => handleCorrectAnswer(answerOption.isCorrect)}>
                  {answerOption.answer}</button>
              </li>
            ))}
          </div>
          <button className='next-button' onClick={handleNextQuestion}>NEXT</button>
        </div>
  )
}
      </div >
  )
};

export default App;
