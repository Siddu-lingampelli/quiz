// src/App.jsx
import React, { useState } from 'react';
import { quizData } from './quizData';



function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Over! Your score is ${score + (selectedAnswer === currentQuestion.answer ? 1 : 0)} / ${quizData.length}`);
    }
  };

  return (
    <div className="quiz-container">
      <h1>IQ Quiz</h1>
      <div className="question-section">
        <h2>{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleNextQuestion} className="next-button">
        {currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  );
}

export default App;
