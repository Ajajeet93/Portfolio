import {
  BriefcaseBusiness,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Home,
  Mail,
  ScrollText,
  UserRound,
  Wrench,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "certificates", label: "Certificates", icon: ScrollText },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export const portfolio = {
  hero: {
    name: "Ajeet Yadav",
    title: "Full Stack Developer (MERN)",
    tagline: "Building scalable web experiences.",
    subtext:
      "Focused on scalable MERN applications, strong problem solving, and product experiences that stay fast, secure, and reliable across devices.",
    resumeHref: "/Ajeet.pdf",
  },
  about: {
    intro:
      "I enjoy building full-stack products that combine secure backend logic, practical frontend architecture, and a smooth user experience, while continuously improving how I design, build, and scale real-world applications.",
    details: [
      "Problem solving is a major part of my learning process, reflected in my 1786+ LeetCode contest rating and 600+ solved questions across coding platforms, helping me strengthen implementation speed, logic, and solution quality.",
    ],
    profiles: [
      {
        title: "GitHub",
        handle: "@Ajajeet93",
        href: "https://github.com/Ajajeet93",
        note: "Projects and code",
      },
      {
        title: "LeetCode",
        handle: "1790+ rating",
        href: "https://leetcode.com/u/Ajeet930/",
        note: "Contest profile",
      },
      {
        title: "Problem Solved",
        handle: "600+ solved",
        href: "https://leetcode.com/u/Ajeet930/",
        note: "Across platforms",
      },
    ],
  },
  education: [
    {
      title: "Bachelor of Technology in Computer Science and Engineering",
      meta: "Lovely Professional University, Phagwara, Punjab",
      detail: "CGPA 8.38 | Aug 2023 - Present",
    },
    {
      title: "Intermediate",
      meta: "Gorakhpur Public School, Gorakhpur, Uttar Pradesh",
      detail: "Percentage 80.4% | Apr 2021 - Jun 2022",
    },
    {
      title: "Matriculation",
      meta: "Gorakhpur Public School, Gorakhpur, Uttar Pradesh",
      detail: "Percentage 88% | Apr 2019 - Mar 2020",
    },
  ],
  projects: [
    {
      name: "Full-Stack E-commerce & Subscription Platform",
      stack: ["MERN", "Redux", "Tailwind CSS", "Google OAuth"],
      description:
        "Scalable e-commerce platform with client and admin portals, subscriptions, wallet flows, and secure role-based access.",
      github: "https://github.com/Ajajeet93/QuickKart",
      live: "https://quick-kart-beige.vercel.app/",
    },
    {
      name: "Plagiarism Detection System",
      stack: ["React 19", "Vite", "JavaScript", "Web Workers", "Tailwind CSS"],
      description:
        "Browser-based plagiarism checker using Rabin-Karp, Winnowing, Web Workers, and Chart.js for responsive large-document analysis.",
      github: "https://github.com/Ajajeet93/Plagrism_detection",
      live: "https://example.com/",
    },
    {
      name: "Hotel Management System",
      stack: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      description:
        "A hotel booking and management platform built for reservations, room availability, customer records, and billing through an admin dashboard.",
      github: "https://github.com/Ajajeet93/TheRoyalStayNew",
      live: "https://example.com/",
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["C++", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks",
      items: ["React.js", "Express.js", "Tailwind CSS"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "GitHub", "Postman", "Jira"],
    },
    {
      title: "Core Concepts",
      items: ["Data Structures & Algorithms", "OOPs", "Computer Networks", "DBMS"],
    },
    {
      title: "Soft Skills",
      items: ["Quick Learner", "Problem-Solving", "Team Collaboration"],
    },
  ],
  highlights: [
    {
      label: "IBM: Developing Back-End Applications with Node.js and Express",
      href: "https://www.coursera.org/account/accomplishments/verify/LYTRU5VPMS3Z",
    },
    {
      label: "Meta: React (Basic & Advanced)",
      href: "https://www.coursera.org/account/accomplishments/verify/C4WUY59PG1WF",
    },
    {
      label: "Meta: Programming with JavaScript",
      href: "https://www.coursera.org/account/accomplishments/verify/3T6M1Z5HIQN8",
    },
    {
      label: "CipherSchools: Data Structures and Algorithms Using C++",
      href: "https://drive.google.com/file/d/1JC0rFu_B1KFEIWusxmALmZHoEoug98Be/view",
    },
  ],
  experience: [
    {
      title: "Deloitte | Technology Job Simulation (Forage)",
      meta: "Virtual Internship | August 2025",
      detail:
        "Completed Deloitte's Technology Job Simulation program with practical tasks focused on coding and development, applying problem-solving and technical implementation skills in simulated real-world scenarios while building familiarity with professional software development workflows.",
    },
  ],
  contact: {
    email: "ajeetyadav16022004@gmail.com",
    linkedin: "https://www.linkedin.com/in/ajeet930",
    github: "https://github.com/Ajajeet93",
    phone: "+91-9305615328",
    leetcode: "https://leetcode.com/u/Ajeet930/",
    gfg: "https://www.geeksforgeeks.org/profile/ajeet930",
    code360: "https://www.naukri.com/code360/profile/ajajeet",
    codolio: "https://codolio.com/profile/ajajeet93",
    hackerrank: "https://www.hackerrank.com/profile/ajajeet93",
    codechef: "https://www.codechef.com/users/ajajeet93",
  },
  footer: {
    line: "Strong MERN projects. Clear engineering focus.",
    icon: BriefcaseBusiness,
  },
};
