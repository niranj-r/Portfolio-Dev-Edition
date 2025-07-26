import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { commands } from '../data/commands';
import '../App.css';


const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (showWelcome) {
      setHistory([{ command: 'welcome', output: commands.welcome.output() }]);
      setShowWelcome(false);
    }
  }, [showWelcome]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const newEntry = { command: cmd, output: '' };

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd].output;
      newEntry.output = typeof output === 'function' ? output() : output;
    } else if (trimmedCmd === '') {
      newEntry.output = '';
    } else {
      newEntry.output = `<span style="color: #ef4444;">'${cmd}' is not a recognized command.</span> Type <span style="color: #facc15;">'help'</span> for available commands.`;
    }

    setHistory(prev => [...prev, newEntry]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentInput.trim()) handleCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      if (newIndex < commandHistory.length) {
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  const prompt = (
    <span>
      <span style={{ color: '#facc15' }}>visitor</span>
      <span style={{ color: '#c9d1d9' }}>@</span>
      <span style={{ color: '#10b981' }}>terminal.niranj.dev</span>
      <span style={{ color: '#c9d1d9' }}>:~$ </span>
    </span>
  );

  const socialLinks = [
    { icon: Github, href: 'https://github.com/niranj-r', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/niranj-r', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:niranj.njai@gmail.com', label: 'Email' }
  ];

  return (
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">Terminal</div>
      </div>

      <div className="terminal-layout">
        <div className="terminal-content" ref={terminalRef}>
          {history.map((entry, index) => (
            <div key={index} className="terminal-entry">
              {entry.command && (
                <div className="terminal-command">
                  {prompt}<span>{entry.command}</span>
                </div>
              )}
              {entry.output && (
                <div
                  className="terminal-output"
                  dangerouslySetInnerHTML={{ __html: entry.output }}
                />
              )}
            </div>
          ))}

          <div className="terminal-input-line">
            {prompt}
            <span className="rendered-input">
              {currentInput}
              <span className="cursor">█</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-image">
              <img src="/photo.png" alt="Niranj" className="profile-photo" />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">Niranj R</h1>
              <h2 className="profile-role">UI/UX Developer & Designer</h2>

              <div className="social-links">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" title={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              {/*<div className="profile-links">
                <a href="https://niranj-r.dev" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  Portfolio <ExternalLink size={14} />
                </a>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
