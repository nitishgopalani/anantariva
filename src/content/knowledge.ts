export type ResourceCategory =
  | "Whitepapers"
  | "Policy Briefs"
  | "Research"
  | "Technical Manuals"
  | "Frameworks"
  | "Case Studies"
  | "Guidelines"
  | "Toolkits";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  format: "PDF" | "Excel" | "Interactive";
  tags: string[];
  downloadable: boolean;
  featured: boolean;
  publishedAt: string;
  image?: string;
}

export const knowledgeContent = {
  hero: {
    title: "Knowledge Repository",
    subtitle: "Curated resources for sustainability professionals",
    description:
      "Access our library of whitepapers, research publications, frameworks, and practical tools to support your sustainability and compliance journey.",
  },
  categories: [
    { name: "All Resources", value: "all", icon: "Library" },
    { name: "Whitepapers", value: "Whitepapers", icon: "FileText" },
    { name: "Policy Briefs", value: "Policy Briefs", icon: "Scale" },
    { name: "Research", value: "Research", icon: "Microscope" },
    { name: "Technical Manuals", value: "Technical Manuals", icon: "BookOpen" },
    { name: "Frameworks", value: "Frameworks", icon: "LayoutGrid" },
    { name: "Case Studies", value: "Case Studies", icon: "FolderOpen" },
    { name: "Guidelines", value: "Guidelines", icon: "FileCheck" },
    { name: "Toolkits", value: "Toolkits", icon: "Wrench" },
  ],
  resources: [
    {
      id: "1",
      title: "ESG Reporting Framework Guide",
      description:
        "Comprehensive guide to ESG reporting frameworks including BRSR, GRI, and SASB, with implementation considerations for Indian organizations.",
      category: "Whitepapers" as ResourceCategory,
      format: "PDF" as const,
      tags: ["ESG", "Reporting", "BRSR", "Compliance"],
      downloadable: true,
      featured: true,
      publishedAt: "2024-01",
      image: "/Knowledge%20Repository/ESG%20Reporting%20Framework%20Guide.jpg",
    },
    {
      id: "2",
      title: "Carbon Accounting Methodology Brief",
      description:
        "Overview of carbon accounting methodologies for Scope 1, 2, and 3 emissions with practical guidance for implementation.",
      category: "Technical Manuals" as ResourceCategory,
      format: "PDF" as const,
      tags: ["Climate", "Carbon", "GHG Protocol", "Measurement"],
      downloadable: true,
      featured: true,
      publishedAt: "2024-01",
      image: "/Knowledge%20Repository/Carbon%20Accounting%20Methodology%20Brief.jpg",
    },
    {
      id: "3",
      title: "Sustainable Agriculture Certification Landscape",
      description:
        "Analysis of major sustainability certification schemes in agriculture, with comparison of requirements and market relevance.",
      category: "Research" as ResourceCategory,
      format: "PDF" as const,
      tags: ["Agriculture", "Certification", "Sustainability", "Standards"],
      downloadable: true,
      featured: false,
      publishedAt: "2023-12",
      image: "/Knowledge%20Repository/Knowlagebase_all_image%20down/Sustainable%20Agriculture%20Certification%20Landscape.jpg",
    },
    {
      id: "4",
      title: "Risk-Based Assessment Framework",
      description:
        "Practical framework for implementing risk-based thinking in compliance management systems and assessment processes.",
      category: "Frameworks" as ResourceCategory,
      format: "PDF" as const,
      tags: ["Risk Management", "Compliance", "Assessment", "ISO"],
      downloadable: true,
      featured: true,
      publishedAt: "2024-01",
      image: "/Knowledge%20Repository/Risk-Based%20Assessment%20Framework.jpg",
    },
    {
      id: "5",
      title: "Supply Chain Due Diligence Toolkit",
      description:
        "Practical tools and templates for implementing supply chain due diligence processes aligned with emerging regulations.",
      category: "Toolkits" as ResourceCategory,
      format: "Excel" as const,
      tags: ["Supply Chain", "Due Diligence", "EUDR", "Compliance"],
      downloadable: true,
      featured: false,
      publishedAt: "2024-01",
      image: "/Knowledge%20Repository/Knowlagebase_all_image%20down/Supply%20Chain%20Due%20Diligence%20Toolkit.webp",
    },
    {
      id: "6",
      title: "Climate Policy Landscape: India",
      description:
        "Overview of climate policy developments in India, including NDC commitments, sectoral policies, and emerging regulations.",
      category: "Policy Briefs" as ResourceCategory,
      format: "PDF" as const,
      tags: ["Climate", "Policy", "India", "NDC"],
      downloadable: true,
      featured: false,
      publishedAt: "2023-12",
      image: "/Knowledge%20Repository/Knowlagebase_all_image%20down/Climate%20Policy%20Landscape%20India.avif",
    },
    {
      id: "7",
      title: "M&E Framework Design Guide",
      description:
        "Step-by-step guide to designing monitoring and evaluation frameworks for development programs and sustainability initiatives.",
      category: "Guidelines" as ResourceCategory,
      format: "PDF" as const,
      tags: ["M&E", "Development", "Impact", "Measurement"],
      downloadable: true,
      featured: false,
      publishedAt: "2024-01",
      image: "/Knowledge%20Repository/Knowlagebase_all_image%20down/M%26E%20Framework%20Design%20Guide.png",
    },
    {
      id: "8",
      title: "Agricultural Value Chain Case Study",
      description:
        "Case study examining certification implementation across an agricultural value chain, from smallholders to export markets.",
      category: "Case Studies" as ResourceCategory,
      format: "PDF" as const,
      tags: ["Agriculture", "Case Study", "Certification", "Supply Chain"],
      downloadable: true,
      featured: false,
      publishedAt: "2023-12",
      image: "/Knowledge%20Repository/Knowlagebase_all_image%20down/Agricultural%20Value%20Chain%20Case%20Study.jpg",
    },
  ] as Resource[],
  gatedDownload: {
    title: "Access Our Resources",
    description:
      "Register to download our full library of resources. We'll keep you informed about new publications and updates.",
    note: "Resource downloads will be available soon. Contact us for specific requests.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Work Email", type: "email", required: true },
      { name: "organization", label: "Organization", type: "text", required: true },
      { name: "role", label: "Role", type: "text", required: false },
    ],
  },
  cta: {
    title: "Can't Find What You Need?",
    description:
      "Our team can provide customized resources and guidance tailored to your specific requirements.",
    button: "Contact Us",
  },
};
