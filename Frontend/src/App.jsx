import React, { useState } from "react"; // useState import karvanu bhulta nahi
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCode, FaDatabase, FaReact, FaFileDownload } from "react-icons/fa";
import { SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

// --- DATA (Projects & Skills Same as before) ---
const projects = [
  {
    title: "Smart Bill System",
    desc: "Full-stack billing app with JWT Auth & RBAC.",
    tech: ["React", "Node", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Ecomus E-commerce",
    desc: "Scalable shopping platform with Redux.",
    tech: ["React", "Redux", "Node"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio with animations.",
    tech: ["React", "Tailwind", "Framer"],
    github: "#",
    demo: "#",
  },
];

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <FaDatabase className="text-orange-400" /> },
];

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-slate-800">
    <h1 className="text-2xl font-bold text-teal-400 font-mono">&lt;Jenish /&gt;</h1>
    <div className="space-x-6 text-sm font-medium text-gray-300">
      <a href="#about" className="hover:text-teal-400 transition">About</a>
      <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
      <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="h-screen flex flex-col justify-center items-start px-10 md:px-20 max-w-6xl mx-auto">
    <motion.p 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.1 }}
      className="text-teal-400 font-mono mb-4"
    >
      Hi, my name is
    </motion.p>
    <motion.h1 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.2 }}
      className="text-5xl md:text-7xl font-bold text-gray-100 mb-4"
    >
      Jenish Radadiya.
    </motion.h1>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.3 }}
      className="text-4xl md:text-6xl font-bold text-gray-400 mb-6"
    >
      I build things for the web.
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.4 }}
      className="text-gray-400 max-w-xl text-lg leading-relaxed mb-8"
    >
      I'm a <span className="text-teal-400">MERN Stack Developer</span> specializing in building (and occasionally designing) exceptional digital experiences. Currently focused on building accessible, human-centered products.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: 0.5 }}
      className="flex flex-wrap gap-4"
    >
      <a href="/Jenish_Radadiya_Resume.pdf" target="_blank" className="flex items-center gap-2 border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400/10 transition font-mono font-semibold">
        <FaFileDownload /> My CV
      </a>
      <a href="https://github.com/Jenish1903" target="_blank" className="flex items-center gap-2 border border-slate-600 text-slate-300 px-6 py-3 rounded hover:border-teal-400 hover:text-teal-400 transition font-mono font-semibold">
        <FaGithub /> GitHub
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center gap-2 border border-slate-600 text-slate-300 px-6 py-3 rounded hover:border-teal-400 hover:text-teal-400 transition font-mono font-semibold">
        <FaLinkedin /> LinkedIn
      </a>
    </motion.div>
  </section>
);

const Skills = () => (
  <section className="py-20 px-10 md:px-20 max-w-6xl mx-auto">
     <h3 className="text-2xl font-bold text-gray-200 mb-10 flex items-center">
      <span className="text-teal-400 mr-2">01.</span> Skills & Tech
      <span className="ml-4 h-px bg-slate-700 flex-grow max-w-xs"></span>
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <motion.div 
          key={index}
          whileHover={{ y: -5 }}
          className="bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-slate-700 transition shadow-lg"
        >
          <span className="text-4xl">{skill.icon}</span>
          <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20 px-10 md:px-20 max-w-6xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-200 mb-12 flex items-center">
      <span className="text-teal-400 mr-2">02.</span> Some Things I've Built
      <span className="ml-4 h-px bg-slate-700 flex-grow max-w-xs"></span>
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-xl group"
        >
          <div className="h-48 bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition">
             <FaCode className="text-6xl text-slate-500 group-hover:text-teal-400 transition" />
          </div>
          <div className="p-8">
            <h4 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h4>
            <div className="bg-slate-900/50 p-4 rounded mb-4 text-gray-400 text-sm">
              {project.desc}
            </div>
            <ul className="flex gap-3 text-xs font-mono text-gray-400 mb-6">
              {project.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <div className="flex gap-4">
              <a href={project.github} className="text-gray-300 hover:text-teal-400 text-xl"><FaGithub /></a>
              <a href={project.demo} className="text-gray-300 hover:text-teal-400 text-xl"><FaExternalLinkAlt /></a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// --- NEW CONTACT COMPONENT WITH BACKEND INTEGRATION ---
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Backend URL (Make sure backend is running on port 5000)
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset Form
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error: Server not running or Network issue.");
    }
  };

  return (
    <section id="contact" className="py-32 px-10 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-teal-400 font-mono mb-4">03. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-10">
          Have a question or want to work together? Fill out the form below.
        </p>

        {/* --- FORM START --- */}
        <form onSubmit={handleSubmit} className="text-left space-y-4">
          <div>
            <label className="block text-slate-400 text-sm font-mono mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-300 focus:outline-none focus:border-teal-400 transition"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-sm font-mono mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-300 focus:outline-none focus:border-teal-400 transition"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-sm font-mono mb-2">Message</label>
            <textarea 
              name="message" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-300 focus:outline-none focus:border-teal-400 transition"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full border border-teal-400 text-teal-400 px-6 py-3 rounded hover:bg-teal-400/10 transition font-mono font-bold mt-4"
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </button>
          
          {status && <p className="text-center text-teal-400 mt-4 font-mono text-sm">{status}</p>}
        </form>
        {/* --- FORM END --- */}
      </motion.div>
    </section>
  );
};

const Footer = () => (
  <footer className="text-center py-6 text-slate-500 text-sm font-mono hover:text-teal-400 transition">
    <a href="https://github.com/Jenish1903" target="_blank" rel="noreferrer">
      Designed & Built by Jenish Radadiya
    </a>
  </footer>
);

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-300 font-sans selection:bg-teal-400 selection:text-slate-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}