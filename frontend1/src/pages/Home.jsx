import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import profileImage from '../assets/caio.jpeg';


export default function Home() {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <section className="hero">
        <motion.div 
          className="photo-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
            <div className="animated-border-wrapper"></div>
          <img 
      src={profileImage} 
      alt="Caio Cesar" 
      className="profile-photo"
    />
          <div className="animated-border" />
        </motion.div>
  
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        />
          <h1>Caio Cesar Silva</h1>
          <h2>Desenvolvedor Back-End Java & Spring Boot</h2>
          
          <div className="about">
            <p className="education">
              🎓 Estudante de Engenharia da Computação na <strong>ESAMC Santos</strong> (7º Semestre)
            </p>
            <div className="skills-highlight">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>React</span>
              <span>MySQL</span>
            </div>
          </div>
      </section>
    );
  }