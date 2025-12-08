// src/data/portfolioData.js

export const personalData = {
  name: "Jenish Radadiya",
  role: "MERN Stack Developer",
  location: "Ahmedabad, GJ",
  email: "radadiyajenish32@gmail.com", // 
  phone: "+91 97275 15301", // 
  links: {
    github: "https://github.com/yourusername", // Replace with actual
    linkedin: "https://linkedin.com/in/yourusername" // Replace with actual
  }
};

export const skills = [
  { category: "Frontend", items: ["React.js", "Redux", "HTML5/CSS3", "JavaScript (ES6+)", "Tailwind"] }, // [cite: 9]
  { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "RBAC"] }, // [cite: 10]
  { category: "Database", items: ["MySQL", "Schema Design", "Query Optimization"] }, // [cite: 10]
  { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] } // [cite: 11]
];

export const experience = [
  {
    id: 1,
    company: "Excelsior Technology",
    role: "MERN Stack Developer",
    date: "Jan 2025 - Present",
    location: "Ahmedabad, GJ",
    description: "Engineered MERN-based web apps with MySQL. Improved system scalability by 35% and reduced backend response time by 40%.", // [cite: 14, 15, 16]
  },
  {
    id: 2,
    company: "Prisha Software Pvt. Ltd.",
    role: "React.js Developer",
    date: "Feb 2024 - Apr 2024",
    location: "Rajkot, GJ",
    description: "Developed official company website. Improved user engagement by 35% and loading speed by 40% via component refactoring.", // [cite: 20, 21, 22, 25]
  },
  {
    id: 3,
    company: "Prisha Software Pvt. Ltd.",
    role: "React.js Developer",
    date: "Feb 2023 - May 2023",
    location: "Rajkot, GJ",
    description: "Assisted in responsive UI development and API integration, enhancing application efficiency by 20%.", // [cite: 26, 27, 29]
  }
];

export const projects = [
  {
    title: "Smart Bill (Full Stack)",
    tech: ["React.js", "Node.js", "Express", "MySQL"], // [cite: 40]
    description: "A full-stack billing system with JWT Authentication and Role-Based Access Control. Reduced manual billing time by 40%.", // [cite: 41, 42]
    link: "#"
  },
  {
    title: "Ecomus Website",
    tech: ["React.js", "Redux", "Node.js", "MySQL"], // [cite: 43]
    description: "Scalable e-commerce platform with real-time cart updates. Improved user interaction speed by 35%.", // [cite: 44]
    link: "#"
  }
];