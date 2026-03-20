export const careersContent = {
  hero: {
    title: "Join Our Continuum",
    subtitle: "Build a career with purpose and impact",
    description:
      "At Anantariva, we're building a team of exceptional professionals committed to sustainable transformation. If you're passionate about making a difference, we want to hear from you.",
  },
  whoWeWelcome: {
    title: "Who We Welcome",
    subtitle: "Diverse expertise, shared commitment",
    description:
      "We seek professionals who combine technical excellence with a genuine commitment to sustainability and responsible business practices.",
    roles: [
      {
        title: "Sustainability Professionals",
        description: "Experts in ESG, sustainable development, and corporate responsibility",
        icon: "Leaf",
        image: "/careers/ww1_sustainability.png",
      },
      {
        title: "Agriculture & Forestry Experts",
        description: "Specialists in agricultural systems, forestry, and natural resource management",
        icon: "TreePine",
        image: "/careers/ww2_agriculture.png",
      },
      {
        title: "ESG Analysts",
        description: "Professionals skilled in ESG assessment, reporting, and strategy",
        icon: "BarChart3",
        image: "/careers/ww3_esg_analysts.png",
      },
      {
        title: "Climate Scientists",
        description: "Experts in climate science, carbon accounting, and environmental assessment",
        icon: "Cloud",
        image: "/careers/ww4_climate_scientists.png",
      },
      {
        title: "AI & Data Specialists",
        description: "Technologists focused on responsible AI, data governance, and digital transformation",
        icon: "Cpu",
        image: "/careers/ww5_ai_data.png",
      },
      {
        title: "M&E Experts",
        description: "Professionals experienced in monitoring, evaluation, and impact assessment",
        icon: "Target",
        image: "/careers/ww6_me_experts.png",
      },
      {
        title: "Policy Researchers",
        description: "Analysts with expertise in regulatory frameworks and policy development",
        icon: "Scale",
        image: "/careers/ww7_policy_researchers.png",
      },
      {
        title: "Certification & Compliance Specialists",
        description: "Professionals experienced in standards implementation and audit processes",
        icon: "Award",
        image: "/careers/ww8_certification.png",
      },
    ],
  },
  whyWorkWithUs: {
    title: "Why Work With Us",
    subtitle: "More than a job—a mission",
    benefits: [
      {
        title: "Global Exposure",
        description:
          "Work on projects spanning diverse sectors and geographies, gaining breadth of experience that accelerates professional growth.",
        icon: "Globe",
        image: "/careers/Global%20Exposure.jpg",
      },
      {
        title: "Field Impact",
        description:
          "See your work translate into real-world outcomes—from farm fields to factory floors, your contributions matter.",
        icon: "Target",
        image: "/careers/Field%20Impact.jpg",
      },
      {
        title: "Research-Driven Culture",
        description:
          "We invest in knowledge creation. Contribute to publications, frameworks, and methodologies that advance the field.",
        icon: "Microscope",
        image: "/careers/Research-Driven%20Culture.jpg",
      },
      {
        title: "Interdisciplinary Collaboration",
        description:
          "Learn from experts across domains. Our multidisciplinary approach means exposure to diverse perspectives and skills.",
        icon: "Users",
        image: "/careers/Interdisciplinary%20Collaboration.jpg",
      },
      {
        title: "Innovation Focus",
        description:
          "We embrace new approaches, technologies, and methodologies. Bring fresh ideas and see them implemented.",
        icon: "Lightbulb",
        image: "/careers/Innovation%20Focus.jpg",
      },
      {
        title: "Ethical Foundation",
        description:
          "Work for an organization where integrity isn't just a value statement—it's how we operate every day.",
        icon: "Heart",
        image: "/careers/Ethical%20Foundation.jpg",
      },
    ],
  },
  currentOpenings: {
    title: "Current Openings",
    subtitle: "Explore opportunities to join our team",
    note: "We're actively building our team. Even if you don't see a specific opening that matches your profile, we encourage you to reach out.",
    openings: [
      {
        title: "Senior Sustainability Consultant",
        location: "India (Flexible)",
        type: "Full-time",
        description:
          "Lead ESG advisory engagements and help organizations navigate sustainability transformation.",
        image: "/careers/Senior%20Sustainability%20Consultant.jpg",
      },
      {
        title: "Agriculture Certification Specialist",
        location: "India",
        type: "Full-time",
        description:
          "Support agricultural clients in achieving certification readiness across sustainability standards.",
        image: "/careers/Agriculture%20Certification%20Specialist.jpg",
      },
      {
        title: "M&E Analyst",
        location: "India",
        type: "Full-time / Contract",
        description:
          "Design and implement monitoring and evaluation frameworks for development programs.",
        image: "/careers/M%26E%20Analyst.jpg",
      },
    ],
  },
  apply: {
    title: "Ready to Apply?",
    description:
      "We'd love to hear from you. Submit your CV and tell us about yourself—what drives you, what you've accomplished, and what you hope to achieve.",
    email: "careers@anantariva.com",
    cta: "Submit Your Application",
  },
  formFields: {
    title: "Application Form",
    subtitle: "Tell us about yourself",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email Address", type: "email", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      {
        name: "position",
        label: "Position of Interest",
        type: "select",
        required: true,
        options: [
          "Senior Sustainability Consultant",
          "Agriculture Certification Specialist",
          "M&E Analyst",
          "General Application",
        ],
      },
      { name: "experience", label: "Years of Experience", type: "text", required: true },
      { name: "linkedin", label: "LinkedIn Profile", type: "url", required: false },
      { name: "coverLetter", label: "Cover Letter", type: "textarea", required: true },
    ],
  },
};
