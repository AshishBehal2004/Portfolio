import {projects} from './projectData'
import './project.css'
import { useState, useEffect } from 'react';

export default function Project() {

  const [flipIndex, setFlipIndex] = useState(-1);

  

  return (
    <div id="project">
      <h2 className="section-heading">Projects</h2>

        <div className='project-wrapper'>
          {projects.map((item, index) => (
          <div className="card-container" key={item.projectName} onClick={() => setFlipIndex(index)}>
              <div className={flipIndex == index ? "inner-card flipped" : "inner-card" }>
                
              <div className="front-face">
                <h3>{item.projectName}</h3>
                <p>{item.tagline}</p>
                <a href={item.projectLink} target='_blank' rel='noreferrer'>View Project</a>

              </div>
              <div className="back-face">
                {item.date}
                {item.frameworks.map((framework) => (
                  <span key={framework}>{framework}</span>
                ))}
                {item.content.map((point)=> (
                  <span key={point}>{point}</span>
                ))}

              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
}