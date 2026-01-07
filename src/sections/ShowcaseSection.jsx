import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const batimenRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      batimenRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      
      <div className="w-full">
        <TitleHeader
          title="Quelques réalisations"
        />
        <div style={{ marginTop: "2rem" }} className="showcaselayout">
          <div ref={batimenRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/JBinfo.jpg"/>
            </div>
            <div className="text-content">
              <h2>
                Developpement du site pour l'entreprise JBinfo
              </h2>
              <p className="text-white-50 md:text-xl">
                Ma première expérience dans le monde professionnel a été la création du site web pour JBinfo, une entreprise locale de services informatiques.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#040E21]">
                <img
                  src="/images/project2.png"
                  alt="Notre projet Dandata, plateforme de création d'articles"
                />
              </div>
              <h2>Notre projet Dandata, plateforme de création d'articles</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#040E21]">
                <video src="/videos/batimen.mp4" controls autoPlay muted loop />
              </div>
              <h2>Création d'une publicité pour l'entreprise fictive Batimen</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
