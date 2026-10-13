export const RESUME_URL = "/Abu-Sufian-Rubel-Resume.pdf";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sufiandev.vercel.app";
const canonicalUrl = configuredUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "Abu Sufian Rubel — Software Engineer",
  displayName: "Abu Sufian Rubel",
  role: "Software Engineer & Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  remoteAvailability: "Available for Remote Opportunities",
  experience: "5+ Years",
  url: canonicalUrl,
  email: "rubel.nstu27@gmail.com",
  phone: "+8801320583389",
  whatsappUrl: "https://wa.me/8801320583389",
  githubUrl: "https://github.com/sufianrubel",
  linkedinUrl: "https://www.linkedin.com/in/sufianrubel/",
  resumeUrl: RESUME_URL,
  seo: {
    title: "Abu Sufian Rubel | Full-Stack Software Engineer",
    description:
      "Abu Sufian Rubel is a full-stack software engineer in Dhaka with 5+ years of experience in Laravel, PHP, Golang, Vue.js, REST APIs, ERP, and payment systems.",
    keywords: [
      "Abu Sufian Rubel",
      "Software Engineer Bangladesh",
      "Full-Stack Developer Bangladesh",
      "Laravel Developer Bangladesh",
      "Backend Developer Dhaka",
      "PHP Laravel Developer",
      "Enterprise Application Developer",
      "Payment Gateway Developer",
      "ERP Developer",
      "REST API Developer",
      "Remote Software Engineer"
    ]
  }
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
] as const;

export const socialLinks = [
  { label: "GitHub", href: siteConfig.githubUrl },
  { label: "LinkedIn", href: siteConfig.linkedinUrl },
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "WhatsApp", href: siteConfig.whatsappUrl }
] as const;
