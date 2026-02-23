export const siteConfig = {
  name: "Anantariva Global Private Limited",
  shortName: "Anantariva",
  tagline: "Where Abundance Meets Vision",
  description:
    "Independent consulting and conformity-assessment firm delivering technical advisory, monitoring & evaluation, certification readiness, and sustainability solutions aligned with national and international standards.",
  pillars: ["Trust", "Transparency", "Transformation"],
  announcementBar:
    "Independent Assurance. Sustainable Strategy. Measurable Impact.",
  emails: {
    general: "info@anantariva.com",
    careers: "careers@anantariva.com",
    media: "media@anantariva.com",
    investors: "investors@anantariva.com",
  },
  social: {
    linkedin: "https://linkedin.com/company/anantariva",
    twitter: "https://twitter.com/anantariva",
  },
  ctas: {
    primary: "Partner With Us",
    secondary: "Request Consultation",
    tertiary: "Reach Out",
    explore: "Explore Services",
  },
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    {
      name: "Company",
      href: "#",
      children: [
        { name: "About Us", href: "/about", description: "Our identity, mission, and values" },
        { name: "Our Team", href: "/about#experts", description: "Meet our expert network" },
        { name: "Our Presence", href: "/footprints", description: "Global reach, local expertise" },
        { name: "Careers", href: "/careers", description: "Join our continuum" },
      ],
    },
    { name: "Services", href: "/services" },
    { name: "Clients & Partnerships", href: "/clients-partnerships" },
    {
      name: "Resources",
      href: "#",
      children: [
        { name: "Insights", href: "/insights", description: "Thought leadership & analysis" },
        { name: "Newsroom", href: "/newsroom", description: "Latest updates & press" },
        { name: "Knowledge Repository", href: "/knowledge", description: "Reports & publications" },
        { name: "Portfolio", href: "/portfolio", description: "Video & work showcase" },
      ],
    },
    { name: "Investors", href: "/investors" },
    { name: "Contact", href: "/contact" },
  ],
  footer: {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Presence", href: "/footprints" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "All Services", href: "/services" },
      { name: "Industries", href: "/services#industries" },
      { name: "Delivery Approach", href: "/services#approach" },
    ],
    resources: [
      { name: "Insights", href: "/insights" },
      { name: "Newsroom", href: "/newsroom" },
      { name: "Knowledge Repository", href: "/knowledge" },
      { name: "Portfolio", href: "/portfolio" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
};
