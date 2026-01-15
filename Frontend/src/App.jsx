import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { 
  FaGithub, FaLinkedin, FaExternalLinkAlt, FaDatabase, FaReact, 
  FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGraduationCap, FaFileDownload
} from "react-icons/fa";
import { SiNodedotjs, SiExpress, SiTailwindcss, SiJavascript, SiRedux, SiMysql, SiHtml5, SiCss3, SiGit } from "react-icons/si";

// --- DATA ---
const personalData = {
  name: "Jenish Radadiya",
  roles: ["MERN Stack Developer", "React Js Developer", "Node Js Developer"], // Updated for Typewriter
  location: "Ahmedabad, GJ",
  email: "radadiyajenish32@gmail.com",
  phone: "+91 97275 15301",
  summary: "Results-driven MERN Stack Developer with 1 year of experience in building scalable applications for E-commerce, SaaS, and Billing Automation.",
  links: {
    github: "https://github.com/Jenish1903",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

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

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    school: "Gandhinagar Institute of Technology",
    year: "Graduated" 
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Balaji Institute of Engineering and Technology",
    year: "Completed"
  }
];

const projects = [
  {
    title: "Smart Bill (Full Stack)",
    desc: "A full-stack billing system featuring secure JWT authentication and Role-Based Access Control (RBAC). Reduced manual billing time by 40%.",
    tech: ["React.js", "Node.js", "Express", "MySQL"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/600x400.png?text=Smart+Bill+Project"
  },
  {
    title: "Ecomus Website",
    desc: "Scalable e-commerce platform with Redux-based real-time cart updates and RESTful API integration. Improved user interaction speed by 35%.",
    tech: ["React.js", "Redux", "Node.js", "MySQL"],
    github: "#",
    demo: "#",
    image: "https://via.placeholder.com/600x400.png?text=Ecomus+Commerce"
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

const skills = [
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "Git & GitHub", icon: <SiGit className="text-[#F05032]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
];

const services = [
  { title: "Full-Stack Development", desc: "Building scalable web apps using MERN Stack & MySQL." },
  { title: "API Development", desc: "Secure RESTful APIs with Node.js, Express & JWT Authentication." },
  { title: "Database Optimization", desc: "MySQL Schema Design and Complex Query Optimization." },
  { title: "Frontend Engineering", desc: "Responsive UI with React.js, Redux, and Tailwind CSS." },
];

// --- NEW COMPONENTS FOR UNIQUE LOOK ---

// 1. Custom Glowing Cursor
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500 pointer-events-none z-[9999] hidden md:block shadow-[0_0_20px_rgba(59,130,246,0.5)]"
      style={{ x: cursorX, y: cursorY }}
    >
      <div className="w-1 h-1 bg-blue-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

// 2. Scroll Progress Bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

// 3. Typewriter Effect Component
const Typewriter = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      {texts[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} text-white ml-1`}>|</span>
    </span>
  );
};

// --- EXISTING COMPONENTS (ENHANCED) ---

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
          <a key={item} href={`#${item.toLowerCase()}`} className="text-xs md:text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all">
            {item}
          </a>
        ))}
        <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-xs md:text-sm font-bold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition whitespace-nowrap">
          Hire Me
        </a>
      </div>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 relative overflow-hidden pt-28 md:pt-20">
    {/* Animated Background Blob */}
    <motion.div 
      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/20 rounded-full blur-[100px] md:blur-[120px]" 
    />
    <motion.div 
       animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
       transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px]" 
    />

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
        I am a <br />
        <Typewriter texts={personalData.roles} />
      </h1>
      
      <p className="text-gray-400 text-base md:text-xl max-w-lg md:max-w-3xl mx-auto mb-10 leading-relaxed px-2">
        {personalData.summary}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-8 sm:px-0">
        <a href="/Jenish_Radadiya_Resume.pdf" download className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition duration-300 text-center flex items-center justify-center gap-2 transform hover:-translate-y-1">
          <FaFileDownload /> Download CV
        </a>
        <a href="#projects" className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition duration-300 text-center transform hover:-translate-y-1">
          View My Work
        </a>
      </div>
    </motion.div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-16 text-center">Professional <span className="text-blue-400">Experience</span></h2>
    
    <div className="relative space-y-12">
      <div className="hidden md:block absolute inset-0 w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent left-1/2 -translate-x-1/2"></div>
      <div className="md:hidden absolute inset-0 w-0.5 bg-gradient-to-b from-transparent via-slate-600 to-transparent left-4"></div>

      {experience.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`relative flex flex-col md:flex-row items-start md:items-center ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full border-2 border-slate-900 z-10 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>

          <div className={`ml-10 md:ml-0 w-full md:w-[45%] bg-[#0a0a0a] border border-white/10 p-6 rounded-xl hover:border-blue-500/30 hover:bg-white/5 transition-all duration-300 ${
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

const Education = () => (
  <section className="py-10 px-6 max-w-4xl mx-auto">
     <h2 className="text-3xl font-bold text-white mb-10 text-center">Education <span className="text-purple-400">History</span></h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
           <motion.div 
             key={index}
             whileHover={{ y: -5, scale: 1.02 }}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.1 }}
             className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition cursor-pointer"
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
            // Floating animation
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-colors duration-300 group cursor-default"
          >
            <span className="text-4xl md:text-5xl drop-shadow-lg">
              {skill.icon}
            </span>
            <span className="text-gray-300 font-medium text-sm group-hover:text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

const Services = () => (
  <section className="py-16 px-6 max-w-6xl mx-auto bg-black/20">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">What I <span className="text-purple-400">Offer</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <motion.div 
          key={i} 
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-[#0f0f11] p-6 rounded-xl border border-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/20 transition duration-300 group"
        >
          <div className="w-10 h-1 rounded bg-gradient-to-r from-blue-500 to-purple-500 mb-4 group-hover:w-20 transition-all duration-300"></div>
          <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-16 text-center">Featured <span className="text-pink-400">Projects</span></h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group bg-[#0f0f11] border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col h-full"
        >
          {/* Image Area */}
          <div className="h-48 overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
               <a href={project.github} className="p-3 bg-white rounded-full text-black hover:bg-blue-400 hover:text-white transition transform hover:scale-110" title="Code"><FaGithub size={20}/></a>
               <a href={project.demo} className="p-3 bg-white rounded-full text-black hover:bg-purple-400 hover:text-white transition transform hover:scale-110" title="Live Demo"><FaExternalLinkAlt size={20}/></a>
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
        setStatus("Message Sent (Demo Mode)!");
        setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#0f0f11] to-[#1a1a1d] border border-white/10 p-8 md:p-16 rounded-3xl relative overflow-hidden"
      >
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
      </motion.div>
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
    <div className="bg-[#050505] min-h-screen text-slate-300 selection:bg-purple-500 selection:text-white font-sans overflow-x-hidden cursor-default">
      <CustomCursor />
      <ScrollProgress />
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
