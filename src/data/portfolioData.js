/**
 * Portfolio Data Configuration for Chetan Thakur
 * Synchronized with Official Resume: Full-Stack Software Developer
 * 
 * Education: MNNIT Allahabad (B.Tech CSE, 2022 - 2026)
 * Experience: Nepal Internet Foundation (NIFN) - Full Stack AI Developer
 * Key Projects: SplitMint, NIFN Multilingual RAG, AI Support Bot, Image Classifier
 */

export const personalInfo = {
  name: "Chetan Thakur",
  role: "Full-Stack Software Developer",
  shortRole: "Full-Stack & AI Systems Developer",
  focus: ["FastAPI & Python", "React & Next.js", "PostgreSQL & Redis", "RAG & Distributed Systems"],
  status: "Available for Software Developer Roles",
  github: "https://github.com/chetannit",
  githubUsername: "chetannit",
  avatarUrl: "https://avatars.githubusercontent.com/u/122631231?v=4",
  
  // Hero Section Copy
  heroHeadline: "Architecting Resilient Full-Stack Systems & Intelligent AI Pipelines.",
  heroIntro: "I’m Chetan Thakur, a Computer Science & Engineering graduate with hands-on experience building fintech platforms, transaction-safe REST APIs, and multilingual AI chatbots.",
  heroSupporting: "Proficient across Python, Java, Node.js, React, and automated testing suites. Experienced in optimizing PostgreSQL schemas, orchestrating vector search, and shipping software that works reliably under load.",
  
  // Contact & Social Profiles
  email: "chetanthakur220@gmail.com",
  emailDisplay: "chetanthakur220@gmail.com",
  phone: "+977-9704198879",
  phoneRaw: "+9779704198879",
  whatsappUrl: "https://wa.me/9779704198879",
  linkedin: "https://www.linkedin.com/in/chetan-thakur-214501249/",
  linkedinUsername: "chetan-thakur-214501249",
  location: "Kathmandu, Nepal",
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const aboutMe = {
  summary: [
    "I am a Computer Science and Engineering graduate from Motilal Nehru National Institute of Technology Allahabad (MNNIT) with hands-on experience in full-stack development, relational database engineering, and applied AI systems.",
    "Currently at Nepal Internet Foundation (Nepal Interledger Financial Network – NIFN), I design and optimize PostgreSQL schemas for an interoperable fintech network—handling cooperatives, wallets, balances, and commission settlements with strict ACID transaction safety—while building a high-precision multilingual RAG chatbot with FastAPI, Qdrant, Redis, and LangChain.",
    "I enjoy solving rigorous algorithmic and systems problems: from engineering a greedy two-pointer debt simplification algorithm in SplitMint that cut peer-to-peer settlement transactions by up to 65%, to eliminating IEEE 754 floating-point inaccuracies through deterministic integer-cent arithmetic. I thrive collaborating across backend and QA teams to ship reliable, well-tested software."
  ],
  quickStats: [
    { label: "Core Expertise", value: "Full-Stack & Applied AI" },
    { label: "Primary Languages", value: "Python, Java, C++, SQL, JS, TS" },
    { label: "Backend & Data", value: "FastAPI, Node, PostgreSQL, Redis" },
    { label: "Academic Foundation", value: "B.Tech CSE, MNNIT Allahabad" }
  ]
};

/**
 * Technical Skills & Core Competencies:
 * Exactly synchronized with Resume domains:
 * 1. Programming
 * 2. Backend & APIs
 * 3. Frontend
 * 4. Databases & Caching
 * 5. Testing & Debugging
 * 6. Tools & Platforms
 * 7. AI & Security
 */
export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for systems, algorithms, and full-stack software development.",
    skills: [
      { name: "Python", note: "FastAPI, Pytest, LangChain, scripting, data pipelines" },
      { name: "Java", note: "Object-oriented architecture, data structures, enterprise patterns" },
      { name: "C++", note: "Algorithms, memory management, competitive programming" },
      { name: "SQL", note: "Complex queries, indexing, relational constraints, schema tuning" },
      { name: "JavaScript", note: "ES6+, async event loop, Node.js runtime, DOM" },
      { name: "TypeScript", note: "Strong typing, interface definitions, scalable codebases" }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "Designing high-throughput, transaction-safe RESTful web services.",
    skills: [
      { name: "FastAPI", note: "Asynchronous endpoints, Pydantic validation, dependency injection" },
      { name: "REST APIs", note: "Idempotent design, status codes, OpenAPI/Swagger contracts" },
      { name: "SQLAlchemy", note: "ORM modeling, transaction safety, relationship mapping" },
      { name: "Node.js", note: "Non-blocking event-driven backend services & microservices" },
      { name: "Express.js", note: "Middleware architecture, routing, request validation" },
      { name: "API Integration", note: "Payment gateways, third-party webhooks, fintech APIs" }
    ]
  },
  {
    category: "Frontend Engineering",
    icon: "Layout",
    description: "Constructing modern, responsive, and component-driven user interfaces.",
    skills: [
      { name: "React.js", note: "Hooks, component lifecycles, state management, Vite" },
      { name: "Next.js", note: "Server-side rendering, routing, static optimization" },
      { name: "Tailwind CSS", note: "Utility-first design systems, modern styling" },
      { name: "HTML5 & CSS3", note: "Semantic structure, responsive layouts, CSS Grid & Flexbox" }
    ]
  },
  {
    category: "Databases, Caching & Vector",
    icon: "Database",
    description: "Relational modeling, distributed caching, and vector indexing.",
    skills: [
      { name: "PostgreSQL", note: "Schema design, ACID transactions, foreign keys, query optimization" },
      { name: "Redis", note: "Sub-millisecond query caching, session stores, rate-limiting" },
      { name: "Qdrant", note: "Vector similarity search, high-dimensional payload indexing" },
      { name: "MongoDB", note: "NoSQL document stores, aggregation pipelines, Mongoose" },
      { name: "MySQL", note: "Relational database modeling, indexing, ACID compliance" }
    ]
  },
  {
    category: "Testing & Validation",
    icon: "CheckCircle2",
    description: "Automated test suites, load testing, and edge-case verification.",
    skills: [
      { name: "Unit Testing (Pytest)", note: "Test fixtures, edge cases, algorithmic regression tests" },
      { name: "Selenium", note: "End-to-end browser automation and functional validation" },
      { name: "Load Testing", note: "Throughput evaluation, concurrency stress testing" },
      { name: "End-to-End Validation", note: "Postman/Newman API flows, QA test coordination" }
    ]
  },
  {
    category: "DevOps, Tools & Platforms",
    icon: "Wrench",
    description: "Containerization, Linux administration, and CI/CD automation.",
    skills: [
      { name: "Docker & Compose", note: "Multi-container orchestration, Dockerfiles, dev environments" },
      { name: "Git & GitHub", note: "Branching strategies, code reviews, semantic commits, PRs" },
      { name: "Linux", note: "Shell scripting, process management, server environments" },
      { name: "Nginx", note: "Reverse proxying, SSL termination, load balancing" },
      { name: "CI/CD", note: "Automated build, test, and deployment workflows" }
    ]
  },
  {
    category: "AI, RAG & Security",
    icon: "BrainCircuit",
    description: "Multilingual vector search, prompt pipelines, and secure authentication.",
    skills: [
      { name: "RAG & LangChain", note: "Document ingestion, chunking, dense vector retrieval" },
      { name: "Hybrid BM25 & Semantic Search", note: "Keyword + dense vector fusion, reranking, deduplication" },
      { name: "API Authentication & OAuth", note: "Secure token lifecycles, bearer schemes, third-party auth" },
      { name: "JWT & bcrypt", note: "Stateless session tokens, salted password hashing" },
      { name: "Input Validation", note: "SQL injection prevention, schema sanitization, CORS" }
    ]
  }
];

