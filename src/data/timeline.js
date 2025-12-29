import { FaGraduationCap, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';

export const timelineData = [
    {
        title: "Bachelor of Science in Physics",
        location: "St albert's college",
        date: "2011 - 2014",
        icon: FaGraduationCap,
        iconColor: "#64ffda",
        description: "My background in physics has sharpened my analytical thinking and problem-solving capabilities, enabling me to approach challenges from multiple perspectives. Navigating the complexities and apparent contradictions between classical and quantum physics has trained me to think critically and systematically, skills that have proven invaluable in both academic research and practical applications."
    },
    {
        title: "Network Engineer",
        location: "inet infotech",
        date: "2015 - 2017",
        icon: FaNetworkWired,
        iconColor: "#00d9ff",
        description: "Specialized in foundational network protocols, routing strategies, and infrastructure maintenance."
    },
    {
        title: "Network Engineer",
        location: "AT&T",
        date: "2019 - 2021",
        icon: FaNetworkWired,
        iconColor: "#00d9ff",
        description: "Managed enterprise-scale network architectures, optimizing performance and ensuring high availability for critical systems."
    },
    {
        title: "Cybersecurity Analyst",
        location: "ICT Academy of Kerala",
        date: "2023 - Present",
        icon: FaShieldAlt,
        iconColor: "#ff0055", // Distinct accent for security
        description: "Transitioned to cybersecurity, applying network expertise to threat analysis and security architecture. Leading penetration testing and incident response teams."
    }
];

export const statsData = [
    { number: 8, suffix: "+", label: "Years Experience" },
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 15, suffix: "", label: "Technologies Mastered" },
];
