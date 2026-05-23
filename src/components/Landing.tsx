import "./styles/Landing.css";
import { config } from "../config";
import profileImg from "../assets/profile.jpg";
import cvPdf from "../assets/Mohamed_Nazik_CV (2).pdf";
import { useState, useEffect } from "react";

const titles = ["DATA SCIENTIST", "DATA ANALYST", "AI/ML ENGINEER"];

const Landing = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = titles[currentTitleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100); // Typing speed vs deleting speed

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <>
      <section className="landing-section" id="about">
        {/* Background radial glow */}
        <div className="landing-hero-glow" />

        <div className="landing-container">
          {/* ── LEFT ── */}
          <div className="landing-left">
            <p className="landing-tag">DATA SCIENCE • MACHINE LEARNING</p>
            <h1 className="landing-name">
              {config.developer.fullName.toUpperCase()},
              <span>{currentText}<span className="typing-cursor">|</span></span>
            </h1>
            <p className="landing-desc">
              Third-year Computer Science undergraduate focused on Data Science and Machine Learning. Skilled in data analysis, predictive modeling, and dashboard development, with a passion for solving real-world problems using data. As a Microsoft Learn Student Ambassador, I actively engage in learning, sharing knowledge, and contributing to the tech community.
            </p>
            <div className="landing-btns">
              <a href="#work" className="btn-primary">
                VIEW PROJECTS&nbsp; →
              </a>
              <a href="#contact" className="btn-secondary">
                CONTACT ME
              </a>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="landing-right">
            <div className="landing-photo-frame rect-frame">
              {/* Abstract line arts (matches image 1 expected style) */}
              <div className="rect-wireframe skew-1">
                <div className="rect-node node-tl" />
                <div className="rect-node node-br" />
              </div>

              <div className="rect-wireframe skew-2">
                <div className="rect-node node-tr" />
                <div className="rect-node node-bl" />
              </div>

              {/* Decorative behind-frame requested by user */}
              <div className="photo-bg-frame" />

              {/* Photo */}
              <div className="photo-rect">
                <img
                  src={profileImg}
                  alt={config.developer.fullName}
                  className="photo-img"
                />
              </div>
            </div>
            {/* Bar chart decorative card */}
            <div className="float-chart">
              <div className="chart-bars-wrap">
                <div className="chart-bar" style={{ height: "40%" }} />
                <div className="chart-bar bar-secondary" style={{ height: "100%" }} />
                <div className="chart-bar bar-tertiary" style={{ height: "66%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Floating Badges */}
      <a
        href={cvPdf}
        target="_blank"
        rel="noreferrer"
        className="badge-resume"
      >
        <span style={{
          fontSize: "50px"
        }}>🗎</span>
        RESUME
      </a>



      {/* Background glow blobs */}
      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="nav-fade" />
    </>
  );
};

export default Landing;
