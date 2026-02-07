import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  useEffect(() => {
    // Only initialize Lenis on desktop (not touch devices)
    const isMobile = window.innerWidth <= 1024 || 'ontouchstart' in window;

    if (!isMobile) {
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

      // Start paused
      lenis.stop();

      // Handle smooth scroll animation frame
      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Handle resize
      window.addEventListener("resize", () => {
        lenis?.resize();
      });
    }

    // Handle navigation links (works for both mobile and desktop)
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let section = element.getAttribute("data-href") || element.getAttribute("href");
        if (section) {
          const target = document.querySelector(section) as HTMLElement;
          if (target) {
            // Use native scrollIntoView for better mobile support
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src={import.meta.env.BASE_URL + "nazik.jpg"} alt="Mohamed Nazik" style={{ height: "65px", width: "65px", borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }} />
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
