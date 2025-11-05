export type StaticProject = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  image: string;
  hoverImage: string;
  liveUrl?: string;
  content: {
    type: 'text' | 'image';
    content: string;
  }[];
};

export const staticProjects: StaticProject[] = [
  {
    id: "pitstop-connect",
    title: "Pitstop - AI Fleet Management Platform",
    date: "2024-11-01",
    tags: ["React", "Express.js", "Python", "IoT", "MongoDB", "TensorFlow"],
    description: "AI-powered fleet management platform for predictive maintenance and vehicle optimization",
    image: "/images/projects/pitstop-main.png",
    hoverImage: "/images/projects/pit.png",
    liveUrl: "https://dashboard.pitstopconnect.com",
    content: [
      {
        type: 'text',
        content: 'Pitstop is an AI-powered fleet management platform designed to help businesses automate, optimize, and predict vehicle maintenance to reduce downtime and costs. The platform uses artificial intelligence to forecast asset risks in real time, automate workflows, and streamline communication between vehicles, drivers, technicians, and fleet managers.'
      },
      {
        type: 'image',
        content: '/images/projects/pitstop-main.png'
      },
      {
        type: 'text',
        content: 'With features such as predictive and preventative maintenance, remote diagnostics, fault code management, work order automation, sensor data analytics, and API integrations, Pitstop provides a comprehensive solution for managing fleets efficiently. The AI engine achieves over 95% accuracy in predicting maintenance needs, helping companies save on repairs and extend asset life.'
      },
      {
        type: 'text',
        content: 'The platform supports multiple industries including trucking and freight, government, construction, food and beverage, utilities, and leasing. It offers tailored tools like cost savings calculators, inspection reports, and work order scanners to meet industry-specific needs.'
      },
      {
        type: 'text',
        content: 'By digitizing maintenance operations, Pitstop helps fleets stay compliant, prevent unplanned breakdowns, and maximize vehicle uptime. Notable customers like the City of Long Beach, Food Express, and Summit Materials report significant cost savings and improved operational efficiency. Pitstop stands out as the #1 AI Fleet Management Software, providing an affordable, data-driven, and automated approach to keeping fleets running smoothly.'
      },
      {
        type: 'text',
        content: 'Visit the platform at dashboard.pitstopconnect.com to explore the comprehensive fleet management solution.'
      }
    ]
  },
  {
    id: "sol-drip",
    title: "Sol Drip - Reward-Generating Memecoin",
    date: "2024-09-15",
    tags: ["Solana", "Rust", "Web3.js", "React", "TypeScript", "Anchor"],
    description: "Community-powered memecoin on Solana that rewards holders with passive $SOL income",
    image: "/images/projects/soldrip.png",
    hoverImage: "/images/projects/soldrip.png",
    liveUrl: "https://soldrip.me",
    content: [
      {
        type: 'text',
        content: 'Sol Drip (DRIP) is a memecoin built on the Solana blockchain that rewards holders with passive income in $SOL (Solana\'s native token). Unlike traditional pump-and-dump meme tokens, Sol Drip is designed to generate sustainable, automatic rewards based on actual trading volume and ecosystem activity.'
      },
      {
        type: 'image',
        content: '/images/projects/soldrip.png'
      },
      {
        type: 'text',
        content: 'When users hold $DRIP in their wallets, they receive periodic $SOL payouts automatically—no staking, claiming, or lockups required. A portion of each transaction (7%) is burned, making the token deflationary, while another portion funds rewards for holders, ensuring long-term value growth.'
      },
      {
        type: 'text',
        content: 'The project emphasizes rug-pull protection through a self-sustaining treasury system that keeps growing from transaction fees, meaning holders continue to earn even if activity slows or developers step away. Beyond being a meme token, $DRIP serves as a utility token within a growing ecosystem of games, DeFi apps, and community-driven initiatives.'
      },
      {
        type: 'text',
        content: 'Sol Drip\'s community-first approach—known as the "DRIP Army"—drives marketing and engagement through grassroots campaigns, online activities, and partnerships across the Web3 space. The roadmap outlines expansion through new apps, centralized exchange listings, merchandise, and ecosystem integrations.'
      },
      {
        type: 'text',
        content: 'With its combination of entertainment, passive income, and decentralized finance, Sol Drip represents a new generation of community-powered tokens on the Solana network. Learn more at https://soldrip.me/'
      }
    ]
  },
  {
    id: "glance-care",
    title: "Glance Care - AI Healthcare Platform",
    date: "2024-07-20",
    tags: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "AWS"],
    description: "AI-powered healthcare platform for streamlined clinical workflows and medical documentation",
    image: "/images/projects/glance.png",
    hoverImage: "/images/projects/glance.png",
    liveUrl: "https://glancecare.com",
    content: [
      {
        type: 'text',
        content: 'Glance Care is an AI-powered healthcare platform designed to streamline clinical workflows, reduce administrative burden, and improve patient care. The platform focuses on medical documentation, coding, clinical decision support, and patient engagement, allowing healthcare professionals to spend more time on patients and less on paperwork.'
      },
      {
        type: 'image',
        content: '/images/projects/glance.png'
      },
      {
        type: 'text',
        content: 'Key features include Ask Glance for evidence-based clinical guidance, Quick Coder for accurate ICD10-AM coding, SOAP Builder for structured clinical notes, Engage for automated patient follow-ups, and integrated note-taking tools. These features work together to create a comprehensive healthcare documentation system.'
      },
      {
        type: 'text',
        content: 'Glance Care leverages advanced AI technologies to provide fast, accurate, and actionable insights at the point of care, ensuring clinicians have reliable guidance without guesswork or errors. The platform is designed to support a variety of medical specialties and institutions, helping doctors and clinical staff boost efficiency and improve accuracy.'
      },
      {
        type: 'text',
        content: 'By transforming healthcare documentation into a smart, automated, and patient-centered process, Glance Care enables healthcare professionals to enhance patient outcomes while reducing the time spent on administrative tasks. Users can experience a smoother, more organized workflow that prioritizes patient care over paperwork.'
      }
    ]
  },
  {
    id: "lore-ltps",
    title: "Lore LTPs - Tokenized Investment Platform",
    date: "2024-05-10",
    tags: ["Solidity", "Ethereum", "React", "Web3.js", "Node.js", "Hardhat"],
    description: "Simplified investment platform for diversified crypto and stock portfolios through tokenized funds",
    image: "/images/projects/lore.png",
    hoverImage: "/images/projects/lore.png",
    liveUrl: "https://lore.xyz",
    content: [
      {
        type: 'text',
        content: 'Lore LTPs are a simplified investment platform that allows users to gain exposure to multiple stocks and cryptocurrencies in a single fund, called a Lore Tokenized Portfolio (LTP). Instead of buying individual assets one by one, investors can purchase an LTP to hold a diversified basket of assets—such as cryptocurrencies like BTC, ETH, SOL, or tokenized stocks like AAPLX and MSFTX—within one product.'
      },
      {
        type: 'image',
        content: '/images/projects/lore.png'
      },
      {
        type: 'text',
        content: 'This approach reduces complexity, streamlines investing, and helps users manage risk across multiple assets. By bundling multiple investments into a single token, Lore makes portfolio diversification accessible and efficient for both crypto natives and traditional investors.'
      },
      {
        type: 'text',
        content: 'Lore offers prebuilt LTPs such as the Top 10 Crypto Hybrid ($LORE10), Solana Ecosystem ($SOLECO), and Magnificent 7 Stocks ($MAG7). Each LTP displays the total capital committed and the allocation of underlying assets, providing transparency and easy tracking for investors.'
      },
      {
        type: 'text',
        content: 'Users can request access to upcoming LTPs, track new offerings, and invest directly through the platform. Lore also supports trending tokens and provides tools for developers, making it a comprehensive platform for both investing and participation in tokenized markets.'
      },
      {
        type: 'text',
        content: 'Overall, Lore LTPs are designed to make diversified, hybrid investing simple, efficient, and accessible—bridging the gap between traditional finance and decentralized markets through innovative tokenization technology.'
      }
    ]
  },
  {
    id: "cathoven",
    title: "Cathoven - AI-Powered IELTS Preparation",
    date: "2024-03-15",
    tags: ["Python", "NLP", "React", "FastAPI", "PyTorch", "Docker"],
    description: "AI-powered IELTS preparation platform with instant scoring and personalized feedback",
    image: "/images/projects/cat.png",
    hoverImage: "/images/projects/cat.png",
    liveUrl: "https://cathoven.com",
    content: [
      {
        type: 'text',
        content: 'Cathoven is an AI-powered IELTS preparation platform designed to help students achieve their target IELTS scores efficiently and accurately. The platform uses advanced AI technology to provide instant, precise scoring and personalized feedback on both Writing and Speaking tasks, benchmarked against real IELTS rubrics and over a decade of actual exam data.'
      },
      {
        type: 'image',
        content: '/images/projects/cat.png'
      },
      {
        type: 'text',
        content: 'The platform offers comprehensive tools including Catbot® for AI tutoring, AI Writing Check for instant assessment, and detailed practice reports that enable learners to track progress, identify weaknesses, and improve with actionable tips. Each feature is designed to provide students with exam-like practice and realistic feedback.'
      },
      {
        type: 'text',
        content: 'Cathoven is validated by academic research, professional IELTS examiners, and international awards, making it a trusted solution globally. The platform\'s AI engine has been trained on extensive real exam data, ensuring accuracy and reliability in scoring and feedback.'
      },
      {
        type: 'text',
        content: 'The platform provides both free and premium plans, giving access to instant scoring, unlimited practice, AI tutoring, and comprehensive progress tracking. These tools work together to streamline preparation, boost confidence, and reduce exam anxiety for students worldwide.'
      },
      {
        type: 'text',
        content: 'Cathoven serves as a comprehensive, evidence-based, AI-driven solution for both IELTS students seeking to improve their scores and teachers looking for effective assessment tools to support their students\' learning journeys.'
      }
    ]
  }
];