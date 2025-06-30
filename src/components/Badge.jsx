import React from 'react'

function Badge() {
  return (
    <div className="badge-container">
      <div className="badge-completion-header">
        <div className="mentor-avatar">
          <div className="avatar-placeholder">
            <span className="mentor-symbol">⚡</span>
          </div>
        </div>
        <div className="completion-title">
          <h3>Level 1 Complete</h3>
          <p>Prompting Fundamentals</p>
        </div>
      </div>
      
      <div className="badge-award">
        <div className="badge-icon">🏆</div>
        <h2 className="badge-title">Clarity Seeker</h2>
      </div>
      
      <div className="mentor-completion-message">
        <div className="completion-quote">
          <p className="badge-message">
            "<strong>Well done, Builder.</strong> You have taken your first step toward precision. 
            The Clarity Seeker badge is yours—earned through focus and intention."
          </p>
          <p className="mentor-closing">
            "Remember: <em>Every great prompt begins with a clear purpose.</em> 
            Your training continues..."
          </p>
        </div>
        <div className="mentor-signature">
          <small>— Clarity Prime, Mentor of Precision</small>
        </div>
      </div>
    </div>
  )
}

export default Badge 