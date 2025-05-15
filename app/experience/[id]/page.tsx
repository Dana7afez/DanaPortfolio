import { notFound } from "next/navigation"
import ExperienceDetails from "./experience-details"

interface ExperienceData {
  id: string
  title: string
  organization: string
  period: string
  location: string
  description: string
  type: "education" | "work" | "volunteer" | "certificate"
  icon: string
  color: string
  certificates?: {
    title: string
    image: string
  }[]
  skills?: string[]
  responsibilities?: string[]
}

const experienceData: ExperienceData[] = [
  {
    id: "ksu",
    title: "Bachelor of Science in Software Engineering",
    organization: "King Saud University",
    period: "2021 - 2025",
    location: "Riyadh, Saudi Arabia",
    description:
      "Pursuing a comprehensive degree in Software Engineering, focusing on software design, development, and engineering principles. The program covers a wide range of topics including programming, algorithms, software architecture, database systems, and project management.",
    type: "education",
    icon: "GraduationCap",
    color: "from-blue-500 to-blue-600",
    skills: [
      "Software Development",
      "Object-Oriented Programming",
      "Database Design",
      "Software Architecture",
      "Web Development",
      "Mobile Development",
    ],
  },
  {
    id: "drahim",
    title: "Fintech Internship",
    organization: "Drahim",
    period: "November 2024",
    location: "Riyadh, Saudi Arabia",
    description:
      "During my one-week internship at Drahim, I had the opportunity to explore various aspects of the fintech industry, working closely with a talented team of professionals. I contributed to ongoing projects, learned about the challenges and strategies in financial technology, and gained hands-on experience in a dynamic work environment. This experience allowed me to deepen my understanding of the intersection between technology and finance while connecting with experts in Drahim. It was a rewarding experience that significantly broadened my perspective on the tech industry.",
    type: "work",
    icon: "Briefcase",
    color: "from-purple-500 to-purple-600",
    certificates: [
      {
        title: "Certificate of Appreciation",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drahim%20internship-tdhezqMoY0dg7gZgEyTtyYKrA7EEzz.png",
      },
    ],
    responsibilities: [
      "Contributed to ongoing fintech projects",
      "Collaborated with cross-functional teams",
      "Learned about financial technology systems",
      "Participated in team meetings and discussions",
      "Gained exposure to industry best practices",
    ],
  },
  {
    id: "ai-club",
    title: "AI Labs Committee Member",
    organization: "Artificial Intelligence Club",
    period: "Jan 2025 - Present",
    location: "King Saud University",
    description:
      "As a member of the AI Labs Committee at the Artificial Intelligence Club, I facilitate AI workshops and contribute to research projects exploring artificial intelligence applications. This role involves organizing hands-on sessions, assisting students with AI tools and frameworks, and collaborating on innovative AI research initiatives.",
    type: "volunteer",
    icon: "Code",
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Facilitate AI workshops and training sessions",
      "Contribute to AI research projects",
      "Assist students with AI tools and frameworks",
      "Organize technical events and competitions",
      "Collaborate with other committee members",
    ],
  },
  {
    id: "ftc",
    title: "Design Team Member - Media Committee",
    organization: "Future Technology Club",
    period: "Jan 2025 - Present",
    location: "King Saud University",
    description:
      "As a Design Team Member in the Media Committee of the Future Technology Club, I create visual content and manage social media presence for technology-focused events and initiatives. This role involves designing promotional materials, creating engaging social media content, and supporting the club's outreach efforts.",
    type: "volunteer",
    icon: "Code",
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Design promotional materials for events",
      "Create engaging social media content",
      "Manage the club's social media presence",
      "Collaborate with other committee members",
      "Support technology-focused initiatives",
    ],
  },
  {
    id: "atrs",
    title: "Development Committee Member",
    organization: "Applied Technology and Research Society Club",
    period: "Jan 2025 - Present",
    location: "King Saud University",
    description:
      "As a Development Committee Member at the Applied Technology and Research Society Club, I contribute to technology research projects and development initiatives within the university community. This role involves participating in research activities, developing technical solutions, and supporting the club's mission to advance applied technology.",
    type: "volunteer",
    icon: "Code",
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Contribute to technology research projects",
      "Develop technical solutions for community needs",
      "Participate in research activities",
      "Collaborate with other committee members",
      "Support the club's mission and initiatives",
    ],
  },
  {
    id: "future-u",
    title: "Design Committee Member",
    organization: "Future U Initiative",
    period: "Aug 2024 - Present",
    location: "King Saud University",
    description:
      "As a Design Committee Member at the Future U Initiative, I design materials for educational initiatives aimed at preparing students for future technology careers. This role involves creating educational resources, designing visual materials, and supporting the initiative's mission to bridge the gap between education and industry needs.",
    type: "volunteer",
    icon: "Code",
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Design materials for educational initiatives",
      "Create visual resources for technology education",
      "Support the initiative's mission and goals",
      "Collaborate with other committee members",
      "Contribute to preparing students for future careers",
    ],
  },
]

export function generateStaticParams() {
  return experienceData.map((experience) => ({
    id: experience.id,
  }))
}

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const experience = experienceData.find((exp) => exp.id === params.id)

  if (!experience) {
    notFound()
  }

  return <ExperienceDetails experience={experience} />
}
