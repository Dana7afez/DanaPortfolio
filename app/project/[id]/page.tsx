"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code2,
  Layout,
  Globe,
  Package,
  Cpu,
  Code,
  Calendar,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import LoadingScreen from "@/components/loading-screen"

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
}

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  techStack: string[]
  features: string[]
  achievements?: string[]
  link?: string
  github?: string
  year: string
}

const projects: Project[] = [
  {
    id: "aidpulse",
    title: "AidPulse AI",
    description:
      "AI-Powered Humanitarian Relief Platform developed for the King Salman Relief Hackathon, ranking in the Top 5 teams.",
    longDescription:
      "AidPulse is an AI-Powered Humanitarian Relief Platform developed as part of the King Salman Relief Hackathon: AI in Humanitarian Relief. Our team, Premise, proudly achieved 5th place out of numerous competing teams. The project leverages AI technologies to enhance humanitarian response, focusing on real-time crisis mapping, medical data management, and optimized resource distribution. This achievement and experience was a unique opportunity to contribute to Vision 2030 and support the mission of King Salman Humanitarian Aid and Relief Centre (KSrelief) by building innovative solutions to improve emergency healthcare delivery in crisis zones.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AidPulse%20AI%20logo-TvajfRkw7K8Sk7FTvwWtqe2AznVbUC.png",
    tags: ["React.js", "Next.js", "TypeScript", "AI Integration"],
    techStack: ["React.js", "Next.js", "TypeScript", "AI SDK", "API Integration", "UI/UX Design"],
    features: [
      "Real-time crisis mapping",
      "Medical data management",
      "Optimized resource distribution",
      "Emergency healthcare delivery",
      "AI-driven decision support",
    ],
    achievements: [
      "5th place in the King Salman Relief Hackathon",
      "Recognition for innovative use of AI in humanitarian aid",
      "Successful implementation of real-time data processing",
    ],
    github: "https://github.com/Dana7afez/AidPulse-AI",
    year: "2025",
  },
  {
    id: "face-auth",
    title: "Face Authentication Login System",
    description:
      "A login system using facial recognition technology with features like real-time selfie capture and unauthorized login prevention.",
    longDescription:
      "The Face Authentication Login System allows users to register and log in using facial recognition technology. It includes features such as face detection and recognition, registration with real-time selfie capture, unauthorized login attempt handling, and duplicate user registration prevention. This system was implemented as part of my involvement with the ATRS Club at King Saud University, showcasing skills in cutting-edge biometric technology.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Face%20Authentication%20logo-IJj8lR7vJtP8SFCEGHWdVpOLnTAHHg.png",
    tags: ["Python", "Flask", "OpenCV", "Computer Vision"],
    techStack: ["Python", "Flask", "OpenCV", "SQLAlchemy", "Cryptography", "Computer Vision"],
    features: [
      "Face detection and recognition",
      "Registration with real-time selfie capture",
      "Unauthorized login attempt handling",
      "Duplicate user registration prevention",
      "Secure authentication workflow",
    ],
    github: "https://github.com/Dana7afez/face-authentication-login-system",
    year: "2025",
  },
  {
    id: "elevate",
    title: "Elevate",
    description:
      "Android application for professional networking and career growth with AI-powered skills testing and personalized feedback.",
    longDescription:
      "Elevate is a cutting-edge Android application designed to transform professional networking and career growth. By integrating AI-powered skills testing, Elevate enables users to showcase their expertise, receive detailed feedback, and build essential skills. The app streamlines the hiring process for recruiters while empowering job seekers to grow in their careers. Through an intuitive design, Elevate offers features like interactive quizzes, personalized feedback, guided skill-building, and performance tracking to make professional development more accessible and effective. Developed over a semester as part of the SWE 444 course, the project followed Agile methodologies across four sprints.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elevate%20logo-4tCR1swm0E2bgUcX4SPX4JljuL3cK9.png",
    tags: ["Android", "Firebase", "AI Integration", "FlutterFlow"],
    techStack: ["Android", "Firebase", "AI Integration", "FlutterFlow", "Dart", "Flutter"],
    features: [
      "AI-powered skills assessment",
      "Personalized feedback system",
      "Interactive learning modules",
      "Career growth tracking",
      "Recruiter-candidate matching",
    ],
    github: "https://github.com/Dana7afez/Elevate-Application",
    year: "2024",
  },
  {
    id: "morse-code",
    title: "Morse Code Translator",
    description:
      "A SwiftUI application that translates text to Morse code and vice versa with audio playback capabilities.",
    longDescription:
      "The Morse Code Translator is a SwiftUI application that allows users to translate text to Morse code and vice versa. The app features a clean, intuitive interface with real-time translation, audio playback of Morse code signals, and support for multiple languages. This project demonstrates my skills in iOS development and accessibility-focused design.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morse%20Code%20Translator%20logo-QNCv5gXW2ZcNCKPWG1xitSaPOs8xbP.png",
    tags: ["Swift", "SwiftUI", "iOS", "Accessibility"],
    techStack: ["Swift", "SwiftUI", "iOS", "AVFoundation", "Accessibility"],
    features: [
      "Text to Morse code translation",
      "Morse code to text translation",
      "Audio playback of Morse code",
      "Visual representation of signals",
      "Customizable playback speed",
    ],
    github: "https://github.com/Dana7afez/swiftui-morse-code-translator",
    year: "2025",
  },
  {
    id: "askccis",
    title: "AskCCIS",
    description: "AI-powered chatbot to help CCIS students with questions about events, courses, and campus resources.",
    longDescription:
      "AskCCIS is an innovative AI-powered platform designed to assist students at the College of Computer Information and Science in navigating their academic journey effectively. The system features an interactive interface that addresses a wide range of inquiries related to the college, including student clubs, events, training courses, graduation projects, and important announcements. By leveraging advanced artificial intelligence technology, AskCCIS aims to provide students with comprehensive support, enabling them to access essential information effortlessly and in real time. A key objective of AskCCIS is to facilitate seamless communication between students and administrative staff, enhancing collaboration and mentorship opportunities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AskCCIS%20logo-n9sevdEi8ceLOitg08gEtmhL5R8Pjy.png",
    tags: ["AI", "Chatbot", "Web Development"],
    techStack: ["AI", "Natural Language Processing", "Web Development", "Database Design", "User Experience"],
    features: [
      "AI-powered question answering",
      "Event and course information",
      "Campus resource directory",
      "Administrative process guidance",
      "Real-time notifications",
    ],
    github: "https://github.com/Dana7afez",
    year: "2025",
  },
]

