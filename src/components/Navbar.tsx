import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import { FiMenu, FiX } from "react-icons/fi";
import cvPdf from "../assets/Mohamed Nazik CV .pdf";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tie the navbar "scrolled" state to the hero section position, so it resets
      // correctly when we scroll back up from the pinned Projects section.
      const aboutEl = document.getElementById("about");
      const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top : window.scrollY;
      const isScrolled = aboutTop <= -50;

      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Enable Lenis smooth scroll globally for all views as requested
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    // Handle smooth scroll animation frame
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis + keep navbar state in sync
    lenis.on("scroll", () => {
      ScrollTrigger.update();
      handleScroll();
    });

    // Handle resize
    window.addEventListener("resize", () => {
      lenis?.resize();
    });

    // Handle navigation links (works for both mobile and desktop)
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        let section = element.getAttribute("data-href") || element.getAttribute("href");

        // Only prevent default and scroll if it's an internal hash link
        if (section && section.startsWith("#")) {
          e.preventDefault();
          setIsMobileMenuOpen(false); // Close menu on click

          if (lenis) {
            lenis.scrollTo(section, {
              offset: 0,
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      });
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div className={`header ${scrolled ? "scrolled" : ""}`}>
        {/* <a href="#about" className="navbar-logo">
          ALAN_TURING.D
        </a> */}

        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={28} color="#cab4f3" /> : <FiMenu size={28} color="#cab4f3" />}
        </div>

        <ul className={isMobileMenuOpen ? "nav-links mobile-open" : "nav-links"}>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="Home" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <div className="active-indicator" />
              <HoverLinks text="Projects" />
            </a>
          </li>
          <li>
            <a data-href="#certifications" href="#certifications">
              <HoverLinks text="Certifications" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="Contact Me" />
            </a>
          </li>
          <li className="nav-resume">
            <a href={cvPdf} target="_blank" rel="noopener noreferrer">
              <HoverLinks text="Resume" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
