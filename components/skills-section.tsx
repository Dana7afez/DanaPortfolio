"use client"

import type React from "react"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code,
  Database,
  Palette,
  Server,
  Cpu,
  FileCode,
  Smartphone,
  Flame,
  Cloud,
  Layout,
  Figma,
  Trello,
  Github,
  BrainCircuit,
} from "lucide-react"

interface Skill {
  name: string
  category: "frontend" | "backend" | "design" | "database" | "ai" | "tools"
  icon: React.ElementType
}

const skills: Skill[] = [
  { name: "JavaScript", category: "frontend", icon: FileCode },
  { name: "TypeScript", category: "frontend", icon: FileCode },
  { name: "React.js", category: "frontend", icon: Code },
  { name: "Next.js", category: "frontend", icon: Code },
  { name: "HTML/CSS", category: "frontend", icon: Layout },
  { name: "Python", category: "backend", icon: Server },
  { name: "Java", category: "backend", icon: Cpu },
  { name: "SQL", category: "database", icon: Database },
  { name: "MongoDB", category: "database", icon: Database },
  { name: "Firebase", category: "backend", icon: Flame },
  { name: "Flutter/Dart", category: "frontend", icon: Smartphone },
  { name: "UI/UX Design", category: "design", icon: Palette },
  { name: "Figma", category: "design", icon: Figma },
  { name: "Trello", category: "tools", icon: Trello },
  { name: "GitHub", category: "tools", icon: Github },
  { name: "Cloud Services", category: "backend", icon: Cloud },
  { name: "Machine Learning", category: "ai", icon: BrainCircuit },
  { name: "Deep Learning", category: "ai", icon: BrainCircuit },
]

const categoryIcons = {
  frontend: Code,
  backend: Server,
  design: Palette,
  database: Database,
  tools: Trello,
  ai: BrainCircuit,
}

const categoryNames = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  design: "Design",
  database: "Database",
  tools: "Tools & Workflow",
  ai: "AI & Machine Learning",
}

const SkillsSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category)
          const Icon = categoryIcons[category]

          return (
            <motion.div
              key={category}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{categoryNames[category]}</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                      variants={{
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6 },
                        },
                      }}
                      initial={{ opacity: 0, y: 10 }}
                    >
                      <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                        <skill.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SkillsSection
