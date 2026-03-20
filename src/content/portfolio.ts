export type PortfolioCategory =
  | "Project Documentaries"
  | "Case Studies"
  | "Expert Interviews"
  | "Webinars"
  | "Panel Discussions"
  | "Explainers"
  | "Platform Demos"
  | "Training";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  thumbnail: string;
  duration: string;
  featured: boolean;
  publishedAt: string;
  tags: string[];
}

export const portfolioContent = {
  hero: {
    title: "Video & Work Portfolio",
    subtitle: "See our work in action",
    description:
      "Explore project documentaries, expert insights, and demonstrations of our work across sectors and geographies.",
  },
  categories: [
    { name: "All", value: "all" },
    { name: "Project Documentaries", value: "Project Documentaries" },
    { name: "Case Studies", value: "Case Studies" },
    { name: "Expert Interviews", value: "Expert Interviews" },
    { name: "Webinars", value: "Webinars" },
    { name: "Panel Discussions", value: "Panel Discussions" },
    { name: "Explainers", value: "Explainers" },
    { name: "Platform Demos", value: "Platform Demos" },
    { name: "Training", value: "Training" },
  ],
  items: [
    {
      id: "1",
      title: "Sustainable Agriculture: Field to Market",
      description:
        "Documentary exploring the journey of certified sustainable produce from smallholder farms to international markets.",
      category: "Project Documentaries" as PortfolioCategory,
      thumbnail: "/images/portfolio/agriculture-documentary.jpg",
      duration: "12:30",
      featured: true,
      publishedAt: "2024-01",
      tags: ["Agriculture", "Certification", "Supply Chain"],
    },
    {
      id: "2",
      title: "ESG Transformation: A Corporate Journey",
      description:
        "Case study video documenting a manufacturing company's ESG transformation journey over 18 months.",
      category: "Case Studies" as PortfolioCategory,
      thumbnail: "/images/portfolio/esg-case-study.jpg",
      duration: "8:45",
      featured: true,
      publishedAt: "2024-01",
      tags: ["ESG", "Manufacturing", "Transformation"],
    },
    {
      id: "3",
      title: "Expert Insights: The Future of Carbon Markets",
      description:
        "Interview with climate advisory specialists on the evolving carbon market landscape and opportunities.",
      category: "Expert Interviews" as PortfolioCategory,
      thumbnail: "/images/portfolio/carbon-interview.jpg",
      duration: "15:20",
      featured: false,
      publishedAt: "2024-01",
      tags: ["Climate", "Carbon Markets", "Expert Interview"],
    },
    {
      id: "4",
      title: "Webinar: BRSR Reporting Essentials",
      description:
        "Recorded webinar providing practical guidance on Business Responsibility and Sustainability Reporting compliance.",
      category: "Webinars" as PortfolioCategory,
      thumbnail: "/images/portfolio/brsr-webinar.jpg",
      duration: "45:00",
      featured: true,
      publishedAt: "2023-12",
      tags: ["BRSR", "Reporting", "Compliance", "Webinar"],
    },
    {
      id: "5",
      title: "Panel: Sustainability Standards in Agriculture",
      description:
        "Industry panel discussion on the role of certification standards in transforming agricultural supply chains.",
      category: "Panel Discussions" as PortfolioCategory,
      thumbnail: "/images/portfolio/agriculture-panel.jpg",
      duration: "52:15",
      featured: false,
      publishedAt: "2023-12",
      tags: ["Agriculture", "Standards", "Panel Discussion"],
    },
    {
      id: "6",
      title: "Explainer: Understanding Scope 3 Emissions",
      description:
        "Educational video explaining Scope 3 emissions categories and practical approaches to measurement.",
      category: "Explainers" as PortfolioCategory,
      thumbnail: "/images/portfolio/scope3-explainer.jpg",
      duration: "6:30",
      featured: false,
      publishedAt: "2024-01",
      tags: ["Climate", "Carbon Accounting", "Educational"],
    },
    {
      id: "7",
      title: "Platform Demo: Compliance Management System",
      description:
        "Demonstration of AI-enabled compliance management platform features and capabilities.",
      category: "Platform Demos" as PortfolioCategory,
      thumbnail: "/images/portfolio/platform-demo.jpg",
      duration: "10:15",
      featured: false,
      publishedAt: "2024-01",
      tags: ["Technology", "AI", "Compliance", "Demo"],
    },
    {
      id: "8",
      title: "Training Highlight: Internal Auditor Program",
      description:
        "Highlights from our internal auditor training program for management system certifications.",
      category: "Training" as PortfolioCategory,
      thumbnail: "/images/portfolio/training-highlight.jpg",
      duration: "4:45",
      featured: false,
      publishedAt: "2023-12",
      tags: ["Training", "Certification", "Auditing"],
    },
  ] as PortfolioItem[],
  videoPlayer: {
    note: "Video playback coming soon. Contact us for access to specific content.",
  },
  cta: {
    title: "Want to See More?",
    description:
      "We can provide additional project documentation and case studies relevant to your sector or area of interest.",
    button: "Request Content",
  },
};
