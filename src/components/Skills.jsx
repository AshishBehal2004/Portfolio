import { skills } from "./skillsData";
import './skills.css'
import './ScrambleText'
import ScrambleText from "./ScrambleText";
export default function Skills() {
  return (
    <div id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="terminal-card">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="terminal-fileName">skills.config</span>
      </div>
      <div className="terminal-body">
        {skills.map((item) =>(
          <div key={item.category} className="skill-row">
            <h3>{"> "}{item.category}:</h3>
            <div>
              {"["}
              {item.skills.map((skill, index) =>(
                <span key={skill} className="skill-tag">
                  {<ScrambleText text={skill}/>}{index < item.skills.length - 1 ? ',' : '' }
                </span>
              ))}
              {"]"}
            </div>
          </div>
        ))}
      </div>
    </div> 
    </div>
  );
}