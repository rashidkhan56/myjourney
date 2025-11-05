// ============================================
// SITE CONFIGURATION - FULL CONTROL
// ============================================
// Edit this file to customize all SEO metadata and site information

export const siteConfig = {
  // Your personal information
  owner: {
    name: "Abdul Rashid Khan", // Your name
    title: "Full Stack Developer", // Your professional title
    email: "your.email@example.com", // Your email
    location: "Your City, Country", // Your location
  },

  // Global site metadata (used in root layout)
  metadata: {
    title: "Abdul Rashid Khan | Full Stack Developer Portfolio", // Main site title
    description: "Portfolio showcasing projects in web development, AI, blockchain, and full-stack applications. Specialized in React, Node.js, Python, and modern web technologies.", // Main site description
    keywords: "Abdul Rashid Khan, full stack developer, web development, React, Node.js, Python, portfolio, software engineer", // SEO keywords
    author: "Abdul Rashid Khan", // Your name
    siteUrl: "https://yourwebsite.com", // Your website URL
  },

  // Homepage specific metadata
  homepage: {
    meta_title: "My Journey | Abdul Rashid Khan - Full Stack Developer", // Homepage title with "My Journey"
    meta_description: "Welcome to my journey as a full stack developer. Explore my professional experience, projects in web development, AI solutions, and blockchain technology. Discover how I build innovative applications that solve real-world problems.", // Homepage description
  },

  // Blog page metadata
  blog: {
    meta_title: "Blog | Abdul Rashid Khan - Tech Articles & Insights",
    meta_description: "Read my latest articles on web development, AI, blockchain, and software engineering best practices. Learn from my experience building scalable applications.",
  },

  // Projects page metadata
  projects: {
    meta_title: "Projects | Abdul Rashid Khan - Portfolio Showcase",
    meta_description: "Explore my portfolio of projects including AI applications, blockchain solutions, web platforms, and full-stack development work. Each project demonstrates different technologies and problem-solving approaches.",
  },

  // About page metadata
  about: {
    meta_title: "About ARK | Abdul Rashid Khan - Full Stack Developer",
    meta_description: "Learn more about Abdul Rashid Khan's journey as a full stack developer, technical skills, experience, and passion for building innovative solutions.",
  },

  // Social media links (optional, for future use)
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  },

  // Open Graph / Social sharing defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Abdul Rashid Khan Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // Add your social sharing image
        width: 1200,
        height: 630,
        alt: "Abdul Rashid Khan Portfolio",
      },
    ],
  },
};

// Helper function to generate full page title
export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return siteConfig.metadata.title;
  return `${pageTitle} | ${siteConfig.owner.name}`;
}

// Helper function to generate metadata object
export function generateMetadata(config: {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}) {
  return {
    title: config.title || siteConfig.metadata.title,
    description: config.description || siteConfig.metadata.description,
    keywords: config.keywords || siteConfig.metadata.keywords,
    authors: [{ name: siteConfig.metadata.author }],
    creator: siteConfig.metadata.author,
    openGraph: {
      title: config.title || siteConfig.metadata.title,
      description: config.description || siteConfig.metadata.description,
      url: siteConfig.metadata.siteUrl,
      siteName: siteConfig.openGraph.siteName,
      images: config.image ? [{ url: config.image }] : siteConfig.openGraph.images,
      locale: siteConfig.openGraph.locale,
      type: siteConfig.openGraph.type,
    },
    twitter: {
      card: "summary_large_image",
      title: config.title || siteConfig.metadata.title,
      description: config.description || siteConfig.metadata.description,
      images: config.image ? [config.image] : siteConfig.openGraph.images.map(img => img.url),
    },
  };
}

