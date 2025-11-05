// ============================================
// HOMEPAGE CONTENT CONFIGURATION
// ============================================
// Edit this file to customize all content on your homepage

export const homepageContent = {
  // Hero Section (Top of homepage)
  hero: {
    name: "Abdul Rashid Khan", // Your full name as you want it displayed
    title: "Full Stack Developer & Software Engineer", // Your professional title
    tagline: "Building innovative solutions with modern technologies", // Your tagline/motto
    description: "I specialize in creating scalable web applications, AI-powered solutions, and blockchain projects. Passionate about clean code, user experience, and solving complex problems.", // Brief bio
    avatarImage: "/images/dp.jpg", // Path to your profile picture
    ctaButtons: [
      {
        text: "View Projects",
        href: "/projects",
        primary: true,
      },
      {
        text: "Read Blog",
        href: "/blog",
        primary: false,
      },
    ],
  },

  // About/Biography Section
  biography: {
    heading: "About Me",
    paragraphs: [
      "I'm a passionate full-stack developer with expertise in building modern web applications using React, Node.js, Python, and cutting-edge technologies. With a strong foundation in both frontend and backend development, I create seamless user experiences backed by robust, scalable architectures.",
      "My journey in software development has led me to work on diverse projects ranging from AI-powered platforms to blockchain solutions and enterprise applications. I'm constantly learning and adapting to new technologies to deliver innovative solutions that solve real-world problems.",
      "When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring aspiring developers. I believe in the power of technology to transform lives and businesses, and I'm committed to creating meaningful impact through my work.",
    ],
  },

  // Experience Section
  experience: {
    heading: "Professional Experience",
    jobs: [
      {
        company: "Company Name", // CHANGE THIS
        position: "Senior Full Stack Developer", // CHANGE THIS
        duration: "2023 - Present", // CHANGE THIS
        description: "Led development of enterprise web applications using React, Node.js, and AWS. Architected scalable microservices handling millions of requests daily.", // CHANGE THIS
        technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
      },
      {
        company: "Another Company", // CHANGE THIS
        position: "Full Stack Developer", // CHANGE THIS
        duration: "2021 - 2023", // CHANGE THIS
        description: "Developed and maintained multiple client projects. Improved application performance by 40% through optimization techniques.", // CHANGE THIS
        technologies: ["React", "Express.js", "PostgreSQL", "TypeScript"],
      },
      {
        company: "Tech Startup", // CHANGE THIS
        position: "Junior Developer", // CHANGE THIS
        duration: "2019 - 2021", // CHANGE THIS
        description: "Built responsive web applications and RESTful APIs. Collaborated with design and product teams to deliver user-centric solutions.", // CHANGE THIS
        technologies: ["JavaScript", "Python", "Django", "MySQL"],
      },
    ],
  },

  // Education Section
  education: {
    heading: "Education & Certifications",
    items: [
      {
        institution: "University Name", // CHANGE THIS
        degree: "Bachelor of Science in Computer Science", // CHANGE THIS
        duration: "2015 - 2019", // CHANGE THIS
        description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.", // CHANGE THIS
      },
      {
        institution: "Online Platform", // CHANGE THIS
        degree: "AWS Certified Solutions Architect", // CHANGE THIS
        duration: "2022", // CHANGE THIS
        description: "Professional certification in cloud architecture and infrastructure design.", // CHANGE THIS
      },
    ],
  },

  // Tech Stack Section
  techStack: {
    heading: "Technologies & Tools",
    description: "I work with a wide range of modern technologies to build robust, scalable applications:",
    categories: [
      {
        category: "Frontend",
        technologies: [
          { name: "React", icon: "⚛️" },
          { name: "Next.js", icon: "▲" },
          { name: "TypeScript", icon: "📘" },
          { name: "Tailwind CSS", icon: "🎨" },
          { name: "Vue.js", icon: "💚" },
        ],
      },
      {
        category: "Backend",
        technologies: [
          { name: "Node.js", icon: "🟢" },
          { name: "Python", icon: "🐍" },
          { name: "Express.js", icon: "🚂" },
          { name: "Django", icon: "🎸" },
          { name: "FastAPI", icon: "⚡" },
        ],
      },
      {
        category: "Database",
        technologies: [
          { name: "PostgreSQL", icon: "🐘" },
          { name: "MongoDB", icon: "🍃" },
          { name: "Redis", icon: "🔴" },
          { name: "MySQL", icon: "🐬" },
        ],
      },
      {
        category: "DevOps & Cloud",
        technologies: [
          { name: "AWS", icon: "☁️" },
          { name: "Docker", icon: "🐳" },
          { name: "Kubernetes", icon: "⎈" },
          { name: "GitHub Actions", icon: "🔄" },
          { name: "Vercel", icon: "▲" },
        ],
      },
      {
        category: "Blockchain & Web3",
        technologies: [
          { name: "Solidity", icon: "⛓️" },
          { name: "Ethereum", icon: "💎" },
          { name: "Web3.js", icon: "🌐" },
          { name: "Solana", icon: "🌟" },
        ],
      },
      {
        category: "AI & Machine Learning",
        technologies: [
          { name: "TensorFlow", icon: "🧠" },
          { name: "PyTorch", icon: "🔥" },
          { name: "OpenAI API", icon: "🤖" },
          { name: "Langchain", icon: "🔗" },
        ],
      },
    ],
  },

  // Skills/Specializations
  skills: {
    heading: "Core Competencies",
    items: [
      "Full-Stack Web Development",
      "RESTful & GraphQL API Design",
      "Microservices Architecture",
      "Cloud Infrastructure (AWS, GCP, Azure)",
      "Database Design & Optimization",
      "AI/ML Integration",
      "Blockchain Development",
      "DevOps & CI/CD",
      "Agile/Scrum Methodologies",
      "Technical Leadership & Mentoring",
    ],
  },

  // Call to Action Section
  cta: {
    heading: "Let's Work Together",
    description: "I'm always interested in hearing about new projects and opportunities. Whether you're looking to build a new application, improve an existing system, or just want to chat about tech, feel free to reach out!",
    buttons: [
      {
        text: "View My Work",
        href: "/projects",
        primary: true,
      },
      {
        text: "Get In Touch",
        href: "mailto:your.email@example.com", // CHANGE THIS
        primary: false,
      },
    ],
  },
};

// Helper function to get full name
export function getFullName(): string {
  return homepageContent.hero.name;
}

// Helper function to get professional title
export function getProfessionalTitle(): string {
  return homepageContent.hero.title;
}

// Helper function to get all tech names (useful for SEO keywords)
export function getAllTechnologies(): string[] {
  return homepageContent.techStack.categories.flatMap(category =>
    category.technologies.map(tech => tech.name)
  );
}

