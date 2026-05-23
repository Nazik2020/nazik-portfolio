import { 
  SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow,
  SiPowerbi, SiReact, SiTailwindcss, SiVite, SiPhp, 
  SiMysql, SiPostgresql, SiCplusplus, SiTypescript, SiC,
  SiMongodb, SiTableau, SiNodedotjs, SiFlask, SiDjango,
  SiVisualstudiocode, SiAnaconda, SiGooglecolab, SiJupyter, SiOpencv,
  SiGit, SiGithub, SiMicrosoftazure, SiReact as SiReactNative
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql, TbWaveSine } from "react-icons/tb";
import "./styles/Technologies.css";

const techStack = [
  // Data Science Core
  { name: "Python", icon: <SiPython color="#3776AB" /> },
  { name: "Pandas", icon: <SiPandas color="#150458" /> },
  { name: "NumPy", icon: <SiNumpy color="#013243" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn color="#F7931E" /> },
  { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
  { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
  { name: "Wavelet", icon: <TbWaveSine color="#7A5AF8" /> },
  { name: "Seaborn", icon: <SiPython color="#4C72B0" /> },
  { name: "Jupyter", icon: <SiJupyter color="#F37626" /> },
  { name: "Anaconda", icon: <SiAnaconda color="#44A833" /> },
  { name: "Google Colab", icon: <SiGooglecolab color="#F9AB00" /> },
  { name: "Power BI", icon: <SiPowerbi color="#F2C811" /> },
  { name: "Tableau", icon: <SiTableau color="#E97627" /> },
  { name: "Azure ML", icon: <SiMicrosoftazure color="#5EA0EF" /> },
  
  // Development & Web
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "React Native", icon: <SiReactNative color="#61DAFB" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Vite", icon: <SiVite color="#646CFF" /> },
  { name: "PHP", icon: <SiPhp color="#777BB4" /> },
  { name: "Flask", icon: <SiFlask color="#ffffff" /> },
  { name: "Django", icon: <SiDjango color="#092E20" /> },
  { name: "Java", icon: <FaJava color="#ED8B00" /> },
  { name: "C", icon: <SiC color="#A8B9CC" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  
  // Database & Tools
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "SQL", icon: <TbSql color="#CC2927" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
  { name: "VS Code", icon: <SiVisualstudiocode color="#007ACC" /> },
  { name: "Azure", icon: <SiMicrosoftazure color="#0078D4" /> },
];

const Technologies = () => {
  return (
    <div className="tech-section" id="technologies">
        <h2 className="section-title tech-title">TECHNOLOGIES</h2>
        
        <div className="tech-marquee-container">
          <div className="tech-marquee">
            <div className="tech-marquee-content">
              {techStack.map((tech, i) => (
                <div className="tech-item" key={i}>
                  <div className="tech-icon-wrapper">
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
            <div className="tech-marquee-content" aria-hidden="true">
              {techStack.map((tech, i) => (
                <div className="tech-item" key={`clone-${i}`}>
                  <div className="tech-icon-wrapper">
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="tech-marquee" style={{ marginTop: "50px" }}>
            <div className="tech-marquee-content reverse-scroll">
              {techStack.map((tech, i) => (
                <div className="tech-item" key={i}>
                  <div className="tech-icon-wrapper">
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
            <div className="tech-marquee-content reverse-scroll" aria-hidden="true">
              {techStack.map((tech, i) => (
                <div className="tech-item" key={`clone-rev-${i}`}>
                  <div className="tech-icon-wrapper">
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
    </div>
  );
};

export default Technologies;
