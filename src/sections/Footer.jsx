import { socialImgs as defaultSocialImgs } from "../constants";
import { useTranslation } from "../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const socialImgs = t('socialImgs') || defaultSocialImgs;
  const copyright = t('footer.copyright') || `© ${new Date().getFullYear()} Bouzique Noah. En cours de développement.`;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>@ayuhamaproductions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.url} target="_blank" rel="noopener noreferrer" className="icon">
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
