import {projects} from './projectData'

import {otherProjects} from './otherProjectData'
import './project.css'
export default function Project() {

  return (
    <div id="project">
      <h2 className="section-heading">Projects</h2>

        <div className='project-wrapper'>
          {projects.map((item, index) => (
            <div className="project-card" key={item.projectName}>   
              <div className='project-image' > <img src={item.image}></img></div>
              <div className="project-info">
                <h3>{item.projectName}</h3>
                <p className='project-tagline'>{item.tagline}</p>
                <a href={item.projectLink} className='project-link' target='_blank' rel='noreferrer'>View Project</a>
                <span className='project-date'>{item.date}</span>
                <div className='tech-tags'>{item.frameworks.map((framework) => (
                  <span key={framework}>{framework}</span>
                ))}</div>
                <ul className='project-content'>{item.content.map((point)=> (
                  <li key={point}>{point}</li>
                ))}</ul>
              </div>
              
            </div>
          ))}

          {otherProjects.map((item, index) => (
            <div>
              <div>{item.projectName}</div>
              <div>{item.image}</div>
              <div>{item.tagline}</div>
              <div>{item.projectLink}</div>
              <div>{item.frameworks}</div>
              <div>{item.date}</div>
              <div>{item.content}</div>

            </div>           
          ))}
        </div>
    </div>
  );
}