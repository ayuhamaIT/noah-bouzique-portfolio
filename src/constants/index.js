const navLinks = [
    {
    name: "Mes compétences",
    link: "#skills",
  },

  {
    name: "Mon travail",
    link: "#work",
  },
  {
    name: "Mes experiences",
    link: "#experience",
  },
];


const counterItems = [
  { value: 3, suffix: "", label: "Ans d'expérience" },
  { value: 100, suffix: "+", label: "Miniatures Warhammer" },
  { value: 35, suffix: "+", label: "Gundams" },
  { value: 90, suffix: "%", label: "De victoires en airsoft" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Travail qualitatif",
    desc: "Prête la moindre attention aux détails pour garantir des résultats optimaux.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Communication constante",
    desc: "Maintenir un dialogue ouvert avec les clients pour s'assurer que leurs besoins sont satisfaits.",
  },
  {
    imgPath: "/images/time.png",
    title: "Respect des délais",
    desc: "Engagé à livrer les projets dans les délais convenus sans compromettre la qualité.",
  },
];

const techStackImgs = [
  {
    name: "Developpeur React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Developpeur Frontend",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Developpeur Backend",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Developpeur  Three",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Monteur vidéo",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Developpeur React",
    modelPath: "/models/react.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Developpeur Symfony",
    modelPath: "/models/symfony.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Developpeur Frontend",
    modelPath: "/models/html.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Developpeur Backend",
    modelPath: "/models/php.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
  {
    name: "Monteur vidéo",
    modelPath: "/models/premiere.glb",
    scale: 0.05,
    rotation: [1.5, 0, 0],
  },
];

const expCards = [
   {
    explication: "Mes premiers pas dans le développement web ont été réalisés lors de mon bac STI2D où j'ai pu apprendre les bases du développement ainsi que des compétences en gestion de projet.",
    logoPath: "/images/laprovidence_logo.png",
    title: "Bac STI2D spécialité systèmes informatique numériques ",
    date: "Septembre 2021 - Juin 2023",
    lieu: "Campus la Providence Blois, France",
    competences: [
      "Apprentissage des bases du développement web, y compris HTML, CSS, et JavaScript.",
      "Création de A-Z d'un automate en Arduino piloté par une application developpée par nos soins.",
      "Gestion de projets en équipe, incluant la planification, la répartition des tâches, et la communication efficace.",
    ],
  },

      {
    explication: "J'ai pu apprendre énormément de compétences variées en étudiant à l'IUT de Blois qu'elles soient dans le domaine du développement, de l'a communication ou de la création ",
    logoPath: "/images/iut_logo.png",
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
    explication: "Une expérience très formatrice ou j'ai pu apprendre à vendre un produit innovant tout en développant une grande aisance à l'oral.",
    logoPath: "/images/geneve_logo.png",
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
    explication: "Durant ce stage en entreprise, j'ai pu mettre en pratique mes compétences en développement web tout en découvrant le monde professionnel et ses exigences.",
    logoPath: "/images/jbinfo_logo.png",
    title: "Développement d'un site web complet pour une entreprise locale et travail dans la réparation hardware",
    date: "Avril 2025 - Juin 2025",
    lieu: "JBinfo Blois, France",
    competences: [
      "Utilisation des langages HTML, CSS, et JavaScript pour créer un site web attrayant et fonctionnel.",
      "Réparation et maintenance de matériel informatique, assurant un fonctionnement optimal des systèmes.",
      "Hebergement et déploiement du site web sur des serveurs locaux et en ligne.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/noah-bouzique-50495829a/",
  },
];

export {
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
