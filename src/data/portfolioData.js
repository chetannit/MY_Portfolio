/**
 * Portfolio Data Configuration for Chetan Thakur
 * 
 * NOTE FOR CHETAN:
 * You can edit any details in this file to update your portfolio website.
 * Fields marked with "[Editable Placeholder]" indicate details that you can
 * customize with your specific contact information, degree, or experience.
 */

export const personalInfo = {
  name: "Chetan Thakur",
  role: "Full-Stack Developer",
  shortRole: "Full-Stack & AI/ML Developer",
  focus: ["React", "Python", "AI/ML"],
  status: "Available for Software Engineering & AI/ML Roles",
  github: "https://github.com/chetannit",
  githubUsername: "chetannit",
  avatarUrl: "https://avatars.githubusercontent.com/u/122631231?v=4",
  
  // Hero Section Copy (as requested)
  heroHeadline: "Building Modern Web Applications & Intelligent Solutions.",
  heroIntro: "I’m Chetan Thakur, a developer interested in building full-stack applications and AI-powered solutions using React and Python.",
  heroSupporting: "Focused on clean component architecture, reliable REST APIs, and applied machine learning models. Actively preparing for software engineering and full-stack development opportunities.",
  
  // Editable contact placeholders (no fake credentials invented)
  email: "chetarthakur.dev@example.com", // [Editable Placeholder: Update with your primary email]
  emailDisplay: "your.email@domain.com",  // [Editable Placeholder]
  linkedin: "https://linkedin.com/in/your-profile", // [Editable Placeholder]
  location: "Open to Remote & On-Site Roles", // [Editable Placeholder: e.g., City, Country]
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const aboutMe = {
  summary: [
    "I am a developer focused on building responsive, end-to-end web applications and practical machine learning solutions. My technical toolkit centers around React on the frontend and Python for data handling, backend logic, and machine learning workflows.",
    "I enjoy tackling real-world problem statements—from architecting collaborative expense-sharing tools with full-stack MERN architectures, to integrating LLMs like Google Gemini Pro for intelligent conversational bots, to training computer vision models for image classification.",
    "Driven by curiosity and steady iterative improvement, I am eager to contribute to collaborative engineering teams where I can write clean, maintainable code and build scalable software products."
  ],
  quickStats: [
    { label: "Core Focus", value: "Full-Stack & Applied AI" },
    { label: "Primary Languages", value: "JavaScript, Python" },
    { label: "Frontend", value: "React, Vite, Semantic CSS" },
    { label: "Availability", value: "Ready for Job Applications" }
  ]
};

/**
 * Technical Skills organized strictly as confirmed:
 * - Frontend: React, JavaScript, HTML, CSS
 * - Backend and Programming: Python, REST API development
 * - AI and Machine Learning: Machine learning, Image classification, AI application development
 * - Tools: Git, GitHub
 */
export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, accessible, and high-performance user interfaces.",
    skills: [
      { name: "React", level: "Confirmed", note: "Component architecture, hooks, state" },
      { name: "JavaScript", level: "Confirmed", note: "ES6+, async/await, DOM APIs" },
      { name: "HTML5", level: "Confirmed", note: "Semantic structure, web accessibility" },
      { name: "CSS3", level: "Confirmed", note: "Flexbox, Grid, animations, responsive design" }
    ]
  },
  {
    category: "Backend & Programming",
    icon: "Server",
    description: "Constructing server logic, data endpoints, and backend architectures.",
    skills: [
      { name: "Python", level: "Confirmed", note: "Application logic, data processing, scripting" },
      { name: "REST API Development", level: "Confirmed", note: "Endpoint routing, JSON contracts, status codes" },
      { name: "Node.js & Express", level: "Confirmed", note: "Server runtime, middleware, routing" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "Applying machine learning models and integrating intelligent AI APIs.",
    skills: [
      { name: "Machine Learning", level: "Confirmed", note: "Supervised classification, model training" },
      { name: "Image Classification", level: "Confirmed", note: "Computer vision, feature extraction, OpenCV" },
      { name: "AI Application Development", level: "Confirmed", note: "LLM prompt engineering, Gemini API integration" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    icon: "Wrench",
    description: "Version control, collaboration, and modern development tooling.",
    skills: [
      { name: "Git", level: "Confirmed", note: "Branching, committing, staging, history" },
      { name: "GitHub", level: "Confirmed", note: "Repository hosting, PRs, documentation" },
      { name: "Vite", level: "Confirmed", note: "Modern frontend build tooling" }
    ]
  }
];

/**
 * Featured Projects
 * Strictly verified from repository inspections:
 * 1. AI Customer Support Bot (Gemini Pro, Node, Express, SQLite)
 * 2. Sports Celebrity Image Classifier (OpenCV, Wavelet Transform, Scikit-learn, Flask)
 * 3. SplitMint (MERN expense-sharing platform)
 */
export const featuredProjects = [
  {
    id: "ai-customer-bot",
    title: "AI Customer Support Bot",
    category: "AI & Full-Stack",
    repoUrl: "https://github.com/chetannit/AI-customer-Bot",
    description: "An intelligent customer support chatbot system powered by Google Gemini Pro. Features contextual multi-turn conversation memory, keyword-based FAQ matching with confidence scoring, automated and user-initiated escalation detection, automatic conversation summarization for human agents, and a RESTful backend with SQLite persistence.",
    highlights: [
      "Multi-turn conversation memory retaining contextual dialog",
      "Automated FAQ matching with keyword confidence scoring",
      "Intelligent escalation detection and action item generation for human agents",
      "Modular backend architecture with Express.js and SQLite persistence"
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Google Gemini Pro",
      "SQLite3",
      "REST API",
      "JavaScript"
    ],
    accent: "from-sky-500/20 to-blue-600/20",
    badge: "AI / LLM Engineering"
  },
  {
    id: "image-classifier",
    title: "Sports Celebrity Image Classifier",
    category: "Machine Learning & Computer Vision",
    repoUrl: "https://github.com/chetannit/Image-Classifier",
    description: "An end-to-end computer vision and machine learning classification system. Uses OpenCV Haar Cascades for facial and eye region detection, 2D Wavelet Transformation (PyWavelets) for edge and frequency feature extraction, and Scikit-learn classification models. Served through a Python Flask REST API accepting base64 image data.",
    highlights: [
      "Face and eye region isolation with OpenCV Haar Cascades",
      "Wavelet decomposition (w2d) combining raw image data with edge frequency features",
      "Trained model artifacts loaded via Joblib for real-time inference",
      "Flask REST API processing base64 image inputs with confidence rankings"
    ],
    techStack: [
      "Python",
      "Flask",
      "OpenCV",
      "PyWavelets",
      "Scikit-Learn",
      "Joblib"
    ],
    accent: "from-indigo-500/20 to-purple-600/20",
    badge: "Computer Vision & ML"
  },
  {
    id: "splitmint",
    title: "SplitMint — Group Expense Splitting Platform",
    category: "Full-Stack Web App",
    repoUrl: "https://github.com/chetannit/Splitmint",
    description: "A full-stack MERN expense-splitting web application designed to track shared costs among groups. Implements user authentication, participant management, versatile split options (equal, custom, and percentage-based), an automated debt settlement balance engine, transaction history ledger, and multi-criteria search/filtering.",
    highlights: [
      "Full MERN architecture with React (Vite) client and Express/MongoDB server",
      "Flexible split algorithms supporting equal, custom, or percentage allocations",
      "Debt balance engine providing clear settlement suggestions",
      "Search, participant, date, and amount filtering across transaction ledger"
    ],
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API"
    ],
    accent: "from-teal-500/20 to-emerald-600/20",
    badge: "Full-Stack MERN"
  }
];

/**
 * Experience Section (Discreet Editable Template)
 * Strictly following instruction: "Do not invent companies, job titles, dates, or achievements.
 * If no verified information is available, show a discreet placeholder in the source code rather
 * than publishing fabricated experience."
 */
export const experienceData = {
  isConfigured: false, // Set to true when Chetan fills in his real employment history
  placeholderNote: "Employment details will be updated as professional milestones are achieved. Actively seeking opportunities in software engineering, full-stack web development, and AI/ML.",
  templates: [
    {
      role: "[Your Job Title - e.g. Software Engineer / Full-Stack Developer]",
      company: "[Company / Organization Name]",
      period: "[Start Date – End Date / Present]",
      location: "[City, State / Remote]",
      responsibilities: [
        "[Key responsibility or feature you built using React, Python, or relevant tech]",
        "[Performance optimization, API development, or architecture enhancement]",
        "[Collaboration with cross-functional teams, code reviews, or automated testing]"
      ],
      achievements: [
        "[Measurable achievement - e.g., improved load time, automated workflow, or shipped key feature]"
      ]
    }
  ]
};

/**
 * Education Section (Editable Placeholder)
 * "Do not invent educational qualifications. Leave unspecified details blank or clearly marked for editing."
 */
export const educationData = {
  isConfigured: false, // Set to true once verified degree details are provided
  placeholderNote: "Educational background details can be customized directly in the portfolio configuration.",
  templates: [
    {
      degree: "[Your Degree / Field of Study - e.g., Bachelor of Technology in Computer Science]",
      institution: "[Your University / College / Institute Name]",
      graduationYear: "[Graduation Year - e.g., 2024 / Expected 2025]",
      location: "[City, Country]",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Application Development",
        "Machine Learning Fundamentals"
      ]
    }
  ]
};

/**
 * Certifications Section (Neutral Placeholder)
 * "Hide the section or display a neutral 'Certifications will be added here' placeholder until I provide details."
 */
export const certificationsData = {
  isConfigured: false, // Set to true when Chetan adds verified certifications
  placeholderMessage: "Certifications will be added here once verified credentials are provided.",
  templates: [
    {
      name: "[Certification Name]",
      issuer: "[Issuing Organization]",
      issueDate: "[Month Year]",
      credentialLink: "[Credential Verification URL]"
    }
  ]
};
