import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to the Alan Jolly Portfolio interactive terminal.' },
        { type: 'output', content: 'Type "help" to see available commands.' }
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const isFirstRender = useRef(true);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        scrollToBottom();
    }, [history]);

    const handleCommand = (cmd) => {
        const command = cmd.trim().toLowerCase();
        let output = [];

        switch (command) {
            case 'help':
                output = [
                    'Available commands:',
                    '  contact     - Fetch contact information',
                    '  linkedin    - Open LinkedIn profile',
                    '  tryhackme   - Open TryHackMe profile',
                    '  whoami      - Display current user context',
                    '  clear       - Clear terminal history',
                    '  repo        - View source code repository'
                ];
                break;
            case 'contact':
                output = [
                    'Fetching contact information...',
                    '---------------------------------------------',
                    'Name:       Alan Jolly',
                    'Email:      ajalanjolly4@gmail.com',
                    'Location:   India, Kerala',
                    'LinkedIn:   linkedin.com/in/alan-jolly-172b92187/',
                    'GitHub:     github.com/alanjolly',
                    'TryHackMe:  tryhackme.com/p/alan3.14',
                    '---------------------------------------------'
                ];
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/alan-jolly-172b92187/', '_blank');
                output = ['Opening LinkedIn profile...'];
                break;
            case 'tryhackme':
                window.open('https://tryhackme.com/p/alan3.14', '_blank');
                output = ['Opening TryHackMe profile...'];
                break;
            case 'whoami':
                output = ['visitor@alan-jolly-portfolio'];
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'repo':
                window.open('https://github.com/alanjolly', '_blank');
                output = ['Opening GitHub repository...'];
                break;
            case '':
                break;
            default:
                output = [`Command not found: ${command}. Type "help" for valid commands.`];
        }

        setHistory(prev => [
            ...prev,
            { type: 'input', content: command },
            ...output.map(line => ({ type: 'output', content: line }))
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <section id="contact" className="contact-section" style={{ position: 'relative', minHeight: '600px' }}>
            <div className="terminal-container glass-panel">
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <span className="terminal-button close"></span>
                        <span className="terminal-button minimize"></span>
                        <span className="terminal-button maximize"></span>
                    </div>
                    <div className="terminal-title">visitor@alan-jolly-portfolio: ~</div>
                </div>
                <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
                    {history.map((line, index) => (
                        <div key={index} className={`terminal-line ${line.type}`}>
                            {line.type === 'input' && <span className="prompt">[visitor@portfolio ~]$ </span>}
                            {line.content}
                        </div>
                    ))}
                    <div className="terminal-input-line">
                        <span className="prompt">[visitor@portfolio ~]$ </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="terminal-input"
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
