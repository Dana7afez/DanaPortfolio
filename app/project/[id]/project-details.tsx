"use client"

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

export default function ProjectDetails({ project }: { project: Project }) {
  const router = useRouter()

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
