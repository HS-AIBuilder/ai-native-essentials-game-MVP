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
          <div className="mentor-feedback">
            <div className="mentor-feedback-header">
              <div className="mentor-avatar-small">
                <span className="mentor-symbol">⚡</span>
              </div>
              <div className="mentor-name">
                <strong>Clarity Prime</strong>
                <span className="feedback-tone">{question.feedback[selectedAnswer].tone}</span>
              </div>
            </div>
            <div className="feedback-text">
              "{question.feedback[selectedAnswer].message}"
            </div>
          </div>
          <button className="next-button" onClick={onNext}>
            Continue Training →
          </button>
        </div>
      )}
    </div>
  )
}

export default Question 