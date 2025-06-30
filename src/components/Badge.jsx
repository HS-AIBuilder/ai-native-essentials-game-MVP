import React from 'react'

function Badge({ totalQuestions }) {
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
          <p className="completion-message">
            You've completed Level 1 – Prompting Fundamentals. You've earned the Clarity Seeker badge.
          </p>
          <p className="badge-message">
            "<strong>Well done, Builder.</strong> You have mastered the foundations of precision. 
            Through {totalQuestions} challenges, you've proven your commitment to clarity and intent."
          </p>
          <p className="mentor-closing">
            "Remember: <em>Every great prompt begins with a clear purpose.</em> 
            Your training continues..."
          </p>
        </div>
        <div className="mentor-signature">
          <small>— Clarity Prime, Mentor of Precision</small>
        </div>
        
        <div className="completion-actions">
          <button className="share-badge-button" onClick={() => alert('Share functionality coming soon!')}>
            🏆 Share your badge
          </button>
          <p className="prototype-note">
            <small>Share feature is non-functional in this prototype</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Badge 