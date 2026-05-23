import "./styles/Certifications.css";
import { FiStar, FiPieChart, FiTarget, FiUsers } from "react-icons/fi";

const volunteering = [
  {
    title: "Microsoft Student Ambassador",
    desc: "Currently serving as a Microsoft Learn Student Ambassador, leading student-focused technical learning initiatives. Conduct workshops, promote Microsoft technologies, and support the student developer community through mentoring and knowledge-sharing.",
    role: "Microsoft • Apr 2026 - Present",
    icon: <FiStar />,
  },
  {
    title: "Treasurer",
    desc: "Managing financial planning, budgeting, and fund allocation for the student branch; supporting execution of technical events, workshops, and IEEE-affiliated programes.",
    role: "IEEE Uva Wellassa Univeristy Student Branch • 2026",
    icon: <FiPieChart />,
  },
  {
    title: "Project Chair – HacKMS'26 Hackathon",
    desc: "Led planning and execution of a 12-hour hackathon and internship pathway program with industry mentors.",
    role: "MS Club of Uva Wellassa University • 2025",
    icon: <FiTarget />,
  },
  {
    title: "Student Coordinator – Data Science & AI Track",
    desc: "Managed participant communications and research submissions for the Data Science track.",
    role: "IMPETUS Research Symposium • 2026",
    icon: <FiUsers />,
  },
];

const Volunteering = () => {
  return (
    <div className="extra-section" id="volunteering">
      <div className="extra-container section-container">
        <div className="cert-header-layout">
          <h2 className="section-title" style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px", color: "#ffffff" }}>
            VOLUNTEERING
          </h2>
        </div>
        <div className="vol-grid">
          {volunteering.map((vol, index) => (
            <div className="vol-card" key={index}>
              <div className="vol-icon-box">{vol.icon}</div>
              <h3 className="vol-title">{vol.title}</h3>
              <p className="vol-desc">{vol.desc}</p>
              <p className="vol-role">{vol.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
