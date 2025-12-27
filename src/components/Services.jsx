import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/skills';
import { FaShieldAlt, FaLock, FaCloud, FaCode, FaDatabase, FaUserShield } from 'react-icons/fa';
import './Skills.css'; // Reusing layout styles

const iconMap = {
    FaShieldAlt: <FaShieldAlt />,
    FaLock: <FaLock />,
    FaCloud: <FaCloud />,
    FaCode: <FaCode />,
    FaDatabase: <FaDatabase />,
    FaUserShield: <FaUserShield />
};

const Services = () => {
    return (
        <section id="services" className="services-section glass-panel" style={{ padding: 'var(--spacing-xl) var(--spacing-md)' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Areas of Expertise</h2>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>
                    Specialized in various aspects of cybersecurity, from technical implementation to strategic planning.
                </div>

                <div className="skills-container services-container">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="skill-card service-card premium-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'left', padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
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
                                {iconMap[service.icon]}
                            </div>

                            <h3 className="skill-category" style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.2rem' }}>
                                {service.title} <span style={{ color: 'var(--color-accent-primary)' }}>{service.highlight}</span>
                            </h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '0.9rem' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
