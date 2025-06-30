import React from 'react'

function Question({ question, selectedAnswer, showFeedback, onAnswerSelect, onNext }) {
  const handleOptionClick = (optionIndex) => {
    if (selectedAnswer === null) {
      onAnswerSelect(question.id, optionIndex)
    }
  }

  const getOptionClassName = (optionIndex) => {
    if (!showFeedback) {
      return selectedAnswer === optionIndex ? 'option-button selected' : 'option-button'
    }
    
    if (optionIndex === question.correctAnswer) {
      return 'option-button correct'
    } else if (optionIndex === selectedAnswer) {
      return 'option-button incorrect'
    } else {
      return 'option-button'
    }
  }

  return (
    <div className="question-container">
      <h3 className="question-title">{question.question}</h3>
      
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClassName(index)}
            onClick={() => handleOptionClick(index)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="feedback-section">
          <div className="feedback-text">
            <strong>Clarity Prime says:</strong> {question.feedback[selectedAnswer]}
          </div>
          <button className="next-button" onClick={onNext}>
            Continue →
          </button>
        </div>
      )}
    </div>
  )
}

export default Question 