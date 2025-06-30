import React from 'react'

function LevelCompletion({ 
  badgeTitle = "Clarity Seeker", 
  mentorName = "Clarity Prime", 
  closingMessage = "Clarity is your superpower. Carry it into every prompt, every build, every breakthrough.",
  shareable = true,
  totalQuestions = 20,
  levelTitle = "Level 1 – Prompting Fundamentals"
}) {
  const handleShareBadge = () => {
    alert('Share functionality coming soon! This will allow you to export and share your achievement.')
  }

  return (
    <div className="level-completion-screen">
      {/* Completion Header */}
      <div className="completion-header">
        <div className="completion-status">
          <h2>Level Complete!</h2>
          <p className="completion-subtitle">
            You've mastered {totalQuestions} challenges and proven your skills.
          </p>
        </div>
      </div>

      {/* Badge Section */}
      <div className="badge-section">
        <div className="badge-medallion">
          <div className="badge-inner">
            <div className="badge-icon">🏆</div>
            <div className="badge-shine"></div>
          </div>
        </div>
        
        <div className="badge-details">
          <h3 className="badge-title">{badgeTitle}</h3>
          <p className="badge-subtitle">
            You've completed {levelTitle}. You've earned the {badgeTitle} badge.
          </p>
        </div>
      </div>

      {/* Mentor Exit Message */}
      <div className="mentor-exit-section">
        <div className="mentor-exit-header">
          <div className="mentor-avatar-exit">
            <span className="mentor-symbol">⚡</span>
          </div>
          <div className="mentor-exit-name">
            <strong>{mentorName}</strong>
            <span className="mentor-exit-title">Final Words</span>
          </div>
        </div>
        
        <div className="mentor-exit-message">
          <div className="exit-quote">
            <p>"{closingMessage}"</p>
          </div>
          <div className="mentor-signature">
            <small>— {mentorName}, Mentor of Precision</small>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      {shareable && (
        <div className="completion-actions">
          <button 
            className="share-badge-button" 
            onClick={handleShareBadge}
            aria-label="Share your achievement badge"
          >
            <span className="share-icon">🏅</span>
            Share your badge
          </button>
          <p className="prototype-notice">
            <small>🔬 Prototype feature - Full sharing functionality coming soon</small>
          </p>
        </div>
      )}

      {/* Next Steps Preview */}
      <div className="next-steps-preview">
        <h4>What's Next?</h4>
        <p>More levels and challenges are coming soon. Keep building your AI-native skills!</p>
      </div>
    </div>
  )
}

export default LevelCompletion 