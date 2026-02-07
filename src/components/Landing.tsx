import { PropsWithChildren, useEffect, useState } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  // Titles with line breaks for two-line display
  const titles = ["Data\nScientist", "Data\nAnalyst", "AI/ML\nEngineer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500); // Longer pause (2.5 seconds)
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTimeout(() => { }, 800); // Brief pause before next title
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          {/* Name Section - Left Side */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              <br />
              <span>{lastName.toUpperCase()}</span>
            </h1>
          </div>
          {/* Profession Section - Right Side */}
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-h2-1" style={{ opacity: 1, top: 10, position: 'relative', whiteSpace: 'pre-line' }}>
                {text}
                <span className="cursor-blink">|</span>
              </div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
