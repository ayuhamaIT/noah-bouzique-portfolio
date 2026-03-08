export const translations = {
  fr: {
    navLinks: [
      { name: "Mes compétences", link: "#skills" },
      { name: "Mon travail", link: "#work" },
      { name: "Mes experiences", link: "#experience" },
    ],

    counterItems: [
      { value: 3, suffix: "", label: "Ans d'expérience" },
      { value: 2, suffix: "", label: "Sites web développés" },
      { value: 800, suffix: "H+", label: "de développement" },
      { value: 20, suffix: "+", label: "Langages et frameworks utilisés" },
    ],

    abilities: [
      {
        imgPath: "images/seo.png",
        title: "Travail qualitatif",
        desc: "Prête la moindre attention aux détails pour garantir des résultats optimaux.",
      },
      {
        imgPath: "images/chat.png",
        title: "Communication constante",
        desc: "Maintenir un dialogue ouvert avec les clients pour s'assurer que leurs besoins sont satisfaits.",
      },
      {
        imgPath: "images/time.png",
        title: "Respect des délais",
        desc: "Engagé à livrer les projets dans les délais convenus sans compromettre la qualité.",
      },
    ],

    techStackImgs: [
      { name: "Développeur React", imgPath: "images/logos/react.png" },
      { name: "Développeur Frontend", imgPath: "images/logos/python.svg" },
      { name: "Développeur Backend", imgPath: "images/logos/node.png" },
      { name: "Développeur  Backend", imgPath: "images/logos/three.png" },
      { name: "Monteur vidéo", imgPath: "images/logos/git.svg" },
    ],

    techStackIcons: [
      { name: "Développeur React", modelPath: "models/react.glb", scale: 1, rotation: [0, 0, 0] },
      { name: "Développeur Symfony", modelPath: "models/symfony.glb", scale: 0.05, rotation: [1.5, 0, 0] },
      { name: "Développeur Frontend", modelPath: "models/html.glb", scale: 0.05, rotation: [1.5, 0, 0] },
      { name: "Développeur Backend", modelPath: "models/php.glb", scale: 0.05, rotation: [1.5, 0, 0] },
      { name: "Monteur vidéo", modelPath: "models/premiere.glb", scale: 0.05, rotation: [1.5, 0, 0] },
    ],

    expCards: [
              {
        explication: "Durant ce stage en entreprise, j'ai pu mettre en pratique mes compétences en développement web tout en découvrant le monde professionnel et ses exigences.",
        logoPath: "images/jbinfo_logo.png",
        title: "Développement d'un site web complet pour une entreprise locale et travail dans la réparation hardware",
        date: "Avril 2025 - Juin 2025",
        lieu: "JBinfo Blois, France",
        competences: [
          "Utilisation des langages HTML, CSS, et JavaScript pour créer un site web attrayant et fonctionnel.",
          "Réparation et maintenance de matériel informatique, assurant un fonctionnement optimal des systèmes.",
          "Hebergement et déploiement du site web sur des serveurs locaux et en ligne.",
        ],
      },
            {
        explication: "Une expérience très formatrice ou j'ai pu apprendre à vendre un produit innovant tout en développant une grande aisance à l'oral.",
        logoPath: "images/geneve_logo.png",
        title: "Vainqueur d'une médaille d'or et de deux médailles d'argent au salon de Genève des inventeurs",
        date: "Avril 2024",
        lieu: "Membre de l'association Sécuri-vie",
        competences: [
          "Développement de mes capacités de présentation et de vente en présentant notre produit à divers investisseurs et juges.",
          "Renforcement de mon esprit critique en recevant des retours constructifs sur notre invention mais aussi en étant juré pour le compte de l'association française des inventeurs",
          "Amélioration de mes compétences en travail d'équipe en collaborant étroitement avec mes coéquipiers pour affiner notre présentation.",
        ],
      },
            {
        explication: "J'ai pu apprendre énormément de compétences variées en étudiant à l'IUT de Blois qu'elles soient dans le domaine du développement, de l'a communication ou de la création ",
        logoPath: "images/iut_logo.png",
        title: "Développement Web frontend et Backend/Communication/Création",
        date: "Septembre 2023 - Aujourd'hui",
        lieu: "IUT de Blois, France",
        competences: [
          "Développement de sites web interactifs et responsives en utilisant React.js et d'autres technologies front-end ou backend.",
          "Créations d'outils de communication visuelle pour promouvoir des événements et des projets.",
          "Etablissement de stratégies de communication efficaces pour atteindre divers publics.",
        ],
      },
      {
        explication: "Mes premiers pas dans le développement web ont été réalisés lors de mon bac STI2D où j'ai pu apprendre les bases du développement ainsi que des compétences en gestion de projet.",
        logoPath: "images/laprovidence_logo.png",
        title: "Bac STI2D spécialité systèmes informatique numériques ",
        date: "Septembre 2021 - Juin 2023",
        lieu: "Campus la Providence Blois, France",
        competences: [
          "Apprentissage des bases du développement web, y compris HTML, CSS, et JavaScript.",
          "Création de A-Z d'un automate en Arduino piloté par une application developpée par nos soins.",
          "Gestion de projets en équipe, incluant la planification, la répartition des tâches, et la communication efficace.",
        ],
      },
    ],

    expLogos: [
      { name: "logo1", imgPath: "images/logo1.png" },
      { name: "logo2", imgPath: "images/logo2.png" },
      { name: "logo3", imgPath: "images/logo3.png" },
    ],

    socialImgs: [
      { name: "linkedin", imgPath: "images/linkedin.png", url: "https://www.linkedin.com/in/noah-bouzique-50495829a/" },
    ],
    techTitle: "Mes principales compétences",
    experienceTitle: "Mon expérience",
    skillsAcquired: "Compétences acquises",
    contactTitle: "Vous voulez me contacter? Le formulaire est là pour ça!",
    contact: {
      labelName: "Votre prénom",
      placeholderName: "N'hésitez pas à partager votre super prénom",
      labelEmail: "Votre Email",
      placeholderEmail: "Quelle est votre adresse email?",
      labelMessage: "Votre Message",
      placeholderMessage: "Comment puis-je vous aider?",
      sending: "Envoi en cours...",
      send: "Envoyer le message",
    },
    nav: {
      contactBtn: "Me contacter",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Bouzique Noah. En cours de développement.`,
    },
    hero: {
      line1: "Salut!",
      line2: "Je suis Noah Bouzique",
      line3: "Etudiant en 3ème Année",
      line4: "de MMI",
      paragraph: "Envie de me connaître un peu plus? Continuez la visite!",
      cvText: "Mon CV",
    },
    showcase: {
      title: "Quelques réalisations",
      projects: [
        {
          title: "Développement du site pour l'entreprise JBinfo",
          desc: "Ma première expérience dans le monde professionnel a été la création du site web pour JBinfo, une entreprise locale de services informatiques.",
          imgAlt: "JBinfo site screenshot",
        },
        {
          title: "Notre projet Dandata, plateforme de création d'articles",
          desc: "Plateforme collaborative pour la création et la publication d'articles.",
          imgAlt: "Dandata project screenshot",
        },
        {
          title: "Création d'une publicité pour l'entreprise fictive Batimen",
          desc: "Réalisation d'une publicité vidéo pour une entreprise fictive, utilisée comme projet de communication.",
          imgAlt: "Batimen promo video",
        },
      ],
    },
  },

  en: {
    navLinks: [
      { name: "Skills", link: "#skills" },
      { name: "Work", link: "#work" },
      { name: "Experience", link: "#experience" },
    ],

    counterItems: [
      { value: 3, suffix: "", label: "Years of experience" },
      { value: 2, suffix: "", label: "Websites built" },
      { value: 800, suffix: "H+", label: "Development hours" },
      { value: 20, suffix: "+", label: "Languages & frameworks used" },
    ],

    abilities: [
      {
        imgPath: "images/seo.png",
        title: "Quality work",
        desc: "Pays close attention to details to ensure optimal results.",
      },
      {
        imgPath: "images/chat.png",
        title: "Continuous communication",
        desc: "Maintain an open dialogue with clients to ensure their needs are met.",
      },
      {
        imgPath: "images/time.png",
        title: "Deadline oriented",
        desc: "Committed to delivering projects on time without compromising quality.",
      },
    ],

    techStackImgs: [
      { name: "React Developer", imgPath: "images/logos/react.png" },
      { name: "Symfony Developer", imgPath: "images/logos/python.svg" },
      { name: "Frontend Developer", imgPath: "images/logos/node.png" },
      { name: "Backend Developer", imgPath: "images/logos/three.png" },
      { name: "Video Editor", imgPath: "images/logos/git.svg" },
    ],

    techStackIcons: [
      { name: "React Developer", modelPath: "models/react.glb", scale: 1, rotation: [0, 0, 0] },
      { name: "Symfony Developer", modelPath: "models/symfony.glb", scale: 0.05, rotation: [1.5, 0, 0] },
      { name: "Frontend Developer", modelPath: "models/html.glb", scale: 0.05, rotation: [1.5, 0, 0] },
      { name: "Backend Developer", modelPath: "models/php.glb", scale: 0.05, rotation: [1.5, 0, 0] },
      { name: "Video Editor", modelPath: "models/premiere.glb", scale: 0.05, rotation: [1.5, 0, 0] },
    ],

    expCards: [
              {
        explication: "During this company internship I applied my web development skills while discovering professional expectations.",
        logoPath: "images/jbinfo_logo.png",
        title: "Developed a complete website for a local company and worked on hardware repair",
        date: "April 2025 - June 2025",
        lieu: "JBinfo Blois, France",
        competences: [
          "Used HTML, CSS, and JavaScript to build an attractive and functional website.",
          "Performed hardware repair and maintenance to ensure systems ran optimally.",
          "Hosted and deployed the website on local and online servers.",
        ],
      },
            {
        explication: "A formative experience where I learned to sell an innovative product while gaining strong public speaking skills.",
        logoPath: "images/geneve_logo.png",
        title: "Winner of a gold medal and two silver medals at the Geneva Inventors' Fair",
        date: "April 2024",
        lieu: "Member of association Sécuri-vie",
        competences: [
          "Improved presentation and sales skills by pitching to investors and judges.",
          "Strengthened critical thinking through constructive feedback and jury work.",
          "Improved teamwork by closely collaborating with teammates to refine our presentation.",
        ],
      },
              {
        explication: "I gained many varied skills studying at IUT de Blois, from development to communication and creation.",
        logoPath: "images/iut_logo.png",
        title: "Frontend & Backend Web Development / Communication / Creation",
        date: "September 2023 - Present",
        lieu: "IUT de Blois, France",
        competences: [
          "Develop interactive, responsive websites using React.js and other front/back technologies.",
          "Create visual communication tools to promote events and projects.",
          "Define effective communication strategies to reach different audiences.",
        ],
      },
      {
        explication: "My first steps in web development were during my STI2D baccalaureate where I learned the basics of development and project management skills.",
        logoPath: "images/laprovidence_logo.png",
        title: "STI2D Baccalaureate - Computer Systems specialization",
        date: "September 2021 - June 2023",
        lieu: "Campus la Providence Blois, France",
        competences: [
          "Learned web development basics including HTML, CSS, and JavaScript.",
          "Built an Arduino-based automation project controlled by a custom application.",
          "Team project management including planning and task distribution.",
        ],
      },
    ],

    expLogos: [
      { name: "logo1", imgPath: "images/logo1.png" },
      { name: "logo2", imgPath: "images/logo2.png" },
      { name: "logo3", imgPath: "images/logo3.png" },
    ],

    socialImgs: [
      { name: "linkedin", imgPath: "images/linkedin.png", url: "https://www.linkedin.com/in/noah-bouzique-50495829a/" },
    ],
    techTitle: "Main skills",
    experienceTitle: "Experience",
    skillsAcquired: "Skills acquired",
    contactTitle: "Want to contact me? The form is here!",
    contact: {
      labelName: "Your name",
      placeholderName: "Feel free to share your name",
      labelEmail: "Your email",
      placeholderEmail: "What's your email address?",
      labelMessage: "Your message",
      placeholderMessage: "How can I help you?",
      sending: "Sending...",
      send: "Send message",
    },
    nav: {
      contactBtn: "Contact me",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Noah Bouzique. In development.`,
    },
    hero: {
      line1: "Hi!",
      line2: "I'm Noah Bouzique",
      line3: "3rd Year Student",
      line4: "MMI",
      paragraph: "Want to know more about me? Continue exploring!",
      cvText: "My CV",
    },
    showcase: {
      title: "Some projects",
      projects: [
        {
          title: "Developed the JBinfo company website",
          desc: "My first professional experience was building the JBinfo website, a local IT services company.",
          imgAlt: "JBinfo site screenshot",
        },
        {
          title: "Our Dandata project — article creation platform",
          desc: "A collaborative platform for creating and publishing articles.",
          imgAlt: "Dandata project screenshot",
        },
        {
          title: "Created an ad for fictional company Batimen",
          desc: "Produced a promotional video for a fictional company as a communication project.",
          imgAlt: "Batimen promo video",
        },
      ],
    },
  },
};

export default translations;
