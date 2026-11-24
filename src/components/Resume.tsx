import { FiFileText, FiDownload, FiExternalLink } from "react-icons/fi";
import "./styles/Resume.css";
import cvDataScientist from "../assets/Mohamed Nazik CV Nov.pdf";
import cvAimlEngineer from "../assets/AIML Engineering (2).pdf";
import cvJuniorDataScientist from "../assets/Junior_Data_Scientist.pdf";

interface ResumeItem {
  id: string;
  title: string;
  badge?: string;
  subtitle: string;
  file: string;
  downloadName: string;
}

const resumeList: ResumeItem[] = [
  {
    id: "data-scientist-intern",
    title: "Data Scientist Intern",
    badge: "Primary career focus",
    subtitle: "Data Science, Predictive Modelling & Analytics",
    file: cvDataScientist,
    downloadName: "Mohamed_Nazik_Data_Scientist_Intern.pdf",
  },
  {
    id: "aiml-engineer-intern",
    title: "AI/ML Engineer Intern",
    subtitle: "Machine Learning, Deep Learning, NLP & AI Deployment",
    file: cvAimlEngineer,
    downloadName: "Mohamed_Nazik_AIML_Engineer_Intern.pdf",
  },
  {
    id: "junior-data-scientist",
    title: "Junior Data Scientist",
    subtitle: "International & Entry-Level Opportunities",
    file: cvJuniorDataScientist,
    downloadName: "Mohamed_Nazik_Junior_Data_Scientist.pdf",
  },
];

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="resume-section-title">
            Curriculum <span>Vitae</span>
          </h2>
          <p className="resume-section-desc">
            Explore my qualifications, technical skills and project experience through role-specific CVs.
          </p>
        </div>

        <div className="resume-list">
          {resumeList.map((item) => (
            <div
              key={item.id}
              className="resume-item-row"
              onClick={() => window.open(item.file, "_blank", "noopener,noreferrer")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(item.file, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className="resume-item-left">
                <div className="resume-icon-box">
                  <FiFileText size={20} />
                </div>
                <div className="resume-item-info">
                  <div className="resume-title-wrap">
                    <h3 className="resume-item-title">{item.title}</h3>
                    {item.badge && (
                      <span className="resume-badge-focus">{item.badge}</span>
                    )}
                  </div>
                  <p className="resume-item-subtitle">{item.subtitle}</p>
                </div>
              </div>

              <div className="resume-item-actions">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-action-btn"
                  title="View CV in new tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={18} />
                </a>
                <a
                  href={item.file}
                  download={item.downloadName}
                  className="resume-action-btn download-btn"
                  title={`Download ${item.title} CV`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiDownload size={19} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
