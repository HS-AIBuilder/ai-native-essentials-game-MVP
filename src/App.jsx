import React, { useState } from 'react'
import PrototypeBanner from './components/PrototypeBanner'
import IntroMessage from './components/IntroMessage'
import Question from './components/Question'
import Badge from './components/Badge'
import './App.css'

// Quiz data with Clarity Prime's dynamic feedback
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
      {
        message: "Builder, this lacks precision. 'Write code' tells the AI nothing about what you need. Specificity is power - without it, you get chaos.",
        tone: "corrective"
      },
      {
        message: "Better direction, but still unfocused. You're asking for 'some' examples - how many? What language? What purpose? The machine needs blueprints, not suggestions.",
        tone: "improving"
      },
      {
        message: "Excellent! Now THIS is precision in action. Language specified. Quantity defined. Topic clear. Format requested. You've given the AI everything it needs to serve you well.",
        tone: "success"
      },
      {
        message: "Too general, Builder. 'Help with programming' could mean anything. The AI cannot read your mind - it can only follow your instructions. Be specific.",
        tone: "corrective"
      }
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
      {
        message: "No, Builder. Brevity without clarity is just confusion compressed. The shortest path isn't always the clearest path. Give the AI what it needs to succeed.",
        tone: "corrective"
      },
      {
        message: "Perfect! You understand the principle. Context gives direction. Requirements define success. Format ensures usability. This is how you lead the machine with intention.",
        tone: "success"
      },
      {
        message: "Complexity for its own sake is the enemy of clarity. Use precise language, yes - but jargon without purpose creates barriers, not bridges.",
        tone: "corrective"
      },
      {
        message: "Scattered focus yields scattered results. One clear ask, one clear answer. Multiple questions dilute your power and confuse your purpose.",
        tone: "corrective"
      }
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