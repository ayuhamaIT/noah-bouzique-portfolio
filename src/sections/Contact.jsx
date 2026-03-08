import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { useTranslation } from "../hooks/useTranslation";
import OldPhoneModel from "../components/models/OldPhoneModel";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

  
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur d'EmailJS:", error); 
    } finally {
      setLoading(false); 
    }
  };

  const { t } = useTranslation();
  const contactTitle = t('contactTitle') || "Vous voulez me contacter? Le formulaire est là pour ça!";
  const labelName = t('contact.labelName') || 'Votre prénom';
  const placeholderName = t('contact.placeholderName') || "N'hésitez pas à partager votre super prénom";
  const labelEmail = t('contact.labelEmail') || 'Votre Email';
  const placeholderEmail = t('contact.placeholderEmail') || 'Quelle est votre adresse email?';
  const labelMessage = t('contact.labelMessage') || 'Votre Message';
  const placeholderMessage = t('contact.placeholderMessage') || 'Comment puis-je vous aider?';
  const sendingText = t('contact.sending') || 'Envoi en cours...';
  const sendText = t('contact.send') || 'Envoyer le message';

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={contactTitle}
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #006EB8 0%, #b84900 100%)' }}>
              <OldPhoneModel />
            </div>
          </div>
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{labelName}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={placeholderName}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">{labelEmail}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={placeholderEmail}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">{labelMessage}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={placeholderMessage}
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle flex items-center justify-center group">
                      <img 
                        src="images/mail.png" 
                        alt="mail" 
                        className="w-[50%] h-[50%] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    <p className="text">
                      {loading ? sendingText : sendText}
                    </p>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
