import { useEffect, useState } from "react";
import Career from "./Career";
import Certifications from "./Certifications";
import Volunteering from "./Volunteering";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Work from "./Work";
import Technologies from "./Technologies";
import setSplitText from "./utils/splitText";



import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";


const MainContainer = () => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
      ScrollTrigger.refresh();
    };
    resizeHandler();
    
    // Give the DOM and dynamic grids a moment to snap into their true height, then refresh GSAP Math
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    window.addEventListener("resize", resizeHandler);

    // Initialize Scroll-Triggered Fade-In Animations for Sections and their contents
    const animationConfigs = [
      { selector: ".career-section", children: "h2, .career-item-linear", delay: 0.3 }, 
      { selector: ".work-section", children: ".work-section-title, .project-card" }, 
      { selector: ".tech-section", children: ".section-title, .tech-item", multiRow: true }, 
      { selector: ".extra-section", children: ".section-title, .cert-card-interactive, .vol-card", delay: 0.2 }, 
      { selector: ".contact-section", children: ".contact-col" }
    ];

    const ctx = gsap.context(() => {
      animationConfigs.forEach(({ selector, children, multiRow }) => {
        const sections = document.querySelectorAll(selector);
        if (sections.length === 0) return;

        sections.forEach((section) => {
          // Animate the section container itself slightly
          gsap.fromTo(section, 
            { opacity: 0 }, 
            { 
              opacity: 1, 
              duration: 1, 
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                toggleActions: "play none none none"
              }
            }
          );

          if (multiRow && selector === ".tech-section") {
            // Special handling for Technologies marquee rows
            const rows = section.querySelectorAll(".tech-marquee");
            rows.forEach((row) => {
              const items = row.querySelectorAll(".tech-item");
              if (items.length > 0) {
                gsap.fromTo(
                  items,
                  { opacity: 0, scale: 0.8, y: 20 },
                  {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                      trigger: row,
                      start: "top 85%",
                      toggleActions: "play none none none"
                    }
                  }
                );
              }
            });
          } else {
            // Standard staggered reveal for other sections
            const childElements = section.querySelectorAll(children);
            if (childElements.length > 0) {
              gsap.fromTo(
                childElements,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.2,
                  delay: animationConfigs.find(c => c.selector === selector)?.delay || 0,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none none"
                  }
                }
              );
            }
          }
        });
      });
    });

    return () => {
      window.removeEventListener("resize", resizeHandler);
      ctx.revert(); // Clean up GSAP animations on unmount
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Navbar />
      <SocialIcons />
      <Landing />
      <Career />
      <Work />
      <div style={{ height: "2cm" }}></div>
      <Technologies />
      <div style={{ height: "2cm" }}></div>
      <Certifications />
      <div style={{ height: "2cm" }}></div>
      <Volunteering />
      <Contact />
    </div>
  );
};

export default MainContainer;
