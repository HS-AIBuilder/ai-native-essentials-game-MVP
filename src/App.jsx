import React, { useState } from 'react'
import PrototypeBanner from './components/PrototypeBanner'
import IntroMessage from './components/IntroMessage'
import Question from './components/Question'
import LevelCompletion from './components/LevelCompletion'
import LevelSelection from './components/LevelSelection'
import './App.css'

// Level 1: Prompting Fundamentals - 20 Questions
const questions = [
  // PROMPT STRUCTURE & CLARITY (5 questions)
  {
    id: 1,
    category: "Prompt Structure & Clarity",
    question: "You need to debug a Python script that's failing in your development environment. Which prompt provides the clearest structure for getting effective help?",
    options: [
      "My Python code isn't working, can you help?",
      "Debug this Python script for me please",
      "I'm running Python 3.9 on Windows 11 with VS Code. My script throws a 'ModuleNotFoundError' when importing pandas. Here's the error and my code: [paste]. What's the issue and how do I fix it?",
      "Python error, need help fixing import problem"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Builder, this lacks precision. 'Not working' tells the AI nothing actionable. What error? What environment? What code? Give the machine substance to work with.",
        tone: "corrective"
      },
      {
        message: "Still too vague. Debug what exactly? The AI needs specifics: error messages, code context, environment details. Structure your ask with intent.",
        tone: "corrective"
      },
      {
        message: "Excellent! You've provided environment (Python 3.9, Windows 11, VS Code), specific error (ModuleNotFoundError), context (pandas import), and clear deliverables (issue + solution). This is precision in action.",
        tone: "success"
      },
      {
        message: "Too compressed, Builder. The shortest path isn't always the clearest. Your prompt needs enough detail for the AI to understand and act effectively.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 2,
    category: "Prompt Structure & Clarity",
    question: "When asking for code review feedback, which approach demonstrates proper prompt structure?",
    options: [
      "Review my code and tell me what you think",
      "Is this code good?",
      "I'm building a React component for user authentication. Please review this code for security vulnerabilities, performance issues, and React best practices. Focus on: [specific areas]. Here's the code: [paste]",
      "Check my React code for problems"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Too broad, Builder. 'What you think' could mean anything. Define your criteria: security? performance? style? Give the AI a clear framework for evaluation.",
        tone: "corrective"
      },
      {
        message: "Binary questions yield binary answers. 'Good' by what measure? Structure your request with specific evaluation criteria and context.",
        tone: "corrective"
      },
      {
        message: "Perfect structure! Context provided (React authentication), specific review criteria defined (security, performance, best practices), focus areas highlighted. The AI knows exactly what to evaluate and how.",
        tone: "success"
      },
      {
        message: "Generic and unfocused. 'Problems' is too vague. Specify what kind of issues you're concerned about - security, performance, maintainability. Be precise.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 3,
    category: "Prompt Structure & Clarity",
    question: "You're learning a new API and need documentation help. Which prompt structure will get you the most useful response?",
    options: [
      "Explain the Stripe API to me",
      "I need help with Stripe API documentation, can you help?",
      "I'm integrating Stripe payments into a Node.js e-commerce app. I need to understand: 1) How to create payment intents, 2) Handle webhook events, 3) Test with their sandbox. Provide code examples and explain the key concepts for each.",
      "How do I use Stripe for payments?"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Too broad, Builder. Stripe's API is vast. Which parts? For what use case? What's your technical context? Focus your ask on specific needs.",
        tone: "corrective"
      },
      {
        message: "You're asking for help getting help. Skip the meta-question. Be direct about what you need to accomplish with Stripe's API.",
        tone: "corrective"
      },
      {
        message: "Excellent framework! Context established (Node.js e-commerce), specific objectives numbered (payment intents, webhooks, testing), desired format specified (code + explanations). Clear and actionable.",
        tone: "success"
      },
      {
        message: "Too general. 'Use Stripe for payments' encompasses dozens of integration approaches. Define your specific use case and technical requirements.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 4,
    category: "Prompt Structure & Clarity",
    question: "Which prompt demonstrates the best structure for getting help with a complex technical concept?",
    options: [
      "Explain microservices architecture",
      "What are microservices and why should I care?",
      "I'm a full-stack developer transitioning from monolithic to microservices architecture. Explain: 1) Core principles vs monoliths, 2) When to use each approach, 3) Key challenges I'll face, 4) Best practices for a team of 5 developers. Use practical examples.",
      "I don't understand microservices, help me learn"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Too broad for effective learning. Microservices is a complex topic. What's your background? What specific aspects do you need to understand? Structure creates clarity.",
        tone: "corrective"
      },
      {
        message: "Better curiosity, but lacks learning structure. What's your current knowledge level? What specific decisions are you trying to make? Give context for targeted help.",
        tone: "improving"
      },
      {
        message: "Outstanding! You've provided your context (full-stack, monolithic background), structured specific learning objectives, defined your team context, and requested practical examples. This is how you learn efficiently.",
        tone: "success"
      },
      {
        message: "Vague learning request. 'Don't understand' tells the AI nothing about your current knowledge or specific confusion points. Be more precise about what you need to learn.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 5,
    category: "Prompt Structure & Clarity",
    question: "When you need to understand error messages in your development workflow, which prompt structure is most effective?",
    options: [
      "I got an error, what does it mean?",
      "Error message: [paste]. What is this?",
      "I'm running a Docker container for my Next.js app on M1 Mac. Getting this error: [paste full error]. What does this mean, what's the root cause, and how do I fix it? My current setup: [brief config details]",
      "Docker error, need help"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "No context, no error details. The AI can't help without seeing the actual error and understanding your environment. Provide the essential information.",
        tone: "corrective"
      },
      {
        message: "You've included the error, but missing context. What were you doing when it occurred? What's your environment? Context transforms confusion into clarity.",
        tone: "improving"
      },
      {
        message: "Perfect diagnostic structure! Environment specified (Docker, Next.js, M1 Mac), full error provided, clear questions asked (meaning, cause, solution), setup context included. The AI has everything needed to help effectively.",
        tone: "success"
      },
      {
        message: "Too compressed, Builder. Docker errors can be complex and environment-specific. Provide the actual error message and your setup details for useful help.",
        tone: "corrective"
      }
    ]
  },

  // ITERATION TECHNIQUES (4 questions)
  {
    id: 6,
    category: "Iteration Techniques",
    question: "Your first prompt didn't give you the code quality you need. What's the most effective iteration approach?",
    options: [
      "Try the same prompt again with different wording",
      "Ask the AI to 'make it better' without specifics",
      "Analyze what was missing, then create a refined prompt with specific improvements: 'The previous code lacked error handling and comments. Please revise with: try-catch blocks, detailed comments, and input validation.'",
      "Start over with a completely different approach"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Repetition without reflection yields the same results. If the prompt structure was flawed, rewording won't fix the core issue. Analyze, then improve.",
        tone: "corrective"
      },
      {
        message: "'Better' means nothing to a machine. Define what improvements you need: performance, readability, error handling, security. Be specific about your refinements.",
        tone: "corrective"
      },
      {
        message: "Excellent iteration methodology! You analyzed the gap, identified specific missing elements, and created a targeted refinement. This is how you train both yourself and the AI to improve.",
        tone: "success"
      },
      {
        message: "Starting over wastes the progress you've made. Build on what worked, refine what didn't. Iteration is about intelligent refinement, not complete restarts.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 7,
    category: "Iteration Techniques",
    question: "You're iterating on a prompt for generating documentation. Your first attempt was too technical for your audience. How do you refine it effectively?",
    options: [
      "Just ask for simpler language",
      "Tell the AI to make it less technical",
      "Refine with audience context: 'The previous version was too technical. Please rewrite for junior developers with 1-2 years experience. Use simple explanations, include practical examples, and avoid jargon without definitions.'",
      "Ask for a completely different style"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "'Simpler' is subjective and unclear. What's simple to you might still be complex to your audience. Define your audience and their knowledge level explicitly.",
        tone: "corrective"
      },
      {
        message: "'Less technical' lacks direction. The AI needs to understand your audience's skill level and what adjustments to make. Provide clear refinement criteria.",
        tone: "corrective"
      },
      {
        message: "Perfect iteration! You've defined the specific audience (junior developers, 1-2 years), identified the problem (too technical), and provided clear improvement criteria (simple explanations, examples, jargon definitions). Precise refinement.",
        tone: "success"
      },
      {
        message: "Too drastic, Builder. You had content that was close to your need. Refine it with targeted adjustments rather than abandoning your progress entirely.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 8,
    category: "Iteration Techniques",
    question: "When iterating on prompts for creative coding solutions, what's the most effective approach?",
    options: [
      "Keep asking until you get something different",
      "Build on successful elements: 'I like the algorithm approach from your previous response, but need it optimized for larger datasets. Keep the core logic but add performance considerations for 10M+ records.'",
      "Change the entire prompt structure each time",
      "Ask the AI to be more creative"
    ],
    correctAnswer: 1,
    feedback: [
      {
        message: "Random iteration is inefficient. Without analyzing what worked and what didn't, you're just generating noise. Be strategic about your refinements.",
        tone: "corrective"
      },
      {
        message: "Excellent iterative thinking! You're preserving what worked (algorithm approach), while specifically addressing what needs improvement (performance for scale). This is intelligent iteration.",
        tone: "success"
      },
      {
        message: "Changing everything each time wastes previous progress. Iteration means building on what works while fixing what doesn't. Learn from each attempt.",
        tone: "corrective"
      },
      {
        message: "'More creative' is meaningless instruction. Define what kind of creativity you need: novel approaches, unconventional solutions, innovative architectures. Be specific about desired creativity.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 9,
    category: "Iteration Techniques",
    question: "You're refining a prompt for code optimization. The AI keeps giving you generic advice. How do you iterate to get specific, actionable guidance?",
    options: [
      "Ask for more detailed explanations",
      "Provide specific context: 'Here's my actual code [paste]. It processes 100K user records and takes 45 seconds. I need it under 10 seconds. Focus on: database queries, algorithm efficiency, and memory usage. Show specific optimizations with before/after comparisons.'",
      "Tell the AI the advice is too generic",
      "Ask for different optimization techniques"
    ],
    correctAnswer: 1,
    feedback: [
      {
        message: "Still too vague. 'More detailed' doesn't tell the AI what specific details you need or why the current response isn't working for you.",
        tone: "corrective"
      },
      {
        message: "Perfect iteration! Real code provided, specific performance metrics given (45s to under 10s), focus areas defined, desired output format specified (before/after comparisons). The AI now has concrete parameters to work with.",
        tone: "success"
      },
      {
        message: "Identifying the problem without providing solution direction. Tell the AI WHY it's too generic and what specific context would make it useful for your situation.",
        tone: "corrective"
      },
      {
        message: "You're asking for different techniques without addressing why the current ones aren't applicable. Provide context about your specific optimization challenges first.",
        tone: "corrective"
      }
    ]
  },

  // PERSONA DESIGN IN PROMPTING (3 questions)
  {
    id: 10,
    category: "Persona Design in Prompting",
    question: "You need help architecting a complex system. Which persona-based prompt will give you the most valuable guidance?",
    options: [
      "Act like a software expert and help me design a system",
      "You are a senior software architect with 15 years of experience in distributed systems at companies like Netflix and Uber. I'm building a real-time chat application for 1M+ users. Walk me through the architecture decisions I need to make, potential bottlenecks, and how you'd approach scalability challenges.",
      "Pretend you're a system architect and give me advice",
      "Help me as if you were an experienced developer"
    ],
    correctAnswer: 1,
    feedback: [
      {
        message: "'Software expert' is too generic. What kind of expertise? Frontend, backend, architecture, security? Define the specific knowledge domain you need to tap into.",
        tone: "corrective"
      },
      {
        message: "Outstanding persona design! Specific experience level (15 years), relevant domain expertise (distributed systems), credible context (Netflix, Uber), clear project scope (real-time chat, 1M+ users), and structured guidance request. The AI now embodies the right expertise for your challenge.",
        tone: "success"
      },
      {
        message: "'Pretend' undermines the exercise. You want the AI to genuinely embody the knowledge and perspective of an architect. Frame it as role embodiment, not pretense.",
        tone: "corrective"
      },
      {
        message: "'Experienced developer' is too broad. Developers have different specializations. Define the specific experience and domain expertise that matches your challenge.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 11,
    category: "Persona Design in Prompting",
    question: "For learning a new programming language, which persona approach will provide the most effective teaching?",
    options: [
      "Teach me like a computer science professor",
      "You are a senior developer who mentors junior programmers. I'm learning Rust coming from a JavaScript background. Explain concepts by comparing to JS where relevant, focus on practical examples, and anticipate common mistakes JS developers make when learning Rust.",
      "Act like a programming teacher",
      "Help me learn like you're talking to a beginner"
    ],
    correctAnswer: 1,
    feedback: [
      {
        message: "CS professors vary widely in teaching style and focus. Some are theoretical, others practical. Define the specific teaching approach and expertise level you need.",
        tone: "corrective"
      },
      {
        message: "Excellent persona crafting! Role defined (senior developer/mentor), learning context provided (JS to Rust transition), teaching methodology specified (comparative learning), practical focus requested, and potential pitfalls anticipated. Perfect instructional design.",
        tone: "success"
      },
      {
        message: "Too generic. Programming teachers have different specializations, styles, and expertise levels. What kind of teacher for what kind of learning? Be specific.",
        tone: "corrective"
      },
      {
        message: "'Like a beginner' doesn't define the teaching persona - it defines the audience. You still need to specify what kind of expert is doing the teaching and how.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 12,
    category: "Persona Design in Prompting",
    question: "You need code review from different perspectives. Which persona design approach gives you the most comprehensive feedback?",
    options: [
      "Review my code as different types of experts",
      "Please review this code from three distinct perspectives: 1) A security engineer focused on vulnerabilities and attack vectors, 2) A performance engineer concerned with optimization and scalability, 3) A senior developer focused on maintainability and code quality. Provide specific feedback from each viewpoint.",
      "Act like various experts and tell me what's wrong",
      "Give me feedback from multiple angles"
    ],
    correctAnswer: 1,
    feedback: [
      {
        message: "Vague persona definition. 'Different types of experts' doesn't specify which expertise domains or how they should approach the review. Be explicit about the perspectives you need.",
        tone: "corrective"
      },
      {
        message: "Perfect multi-persona design! Three distinct expert perspectives defined, each with specific focus areas (security/vulnerabilities, performance/scalability, quality/maintainability), and structured feedback requested from each viewpoint. Comprehensive and actionable.",
        tone: "success"
      },
      {
        message: "'Various experts' is too undefined, and 'what's wrong' limits the feedback to problems only. Define specific expert domains and the type of analysis you want from each.",
        tone: "corrective"
      },
      {
        message: "'Multiple angles' doesn't specify what those angles are or what expertise should inform each perspective. Define the specific viewpoints and expertise domains you need.",
        tone: "corrective"
      }
    ]
  },

  // CONTEXTUAL PROMPTING FOR TOOLS (4 questions)
  {
    id: 13,
    category: "Contextual Prompting for Tools",
    question: "You're working in VS Code and need help with a specific workflow. How do you provide effective context for tool-specific guidance?",
    options: [
      "I need help with VS Code shortcuts",
      "VS Code tips please",
      "I'm using VS Code on macOS for React development with ESLint and Prettier extensions. I need to streamline my debugging workflow - specifically setting conditional breakpoints, inspecting component state, and debugging async functions. Show me the exact steps and keyboard shortcuts.",
      "How do I debug better in VS Code?"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Too broad, Builder. VS Code has hundreds of shortcuts across different workflows. Which specific tasks are you trying to optimize? Context creates precision.",
        tone: "corrective"
      },
      {
        message: "Generic request yields generic tips. What specific VS Code workflows are you trying to improve? Define your use case and current challenges.",
        tone: "corrective"
      },
      {
        message: "Excellent contextual prompting! Platform specified (macOS), development context provided (React), relevant extensions mentioned (ESLint, Prettier), specific workflow defined (debugging), and concrete objectives listed. The AI can now provide targeted, actionable guidance.",
        tone: "success"
      },
      {
        message: "Too vague about your debugging challenges. What specific debugging problems are you facing? What's your current setup? Provide context for targeted help.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 14,
    category: "Contextual Prompting for Tools",
    question: "When asking for help with GitHub workflows, which approach provides the most useful context?",
    options: [
      "Help me set up GitHub Actions",
      "I need a GitHub workflow",
      "I'm deploying a Next.js app to Vercel from a GitHub repo. Current setup: main branch auto-deploys to production, feature branches create preview deployments. I need a GitHub Actions workflow that: runs tests on all PRs, blocks merging if tests fail, and triggers security scans. Team uses conventional commits.",
      "GitHub Actions for my project"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "GitHub Actions can do countless things. What specific automation are you trying to achieve? For what type of project? What's your deployment context? Be specific.",
        tone: "corrective"
      },
      {
        message: "Too generic. A workflow for what purpose? What's your project type, deployment strategy, and team requirements? Context defines the solution.",
        tone: "corrective"
      },
      {
        message: "Perfect contextual setup! Project type specified (Next.js), deployment target identified (Vercel), current workflow described, specific requirements listed (tests, PR blocking, security scans), and team context provided (conventional commits). Complete operational picture.",
        tone: "success"
      },
      {
        message: "Vague project reference. What kind of project? What do you need the actions to accomplish? GitHub Actions require specific objectives and context to be useful.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 15,
    category: "Contextual Prompting for Tools",
    question: "You're using Cursor AI for code completion and need to optimize your workflow. Which prompt provides the best tool-specific context?",
    options: [
      "How do I use Cursor better?",
      "Cursor AI tips for coding",
      "I'm using Cursor for TypeScript development on a large codebase (50K+ lines). Current setup: GitHub Copilot enabled, working mainly in React components and API routes. I want to improve my prompt engineering for: component generation, refactoring suggestions, and debugging help. Show me specific techniques for getting better completions.",
      "Make Cursor more helpful"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "'Better' is subjective and gives no direction. What specific Cursor features or workflows are you trying to improve? Define your current challenges and objectives.",
        tone: "corrective"
      },
      {
        message: "Generic tips won't optimize your specific workflow. What's your development context? What kind of coding tasks are you trying to enhance with Cursor?",
        tone: "corrective"
      },
      {
        message: "Outstanding tool-specific context! Development language specified (TypeScript), project scale provided (50K+ lines), current setup described (Copilot enabled), work focus areas identified (React, APIs), and specific improvement targets defined (component generation, refactoring, debugging). Actionable guidance possible.",
        tone: "success"
      },
      {
        message: "'More helpful' tells the AI nothing about your current usage patterns or desired improvements. Provide specific context about your workflow and objectives.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 16,
    category: "Contextual Prompting for Tools",
    question: "For getting help with Docker in your development environment, which context-rich prompt is most effective?",
    options: [
      "Docker help needed",
      "My Docker setup isn't working",
      "I'm running Docker Desktop on Windows 11 for a Node.js/PostgreSQL app. Current issue: containers start but can't connect to the database. Docker-compose.yml uses custom network. Need help with: network configuration, service communication, and environment variable setup. Here's my current config: [paste]",
      "Docker networking problems"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "No context about your specific Docker challenges, environment, or objectives. What kind of help do you need for what type of setup?",
        tone: "corrective"
      },
      {
        message: "Identifies a problem but provides no context about your setup, what you're trying to achieve, or what specific issues you're encountering. Add environmental details.",
        tone: "corrective"
      },
      {
        message: "Excellent Docker context! Platform specified (Windows 11), technology stack identified (Node.js/PostgreSQL), specific problem described (database connection), setup details provided (docker-compose, custom network), focus areas defined, and configuration offered. Complete diagnostic picture.",
        tone: "success"
      },
      {
        message: "Networking is one aspect of Docker, but what's your specific setup? What networking problems are you experiencing? Provide environmental context and specific issues.",
        tone: "corrective"
      }
    ]
  },

  // PROMPT FEEDBACK ANALYSIS (2 questions)
  {
    id: 17,
    category: "Prompt Feedback Analysis",
    question: "You received a generic response to your coding question. How do you analyze what went wrong with your prompt?",
    options: [
      "The AI just doesn't understand what I want",
      "I need to ask the question differently",
      "Analyzing my prompt: I provided the problem but missed key context - no code examples, no error messages, no environment details, and no specific output requirements. The AI gave generic advice because I gave generic input. I need to restructure with concrete details.",
      "My prompt was too complicated"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Blaming the AI doesn't help you improve. The machine responds to what you give it. Analyze your prompt structure and identify what context was missing.",
        tone: "corrective"
      },
      {
        message: "Right direction, but 'differently' isn't specific enough. What aspects of your original prompt need improvement? Analyze the specific gaps in your approach.",
        tone: "improving"
      },
      {
        message: "Perfect analytical thinking! You've identified specific missing elements (code examples, error messages, environment details, output requirements) and recognized the cause-effect relationship between generic input and generic output. This is how you improve your prompting.",
        tone: "success"
      },
      {
        message: "Complexity isn't necessarily the problem. Sometimes you need detailed prompts for detailed answers. Analyze what specific elements were missing or unclear, not just the prompt length.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 18,
    category: "Prompt Feedback Analysis",
    question: "Your prompt for code optimization advice resulted in suggestions you'd already tried. How do you analyze this feedback gap?",
    options: [
      "The AI gave me bad suggestions",
      "I should have mentioned what I've already tried: 'I've already implemented caching and database indexing with minimal improvement. I need novel optimization approaches - perhaps algorithm changes, data structure improvements, or architectural modifications I haven't considered.'",
      "I need to ask for more advanced techniques",
      "The AI doesn't know enough about optimization"
    ],
    correctAnswer: 1,
    feedback: [
      {
        message: "The suggestions weren't bad - they were irrelevant to your specific situation. The AI can only work with the information you provide. Missing context creates misaligned responses.",
        tone: "corrective"
      },
      {
        message: "Excellent feedback analysis! You've identified that the AI couldn't know what you'd already tried, and you've structured a refined prompt that excludes already-attempted solutions while directing toward novel approaches. This is intelligent prompt iteration.",
        tone: "success"
      },
      {
        message: "'More advanced' is still vague. Advanced compared to what? Define what level of techniques you've already tried and what specific advancement you're seeking.",
        tone: "corrective"
      },
      {
        message: "The AI has access to optimization knowledge. The gap was in your prompt - you didn't specify what solutions you'd already explored. Provide that context for relevant suggestions.",
        tone: "corrective"
      }
    ]
  },

  // PROMPTING PITFALLS (2 questions)
  {
    id: 19,
    category: "Prompting Pitfalls",
    question: "Which of these represents a common prompting pitfall that leads to poor results?",
    options: [
      "Asking multiple specific questions in one prompt",
      "Providing too much context about your project",
      "Assuming the AI understands your unstated assumptions and constraints without explicitly mentioning your tech stack, requirements, or limitations",
      "Using technical terminology in your prompts"
    ],
    correctAnswer: 2,
    feedback: [
      {
        message: "Multiple specific questions can actually be effective if they're related and well-structured. The pitfall is in poorly structured or completely unrelated questions, not specificity itself.",
        tone: "corrective"
      },
      {
        message: "Context is rarely the problem - it's usually the solution. More relevant context typically leads to better, more targeted responses. Don't fear context; structure it well.",
        tone: "corrective"
      },
      {
        message: "Exactly! This is one of the biggest pitfalls. The AI can't read your mind about your tech stack, project constraints, or requirements. Unstated assumptions lead to responses that miss the mark entirely. Always make your context explicit.",
        tone: "success"
      },
      {
        message: "Technical terminology is helpful when used appropriately. The pitfall is using jargon without context or explanation, not using technical language itself.",
        tone: "corrective"
      }
    ]
  },
  {
    id: 20,
    category: "Prompting Pitfalls",
    question: "You're frustrated because the AI keeps giving you responses that don't match your needs. What's the most likely prompting pitfall you're falling into?",
    options: [
      "Your prompts are too long and detailed",
      "You're not being specific enough about desired output format, constraints, and success criteria - the AI is optimizing for different goals than yours",
      "You're asking too many questions at once",
      "The AI just doesn't understand your domain"
    ],
    correctAnswer: 1,
    feedback: [
      {
        message: "Length and detail aren't typically problems if they're relevant and well-structured. The issue is usually missing context or unclear objectives, not too much information.",
        tone: "corrective"
      },
      {
        message: "Precisely! When you don't define success criteria, output format, and constraints, the AI optimizes for its own assumptions about what 'good' looks like. This misalignment is the root of most prompting frustration. Define your success metrics explicitly.",
        tone: "success"
      },
      {
        message: "Multiple questions can work if they're related and structured. The real pitfall is unclear objectives and success criteria, not question quantity.",
        tone: "corrective"
      },
      {
        message: "The AI has broad domain knowledge. More likely, you haven't provided enough domain-specific context or defined what success looks like in your particular situation.",
        tone: "corrective"
      }
    ]
  }
]

function App() {
  const [currentView, setCurrentView] = useState('levelSelection') // 'levelSelection' or 'quiz'
  const [selectedLevel, setSelectedLevel] = useState(null)
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

  const getProgressPercentage = () => {
    return Math.round(((currentQuestion + (showFeedback ? 1 : 0)) / questions.length) * 100)
  }

  // Navigation functions
  const handleLevelSelect = (levelNumber) => {
    setSelectedLevel(levelNumber)
    setCurrentView('quiz')
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowFeedback(false)
    setGameComplete(false)
  }

  const handleBackToLevelSelection = () => {
    setCurrentView('levelSelection')
    setSelectedLevel(null)
  }

  return (
    <div className="app">
      <PrototypeBanner />
      
      <div className="game-container">
        {currentView === 'levelSelection' ? (
          <LevelSelection 
            onLevelSelect={handleLevelSelect}
            onBackToMenu={handleBackToLevelSelection}
          />
        ) : (
          <>
            <IntroMessage />
            
            {!gameComplete ? (
              <div className="quiz-section">
                <div className="level-header">
                  <h3>Level 1: Prompting Fundamentals</h3>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${getProgressPercentage()}%` }}></div>
                  </div>
                  <div className="progress-indicator">
                    Question {currentQuestion + 1} of {questions.length} • {getProgressPercentage()}% Complete
                  </div>
                  <div className="category-badge">
                    {getCurrentQuestion().category}
                  </div>
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
              <LevelCompletion 
                badgeTitle="Clarity Seeker"
                mentorName="Clarity Prime"
                closingMessage="Clarity is your superpower. Carry it into every prompt, every build, every breakthrough."
                shareable={true}
                totalQuestions={questions.length}
                levelTitle="Level 1 – Prompting Fundamentals"
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App 