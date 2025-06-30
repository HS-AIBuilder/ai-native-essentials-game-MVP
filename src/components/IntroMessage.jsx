import React from 'react'

function IntroMessage() {
  return (
    <div className="mentor-introduction">
      <div className="mentor-header">
        <div className="mentor-avatar">
          <div className="avatar-placeholder">
            <span className="mentor-symbol">⚡</span>
          </div>
        </div>
        <div className="mentor-title">
          <h2>Clarity Prime</h2>
          <p className="mentor-subtitle">Mentor of Precision</p>
        </div>
      </div>
      
      <div className="mentor-message">
        <div className="prototype-notice">
          <small>🔬 Prototype Character Example</small>
        </div>
        
        <div className="message-content">
          <p className="opening-line">
            "Welcome, Builder. I am <strong>Clarity Prime</strong>, Mentor of Precision and Seeker of Signal."
          </p>
          
          <p>
            "In this realm, your success depends on more than creativity. It demands <em>clarity</em>. 
            The AI does not guess. It follows. Your prompts are blueprints, and confusion is your enemy."
          </p>
          
          <p>
            "Together, we will train your language into a tool. <strong>Sharp. Simple. Powerful.</strong>"
          </p>
          
          <p>
            "Strip the fluff. Focus your ask. Learn to lead the machine with intention."
          </p>
          
          <p className="call-to-action">
            "<strong>Now, let us begin.</strong>"
          </p>
        </div>
      </div>
    </div>
  )
}

export default IntroMessage 