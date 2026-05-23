import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  return (
    <div id="career" className="career-section section-container">
      <div className="career-container" style={{ width: "100%" }}>
        <h2>
          My Career <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info-left-aligned">
          <div className="career-timeline"></div>
          {config.experiences.map((exp, index) => {
            const isLast = index === config.experiences.length - 1;
            return (
              <div key={index} className="career-item-linear">
                <div className={`career-static-dot ${(isLast || exp.color === "red") ? "career-static-dot-red" : ""}`}></div>
                <span className={`career-date-linear ${(isLast || exp.color === "red") ? "career-date-red" : ""}`}>
                  {exp.period}
                </span>
                <h3 className="career-title-linear">{exp.position}</h3>
                {exp.company && <h4 className="career-company-linear">{exp.company}</h4>}
                <p className="career-desc-linear">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
