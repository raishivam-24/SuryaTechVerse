// All site copy lives here. Edit this file to change any text on the site
// without touching component code. Content merged from the two source
// designs (SuryaTechVerse light theme + SURYA techVerse dark theme).

export const brand = {
  name: "SURYA techVerse",
  initial: "S",
};

export const navLinks = ["Services", "Work", "About", "Team", "Contact"];

export const hero = {
  eyebrow: "Your Trusted Growth Partner",
  headline: "Business Consultant & Software Solutions",
  tagline: "Bridging the Gap Between Creativity, Innovation, and Digital Excellence",
  description:
    "We blend heritage business insight with cutting-edge tech — web development, robust cybersecurity, and strategic digital marketing — to elevate your brand's digital presence and operational efficiency.",
  primaryCta: { label: "Explore Our Universe", href: "#services" },
  headerCta: { label: "Start a Project", href: "#contact" },
};

export const about = {
  title: "Our Vision",
  mission: {
    heading: "Pioneering the Digital Frontier",
    body: "At SuryaTechVerse, we don't just build software; we engineer digital experiences that bridge the gap between creative ambition and technological reality. Our approach marries rigorous software engineering principles with intuitive design thinking.",
    tags: ["Innovation", "Precision"],
  },
  founder: {
    name: "Suryakant Jaiswal",
    role: "Founder & Visionary",
    quote:
      "Technology should amplify human creativity, not constrain it. We built SuryaTechVerse to be the catalyst for that amplification.",
  },
  stat: { value: "100%", label: "Client Satisfaction" },
  education: {
    heading: "Commitment to Tech Education",
    body: "Beyond bespoke solutions, we are dedicated to nurturing the next generation of technologists through comprehensive educational programs, ensuring the digital ecosystem continues to thrive with fresh talent.",
  },
};

// Merged and de-duplicated service list from both source sites.
export const services = [
  {
    icon: "🖥",
    title: "Web Development",
    desc: "High-performance, responsive web applications built with modern frameworks to deliver seamless user experiences and robust functionality.",
    items: ["Frontend & Backend", "E-commerce Solutions"],
  },
  {
    icon: "🛡",
    title: "Cybersecurity",
    desc: "Protecting your digital assets with advanced security protocols, vulnerability assessments, and proactive threat mitigation strategies.",
    items: ["Penetration Testing", "Security Audits"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications designed for engagement, performance, and intuitive usability on all devices.",
    items: ["iOS & Android", "UI/UX Design"],
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "Data-driven marketing campaigns and SEO/SEM strategy that amplify brand visibility, drive targeted traffic, and maximize return on investment.",
    items: ["SEO & SEM", "Content Strategy"],
  },
  {
    icon: "🎓",
    title: "Tech Education",
    desc: "Industry-aligned training programs designed to equip individuals and teams with practical, high-demand technological skills.",
    items: ["Corporate Training", "Certification Prep"],
  },
  {
    icon: "🧩",
    title: "Custom Software",
    desc: "Tailored applications and APIs built for enterprise-level demands, integrating cleanly with your existing systems and workflows.",
    items: ["Bespoke Applications", "API Integration"],
  },
  {
    icon: "🎯",
    title: "Meta Ads",
    desc: "Targeted ad management across Meta platforms, engineered for maximum return on ad spend and qualified lead generation.",
    items: ["Campaign Strategy", "Performance Tracking"],
  },
  {
    icon: "💬",
    title: "Social Media Management",
    desc: "Engagement and content strategy for authority building, keeping your brand consistent and visible across every channel.",
    items: ["Content Calendars", "Community Engagement"],
  },
];

// Merged project showcase, including the featured FinTech case study.
// `image` uses WordPress's public mshots screenshot service, which renders a
// live, up-to-date screenshot of each URL on the fly (no static/fake images).
function shot(url) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=900`;
}

export const projects = [
  {
    name: "RR Makeup Studio & Academy",
    sector: "Beauty & Bridal",
    desc: "Bridal, HD & airbrush makeup studio and academy in Bilaspur, Chhattisgarh.",
    link: "https://www.rrmakeupstudioandacademy.in/",
    image: shot("https://www.rrmakeupstudioandacademy.in/"),
  },
  {
    name: "Desi Kalewaa",
    sector: "Food & Restaurant",
    desc: "A Chhattisgarhi restaurant brand bringing authentic regional flavors online.",
    link: "https://www.desikalewaa.com/",
    image: shot("https://www.desikalewaa.com/"),
  },
  {
    name: "Serenity Salon & Wellness Spa",
    sector: "Salon & Spa",
    desc: "A luxury salon and wellness spa lounge based in Bilaspur, Chhattisgarh.",
    link: "https://www.serenitysalonandspa.co.in/",
    image: shot("https://www.serenitysalonandspa.co.in/"),
  },
  {
    name: "Lotus Children's Hospital",
    sector: "Healthcare",
    desc: "A digital front door for pediatric care at Lotus Children's Hospital, Bilaspur.",
    link: "https://www.lotuschildrenhospital.in/",
    image: shot("https://www.lotuschildrenhospital.in/"),
  },
  {
    name: "Pooja City",
    sector: "E-commerce",
    desc: "An online destination for pooja essentials and devotional products.",
    link: "https://www.poojacity.in/",
    image: shot("https://www.poojacity.in/"),
  },
  {
    name: "NAMG & Co",
    sector: "Corporate",
    desc: "A professional corporate web presence for NAMG & Co.",
    link: "https://www.namgandco.in/",
    image: shot("https://www.namgandco.in/"),
  },
  {
    name: "Shree Ram Vihaar",
    sector: "Real Estate",
    desc: "A RERA-approved residential plot project at Lingiyadih, Bilaspur.",
    link: "https://www.shreeramvihaar.in/",
    image: shot("https://www.shreeramvihaar.in/"),
  },
  {
    name: "The Lazy Surgeon",
    sector: "Aesthetics",
    desc: "Digital presence for the Lumiflex aesthetic treatment brand.",
    link: "https://www.thelazysurgeon.in/",
    image: shot("https://www.thelazysurgeon.in/"),
  },
];

export const team = [
  { name: "Alex Mercer", role: "Lead Developer" },
  { name: "Jamie Lin", role: "Security Analyst" },
  { name: "Morgan Reyes", role: "Marketing Director" },
];

export const contact = {
  heading: "Let's Build the Future Together",
  description:
    "Ready to elevate your digital presence? Reach out to discuss how our expertise can align with your vision. Grow your business with us — contact now for a consultation.",
  email: "contact@suryatechverse.co.in",
  businessEmail: "sjbusinessconsultingandtech@gmail.com",
  phone: "+91 6263471960",
  location: "Global Operations",
  linkedin: "https://www.linkedin.com/in/suryakant-jaiswal-2a4215265/",
  serviceOptions: [
    "Web Development",
    "Cybersecurity",
    "Mobile App Development",
    "Digital Marketing",
    "Tech Education",
    "Custom Software",
    "Meta Ads",
    "Social Media Management",
  ],
  hashtags: ["#suryatechverse", "#businessconsultant", "#software", "#digitalmarketing"],
};

export const footer = {
  copyright: "© 2024 SURYA techVerse. All rights reserved.",
  links: ["Privacy", "Terms", "Twitter", "LinkedIn"],
};