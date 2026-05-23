import { useState } from "react";
import "./styles/Certifications.css";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    platform: "Coursera",
    date: "Apr 2026",
    skills: "Supervised Learning (Linear Regression, Logistic Regression, Neural Networks, Decision Trees), Unsupervised Learning (Clustering, Anomaly Detection), Recommender Systems (Collaborative Filtering, Content-Based Deep Learning), Reinforcement Learning, Model Development and Evaluation",
    link: "https://www.coursera.org/account/accomplishments/specialization/BMB60VX27ZW2",
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    date: "Jan 2026",
    skills: "Neural Networks, TensorFlow, Decision Trees, Random Forest, Boosted Trees, Classification Algorithms, Logistic Regression, Model Evaluation, Deep Learning, Data Ethics",
    link: "https://www.coursera.org/account/accomplishments/verify/6XRCN4LN58E4",
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    date: "Jan 2026",
    skills: "Python, NumPy, scikit-learn, Regression Analysis, Logistic Regression, Classification Algorithms, Feature Engineering, Predictive Modeling, Data Preprocessing, Model Evaluation",
    link: "https://www.coursera.org/account/accomplishments/verify/3LV0B606PANH",
  },
  {
    title: "Supervised Machine Learning with Logistic Regression & Naïve Bayes",
    issuer: "Great Learning",
    platform: "Great Learning",
    date: "Dec 2025",
    skills: "Logistic Regression, Naïve Bayes, Scikit-learn",
    link: "https://www.mygreatlearning.com/certificate/DBUFXTHE?referrer_code=GLP6TTK0E4JWK",
  },
  {
    title: "Level Up: Python Data Acquisitions, Prep & EDA",
    issuer: "LinkedIn Learning",
    platform: "LinkedIn",
    date: "Dec 2024",
    skills: "Python programming, Data Acquisition, Exploratory Data Analysis (EDA)",
    link: "https://www.linkedin.com/learning/certificates/ce7c3546b36487893a301ab445c34e388bbaaf160d58ea9ed696d70fd4ee61d6",
  },
  {
    title: "SQL for Beginners",
    issuer: "Alison",
    platform: "Alison",
    date: "Jul 2024",
    skills: "SQL fundamentals, Database Design, Query Techniques",
    link: "https://alison.com/certification/check/0d3f6457f0",
  },
];

const categories = ["All", "Stanford University & DeepLearning.AI", "DeepLearning.AI", "Great Learning", "LinkedIn Learning", "Alison"];

const Certifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filteredCerts = certifications.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.skills.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All" || cert.issuer === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="extra-section" id="certifications">
      <div className="extra-container section-container">
        
        <div className="cert-header-layout">
           <h2 className="section-title" style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px" }}>CERTIFICATIONS</h2>
           
           <div className="cert-search-bar">
             <FiSearch className="search-icon" />
             <input 
               type="text" 
               placeholder="Search certifications..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
           </div>

           <div className="cert-filters">
             {categories.map(cat => (
               <button 
                 key={cat} 
                 className={`cert-filter-btn ${activeTab === cat ? "active" : ""}`}
                 onClick={() => setActiveTab(cat)}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        <div className="cert-grid-interactive">
          {filteredCerts.map((cert, index) => (
            <a href={cert.link} target="_blank" rel="noreferrer" className="cert-card-interactive" key={index}>
              <div className="cert-card-top">
                <h3>{cert.title}</h3>
                <FiArrowUpRight className="cert-arrow" />
              </div>
              <p className="cert-provider">{cert.issuer} • {cert.date}</p>
              <p className="cert-course-desc">
                <strong>Skills gained:</strong> {cert.skills}
              </p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certifications;
