import { otherProjects } from './otherProjectData'
import './moreProjects.css'

function tileSize(projectName) {
  if (projectName.length <= 14) return 'small';
  if (projectName.length <= 24) return 'wide';
  return 'large';
}

const colorCount = 6; // number of tile-color-N classes defined in moreProjects.css

function getColorIndex(projectIndex) {
  // wraps back around to color 0 once we run out of colors,
  // instead of running out if a 7th+ project gets added later
  return projectIndex % colorCount;
}

export default function MoreProjects() {
  return (
    <div id="more-projects">
      <h2 className="section-heading">More Projects</h2>

      <div className="other-projects-wrapper">
        {otherProjects.map((item, index) => (
          <div
            className={`other-project-card tile-${tileSize(item.projectName)} tile-color-${getColorIndex(index)}`}
            key={item.projectName}
            tabIndex={0}
          >
            <div className="other-project-card-inner">
              <div className="other-project-front">
                <span className="other-project-name">{item.projectName}</span>
              </div>

              <div className="other-project-back">
                <h3>{item.projectName}</h3>
                <p className="other-project-tagline">{item.tagline}</p>
                <p className="other-project-content">{item.content}</p>
                <div className="tech-tags">
                  {item.frameworks.map((framework) => (
                    <span key={framework}>{framework}</span>
                  ))}
                </div>
                <div className="other-project-footer">
                  <span className="other-project-date">{item.date}</span>
                  <a href={item.projectLink} className="project-link" target="_blank" rel="noreferrer">View Project</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
