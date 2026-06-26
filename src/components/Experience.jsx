import './Experience.css'
import { data } from './experienceData'
import { useState, useEffect } from 'react';

export default function Experience() {
  
  const fullText = '> role: "Virtual Tour Developer"\n> company: "ARCIVE"\n> period: "Sept 2025 - Feb 2026"'
  const [letter, setLetter] = useState("");
  const [letterPosition, setLetterPosition] = useState(0);

  const [bulletPoint, setBulletPoint] = useState(0);
  const [bulletposition, setBulletPosition] = useState(0);
  const [bulletText, setBulletText] = useState("");
  const bulletpoints = data[0].description[bulletPoint];
  const [completedBullets, setCompletedBullets] = useState([])
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

  useEffect(() => {
    if (letterPosition < fullText.length){
      return
    }
    const interval2 = setInterval(() => {
      if (bulletposition >= bulletpoints.length){
        setBulletPoint(bulletPoint + 1)
        setBulletPosition(0)
        setCompletedBullets([...completedBullets, bulletpoints])
        setBulletText("")
      }
      else{
        setBulletText(bulletText + bulletpoints[bulletposition])
        setBulletPosition(bulletposition + 1) 
      }
      
    }, 15)
    return () => clearInterval(interval2)
  }, [bulletposition, letterPosition, bulletPoint])

  return (
    <>
    <section id="experience">
    <h2 className="section-heading">Experience</h2>
    <div className="terminal-card">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="terminal-body">
        <pre className='typewriter'>{letter}</pre>
        {completedBullets.map((b,i) => <p className="bulletpoints" key={i}> -- {b}</p>)}
        <p>{bulletText}</p>
        
      </div>
    </div>
  </section>
      
  </>
  );
}