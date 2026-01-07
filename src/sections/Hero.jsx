import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Salut!
              </h1>
              <h1>Je suis Noah Bouzique</h1>
              <h1>Etudiant en 3ème Année</h1>
              <h1>de MMI</h1>

            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Envie de me connaître un peu plus? Continuez la visite!
            </p>

            <Button
              text="Mon CV"
              className="md:w-80 md:h-16 w-60 h-12"
              downloadCv={true}
            />
          </div>
        </header>


        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
