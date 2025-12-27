import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollTopology = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // -- PARALLAX ANIMATIONS --
    // Layer A (Core) moves slower than content (deep background)
    const yCore = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    // Layer B (Breach) might move slightly differently or track focus
    const yBreach = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

    // -- BREACH EVOLUTION --
    // Fade in/out at specific milestones.
    // 0-0.15: Clean (Hero)
    // 0.15-0.4: Breach Active (About Me) -> The user requested the effect here
    // 0.4-0.7: Peak Breach (Skills/Projects)
    // 0.8-1.0: Resolution/Footer
    const breachOpacity = useTransform(
        scrollYProgress,
        [0, 0.1, 0.25, 0.5, 0.8, 1.0], // Adjusted milestones
        [0, 0.2, 0.6, 0.8, 0.3, 0] // significantly increased opacity for visibility
    );

    const coreOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.1]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 0, // Deepest layer
                overflow: 'hidden',
                background: 'transparent'
            }}
        >
            {/* LAYER A: THE CORE (Clean Blue/Cyan) */}
            <motion.svg
                viewBox="0 0 1000 800"
                preserveAspectRatio="xMidYMid slice"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%', // Taller for parallax
                    y: yCore,
                    opacity: coreOpacity,
                }}
                fill="none"
            >
                <defs>
                    <radialGradient id="nodeGradient">
                        <stop offset="0%" stopColor="#00D9FF" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>

                {/* Enterprise Topology Structure */}
                <g stroke="#004e7c" strokeWidth="1" strokeOpacity="0.8">
                    {/* Backbone */}
                    <path d="M100,100 L900,100" />
                    <path d="M100,700 L900,700" />

                    {/* Vertical Interconnects */}
                    <path d="M200,100 L200,700" strokeDasharray="10,5" />
                    <path d="M500,100 L500,400 L800,700" />
                    <path d="M800,100 L800,700" strokeDasharray="10,5" />

                    {/* Mesh Connections */}
                    <path d="M200,300 L500,400 L800,300" />
                    <path d="M200,500 L500,400 L800,500" />
                </g>

                {/* Core Nodes */}
                {[
                    { cx: 200, cy: 300 }, { cx: 500, cy: 400 }, { cx: 800, cy: 300 },
                    { cx: 200, cy: 500 }, { cx: 800, cy: 500 }, { cx: 500, cy: 100 },
                    { cx: 500, cy: 700 }, { cx: 200, cy: 100 }, { cx: 800, cy: 100 }
                ].map((node, i) => (
                    <circle key={i} cx={node.cx} cy={node.cy} r="3" fill="#00D9FF" />
                ))}
            </motion.svg>

            {/* LAYER B: THE BREACH (Red Glitch/Warning) */}
            <motion.svg
                viewBox="0 0 1000 800"
                preserveAspectRatio="xMidYMid slice"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '115%', // Slightly different speed for depth
                    y: yBreach,
                    opacity: breachOpacity,
                    mixBlendMode: 'screen'
                }}
                fill="none"
            >
                <defs>
                    <filter id="glitchGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Glitch Vectors / Severed Connections */}
                <g stroke="#FF003C" strokeWidth="3" filter="url(#glitchGlow)">
                    {/* Anomaly at the core */}
                    <path d="M480,380 L520,420" />
                    <path d="M480,420 L520,380" />

                    {/* Intrusion Vector */}
                    <path d="M100,150 L300,250 L500,400" strokeDasharray="4,4" strokeOpacity="1">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                    </path>

                    {/* Warning Rings */}
                    <circle cx="500" cy="400" r="30" stroke="red" strokeWidth="2" strokeOpacity="0.8" strokeDasharray="5,5" />
                    <circle cx="500" cy="400" r="45" stroke="red" strokeWidth="1" strokeOpacity="0.6" />

                    {/* Scattered Alerts */}
                    <text x="540" y="390" fill="#FF003C" fontSize="14" fontFamily="monospace" fontWeight="bold">INTRUSION DETECTED</text>
                    <text x="320" y="240" fill="#FF003C" fontSize="12" fontFamily="monospace">PACKET LOSS</text>
                    <text x="750" y="550" fill="#FF003C" fontSize="14" fontFamily="monospace">FIREWALL BYPASS</text>
                </g>

                {/* 'Severed' Nodes */}
                <circle cx="500" cy="400" r="8" fill="#FF003C" opacity="1">
                    <animate attributeName="r" values="8;12;8" dur="0.8s" repeatCount="indefinite" />
                </circle>
            </motion.svg>
        </div>
    );
};

export default ScrollTopology;
