import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          <img src="images/icon.png" alt="Logo" />
        </a>

        <nav className="desktop">
          <ul>
            {(() => {
              try {
                const { t } = useTranslation();
                const navLinks = t('navLinks') || [];
                return navLinks.map(({ link, name }) => (
                  <li key={name} className="group">
                    <a href={link}>
                      <span>{name}</span>
                      <span className="underline" />
                    </a>
                  </li>
                ));
              } catch (e) {
                return null;
              }
            })()}
          </ul>
        </nav>

        <div style={{ marginLeft: 16 }}>
          <LanguageSwitcher />
        </div>

        {/*<a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Me contacter</span>
          </div>
        </a>*/}
      </div>
    </header>
  );
}

export default NavBar;
