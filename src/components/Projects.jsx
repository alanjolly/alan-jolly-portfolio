import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaShieldAlt, FaNetworkWired, FaLaptop, FaCloud } from 'react-icons/fa';
import './Projects.css';

const iconMap = {
    FaShieldAlt: <FaShieldAlt />,
    FaNetworkWired: <FaNetworkWired />,
    FaLaptop: <FaLaptop />,
    FaCloud: <FaCloud />
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // No filters needed for this specific set
    const filteredProjects = projectsData;

    return (
        <section id="projects" className="projects-section glass-panel">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">Featured Projects</h2>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>
                    A showcase of my recent technical achievements and implementations.
                </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="projects-grid">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            className="project-card premium-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 'var(--spacing-lg)' }}
                        >
                            <div style={{
                                fontSize: '1.5rem',
                                color: 'var(--color-accent-primary)',
                                padding: '10px',
                                background: 'rgba(0, 217, 255, 0.1)',
                                borderRadius: '8px',
                                marginBottom: '15px',
                                display: 'inline-flex'
                            }}>
                                {iconMap[project.icon]}
                            </div>

                            <div className="project-content" style={{ textAlign: 'left', width: '100%' }}>
                                <div className="project-header" style={{ marginBottom: '10px' }}>
                                    <h3 className="project-title" style={{ fontSize: '1.2rem', margin: 0 }}>
                                        {project.title} <span style={{ color: 'var(--color-accent-primary)' }}>{project.highlight}</span>
                                    </h3>
                                </div>
                                <p className="project-desc" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '15px' }}>
                                    {project.description}
                                </p>
                                <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tech-tag" style={{
                                            background: 'rgba(0, 217, 255, 0.05)',
                                            color: 'var(--color-accent-primary)',
                                            padding: '4px 10px',
                                            borderRadius: '15px',
                                            fontSize: '0.75rem',
                                            border: '1px solid rgba(0, 217, 255, 0.1)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedProject(null)}>
                                <FaTimes />
                            </button>
                            <h2>{selectedProject.title} <span style={{ color: 'var(--color-accent-primary)' }}>{selectedProject.highlight}</span></h2>

                            <p style={{ marginTop: '15px', lineHeight: '1.6' }}>{selectedProject.description}</p>

                            <div className="tech-stack" style={{ marginTop: '20px' }}>
                                {selectedProject.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag" style={{ border: '1px solid var(--color-accent-secondary)', padding: '4px 12px', borderRadius: '4px', margin: '0 5px 5px 0', display: 'inline-block' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
