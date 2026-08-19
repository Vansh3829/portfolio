export const PERSONAL = {
  name: "Vansh Singh",
  title: "AI/ML Engineer",
  tagline: "Building AI & Data-Driven Applications ",
  email: "itsvansh2005@gmail.com",
  github: "https://github.com/Vansh3829",
  linkedin: "https://www.linkedin.com/in/vansh3829/",
  location: "Delhi, India",
  available: true,
  resumeUrl: "/Vansh_Resume.pdf",
};

export const ABOUT_TEXT = `Final-year CSE AL/ML student with hands-on experience in Python, SQL, Machine Learning, and Generative AI. Built AI-powered
applications using LLMs, Retrieval-Augmented Generation (RAG), NLP, and REST APIs through academic projects. Experienced
in data analysis, feature engineering, and developing end-to-end AI solutions using real-world datasets. Passionate about solving
practical business problems through AI, machine learning, and data-driven applications.`;

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology — CSE (AI & ML)",
    school: "Dronacharya College of Engineering",
    period: "2023 – 2027",
    score: "CGPA: 7.9/10",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Class XII — CBSE",
    school: "Kendriya Vidyalaya No.1 Delhi Cantt",
    period: "Completed",
    score: "87.4%",
    icon: "📚",
  },
  {
    id: 3,
    degree: "Class X — CBSE",
    school: "Kendriya Vidyalaya No.1 Delhi Cantt",
    period: "Completed",
    score: "81.6%",
    icon: "📖",
  },
];

export const SKILLS = [
  {
    id: "programming",
    title: "Programming Languages",
    icon: "💻",
    gradient: "from-blue-500 to-indigo-600",
    items: ["Python", "SQL", "C++"],
  },
  {
    id: "Artificial Intelligence",
    title: "Artificial Intelligence",
    icon: "🤖",
    gradient: "from-blue-500 to-indigo-600",
    items: ["GenAI", "RAG", "LangGraph","VectorDB","ChromaDB","Embedding","Semantic Search"],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: "📊",
    gradient: "from-emerald-500 to-teal-600",
    items: ["Pandas", "NumPy", "Matplotlib", "SQL"],
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: "🤖",
    gradient: "from-purple-500 to-violet-600",
    items: ["Regression", "Classification", "Feature Engineering", "EDA", "Data Preprocessing", "Scikit-Learn"],
  },

  {
    id: "databases",
    title: "Databases & Tools",
    icon: "🗄️",
    gradient: "from-rose-500 to-red-600",
    items: ["MySQL","VectorDB","ChromaDB", "Git", "GitHub"],
  },
  {
    id: "core",
    title: "Core Concepts",
    icon: "🧠",
    gradient: "from-cyan-500 to-blue-600",
    items: ["Data Structures", "DBMS", "OOP", "Statistics", "Probability"],
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Student Trainee",
    company: "Edunet Foundation",
    period: "Feb 2025 – March 2025",
    highlights: [
      "Developed practical skills in Python and SQL for data analysis, data manipulation, and database querying.",
      "Performed data cleaning and preprocessing pipelines using Python and SQL",
      "Solved real-world analytical problems and performed data-driven tasks involving data cleaning, processing, and interpretation.",
      
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Smart Database Assistant",
    emoji: "🗄️",
    description:
      "An AI-powered web app that lets anyone query, edit, and export databases using plain English — no SQL, Python, or formulas needed. Supports CSV, Excel, SQLite, and SQL dump files.",
    categories: ["backend", "ai"],
    tech: ["Flask", "Python", "Gemini API", "SQLite"],
    features: [
      "Natural Language to SQL",
      "4 File Formats",
      "Auto SQL Correction",
      "Multi-turn Chat",
      "3 Export Formats",
      "50MB Upload",
    ],
    gradient: "from-[#0f1a28] to-[#1a3a4d]",
    github: "https://github.com/Vansh3829/Smart-Database-Assistant",
    demo: "https://smart-database-assistant.onrender.com",
  },
  {
    id: 2,
    title: "RAG Technical Documentation Assistant ",
    emoji: "🗄️",
    description:
      "A self-corrective RAG system that answers technical documentation queries using semantic retrieval, query rewriting, and hallucination checking.",
    categories: ["backend", "ai"],
    tech: ["LangGraph", "FastAPI", "ChromaDB", "FastEmbed"],
    features: [
    "Semantic Retrieval",
    "Document Chunking",
    "Query Rewriting",
    "Relevance Grading",
    "Hallucination Checking",
    "LLM Responses",
    ],
    gradient: "from-[#0f1a28] to-[#1a3a4d]",
    github: "https://github.com/Vansh3829/RAG-Technical-Documentation-Assistant",
    demo: "https://github.com/Vansh3829/RAG-Technical-Documentation-Assistant",
  },
 
  {
    id: 3,
    title: "Career Intelligence System",
    emoji: "🎯",
    description:
      "An ML-powered career prediction engine analyzing 10K+ job market records to predict career paths, hiring probabilities, and salary growth with explainable AI recommendations.",
    categories: ["ml", "data"],
    tech: ["Python", "Scikit-Learn", "TF-IDF", "Machine Learning"],
    features: ["Career Prediction", "Hiring Probability", "Salary Forecast", "Explainable AI", "10K+ Records"],
    gradient: "from-[#1a0f28] to-[#2d1a4d]",
    github: "https://github.com/Vansh3829/career-intelligence-system",
    demo: "https://career-intelligence-system.streamlit.app/",
  },
  
];

export const CERTIFICATIONS = [
  { id: 1, name: "Python for Data Science", issuer: "IBM", year: "2026", color: "bg-blue-500/10 text-blue-400", icon: "🔵" },
  { id: 2, name: "Introduction to Generative AI", issuer: "AWS", year: "2025", color: "bg-orange-500/10 text-orange-400", icon: "🟠" },
  { id: 3, name: "Introduction to Machine Learning", issuer: "NPTEL", year: "2025", color: "bg-green-500/10 text-green-400", icon: "🟢" },
  { id: 4, name: "OCI AI Foundations Associate", issuer: "Oracle", year: "2025", color: "bg-red-500/10 text-red-400", icon: "🔴" },
  { id: 5, name: "Data Structures & Algorithms", issuer: "Infosys Springboard", year: "2024", color: "bg-purple-500/10 text-purple-400", icon: "🟣" },
  { id: 6, name: "Python Programming", issuer: "Infosys Springboard", year: "2024", color: "bg-teal-500/10 text-teal-400", icon: "🩵" },
];

export const STATS = [
  { value: 100, suffix: "K+", label: "Records Processed" },
  { value: 10, suffix: "+", label: "APIs Developed" },
  { value: 4, suffix: "", label: "Major Projects" },
  { value: 6, suffix: "", label: "Certifications" },
];

export const TYPE_PHRASES = [
  "AI/ML Engineer"
];
