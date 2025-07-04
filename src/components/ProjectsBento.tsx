import { ExternalLink, Github } from 'lucide-react';


// Types
type ProjectCard = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo: string;
  repo: string;
  image: string;
  size: "large" | "medium" | "small";
};

type MotivationCard = {
  id: string;
  motivation: string;
  bg: string;
  size: "large" | "medium" | "small";
};

type Card = ProjectCard | MotivationCard;

const projects: ProjectCard[]  = [
  {
    id: 1,
    title: "Facial Expression Generation Using GAN and Autoencoder",
    description: "Generate realistic facial expressions from labeled face data using PyTorch and CelebA. Built with an autoencoder architecture, this project reconstructs and modifies faces based on emotional attributes like “Smiling”.",
    tech: ["PyTorch", "Autoencoder", "CelebA", "GAN", "Emotion AI"],
    demo: "https://github.com/SanyaShresta25/facial-expression-generation-using-gan-autoencoder/blob/main/Facial_Expression_Generation_Labeled.ipynb",
    repo: "https://github.com/SanyaShresta25/facial-expression-generation-using-gan-autoencoder",
    image: "/assets/facial.jpg",
    size: "large"
  },
  {
    id: 2,
    title: "Breast Cancer Prognostic Prediction with XGBoost",
    description: "Robust machine learning pipeline for breast cancer prognosis prediction using XGBoost classifier with hyperparameter tuning and comprehensive evaluation.",
    tech: ["Python", "XGBoost", "Pandas", "scikit-learn", "Data Science"],
    demo: "https://github.com/SanyaShresta25/breast-cancer-prognostic-prediction/blob/main/Breast_Cancer_XGBoost.ipynb",
    repo: "https://github.com/SanyaShresta25/breast-cancer-prognostic-prediction",
    image: "/assets/breast.jpg",
    size: "medium"
  },
  {
    id: 3,
    title: "Honeypot Setup and Monitoring using Cowrie 🍯",
    description: "Set up and configure the Cowrie honeypot on an Ubuntu VM to monitor network activity and detect potential threats. Simulates SSH and Telnet services to capture attacker activity.",
    tech: ["Cowrie", "Ubuntu", "SSH", "Telnet", "Network Security"],
    demo: "https://youtu.be/qQXicKc5wQM?si=AIt93DpEUuM4LQmW",
    repo: "https://github.com/SanyaShresta25/Information-and-Network-Security/tree/main/Mini%20Project",
    image: "/assets/honey.jpg",
    size: "medium"
  },
  {
    id: 4,
    title: "Speech Enhancement Using UNet Architecture",
    description: "Enhance speech clarity by removing background noise using a U-Net-based deep learning model. Built with Python tools—no librosa, just scipy, numpy, and soundfile.",
    tech: ["Python", "U-Net", "Speech", "Signal Processing", "scipy"],
    demo: "https://github.com/SanyaShresta25/speech-enhancement-using-unet-architecture/blob/main/SpeechEnhancementUsingUNet.ipynb",
    repo: "https://github.com/SanyaShresta25/speech-enhancement-using-unet-architecture",
    image: "/assets/speach.jpg",
    size: "medium"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: " A whimsical, animated personal portfolio built with React, Tailwind CSS, and Framer Motion — showcasing my projects, certifications, experiences, and creative tech journey with style and personality. ",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    demo: "https://sanyashresta.netlify.app/",
    repo: "https://github.com/SanyaShresta25/personal-portfolio",
    image: "/assets/portfolio.jpg",
    size: "medium"
  },
  {
    id: 6,
    title: "DearSkin — A Love Letter to Your Skin",
    description: "AI-powered skincare recommendations based on your skin type & concerns. Built with HTML, CSS, JS, Supabase, Python (FastAPI), Chart.js, Anime.js.",
    tech: ["FastAPI", "Supabase", "Chart.js", "Anime.js", "HTML", "CSS", "JS"],
    demo: "https://dear-skin.vercel.app/",
    repo: "https://github.com/SanyaShresta25/dear-skin",
    image: "/assets/skin.jpg",
    size: "large"
  },
  {
    id: 7,
    title: "Internship Portfolio",
    description: "A curated showcase of web development projects built during the Design WebTech internship using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "WebDev"],
    demo: "https://internship-portfolio-pearl.vercel.app/",
    repo: "https://github.com/SanyaShresta25/internship-portfolio",
    image: "/assets/internship.jpg",
    size: "medium"
  },
  {
    id: 8,
    title: "SpacesCoHost - Your AI Co-Host for Twitter Spaces",
    description: "Modern AI-powered web app built with React + Vite + Supabase, designed to transcribe, summarize, and generate content from Twitter Spaces in real time.",
    tech: ["React", "Vite", "Supabase", "Twitter API"],
    demo: "https://tweet-host.vercel.app/",
    repo: "https://github.com/SanyaShresta25/tweet-host",
    image: "/assets/spaces.jpg",
    size: "medium"
  },
  {
    id: 9,
    title: "Frontend – Titration Analyzer",
    description: "React app for uploading titration videos, tracking real-time progress, and visualizing molecular structure.",
    tech: ["React", "Tailwind", "3Dmol.js"],
    demo: "https://titration-tracker-frontend.vercel.app/",
    repo: "https://github.com/SanyaShresta25/titration-tracker-frontend",
    image: "/assets/chem.jpg",
    size: "medium"
  },
  {
    id: 10,
    title: "Childhood in a Nutshell",
    description: "An interactive Disney character storybook application built with a modern full-stack setup: React + TypeScript + Tailwind CSS for the frontend, Flask for the backend API, and an integrated machine learning model for character suggestions. The project is containerized using Docker for seamless deployment.",
    tech: ["React", "Flask", "Docker", "ML"],
    demo: "https://childhood-in-a-nutshell-frontend.vercel.app/",
    repo: "https://github.com/SanyaShresta25/childhood-in-a-nutshell-frontend",
    image: "/assets/childhood.jpg",
    size: "large"
  },
  {
    id: 11,
    title: "Mental Health Insights Dashboard",
    description: "A data analysis project in R exploring student mental health using visualizations, logistic regression, and decision tree models. It uncovers how factors like course, relationship status, sleep quality, and stress levels influence depression and emotional well-being.",
    tech: ["R", "ggplot2", "DataViz"],
    demo: "https://github.com/SanyaShresta25/mental-health-insights/blob/main/FinalIDSproject(2).R",
    repo: "https://github.com/SanyaShresta25/mental-health-insights",
    image: "/assets/mental.jpg",
    size: "small"
  }
]

