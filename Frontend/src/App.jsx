import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, FaLinkedin, FaExternalLinkAlt, FaDatabase, FaReact, 
  FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGraduationCap, FaFileDownload
} from "react-icons/fa";
import { SiNodedotjs, SiExpress, SiTailwindcss, SiJavascript, SiRedux, SiMysql, SiHtml5, SiCss3, SiGit } from "react-icons/si";

// --- DATA (From your Resume) ---
const personalData = {
  name: "Jenish Radadiya",
  role: "MERN Stack Developer",
  location: "Ahmedabad, GJ",
  email: "radadiyajenish32@gmail.com",
  phone: "+91 97275 15301",
  summary: "Results-driven MERN Stack Developer with 1 year of experience in building scalable applications for E-commerce, SaaS, and Billing Automation.",
  links: {
    github: "https://github.com/Jenish1903", // Add your actual link if different
    linkedin: "https://linkedin.com/in/yourusername" // Add your actual link
  }
};

// Resume Source: 
const experience = [
  {
    company: "Excelsior Technology",
    role: "MERN Stack Developer",
    date: "Jan 2025 - Present",
    location: "Ahmedabad, GJ",
    desc: "Engineered MERN-based web applications with MySQL. Improved system scalability by 35% and reduced backend response time by 40% using optimized Node.js APIs."
  },
  {
    company: "Prisha Software Pvt. Ltd.",
    role: "React.js Developer",
    date: "Feb 2024 - Apr 2024",
    location: "Rajkot, GJ",
    desc: "Developed the official company website using React.js. Improved user engagement by 35% and reduced data fetch time by 25% through REST API optimization."
  },
  {
    company: "Peanut Square LLP Pvt. Ltd.",
    role: "React.js Internship",
    date: "Feb 2023 - May 2023",
    location: "Ahmedabad, GJ",
    desc: "Assisted in developing responsive UI features, improving interface performance by 25% and contributing to a 20% improvement in application efficiency."
  }
];

// Resume Source:  (New Section Added)
const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "Gandhinagar Institute of Technology University, India",
    year: "Graduated" 
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Balaji Institute of Engineering and Technology",
    year: "Completed"
  }
];

// Resume Source: 
const projects = [
  {
    title: "Smart Bill (Full Stack)",
    desc: "A full-stack billing system featuring secure JWT authentication and Role-Based Access Control (RBAC). Reduced manual billing time by 40%.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/600x400.png?text=Smart+Bill+Project" // Replace with actual screenshot
  },
  {
    title: "Ecomus Website",
    desc: "Scalable e-commerce platform with Redux-based real-time cart updates and RESTful API integration. Improved user interaction speed by 35%.",
    tech: ["React.js", "Redux", "Node.js", "MySQL"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/600x400.png?text=Ecomus+Commerce" // Replace with actual screenshot
  },
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio with Framer Motion animations and dark theme aesthetics, showcasing professional experience and skills.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/600x400.png?text=Portfolio+Website"
  },
];

// Resume Source: [cite: 8-11]
const skills = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }, // Updated Icon
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> }, // Added from resume
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },   // Added from resume
  { name: "Git & GitHub", icon: <SiGit className="text-[#F05032]" /> }, // Added from resume
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
];

const services = [
  { title: "Full-Stack Development", desc: "Building scalable web apps using MERN Stack & MySQL." },
  { title: "API Development", desc: "Secure RESTful APIs with Node.js, Express & JWT Authentication." },
  { title: "Database Optimization", desc: "MySQL Schema Design and Complex Query Optimization." },
  { title: "Frontend Engineering", desc: "Responsive UI with React.js, Redux, and Tailwind CSS." },
];

// --- COMPONENTS ---

// 1. Navbar
const Navbar = () => (
  <motion.nav 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="fixed top-4 md:top-6 left-0 right-0 mx-auto w-[95%] md:w-max z-50"
  >
    <div className="flex items-center justify-between md:justify-center px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-6 md:gap-8 min-w-max mx-auto">
        {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-xs md:text-sm font-medium text-gray-300 hover:text-white transition">
            {item}
          </a>
        ))}
        <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xs md:text-sm font-bold shadow-lg hover:shadow-blue-500/50 transition whitespace-nowrap">
          Hire Me
        </a>
      </div>
    </div>
  </motion.nav>
);

