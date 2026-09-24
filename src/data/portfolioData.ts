// src/data/portfolioData.ts

export const personalInfo = {
    name: "Jatin Dolas",
    fullName: "Jatin Naresh Dolas",
    title: "Data Analyst | Electrical Engineer",
    tagline: "Transforming Raw Data into Strategic Business Insights",
    bio: "Analytical professional with dual internship experience delivering end-to-end data pipelines—from raw data extraction with SQL and Python to executive-ready Power BI dashboards. Built sales forecasting models and EDA reports across retail datasets spanning 12+ months of transactions. Backed by a strong engineering foundation that translates operational complexity into precise, measurable insights.",
    email: "jatindolas18@gmail.com",
    phone: "+91 9284392031",
    location: "Nagpur, Maharashtra",
    linkedin: "https://linkedin.com/in/jatin-dolas",
    resumeLink: "/Jatin_Dolas_Resume.pdf",
  };
  
  export const skills = {
    "Data & Analytics": [
      "Python Programming",
      "Structured Query Language (SQL)",
      "Fundamentals of Statistics",
      "Generative AI Prompting",
    ],
    "Data Visualization": [
      "Power BI",
      "Tableau",
      "Pandas & NumPy",
      "Seaborn & Matplotlib",
      "MS Excel (Advanced)",
    ],
    "Engineering & Operations": [
      "IoT Microcontroller Systems",
      "Inventory Management",
      "Site Supervision",
      "HT/LT Line Installation",
      "Transformer Monitoring",
    ],
  };
  
  export const experience = [
    {
      role: "Data Analyst Intern (Part Time)",
      company: "Meriye LLC",
      period: "June 2023 – November 2023",
      highlights: [
        "Delivered 2 production Power BI dashboards (SuperStore & Sales Analysis) for KPI tracking, used by 4 cross-functional stakeholders.",
        "Built a reusable Python (Pandas, NumPy) data-cleaning pipeline that standardised 4 multi-source datasets.",
        "Applied statistical trend analysis and time-series modelling to 12+ months of sales data, surfacing revenue patterns for quarterly planning.",
      ],
    },
    {
      role: "Data Analytics Student",
      company: "Boffins Data Science Academy",
      period: "March 2023 – August 2023",
      highlights: [
        "Completed a structured 6-month analytics programme, graduating with a Data Analytics certification through end-to-end project delivery.",
        "Translated multi-departmental raw datasets into interactive Power BI reports and Seaborn visualisations.",
        "Used SQL and Python to identify critical trends and anomalies, turning statistical findings into actionable business intelligence briefs.",
      ],
    },
    {
      role: "Site Engineer & Inventory Manager",
      company: "Gitanjali Power & Infra",
      period: "May 2023 – January 2025",
      highlights: [
        "Maintained 100% record accuracy for 300+ electrical SKUs across active HT & LT overhead supply installation projects.",
        "Tracked and reported project progress across 8 simultaneous Nagpur-region sites for resource allocation and scheduling.",
      ],
    },
    {
      role: "Site Engineer – Supervisor",
      company: "Urmila Electrical Engineering Co.",
      period: "July 2022 – May 2023",
      highlights: [
        "Supervised a team of 4 MSEB technicians and wiremen across HT/LT line installations, ensuring zero safety incidents.",
        "Coordinated distribution transformer installation and relocation projects across 6 sites, managing ground-level operational data.",
      ],
    },
  ];
  
  export const projects = [
    {
      title: "IoT Based Transformer Monitoring",
      subtitle: "Microcontroller System",
      description:
        "Designed a microcontroller-based real-time monitoring system with automated multi-parameter alerts (overcurrent, oil level, temperature), reducing dependence on manual field inspections and enabling predictive maintenance.",
      tech: ["IoT", "Microcontrollers", "Real-time Monitoring", "Predictive Maintenance"],
      liveLink: "#",
      githubLink: "#",
      image: "/iot-transformer.png",
    },
    {
      title: "Superstore Sales Report",
      subtitle: "Power BI (Time Series)",
      description:
        "Built an interactive Power BI dashboard using time-series analysis to generate forward-looking sales forecasts. Delivered strategic insights across product categories and regions, enabling data-backed growth planning from a single visual interface.",
      tech: ["Power BI", "Time-Series Analysis", "DAX", "Data Modelling"],
      liveLink: "#",
      githubLink: "#",
      image: "/superstore-dashboard.png",
    },
    {
      title: "Electronic Sales Analysis",
      subtitle: "Python (EDA)",
      description:
        "Analysed 12 months of electronics transaction data using Pandas, NumPy, Matplotlib, and Seaborn. Identified peak sales periods, top-performing geographic markets, and optimal advertising windows—three insights with direct revenue impact.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      liveLink: "#",
      githubLink: "#",
      image: "/electronic-sales.png",
    },
    {
      title: "Store Item Demand Forecasting",
      subtitle: "Machine Learning (Python)",
      description:
        "Developed a machine learning model to forecast item sales across multiple stores using historical sales data. Performed extensive exploratory data analysis to identify seasonal trends and optimize inventory management.",
      tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
      liveLink: "#",
      githubLink: "#",
      image: "/inventory-app-screenshot.png",
    },
  ];
  
  export const education = [
    {
      degree: "MBA in Finance and Operation",
      institution: "GH Raisoni College of Engineering and Management",
      period: "2025 – 2027 (Pursuing)",
      score: "",
    },
    {
      degree: "B.Tech in Electrical Engineering",
      institution: "JD College of Engineering and Management, Nagpur",
      period: "2022",
      score: "80.75%",
    },
    {
      degree: "Diploma in Electrical Engineering",
      institution: "JD College of Polytechnic, Nagpur",
      period: "2019",
      score: "67.58%",
    },
  ];