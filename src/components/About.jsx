import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { timelineData, statsData } from '../data/timeline';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <section id="about" className="about-section glass-panel">
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <div className="about-image-container">
                    <img src={profileImg} alt="Alan Jolly" className="about-image" />
                </div>
                <div className="about-bio">
                    <p>
                        I am Alan Jolly, a dedicated and results-driven professional with a strong foundation in physics, having earned my bachelor's degree in the field. Following my academic journey, I accumulated over five years of experience as a Network Engineer and three years in the field of cybersecurity.
                    </p>
                    <p>
                        Throughout my career, I have successfully led and contributed to numerous projects, continuously enhancing my expertise by staying up to date with emerging technologies. My ability to think outside the box stems from both my hands-on experience and the in-depth knowledge I have acquired over the years.
                    </p>
                    <p>
                        Working on diverse and challenging projects has reinforced my problem-solving skills, teaching me that while tasks may be complex and demanding, persistence and strategic thinking always lead to effective solutions. I am committed to overcoming challenges and ensuring tasks are completed with excellence.
                    </p>
                </div>
            </div>

            <h3 className="section-subtitle">Career Journey</h3>

            <div className="timeline-container">
                {timelineData.map((item, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-icon-bg" style={{ borderColor: item.iconColor }}>
                            <item.icon style={{ fontSize: '1.2rem', color: item.iconColor }} />
                        </div>
                        <div className="timeline-content">
                            <span className="timeline-date">{item.date}</span>
                            <h3 className="timeline-title">{item.title}</h3>
                            <h4 className="timeline-subtitle">{item.location}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="stats-container" ref={ref}>
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <span className="stat-number">
                            {inView ? <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} /> : 0}
                        </span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