// 2. Hero Section
const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 relative overflow-hidden pt-28 md:pt-20">
    <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[120px]" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px]" />

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center z-10 max-w-4xl w-full"
    >
      <div className="mb-4 inline-block px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
        <span className="text-blue-400 text-xs md:text-sm font-medium tracking-wide">👋 Hello, I'm {personalData.name}</span>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
        {personalData.role} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          & UI Designer
        </span>
      </h1>
      
      <p className="text-gray-400 text-base md:text-xl max-w-lg md:max-w-3xl mx-auto mb-10 leading-relaxed px-2">
        {personalData.summary}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-8 sm:px-0">
        <a href="/Jenish_Radadiya_Resume.pdf" download className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition duration-300 text-center flex items-center justify-center gap-2">
          <FaFileDownload /> Download CV
        </a>
        <a href="#projects" className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition duration-300 text-center">
          View My Work
        </a>
      </div>
    </motion.div>
  </section>
);

// 3. Experience Section
const Experience = () => (
  <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-16 text-center">Professional <span className="text-blue-400">Experience</span></h2>
    
    <div className="relative space-y-12">
      <div className="hidden md:block absolute inset-0 w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="md:hidden absolute inset-0 w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent left-4"></div>

      {experience.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative flex flex-col md:flex-row items-start md:items-center ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full border-2 border-slate-900 z-10 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>

          <div className={`ml-10 md:ml-0 w-full md:w-[45%] bg-[#0a0a0a] border border-white/10 p-6 rounded-xl hover:border-blue-500/30 transition-all duration-300 ${
             index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
          }`}>
            <h3 className="font-bold text-white text-xl mb-1">{exp.role}</h3>
            <div className="text-blue-400 font-medium text-sm mb-1">{exp.company}</div>
            <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
               <span>{exp.date}</span>
               <span>{exp.location}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// 4. Education Section (NEW)
const Education = () => (
  <section className="py-10 px-6 max-w-4xl mx-auto">
     <h2 className="text-3xl font-bold text-white mb-10 text-center">Education <span className="text-purple-400">History</span></h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
           <motion.div 
             key={index}
             whileHover={{ y: -5 }}
             className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition"
           >
              <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 text-xl">
                 <FaGraduationCap />
              </div>
              <div>
                 <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                 <p className="text-gray-400 text-sm mt-1">{edu.school}</p>
                 <span className="text-xs text-blue-400 mt-2 block">{edu.year}</span>
              </div>
           </motion.div>
        ))}
     </div>
  </section>
);

// 5. Skills Section
const Skills = () => (
  <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical <span className="text-purple-400">Expertise</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-default"
          >
            <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// 6. Services Section
const Services = () => (
  <section className="py-16 px-6 max-w-6xl mx-auto bg-black/20">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">What I <span className="text-purple-400">Offer</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <motion.div 
          key={i} 
          whileHover={{ y: -5 }}
          className="bg-[#0f0f11] p-6 rounded-xl border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20 transition duration-300"
        >
          <div className="w-10 h-1 rounded bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
          <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// 7. Projects Section
const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-16 text-center">Featured <span className="text-pink-400">Projects</span></h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-[#0f0f11] border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col h-full"
        >
          {/* Image Area */}
          <div className="h-48 overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
               <a href={project.github} className="p-2 bg-white rounded-full text-black hover:bg-blue-400 transition" title="Code"><FaGithub size={20}/></a>
               <a href={project.demo} className="p-2 bg-white rounded-full text-black hover:bg-purple-400 transition" title="Live Demo"><FaExternalLinkAlt size={20}/></a>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h4>
            <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// 8. Contact Form
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulate API call
    setTimeout(() => {
        setStatus("Message Sent (Demo Mode)!");
        setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
      <div className="bg-gradient-to-br from-[#0f0f11] to-[#1a1a1d] border border-white/10 p-8 md:p-16 rounded-3xl relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left relative z-10">
          <input 
            type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition"
          />
          <input 
            type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition"
          />
          <textarea 
            name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition flex justify-center items-center gap-2 transform active:scale-95 duration-200"
          >
            {status === "Sending..." ? "Sending..." : <><FaPaperPlane /> Send Message</>}
          </button>
          
          {status && <p className="text-center text-green-400 mt-4 font-medium">{status}</p>}
        </form>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-12 pt-12 border-t border-white/5 text-gray-400 text-sm">
           <a href={`mailto:${personalData.email}`} className="flex items-center justify-center gap-3 hover:text-white transition"><FaEnvelope /> {personalData.email}</a>
           <div className="flex items-center justify-center gap-3"><FaMapMarkerAlt /> {personalData.location}</div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black">
    <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Education /> 
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