export default function ProjectPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [project, setProject] = useState<Project | undefined>(undefined)

  useEffect(() => {
    // Get the project ID from the URL
    const { pathname } = window.location
    const projectId = pathname.split("/").pop()

    if (projectId) {
      const foundProject = projects.find((project) => project.id === projectId)

      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/")
      }

      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [router])

  if (isLoading || !project) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[#030014] py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8 text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Button>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl">
          <div className="relative w-full aspect-video">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain bg-black/20 p-8"
            />
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-purple-400" />
                    Overview
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-purple-400" />
                    Details
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                </div>

                {project.achievements && (
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-400" />
                      Achievements
                    </h2>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Layout className="w-5 h-5 text-purple-400" />
                    Features
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:w-64 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-purple-400" />
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-purple-400" />
                    Links
                  </h2>

                  <div className="space-y-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors w-full"
                      >
                        <Github className="w-5 h-5 text-white" />
                        <span className="text-white">GitHub Repository</span>
                      </a>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 rounded-lg transition-colors w-full"
                      >
                        <Globe className="w-5 h-5 text-white" />
                        <span className="text-white">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TechBadge = ({ tech }: { tech: string }) => {
  const Icon = TECH_ICONS[tech as keyof typeof TECH_ICONS] || TECH_ICONS["default"]

  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  )
}

const Award = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
)
