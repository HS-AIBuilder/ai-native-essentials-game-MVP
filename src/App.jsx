import React, { useState } from 'react'
import PrototypeBanner from './components/PrototypeBanner'
import IntroMessage from './components/IntroMessage'
import Question from './components/Question'
import Badge from './components/Badge'
import './App.css'

// Quiz data
const questions = [
  {
    id: 1,
    question: "Which of the following is the most effective prompt for getting specific code examples?",
    options: [
      "Write code",
      "Give me some code examples",
      "Show me 3 JavaScript functions that demonstrate array manipulation with comments explaining each step",
      "Help with programming"
    ],
    correctAnswer: 2,
    feedback: [
      "Too vague - this doesn't specify what kind of code or context.",
      "Better, but still lacks specificity about language, quantity, or purpose.",
      "Excellent! This prompt is specific about language (JavaScript), quantity (3), topic (array manipulation), and format (with comments).",
      "Very general - doesn't give the AI enough context to provide useful help."
    ]
  },
  {
    id: 2,
    question: "What makes a prompt more likely to generate accurate and useful responses?",
    options: [
      "Making it as short as possible",
      "Including context, specific requirements, and desired output format",
      "Using complex technical jargon",
      "Asking multiple unrelated questions at once"
    ],
    correctAnswer: 1,
    feedback: [
      "While brevity can be good, overly short prompts often lack necessary context.",
      "Perfect! Clear context, specific requirements, and format expectations help AI provide exactly what you need.",
      "Technical jargon can actually confuse the AI if not used appropriately.",
      "Multiple unrelated questions can lead to unfocused, incomplete responses."
    ]
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  const handleAnswerSelect = (questionId, answerIndex) => {
    const newAnswer = { questionId, answerIndex }
    setSelectedAnswers([...selectedAnswers, newAnswer])
    setShowFeedback(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowFeedback(false)
    } else {
      setGameComplete(true)
    }
  }

  const getCurrentQuestion = () => questions[currentQuestion]
  const getSelectedAnswer = () => {
    const answer = selectedAnswers.find(a => a.questionId === getCurrentQuestion().id)
    return answer ? answer.answerIndex : null
  }

  return (
    <div className="app">
      <PrototypeBanner />
      
      <div className="game-container">
        <IntroMessage />
        
        {!gameComplete ? (
          <div className="quiz-section">
            <div className="progress-indicator">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            
            <Question
              question={getCurrentQuestion()}
              selectedAnswer={getSelectedAnswer()}
              showFeedback={showFeedback}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNextQuestion}
            />
          </div>
        ) : (
          <Badge />
        )}
      </div>
    </div>
  )
}

export default App 