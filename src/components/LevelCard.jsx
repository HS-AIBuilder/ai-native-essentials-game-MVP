import React from 'react'

function LevelCard({ 
  levelNumber, 
  levelTitle, 
  mentorName, 
  mentorSymbol,
  mentorAccentColor,
  badgeTitle,
  badgeIcon,
  badgeStatus, 
  status, 
  description,
  questionsCount,
  categories,
  onClick 
}) {
  
  const getStatusDisplay = () => {
    switch (status) {
      case 'completed':
        return {
          text: 'Completed',
          icon: '✅',
          className: 'status-completed'
        };
      case 'available':
        return {
          text: 'Start Level',
          icon: '▶️',
          className: 'status-available'
        };
      case 'in-progress':
        return {
          text: 'In Progress',
          icon: '⏳',
          className: 'status-in-progress'
        };
      case 'locked':
      default:
        return {
          text: 'Coming Soon',
          icon: '🔒',
          className: 'status-locked'
        };
    }
  };

  const getBadgeDisplay = () => {
    switch (status) {
      case 'completed':
        return {
          icon: badgeIcon,
          text: `${badgeTitle} Earned`,
          className: 'badge-earned'
        };
      case 'available':
      case 'in-progress':
        return {
          icon: '⭐',
          text: `Earn ${badgeTitle}`,
          className: 'badge-available'
        };
      case 'locked':
      default:
        return {
          icon: '🔒',
          text: 'Badge Locked',
          className: 'badge-locked'
        };
    }
  };

  const handleClick = () => {
    if ((status === 'available' || status === 'in-progress') && onClick) {
      onClick(levelNumber);
    }
  };

  const statusInfo = getStatusDisplay();
  const badgeInfo = getBadgeDisplay();
  const isClickable = status === 'available' || status === 'in-progress';

  return (
    <div 
      className={`level-card ${status} ${isClickable ? 'clickable' : ''}`}
      onClick={handleClick}
      style={{
        '--mentor-accent': mentorAccentColor
      }}
    >
      {/* Level Header */}
      <div className="level-card-header">
        <div className="level-number">
          <span className="level-label">Level</span>
          <span className="number">{levelNumber}</span>
        </div>
        <div className={`level-status ${statusInfo.className}`}>
          <span className="status-icon">{statusInfo.icon}</span>
          <span className="status-text">{statusInfo.text}</span>
        </div>
      </div>

      {/* Level Title */}
      <div className="level-title-section">
        <h3 className="level-title">{levelTitle}</h3>
        <p className="level-description">{description}</p>
      </div>

      {/* Mentor Section */}
      <div className="mentor-section">
        <div className="mentor-info">
          <div className="mentor-avatar-card">
            <span className="mentor-symbol">{mentorSymbol}</span>
          </div>
          <div className="mentor-details">
            <h4 className="mentor-name">{mentorName}</h4>
            <p className="mentor-role">Your Guide</p>
          </div>
        </div>
      </div>

      {/* Challenge Info */}
      <div className="challenge-info">
        <div className="challenge-stat">
          <span className="stat-icon">❓</span>
          <span className="stat-text">{questionsCount} Questions</span>
        </div>
        <div className="challenge-stat">
          <span className="stat-icon">📚</span>
          <span className="stat-text">{categories.length} Topics</span>
        </div>
      </div>

      {/* Badge Section */}
      <div className="badge-section-card">
        <div className={`badge-preview ${badgeInfo.className}`}>
          <span className="badge-icon-preview">{badgeInfo.icon}</span>
          <span className="badge-text">{badgeInfo.text}</span>
        </div>
      </div>

      {/* Action Area */}
      {isClickable && (
        <div className="card-action-area">
          <div className="action-prompt">
            <span className="action-text">Click to {status === 'available' ? 'start' : 'continue'}</span>
            <span className="action-arrow">→</span>
          </div>
        </div>
      )}

      {/* Locked Overlay */}
      {status === 'locked' && (
        <div className="locked-overlay">
          <div className="lock-message">
            <span className="lock-icon">🔒</span>
            <p>Complete previous levels to unlock</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LevelCard 