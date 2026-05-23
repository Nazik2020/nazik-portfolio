import { FiExternalLink } from "react-icons/fi";
import "./styles/Work.css";
import { useEffect } from "react";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    // The "reveal" animation for these cards is handled centrally in MainContainer.tsx
    return () => {
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <h2 className="work-section-title">
        My <span>Projects</span>
      </h2>
      
      <div className="work-container section-container">
        <div className="project-grid">
          {config.projects.map((project) => (
            <div className="project-card" key={project.id}>
              {/* Top: Image + Category Badge */}
              <div className="project-card-image">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} />
                </a>
                <div className="project-category-badge">
                  {project.category}
                </div>
              </div>

              {/* Bottom: Content */}
              <div className="project-card-info">
                <div className="project-card-header">
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    <h3>{project.title}</h3>
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link-icon"
                  >
                    <FiExternalLink />
                  </a>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech-stack">
                  {project.technologies.split(",").map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
