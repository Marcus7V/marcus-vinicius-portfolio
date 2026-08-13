import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Terminal.css';

interface TerminalLine {
  type: 'input' | 'output';
  text: React.ReactNode;
}

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const commands = useMemo(
    () => [
    {
      text: 'whoami',
      output: (
        <div className="terminal-output-content">
          <p className="highlight-name">Marcus Vinicius</p>
          <p>Estudante de Análise e Desenvolvimento de Sistemas & Desenvolvedor Full Stack Júnior.</p>
          <p className="dim-text">Focado em construir soluções web eficientes, limpas e de alto desempenho.</p>
        </div>
      ),
    },
    {
      text: 'cat skills.txt',
      output: (
        <div className="terminal-output-content">
          <p className="loading-text">Carregando stack tecnológica...</p>
          <div className="skills-progress-list">
            <SkillBar name="React" target={90} />
            <SkillBar name="TypeScript" target={80} />
            <SkillBar name="Node.js" target={70} />
            <SkillBar name="Git/GitHub" target={90} />
          </div>
        </div>
      ),
    }
  ], []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, typedText]);

  useEffect(() => {
    let commandIdx = 0;
    let charIdx = 0;

    const typeCharacter = () => {
      if (commandIdx >= commands.length) {
        setIsComplete(true);
        setIsTyping(false);
        return;
      }

      const currentCommand = commands[commandIdx];
      setIsTyping(true);

      if (charIdx < currentCommand.text.length) {
        setTypedText((prev) => prev + currentCommand.text[charIdx]);
        charIdx++;
        
        // Random typing delay to simulate human typing (40ms - 80ms)
        const delay = Math.floor(Math.random() * (80 - 40 + 1) + 40);
        timeoutRef.current = setTimeout(typeCharacter, delay);
      } else {
        // Command finished typing. Pause before executing.
        timeoutRef.current = setTimeout(() => {
          setLines((prev) => [
            ...prev,
            { type: 'input', text: currentCommand.text },
            { type: 'output', text: currentCommand.output }
          ]);
          setTypedText('');
          commandIdx++;
          charIdx = 0;

          // Pause before starting next command
          timeoutRef.current = setTimeout(typeCharacter, 600);
        }, 400);
      }
    };

    // Initial delay before starting the first command
    timeoutRef.current = setTimeout(typeCharacter, 800);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [commands]);

  return (
    <div className="terminal-window">
      {/* Header */}
      <div className="terminal-header">
        <div className="window-controls">
          <span className="control-dot close"></span>
          <span className="control-dot minimize"></span>
          <span className="control-dot maximize"></span>
        </div>
        <div className="terminal-title">bash - marcus@dev:~</div>
      </div>

      {/* Body */}
      <div ref={terminalBodyRef} className="terminal-body">
        {/* Render history of lines */}
        {lines.map((line, idx) => (
          <div key={idx} className={`terminal-row ${line.type}`}>
            {line.type === 'input' && (
              <span className="terminal-prompt">C:\dev\marcus&gt;&nbsp;</span>
            )}
            <div className="terminal-content">{line.text}</div>
          </div>
        ))}

        {/* Render current typing command */}
        {!isComplete && (
          <div className="terminal-row input">
            <span className="terminal-prompt">C:\dev\marcus&gt;&nbsp;</span>
            <div className="terminal-content">
              <span>{typedText}</span>
              <span className={`terminal-cursor ${isTyping ? 'typing' : 'blinking'}`}></span>
            </div>
          </div>
        )}

        {/* Continuous cursor shown after animation finishes */}
        {isComplete && (
          <div className="terminal-row input">
            <span className="terminal-prompt">C:\dev\marcus&gt;&nbsp;</span>
            <div className="terminal-content">
              <span className="terminal-cursor blinking"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface SkillBarProps {
  name: string;
  target: number;
}

function SkillBar({ name, target }: SkillBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Delay slightly to match the "Carregando..." phase, then animate smoothly
    const timer = setTimeout(() => {
      setProgress(target);
    }, 150);

    return () => clearTimeout(timer);
  }, [target]);

  // Generate progress bar blocks
  const totalBlocks = 20;
  const activeBlocksCount = Math.round((progress / 100) * totalBlocks);
  const activeBlocks = '█'.repeat(activeBlocksCount);
  const inactiveBlocks = '░'.repeat(totalBlocks - activeBlocksCount);

  return (
    <div className="skill-progress-row">
      <span className="skill-name">{name.padEnd(12, ' ')}</span>
      <span className="skill-bar">
        [{activeBlocks}
        {inactiveBlocks}]
      </span>
      <span className="skill-percentage">{Math.round(progress)}%</span>
    </div>
  );
}
