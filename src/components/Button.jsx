/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 * Or downloads the CV if downloadCv is true.
 */

const Button = ({ text, className, id, downloadCv = false }) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (downloadCv) {
      // Download CV
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "CV_Noah_Bouzique.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Scroll to section
      const target = document.getElementById(id);

      if (target && id) {
        const offset = window.innerHeight * 0.15;

        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle">
          {downloadCv && (
            <img 
              src="/images/download.png" 
              alt="download" 
              className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
        </div>
        <p className="text">{text}</p>
      </div>
    </a>
  );
};

export default Button;
