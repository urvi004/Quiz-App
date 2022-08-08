import questions from './Que';
import { useState } from 'react';
import '../App.css';

function App() {

  const [currentQue, setCurrentQue] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQue + 1
    if (nextQuestion < questions.length) {
      setCurrentQue(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const handleReturn = () => {
    setCurrentQue(0)
    setShowScore(false)
    setScore(0)
  }

   return (
    <div className="App">
      <h1>Static Quiz</h1>
      <div className='quiz'>
        {showScore ? (<div className='score-section'>
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={handleReturn}>Retry</button>
        </div>) :
          (<>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQue + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>
                <p>Q.1 {questions[currentQue].questionText} </p>
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQue].answerOptions.map((answerOption, key) => (
                <button key={key} onClick={() => handleClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>)

        }
      </div>

    </div>
  );
}

export default App;
