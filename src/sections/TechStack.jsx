import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons as defaultTechStackIcons } from "../constants";
import { useTranslation } from "../hooks/useTranslation";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={(() => {
            try {
              const { t } = useTranslation();
              return t('techTitle') || 'Skills';
            } catch (e) {
              return 'Skills';
            }
          })()}
        />
        
        <div className="tech-grid">
          {(() => {
            try {
              const { t } = useTranslation();
              const translatedNames = t('techStackImgs') || [];
              return defaultTechStackIcons.map((techStackIcon, idx) => (
                <div
                  key={techStackIcon.modelPath}
                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-2xl"
                >
                  <div className="tech-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <TechIconCardExperience model={techStackIcon} />
                    </div>
                    <div className="padding-x w-full">
                      <p>{(translatedNames[idx] && translatedNames[idx].name) || techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ));
            } catch (e) {
              return defaultTechStackIcons.map((techStackIcon) => (
                <div
                  key={techStackIcon.modelPath}
                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-2xl"
                >
                  <div className="tech-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <TechIconCardExperience model={techStackIcon} />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ));
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
