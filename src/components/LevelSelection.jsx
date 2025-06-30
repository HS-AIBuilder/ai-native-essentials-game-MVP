import React from 'react'
import LevelCard from './LevelCard'
import { levelsConfig, getUserProgress, getLevelStatus } from '../data/levelsConfig'

function LevelSelection({ onLevelSelect, onBackToMenu }) {
  const userProgress = getUserProgress()
  
  const handleLevelClick = (levelNumber) => {
    if (levelNumber === 1) {
      onLevelSelect(levelNumber)
    } else {
      // For MVP, show coming soon message for other levels
      alert(`Level ${levelNumber} is coming soon! Complete Level 1 to unlock more content.`)
    }
  }

  const getProgressStats = () => {
    const totalLevels = levelsConfig.length
    const completedCount = userProgress.completedLevels.length
    const progressPercentage = Math.round((completedCount / totalLevels) * 100)
    
    return {
      progressPercentage,
      completedCount,
      totalLevels,
      badgesEarned: userProgress.totalBadges,
      totalBadges: totalLevels
    }
  }

  const stats = getProgressStats()

  return (
    <div className="level-selection-screen">
      {/* Header Section */}
      <div className="level-selection-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="main-title">AI-Native Essentials</h1>
            <p className="subtitle">Choose your learning path and master AI-powered skills</p>
          </div>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="progress-tracker">
        <div className="progress-content">
          {/* Overall Progress */}
          <div className="overall-progress">
            <div className="progress-header">
              <h3 className="progress-title">Your Journey</h3>
              <div className="progress-stats">
                <span className="progress-percentage">{stats.progressPercentage}% Complete</span>
              </div>
            </div>
            
            <div className="progress-bar-container">
              <div className="progress-bar-track">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${stats.progressPercentage}%` }}
                >
                  <div className="progress-shine"></div>
                </div>
              </div>
              
              <div className="progress-details">
                <span className="levels-completed">
                  {stats.completedCount} of {stats.totalLevels} levels completed
                </span>
              </div>
            </div>
          </div>

          {/* Badge Counter */}
          <div className="badge-counter">
            <div className="badge-counter-content">
              <div className="badge-counter-icon">🏆</div>
              <div className="badge-counter-text">
                <span className="badges-earned">{stats.badgesEarned}</span>
                <span className="badges-total">/ {stats.totalBadges}</span>
                <span className="badges-label">Badges</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="levels-grid-container">
        <div className="levels-grid-header">
          <h2 className="grid-title">Learning Levels</h2>
          <p className="grid-subtitle">Progress through structured challenges to build your AI-native expertise</p>
        </div>
        
        <div className="levels-grid">
          {levelsConfig.map((level) => {
            const levelStatus = getLevelStatus(level.levelNumber, userProgress)
            
            return (
              <LevelCard
                key={level.levelNumber}
                levelNumber={level.levelNumber}
                levelTitle={level.levelTitle}
                mentorName={level.mentorName}
                mentorSymbol={level.mentorSymbol}
                mentorAccentColor={level.mentorAccentColor}
                badgeTitle={level.badgeTitle}
                badgeIcon={level.badgeIcon}
                badgeStatus={levelStatus}
                status={levelStatus}
                description={level.description}
                questionsCount={level.questionsCount}
                categories={level.categories}
                onClick={handleLevelClick}
              />
            )
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="level-selection-footer">
        <div className="footer-content">
          <div className="prototype-info">
            <h4>🔬 MVP Prototype</h4>
            <p>
              Currently featuring Level 1 with full interactivity. 
              Additional levels and mentors are in development.
            </p>
          </div>
          
          <div className="coming-soon-info">
            <h4>🚀 Coming Soon</h4>
            <p>
              More mentors, advanced challenges, team features, and 
              comprehensive progress tracking across all levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelSelection 