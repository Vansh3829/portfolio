export const PERSONAL = {
  name: "Vansh Singh",
  title: "Data Analyst | Data Engineer Aspirant | AI & ML Student",
  tagline: "Transforming data into insights and building scalable backend solutions.",
  email: "itsvansh2005@gmail.com",
  github: "https://github.com/Vansh3829",
  linkedin: "https://www.linkedin.com/in/vansh3829/",
  location: "Delhi, India",
  available: true,
  resumeUrl: "/Vansh_SD.pdf",
};

export const ABOUT_TEXT = `Data-focused engineering student with strong fundamentals in Data Structures, backend development, Python, SQL, Machine Learning, and Data Analytics. Experienced in building REST APIs, processing large datasets (100K+  records), and developing scalable data-driven applications that solve real-world problems. Passionate about leveraging AI and data to drive meaningful decisions.`;

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
    items: ["Python", "SQL", "C++", "Java"],
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
    id: "backend",
    title: "Backend Development",
    icon: "⚙️",
    gradient: "from-amber-500 to-orange-600",
    items: ["Flask", "REST APIs", "SQLAlchemy"],
  },
  {
    id: "databases",
    title: "Databases & Tools",
    icon: "🗄️",
    gradient: "from-rose-500 to-red-600",
    items: ["MySQL", "Git", "GitHub"],
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
    title: "AutoEasy – Car Rental Management System",
    emoji: "🚗",
    description:
      "A comprehensive car rental platform with inventory management, booking system, demand analytics, and performance optimization built with Streamlit and MySQL.",
    categories: ["data", "backend"],
    tech: ["Python", "Streamlit", "MySQL", "Matplotlib"],
    features: ["Vehicle Inventory", "Customer Booking", "Demand Analytics", "CRUD Operations", "Performance Optimization"],
    gradient: "from-[#0f2818] to-[#1a4d2a]",
    github: "https://github.com/Vansh3829/AutoEasy-Car_rental_SQLite",
    demo: "https://autoeasy.streamlit.app/",
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
  {
    id: 4,
    title: "Personal Finance & Goal-Based Savings Tracker",
    emoji: "💰",
    description:
      "A full-stack REST API system for personal finance management with goal tracking, transaction analytics, and dynamic filtering capabilities built with Flask and MySQL.",
    categories: ["backend", "data"],
    tech: ["Flask", "SQLAlchemy", "MySQL", "REST APIs"],
    features: ["10+ RESTful APIs", "Goal Management", "Transaction Tracking", "Analytics Dashboard", "Dynamic Filtering"],
    gradient: "from-[#0f1628] to-[#1a2d5a]",
    github: "https://github.com/Vansh3829/Python-Based-Finance-System-Backend",
    demo: "https://python-based-finance-system-backend.onrender.com/",
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
  "Data Analyst",
  "Data Engineer Aspirant",
  "AI & ML Student",
  "Python Developer",
  "Backend Engineer",
];
