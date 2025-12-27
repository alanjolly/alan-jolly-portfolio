import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import './Skills.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section glass-panel">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', maxWidth: '1000px', margin: '0 auto' }}>
                    {skillsData.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="skill-tag"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, borderColor: 'var(--color-accent-primary)' }}
                            style={{
                                background: 'rgba(10, 25, 47, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'var(--color-text-primary)',
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                cursor: 'default'
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
