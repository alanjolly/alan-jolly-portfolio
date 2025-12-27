import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Philosophy = () => {
    return (
        <section className="philosophy-section glass-panel" style={{
            padding: 'var(--spacing-xl) var(--spacing-md)',
            /* Background handled by glass-panel */
            textAlign: 'center',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <FaQuoteLeft style={{ fontSize: '2rem', color: 'var(--color-accent-primary)', marginBottom: 'var(--spacing-md)' }} />
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-text-primary)',
                        margin: '0 0 var(--spacing-lg) 0',
                        lineHeight: '1.4'
                    }}
                >
                    "Persistence and strategic thinking always lead to effective solutions."
                </motion.blockquote>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-text-secondary)'
                    }}
                >
                    I believe that complex problems require out-of-the-box thinking and a refusal to give up.
                    In a rapidly evolving digital landscape, continuous learning isn't just a goal—it's a necessity.
                </motion.p>
            </div>
        </section >
    );
};

export default Philosophy;