/**
 * Featured Projects
 * Highlights verified codebases and engineering achievements:
 * 1. SplitMint (Full-Stack Expense & Settlement Engine)
 * 2. NIFN Multilingual RAG Engine (FastAPI, Qdrant, Redis, LangChain)
 * 3. AI Customer Support Bot (Gemini Pro, Node, Express, SQLite)
 * 4. Sports Celebrity Image Classifier (OpenCV, Haar, Wavelet, Flask)
 */
export const featuredProjects = [
  {
    id: "splitmint",
    title: "SplitMint – Group Expense & Debt Settlement Engine",
    category: "Full-Stack Architecture & Algorithms",
    repoUrl: "https://github.com/chetannit/Splitmint",
    description: "A full-stack MERN expense platform engineered with custom debt resolution algorithms to streamline shared group finances. Features multi-member group management, real-time public read-only share links, an interactive SVG directed debt-graph visualizer, and strict financial precision arithmetic.",
    highlights: [
      "Engineered a greedy two-pointer debt simplification algorithm in Node.js to resolve circular debts and reduce peer-to-peer settlement transactions by up to 65%.",
      "Implemented deterministic integer-cent arithmetic across Equal, Percentage, and Custom split modes to eliminate IEEE 754 floating-point errors and guarantee 100% balance accuracy.",
      "Architected a full-stack MERN expense platform with JWT/bcrypt authentication, multi-member group management, and public read-only share links.",
      "Built a React dashboard with an SVG directed debt-graph visualizer, category spending analytics, one-click settlement recording, and multi-parameter expense filtering.",
      "Designed a natural-language expense parser and one-click demo seeding pipeline; added automated unit tests for edge-case remainder distributions and circular debt graphs."
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "SVG Graph Visualizer",
      "Automated Testing"
    ],
    metrics: [
      { label: "Settlement Reduction", value: "Up to 65%" },
      { label: "Balance Precision", value: "100% (Integer-Cent)" },
      { label: "Architecture", value: "MERN Stack" }
    ],
    accent: "from-teal-500/20 to-emerald-600/20",
    badge: "Full-Stack & Algorithms"
  },
  {
    id: "nifn-rag",
    title: "Multilingual RAG & Technical Docs Engine",
    category: "AI & Vector Search Architecture",
    repoUrl: "https://github.com/chetannit",
    description: "An enterprise-grade multilingual retrieval-augmented generation (RAG) system engineered for the Nepal Interledger Financial Network (NIFN). Ingests and indexes complex organizational and fintech technical documentation across English and Nepali, delivering accurate answers with sub-second latency.",
    highlights: [
      "FastAPI backend orchestrating LangChain-based document ingestion, semantic chunking, and contextual retrieval pipelines.",
      "Qdrant vector database paired with multilingual dense embeddings for cross-lingual conceptual semantic matching.",
      "Engineered hybrid retrieval combining BM25 keyword matching with dense vector similarity, plus deduplication, Redis query caching, and reranking.",
      "Validated end-to-end question answering relevance in both English and Nepali with automated evaluation benchmarks."
    ],
    techStack: [
      "FastAPI",
      "Qdrant Vector DB",
      "Redis",
      "LangChain",
      "Python",
      "BM25 Search",
      "Multilingual Embeddings"
    ],
    metrics: [
      { label: "Bilingual Support", value: "English & Nepali" },
      { label: "Search Mechanism", value: "Hybrid BM25 + Vector" },
      { label: "Latency", value: "Sub-Second (Redis Cache)" }
    ],
    accent: "from-blue-500/20 to-cyan-600/20",
    badge: "AI & Vector Search"
  },
  {
    id: "ai-customer-bot",
    title: "AI Customer Support Bot",
    category: "AI & Full-Stack",
    repoUrl: "https://github.com/chetannit/AI-customer-Bot",
    description: "An intelligent customer support chatbot system powered by Google Gemini Pro. Features contextual multi-turn conversation memory, keyword-based FAQ matching with confidence scoring, automated and user-initiated escalation detection, automatic conversation summarization for human agents, and an Express.js backend with SQLite persistence.",
    highlights: [
      "Multi-turn conversation memory retaining contextual dialog history across user sessions.",
      "Automated FAQ matching with keyword confidence scoring to answer frequent queries instantly and reduce LLM token overhead.",
      "Intelligent escalation detection and action item generation when human intervention is required.",
      "Modular backend architecture with Express.js, SQLite persistence, and structured REST endpoints."
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Google Gemini Pro",
      "SQLite3",
      "REST API",
      "JavaScript"
    ],
    metrics: [
      { label: "Context Window", value: "10-Turn Memory" },
      { label: "FAQ Matching", value: "Confidence Scored" },
      { label: "LLM Model", value: "Gemini Pro" }
    ],
    accent: "from-sky-500/20 to-blue-600/20",
    badge: "AI / LLM Engineering"
  },
  {
    id: "image-classifier",
    title: "Sports Celebrity Image Classifier",
    category: "Computer Vision & ML",
    repoUrl: "https://github.com/chetannit/Image-Classifier",
    description: "An end-to-end computer vision and machine learning classification pipeline. Uses OpenCV Haar Cascades for facial and eye region isolation, 2D Wavelet Transformation (PyWavelets) for frequency edge feature extraction, and Scikit-learn models served through a Python Flask REST API accepting base64 image data.",
    highlights: [
      "Face and eye region isolation with OpenCV Haar Cascades with automated rejection of obstructed images.",
      "Wavelet decomposition (w2d) combining raw image data with edge frequency features for robust model inputs.",
      "Trained model artifacts loaded via Joblib for real-time inference and probability distributions.",
      "Flask REST API processing base64 image inputs with confidence rankings and visual feedback."
    ],
    techStack: [
      "Python",
      "Flask",
      "OpenCV",
      "PyWavelets",
      "Scikit-Learn",
      "Joblib"
    ],
    metrics: [
      { label: "Feature Extraction", value: "2D Wavelet + Haar" },
      { label: "Inference Engine", value: "Scikit-Learn & Joblib" },
      { label: "API Framework", value: "Python Flask" }
    ],
    accent: "from-indigo-500/20 to-purple-600/20",
    badge: "Computer Vision & ML"
  }
];

