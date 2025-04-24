// components/ProjectCard.jsx
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.a 
      href={project.link} 
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 10px 20px rgba(46, 204, 113, 0.1)'
      }}
      whileTap={{ scale: 0.97 }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </motion.a>
  );
}