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
    "Thanks for stopping by :) I’m a graduate student in the University of Chicago’s Master’s in Applied Data Science program, where I’m focused on machine learning, data visualization, and building models that turn messy, real-world data into decisions people can actually use. Lately I’ve been especially drawn to agentic AI workflows and how they can automate and scale analytical work. I’m also fascinated by computer graphics, which scratches the same itch of turning numbers into something you can see." +
    "Outside of school, I enjoy bouldering, running, and competitive e-sports.",
  skills: ["Python", "AWS", "Docker", "C++", "JavaScript", "CI/CD", "Git", "Perforce", "Machine Learning"],
  // Number of projects shown before the "Show more" button
  maxProjectsShown: 4,
  projects: [
    {
      name: "Clothing Brand Product Composition Data Analysis",
      description:
        "Data pipeline integrating clothing product information to gain insights on material breakdowns across brands and pricing strategy.",
      link: "https://github.com/EddieH80/fabric-composition-clustering",
      skills: ["Python", "scikit-learn", "pandas", "API Integration", "K-Means Clustering", "Random Forest"],
      tags: ["Data Science"],
      image: fabricClusteringImage,
    },
    {
      name: "Mini Minecraft",
      description:
        "Recreation of core gameplay mechanics of the game Minecraft. " +
        "Completed in a team of three.",
      link: "https://vimeo.com/489007178?share=copy&fl=sv&fe=ci",
      skills: ["C++", "OpenGL", "Procedural Generation", "Noise Functions", "L-Systems"],
      tags: ["Computer Graphics"],
      image: miniMinecraftImage,
    },
    {
      name: "YouTube Video Data Analysis",
      description: "Analysis of a 2021 trending YouTube video dataset to determine what features made videos trend." + 
      "Completed in a team of two.",
      link: "https://colab.research.google.com/drive/13VedlC1Lxt6D0H9HMBCcMIhrlP0AJqyY",
      skills: ["Python", "PyTorch", "scikit-learn", "CNN", "PCA", "Regularized Regression"],
      tags: ["Data Science"],
      image: youtubeAnalysisImage,
    },
    {
      name: "Dao TFT",
      description:
        "Decision engine for Teamfight Tactics(TFT) that helps players make in-game decisions based on their current game state.",
      link: "https://dao-tft.vercel.app/",
      skills: ["TypeScript", "React", "Next.js", "Optimization", "Data Pipeline", "CI/CD"],
      tags: ["Web Development"],
      image: daoTFTImage,
    },
    {
      name: "Procedural Tibetan Monastery Generator",
      description:
        "Procedural generator for Tibetan Buddhist monastery-inspired structures, built as a Houdini Digital Asset to be used in games or films.",
      link: "https://github.com/EddieH80/dmd_senior_project",
      skills: ["Houdini", "VEX", "Procedural Generation", "L-Systems", "Point Clouds"],
      tags: ["Computer Graphics"],
      image: tibetanMonasteryImage,
    },
    {
      name: "Monte Carlo Path Tracer",
      description:
        "Monte Carlo path tracer in C++ built by extending a basic ray tracer, following Physically Based Rendering: From Theory to Implementation.",
      link: "https://github.com/EddieH80/pathtracer",
      skills: ["C++", "Path Tracing", "Linear Algebra", "Importance Sampling", "Monte Carlo Integration", "BVH"],
      tags: ["Computer Graphics"],
      image: pathTracerImage,
    },
    {
      name: "TFT Rolldown Trainer",
      description:
        "Web-based practice tool environment for the game Teamfight Tactics (TFT) to help players exercise the rolldown mechanic.",
      link: "https://eddieh80.github.io/tft-rolldown-app/",
      skills: ["JavaScript", "HTML/CSS", "Probability Simulation", "Product Requirements"],
      tags: ["Web Development"],
      image: rolldownTrainerImage,
    },
    {
      name: "Procedural Toon Horse Generator",
      description:
        "Procedural horse generator rendered in WebGL, inspired by the ink paintings of Xu Beihong.",
      link: "https://eddieh80.github.io/final-project/",
      skills: ["TypeScript", "WebGL", "Raymarching", "SDFs", "Non-Photorealistic Rendering"],
      tags: ["Computer Graphics"],
      image: toonHorseImage
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
      imageBackground: "#f8f8f8",
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
      imageBackground: "#081858",
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
      imageBackground: "#780808",
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
      imageBackground: "#081858",
    },
  ],
};