/**
 * Professional Experience
 * Populated directly from Chetan Thakur's verified resume:
 * Nepal Internet Foundation – Nepal Interledger Financial Network (NIFN)
 */
export const experienceData = {
  isConfigured: true,
  placeholderNote: "",
  templates: [
    {
      role: "Program Assistant Officer – Full Stack AI Developer",
      company: "Nepal Internet Foundation – Nepal Interledger Financial Network (NIFN)",
      period: "May 2026 – Present",
      location: "Kathmandu, Nepal",
      employmentType: "Full-Time",
      summary: "Designing interoperable fintech platform features, transaction-safe database architectures, and multilingual AI documentation retrieval systems.",
      responsibilities: [
        "Design and optimize PostgreSQL schemas for an interoperable fintech platform covering cooperatives, members, wallets, balances, transactions, API keys, and commission settlements; apply relational constraints, indexes, and transaction-safe operations.",
        "Build a multilingual retrieval-augmented generation (RAG) chatbot for organizational and technical documentation using FastAPI, Qdrant, Redis, multilingual embeddings, and LangChain-based ingestion and retrieval pipelines.",
        "Improve English and Nepali answer relevance through hybrid semantic and BM25 retrieval, deduplication, caching, and reranking.",
        "Contribute mobile application features, REST API integrations, and application-state handling; collaborate with backend and QA teams to validate end-to-end workflows."
      ],
      achievements: [
        "Engineered production-grade RAG pipeline serving bilingual technical docs with sub-second retrieval latency via Redis caching.",
        "Architected transaction-safe multi-party cooperative settlement schemas eliminating balance race conditions."
      ],
      techStack: [
        "PostgreSQL",
        "FastAPI",
        "Qdrant",
        "Redis",
        "LangChain",
        "BM25 Search",
        "REST APIs",
        "Docker"
      ]
    }
  ]
};

