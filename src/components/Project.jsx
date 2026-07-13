import {projects} from './projectData'
import './project.css'
import { useState, useEffect } from 'react';

export default function Project() {

  const flipProjects = new Array(projects.length)
  for (let i = 0; i < projects.length; i++ ){
    flipProjects[i] = false;
  }
  const [flipState, setFlipState] = useState(flipProjects)
  
  return (
    <div id="project">
      <h2 className="section-heading">Projects</h2>

        <div className='project-wrapper'>
          {projects.map((item, index) => (
            <div className="card-container" key={item.projectName} onMouseMove={(e) => {const rect = e.currentTarget.getBoundingClientRect()
              const centerX= rect.left + rect.width / 2
              const centerY = rect.top + rect.height / 2

            }
            } onClick={() => {
              const newFlipState = [...flipState]
              newFlipState[index] = !newFlipState[index]
              setFlipState(newFlipState)
              }}>
              <div className={flipState[index] ? "inner-card flipped" : "inner-card" }>
                
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