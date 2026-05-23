import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import { config } from "../config";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section hidden-mobile">
      <div className="social-icons" data-cursor="icons" id="social">
        <a href={config.contact.github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href={config.contact.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href={config.contact.instagram} target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href={config.contact.facebook} target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