/**
 * Education Section
 * Populated directly from Chetan Thakur's verified resume:
 * Motilal Nehru National Institute of Technology Allahabad (MNNIT)
 */
export const educationData = {
  isConfigured: true,
  placeholderNote: "",
  templates: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Motilal Nehru National Institute of Technology Allahabad (MNNIT)",
      graduationYear: "2022 – 2026",
      location: "Prayagraj, India",
      coursework: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Distributed Systems",
        "Artificial Intelligence",
        "Machine Learning"
      ]
    }
  ]
};

/**
 * Technical Certifications & Core Engineering Competencies
 */
export const certificationsData = {
  isConfigured: true,
  placeholderMessage: "",
  templates: [
    {
      name: "Algorithmic Problem Solving & Data Structures",
      issuer: "MNNIT Allahabad / Competitive Engineering",
      issueDate: "Core Foundation",
      credentialLink: "https://github.com/chetannit"
    },
    {
      name: "Transaction-Safe Database & Interledger Architecture",
      issuer: "Nepal Interledger Financial Network (NIFN)",
      issueDate: "Production Practice",
      credentialLink: "https://github.com/chetannit"
    },
    {
      name: "Applied RAG & High-Dimensional Vector Search",
      issuer: "FastAPI, Qdrant & LangChain Engineering",
      issueDate: "Applied AI",
      credentialLink: "https://github.com/chetannit"
    }
  ]
};
