import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiFacebook } from "react-icons/fi";
import "./styles/Contact.css";
import { config } from "../config";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-flex-new">
          
          <div className="contact-col">
            <h4 className="contact-col-title">About Me</h4>
            <p className="contact-col-desc">{config.developer.description}</p>
          </div>
          
          <div className="contact-col">
            <h4 className="contact-col-title">Quick Links</h4>
            <div className="contact-links-grid">
              <a href="#about" className="contact-link-item">Home</a>
              <a href="#work" className="contact-link-item">Projects</a>
              <a href="#certifications" className="contact-link-item">Certifications</a>
              <a href="#career" className="contact-link-item">Experiences</a>
              <a href="#contact" className="contact-link-item">Contact Me!</a>
            </div>
          </div>

          <div className="contact-col">
            <h4 className="contact-col-title">Connect With Me</h4>
            <div className="contact-social-flex">
              <a href={config.contact?.github || `https://github.com/${config.social.github}`} target="_blank" rel="noreferrer" className="contact-social-bubble">
                <FiGithub />
              </a>
              <a href={config.contact?.linkedin || "#"} target="_blank" rel="noreferrer" className="contact-social-bubble">
                <FiLinkedin />
              </a>
              <a href={config.contact?.facebook || "#"} target="_blank" rel="noreferrer" className="contact-social-bubble">
                <FiFacebook />
              </a>
              <a href={config.contact?.instagram || "#"} target="_blank" rel="noreferrer" className="contact-social-bubble">
                <FiInstagram />
              </a>
              <a href={`mailto:${config.social.email}`} className="contact-social-bubble">
                <FiMail />
              </a>
            </div>
          </div>
          
        </div>

        <div className="contact-footer-bottom">
           <p>© {new Date().getFullYear()} {config.developer.fullName} | {config.developer.title}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
