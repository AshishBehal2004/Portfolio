import './Experience.css'
import { data } from './experienceData'
import { useState, useEffect } from 'react';

export default function Experience() {
  
  const fullText = '> role: "Virtual Tour Developer"\n> company: "ARCIVE"\n> period: "Sept 2025 - Feb 2026"'
  const [letter, setLetter] = useState("");
  const [letterPosition, setLetterPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =>{

      if (letterPosition >= fullText.length){
        clearInterval(interval)
        return 
      }

      setLetter(letter + fullText[letterPosition])
      setLetterPosition(letterPosition + 1)
    }, 50)
    return () => clearInterval(interval)
  }, [letterPosition])

  return (
    <>
    <section id="experience">
    <h2>Experience</h2>
    <div className="terminal-card">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="terminal-body">
        <pre className='typewriter'>{letter}</pre>
        {data.map((item) => (
          <div key={item.company} className="terminal-item">
            {/* <p><span className="prompt">&gt;</span> role: "{item.roleName}"</p>
            <p><span className="prompt">&gt;</span> company: "{item.company}"</p>
            <p><span className="prompt">&gt;</span> period: "{item.startDate} – {item.endDate}"</p> */}
            <p className="comment">// what I did:</p>
            <ul>
              {item.description.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
      
  </>
  );
}