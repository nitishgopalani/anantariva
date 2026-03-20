export const contactContent = {
  hero: {
    title: "Partner With Anantariva",
    subtitle: "Start a conversation",
    description:
      "Whether you're exploring sustainability transformation, seeking compliance support, or interested in partnership opportunities, we'd welcome the opportunity to discuss how we might work together.",
  },
  form: {
    title: "Get in Touch",
    subtitle: "Tell us about your needs",
    fields: {
      name: { label: "Full Name", placeholder: "Your name", required: true },
      organization: { label: "Organization", placeholder: "Company or institution", required: true },
      email: { label: "Email Address", placeholder: "your.email@company.com", required: true },
      phone: { label: "Phone Number", placeholder: "+91 XXXXX XXXXX", required: false },
      sector: {
        label: "Sector",
        placeholder: "Select your sector",
        required: true,
        options: [
          "Agriculture & Agribusiness",
          "Food Processing & Supply Chains",
          "Forestry & Natural Resources",
          "Climate & Environment",
          "Infrastructure & Manufacturing",
          "Defence & Strategic",
          "Development & Donor Programs",
          "Coastal & Marine",
          "Technology & AI",
          "Research & Academia",
          "Other",
        ],
      },
      service: {
        label: "Service Required",
        placeholder: "Select service area",
        required: true,
        options: [
          "ESG & Sustainability Advisory",
          "Certification Readiness",
          "Monitoring & Evaluation",
          "Climate & Carbon Advisory",
          "Compliance Management",
          "Training & Capacity Building",
          "Research & Analysis",
          "Strategic Partnership",
          "General Inquiry",
        ],
      },
      message: {
        label: "Message",
        placeholder: "Tell us about your requirements, timeline, and any specific questions...",
        required: true,
      },
    },
    submitButton: "Send Message",
    successMessage: "Thank you for reaching out. We'll respond within 2 business days.",
  },
  strategicEngagement: {
    title: "Strategic Engagement",
    subtitle: "For partnership and collaboration inquiries",
    description:
      "If you're interested in exploring strategic partnerships, consortium arrangements, or long-term collaboration opportunities, please reach out directly.",
    cta: "Discuss Partnership",
  },
  contacts: {
    title: "Direct Contacts",
    subtitle: "Reach the right team",
    items: [
      {
        title: "General Inquiries",
        email: "info@anantariva.com",
        description: "For general questions about our services and capabilities",
        icon: "Mail",
      },
      {
        title: "Careers",
        email: "careers@anantariva.com",
        description: "For job opportunities and career-related inquiries",
        icon: "Briefcase",
      },
      {
        title: "Media & Press",
        email: "media@anantariva.com",
        description: "For press inquiries, interviews, and media partnerships",
        icon: "Newspaper",
      },
      {
        title: "Investors",
        email: "investors@anantariva.com",
        description: "For investment inquiries and investor relations",
        icon: "TrendingUp",
      },
    ],
  },
  location: {
    title: "Our Office",
    address: "India",
    note: "Primary operations based in India. Contact us for specific location details.",
  },
  responseTime: {
    title: "Response Time",
    description:
      "We aim to respond to all inquiries within 2 business days. For urgent matters, please indicate so in your message.",
  },
};
