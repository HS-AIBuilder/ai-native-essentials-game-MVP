export const levelsConfig = [
  {
    levelNumber: 1,
    levelTitle: "Prompting Fundamentals",
    mentorName: "Clarity Prime",
    mentorSymbol: "⚡",
    mentorAccentColor: "#1FD6E2",
    badgeTitle: "Clarity Seeker",
    badgeIcon: "🏆",
    status: "available", // available, locked, completed
    description: "Master the art of clear, precise AI prompting with your mentor Clarity Prime.",
    questionsCount: 20,
    categories: ["Prompt Structure", "Iteration Techniques", "Persona Design", "Contextual Prompting", "Feedback Analysis"]
  },
  {
    levelNumber: 2,
    levelTitle: "Code Generation Mastery",
    mentorName: "Logic Guardian", 
    mentorSymbol: "🔧",
    mentorAccentColor: "#4BE0F0",
    badgeTitle: "Code Architect",
    badgeIcon: "🔨",
    status: "locked",
    description: "Learn to generate, debug, and optimize code with AI assistance.",
    questionsCount: 25,
    categories: ["Code Prompts", "Debugging", "Optimization", "Documentation", "Testing"]
  },
  {
    levelNumber: 3,
    levelTitle: "Data Analysis & Insights",
    mentorName: "Data Sage",
    mentorSymbol: "📊",
    mentorAccentColor: "#00E5FF",
    badgeTitle: "Insight Master",
    badgeIcon: "📈",
    status: "locked",
    description: "Transform raw data into actionable insights using AI-powered analysis.",
    questionsCount: 22,
    categories: ["Data Prompts", "Visualization", "Statistical Analysis", "Pattern Recognition", "Reporting"]
  },
  {
    levelNumber: 4,
    levelTitle: "Creative Content Creation",
    mentorName: "Imagination Spark",
    mentorSymbol: "✨",
    mentorAccentColor: "#40E0D0",
    badgeTitle: "Creative Virtuoso",
    badgeIcon: "🎨",
    status: "locked",
    description: "Harness AI for compelling copywriting, storytelling, and creative content.",
    questionsCount: 24,
    categories: ["Creative Prompts", "Storytelling", "Copywriting", "Brand Voice", "Content Strategy"]
  },
  {
    levelNumber: 5,
    levelTitle: "Workflow Automation",
    mentorName: "Efficiency Pro",
    mentorSymbol: "⚙️",
    mentorAccentColor: "#48CAE4",
    badgeTitle: "Automation Expert",
    badgeIcon: "🔄",
    status: "locked",
    description: "Streamline processes and automate repetitive tasks with intelligent workflows.",
    questionsCount: 26,
    categories: ["Process Design", "Task Automation", "Integration", "Optimization", "Monitoring"]
  },
  {
    levelNumber: 6,
    levelTitle: "Advanced Reasoning",
    mentorName: "Logic Sage",
    mentorSymbol: "🧠",
    mentorAccentColor: "#023E8A",
    badgeTitle: "Reasoning Master",
    badgeIcon: "🔍",
    status: "locked",
    description: "Develop complex problem-solving and analytical thinking with AI support.",
    questionsCount: 28,
    categories: ["Logical Reasoning", "Problem Solving", "Critical Analysis", "Decision Making", "Strategic Planning"]
  },
  {
    levelNumber: 7,
    levelTitle: "Team Collaboration",
    mentorName: "Unity Builder",
    mentorSymbol: "🤝",
    mentorAccentColor: "#0077B6",
    badgeTitle: "Collaboration Champion",
    badgeIcon: "👥",
    status: "locked",
    description: "Enhance team productivity and communication through AI-enhanced collaboration.",
    questionsCount: 23,
    categories: ["Team Coordination", "Communication", "Project Management", "Knowledge Sharing", "Conflict Resolution"]
  },
  {
    levelNumber: 8,
    levelTitle: "AI Ethics & Safety",
    mentorName: "Guardian Prime",
    mentorSymbol: "🛡️",
    mentorAccentColor: "#00B4D8",
    badgeTitle: "Ethics Guardian",
    badgeIcon: "⚖️",
    status: "locked",
    description: "Navigate ethical considerations and ensure responsible AI usage.",
    questionsCount: 20,
    categories: ["AI Ethics", "Bias Prevention", "Privacy Protection", "Transparency", "Accountability"]
  },
  {
    levelNumber: 9,
    levelTitle: "Innovation & Strategy",
    mentorName: "Visionary Lead",
    mentorSymbol: "🚀",
    mentorAccentColor: "#90E0EF",
    badgeTitle: "Innovation Pioneer",
    badgeIcon: "💡",
    status: "locked",
    description: "Drive innovation and develop strategic AI implementation roadmaps.",
    questionsCount: 27,
    categories: ["Innovation Strategy", "Market Analysis", "Technology Adoption", "Change Management", "Future Planning"]
  },
  {
    levelNumber: 10,
    levelTitle: "AI Leadership Mastery",
    mentorName: "Master Architect",
    mentorSymbol: "👑",
    mentorAccentColor: "#CAF0F8",
    badgeTitle: "AI Leader",
    badgeIcon: "🏅",
    status: "locked",
    description: "Become an AI-native leader, guiding organizations through digital transformation.",
    questionsCount: 30,
    categories: ["Leadership", "Organizational Change", "AI Strategy", "Team Development", "Legacy Building"]
  }
];

export const getUserProgress = () => {
  // In a real app, this would come from user data/API
  // For MVP, simulate Level 1 completed
  return {
    completedLevels: [1], // User has completed Level 1
    currentLevel: 2, // Next available level (though locked in MVP)
    totalBadges: 1,
    overallProgress: 10 // 1 out of 10 levels = 10%
  };
};

export const getLevelStatus = (levelNumber, userProgress) => {
  if (userProgress.completedLevels.includes(levelNumber)) {
    return 'completed';
  } else if (levelNumber === 1) {
    return 'available'; // Level 1 is always available
  } else if (levelNumber === userProgress.currentLevel) {
    return 'in-progress';
  } else {
    return 'locked';
  }
}; 