"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: "aidpulse",
    title: "AidPulse AI",
    description:
      "AI-Powered Humanitarian Relief Platform developed for the King Salman Relief Hackathon, ranking in the Top 5 teams.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AidPulse%20AI%20logo-TvajfRkw7K8Sk7FTvwWtqe2AznVbUC.png",
    tags: ["React.js", "Next.js", "TypeScript", "AI Integration"],
    github: "https://github.com/Dana7afez/AidPulse-AI",
  },
  {
    id: "face-auth",
    title: "Face Authentication System",
    description:
      "A login system using facial recognition technology with features like real-time selfie capture and unauthorized login prevention.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Face%20Authentication%20logo-IJj8lR7vJtP8SFCEGHWdVpOLnTAHHg.png",
    tags: ["Python", "Flask", "OpenCV", "Computer Vision"],
    github: "https://github.com/Dana7afez/face-authentication-login-system",
  },
  {
    id: "elevate",
    title: "Elevate",
    description:
      "Android application for professional networking and career growth with AI-powered skills testing and personalized feedback.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elevate%20logo-4tCR1swm0E2bgUcX4SPX4JljuL3cK9.png",
    tags: ["Android", "Firebase", "AI Integration", "FlutterFlow"],
    github: "https://github.com/Dana7afez/Elevate-Application",
  },
  {
    id: "morse-code",
    title: "Morse Code Translator",
    description:
      "A SwiftUI application that translates text to Morse code and vice versa with audio playback capabilities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morse%20Code%20Translator%20logo-QNCv5gXW2ZcNCKPWG1xitSaPOs8xbP.png",
    tags: ["Swift", "SwiftUI", "iOS", "Accessibility"],
    github: "https://github.com/Dana7afez/swiftui-morse-code-translator",
  },
  {
    id: "askccis",
    title: "AskCCIS",
    description: "AI-powered chatbot to help CCIS students with questions about events, courses, and campus resources.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AskCCIS%20logo-n9sevdEi8ceLOitg08gEtmhL5R8Pjy.png",
    tags: ["AI", "Chatbot", "Web Development"],
    github: "https://github.com/Dana7afez",
  },
]

const ProjectsGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          onHoverStart={() => setHoveredId(project.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

          <div className="relative p-5 z-10">
            <div className="relative overflow-hidden rounded-lg h-36 flex items-center justify-center bg-white/5 p-4">
              <motion.div
                animate={{
                  scale: hoveredId === project.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="object-contain max-h-full max-w-[100px]"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"
                  animate={{
                    opacity: hoveredId === project.id ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>

            <div className="mt-4 space-y-3">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                {project.title}
              </h3>

              <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <Link
                  href={`/project/${project.id}`}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectsGrid
