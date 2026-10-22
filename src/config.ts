export const siteConfig = {
  name: "Eddie Huang",
  title: "Applied Data Science @ UChicago",
  description: "Portfolio website of Eddie Huang",
  accentColor: "#1d4ed8",
  social: {
    email: "eddieh@uchicago.edu",
    linkedin: "https://linkedin.com/in/eddiehuang8045",
    github: "https://github.com/EddieH80",
  },
  aboutMe:
    "Hello, my name is Eddie and I'm currently a graduate student at the University of Chicago studying Applied Data Science. After graduating from the University of Pennsylvania in 2022, I worked at InterSystems, a data technology company, where I performed software testing for healthcare-related products. I have interests in agentic AI workflows, computer graphics, competitive e-sports, rock-climbing, and running.",
  skills: ["Python", "AWS", "Docker", "C++", "JavaScript", "CI/CD"],
  projects: [
    {
      name: "Clothing Brand Product Composition Data Analysis",
      description:
        "Built a data pipeline scraping fabric composition data from public API endpoints across 26 clothing brands with Asian cultural influence. Performed K-means clustering and random forest regression to get insights into product composition and price prediction",
      link: "https://github.com/EddieH80/fabric-composition-clustering",
      skills: ["Python", "Machine Learning", "Web Scraping"],
    },
    {
      name: "Dao TFT",
      description:
        "Built a website for the online competitive game Teamfight Tactics (TFT) that allows players to enter information of their in-game status and receive proper recommendations for gameplay decisions.",
      link: "https://github.com/eddieh-uchicago/dao-tft",
      skills: ["TypeScript", "React", "ETL", "AI-assisted Development"],
    },
    {
      name: "Mini Minecraft",
      description:
        "Collaborated in a team of three to recreate core features of the game Minecraft. Developed key features such as procedural terrain generation, L-system rivers, procedurally placed assets, and additional customized biomes.",
      link: "https://vimeo.com/489007178?share=copy&fl=sv&fe=ci",
      skills: ["C++", "Procedural Noise Functions", "L-Systems"],
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
    },
    {
      company: "University of Pennsylvania",
      title: "House Manager",
      dateRange: "Aug 2019 - May 2020",
      bullets: [
        "Helped students sign up for house events and utilize dormitory resources available to them",
        "Collaborated with the house coordinator and other managers to create and run dormitory activities"
      ],
    },
  ],
  education: [
    {
      school: "University of Chicago",
      degree: "Master of Science (MS) in Applied Data Science",
      dateRange: "September 2026 - Present",
      achievements: [
        "Expected December 2027",
        "The Data Science Institute Scholarship ($25,000)",
      ],
    },
    {
      school: "University of Pennsylvania",
      degree: "Bachelor of Science in Engineering (BSE) in Computer Graphics",
      dateRange: "2019",
      achievements: [
        "Dean's List - May 2019",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