// Motivational cards data
const motivations: MotivationCard[] = [
  {
    id: "motivation-1",
    motivation: "Dream Big, Build Bold ✨",
    bg: "from-pink-100 via-rose-100 to-purple-100"
,    size: "small"
  },
  {
    id: "motivation-2",
    motivation: "Every step counts. Keep going!",
    bg: "from-blue-100 via-cyan-100 to-purple-100",
    size: "medium"
  },
  {
    id: "motivation-3",
    motivation: "Imagination is your superpower 🚀",
    bg: "from-yellow-100 via-orange-100 to-pink-100",
    size: "large"
  }
];

const TOTAL_BENTO_SLOTS = 12;

// Helper to fill the grid
function fillWithMotivationCards(projects: ProjectCard[], total: number): Card[] {
  const cards: Card[] = [...projects];
  let motivationIndex = 0;
  let idx = projects.length + 1;

  while (cards.length < total) {
    const m = motivations[motivationIndex % motivations.length];
    cards.push({
      ...m,
      id: `motivation-${idx++}`,
      size: "small"
    });
    motivationIndex++;
  }
  return cards;
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2";
    case "medium":
      return "md:col-span-2 md:row-span-1";
    case "small":
    default:
      return "md:col-span-1 md:row-span-1";
  }
};

const ProjectsBento = () => {
  const cards = fillWithMotivationCards(projects, TOTAL_BENTO_SLOTS);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50 relative"
    >
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            Notable Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(270px,1fr)] gap-6">
          {cards.map((card, index) =>
            "motivation" in card ? (
              // MOTIVATIONAL CARD
              <div
                key={card.id}
                className={`flex items-center justify-center rounded-3xl text-center p-6 font-bold text-lg md:text-xl text-gray-700 bg-gradient-to-br ${card.bg} shadow-md ${getSizeClasses(card.size)}`}
              >
                <span className="w-full">{card.motivation}</span>
              </div>
            ) : (
              // PROJECT CARD - IMAGE BACKGROUND BLURRED WITH TEXT OVERLAY
              <div
                key={card.id}
                className={`group relative overflow-hidden rounded-3xl border border-pink-100 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.025] animate-slideInUp ${getSizeClasses(card.size)}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image - blurred */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover blur-[5px] brightness-100 scale-105"
                  style={{ zIndex: 0 }}
                  loading="lazy"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-pink-100/80 z-10"></div>
                {/* Text Content */}
                <div className="relative z-20 flex flex-col h-full justify-between p-6">
                  <div>
                    <h3 className="text-4xl font-semibold text-pink-900 mb-2 drop-shadow">{card.title}</h3>
                    <p className="text-medium text-gray-800 text-base mb-4 font-extrabold drop-shadow">{card.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {card.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-pink-200 to-pink-50 text-pink-700 rounded-lg text-xs font-medium border border-pink-100 shadow"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Repo & Demo Links */}
                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={card.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/80 rounded-xl border border-pink-100 hover:bg-pink-100 transition-all duration-300 hover:scale-110"
                      title="Demo / Notebook"
                    >
                      <ExternalLink size={18} className="text-pink-600" />
                    </a>
                    <a
                      href={card.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/80 rounded-xl border border-pink-100 hover:bg-pink-100 transition-all duration-300 hover:scale-110"
                      title="GitHub Repo"
                    >
                      <Github size={18} className="text-pink-600" />
                    </a>
                  </div>
                </div>
                {/* Decorative overlay for hover */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-3xl opacity-10 bg-gradient-to-br from-pink-200 via-white to-pink-100 group-hover:opacity-20 transition-opacity z-20"></div>
              </div>
            )
          )}
        </div>

        
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ProjectsBento;
