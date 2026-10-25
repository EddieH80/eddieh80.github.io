import profileImage from "./assets/profile.jpg";
import pathTracerImage from "./assets/path-tracer.png";
import toonHorseImage from "./assets/toon-horse.png";
import tibetanMonasteryImage from "./assets/tibetan-monastery.jpg";
import daoTFTImage from "./assets/dao-tft.png";
import fabricClusteringImage from "./assets/fabric-composition-clustering.png";
import miniMinecraftImage from "./assets/mini-minecraft.png";
import uChicagoImage from "./assets/uchicago.png";
import uPennImage from "./assets/upenn.png";
import interSystemsImage from "./assets/intersystems.jpg";
import youtubeAnalysisImage from "./assets/youtube-analysis.png";
import rolldownTrainerImage from "./assets/rolldown-trainer.png";


export const siteConfig = {
  profileImage,
  name: "Eddie Huang",
  title: "Applied Data Science @ UChicago\nCG @ UPenn",
  description: "Portfolio website of Eddie Huang",
  accentColor: "#1d4ed8",
  social: {
    email: "eddieh@uchicago.edu",
    linkedin: "https://linkedin.com/in/eddiehuang8045",
    github: "https://github.com/EddieH80",
    // Place your PDF at public/resume.pdf
    resume: "/resume.pdf",
  },
  aboutMe:
    "Thanks for stopping by :) my name is Eddie and I'm currently a graduate student at the University of Chicago's Master's in Applied Data Science program. " +
    "I have interests in agentic AI workflows, computer graphics, competitive e-sports, rock-climbing, and running.",
  skills: ["Python", "AWS", "Docker", "C++", "JavaScript", "CI/CD"],
  // Number of projects shown before the "Show more" button
  maxProjectsShown: 6,
  projects: [
    {
      name: "Clothing Brand Product Composition Data Analysis",
      description:
        "Built a data pipeline scraping fabric composition data from public API endpoints across 26 clothing brands with Asian cultural influence. Performed K-means clustering and random forest regression to get insights into product composition and price prediction",
      link: "https://github.com/EddieH80/fabric-composition-clustering",
      skills: ["Python", "Machine Learning", "Web Scraping"],
      tags: ["Data Science"],
      image: fabricClusteringImage,
    },
    {
      name: "Dao TFT",
      description:
        "Built a website for the online competitive game Teamfight Tactics (TFT) that allows players to enter information of their in-game status and receive proper recommendations for gameplay decisions.",
      link: "https://dao-tft.vercel.app/",
      skills: ["TypeScript", "React", "ETL"],
      tags: ["Web Development"],
      image: daoTFTImage,
    },
    {
      name: "Monte Carlo Path Tracer",
      description:
        "Implemented a path tracer following pbr-book.org for rendering 3-D scenes using global illumination and aperture setting simulation.",
      link: "https://github.com/EddieH80/pathtracer",
      skills: ["C++", "OpenGL"],
      tags: ["Computer Graphics"],
      image: pathTracerImage,
    },
    {
      name: "TFT Rolldown Trainer",
      description:
        "Created a web-based practice tool environment for players of the game Teamfight Tactics (TFT) to exercise the rolldown mechanic.",
      link: "https://eddieh80.github.io/tft-rolldown-app/",
      skills: ["HTML", "CSS", "JavaScript"],
      tags: ["Web Development"],
      image: rolldownTrainerImage,
    },
    {
      name: "Procedural Toon Horse Generator",
      description:
        "Used signed distance functions and raymarching to create a movable horse model that is shaded using toon shading and noise functions. Incorporated randomness to generate differently shaded horses in different poses.",
      link: "https://eddieh80.github.io/final-project/",
      skills: ["C++", "WebGL"],
      tags: ["Computer Graphics"],
      image: toonHorseImage
    },
    {
      name: "Procedural Tibetan Monastery Generator",
      description:
        "Used Houdini and L-System code to parametrize generation of structures inspired by Buddhist Tibetan Monasteries.",
      link: "https://github.com/EddieH80/dmd_senior_project",
      skills: ["Houdini"],
      tags: ["Computer Graphics"],
      image: tibetanMonasteryImage,
    },
    {
      name: "Mini Minecraft",
      description:
        "Collaborated in a team of three to recreate core features of the game Minecraft. Developed key features such as procedural terrain generation, L-system rivers, procedurally placed assets, and additional customized biomes.",
      link: "https://vimeo.com/489007178?share=copy&fl=sv&fe=ci",
      skills: ["C++", "Procedural Noise Functions", "L-Systems"],
      tags: ["Computer Graphics"],
      image: miniMinecraftImage,
    },
    {
      name: "YouTube Video Data Analysis",
      description: "Worked in a team of two to analyze a trending YouTube video dataset to determine similarities of trending videos among different countries and identify features important for videos to trend in various video categories.",
      link: "https://colab.research.google.com/drive/13VedlC1Lxt6D0H9HMBCcMIhrlP0AJqyY",
      skills: ["Big Data Analytics", "CNN", "Linear Regression"],
      tags: ["Data Science"],
      image: miniMinecraftImage,
    },
  ],
  experience: [
    {
      company: "InterSystems",
      title: "Quality Development Engineer",
      dateRange: "July 2022 - February 2025",
      bullets: [
        "Validated the MVP release of Bulk FHIR data export from end to end, covering areas like asynchronous data transfer, OAuth2 authorization workflows, and REST API endpoints to ensure secure exchange of large clinical data",
        "Built automated testing pipelines with Python scripts, relational databases, and email reports with test-result analytics to increase sprint cycle efficiency by 20%",
        "Conducted HL7 FHIR conformance testing using tools like Inferno and Touchstone to help the platform reach ONC (g)(10) certification for standardized patient data access",
        "Developed upgrade tests for systems migrating from legacy storage to new data models to ensure data integrity",
        "Documented and maintained 10+ Confluence pages about internal testing frameworks to improve cross-team communication and reduce new-hire onboarding time"
      ],
      image: interSystemsImage,
    },
    {
      company: "University of Pennsylvania",
      title: "House Manager",
      dateRange: "Aug 2019 - May 2020",
      bullets: [
        "Helped students sign up for house events and utilize dormitory resources available to them",
        "Collaborated with the house coordinator and other managers to create and run dormitory activities"
      ],
      image: uPennImage,
    },
  ],
  education: [
    {
      school: "University of Chicago",
      degree: "Master of Science (MS) in Applied Data Science",
      startDate: "Sep 2026",
      endDate: "Dec 2027",
      expected: true,
      achievements: ["The Data Science Institute Scholarship ($25,000)"],
      image: uChicagoImage,
    },
    {
      school: "University of Pennsylvania",
      degree: "Bachelor of Science in Engineering (BSE) in Computer Graphics",
      startDate: "Aug 2018",
      endDate: "May 2022",
      achievements: [
        "Dean's List - May 2019",
        "Completed minors in Mathematics and Fine Arts",
      ],
      image: uPennImage,
    },
  ],
};
