"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Server, Globe, Database, Cpu, Lightbulb, Award, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const About = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const statsData = [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "5+",
      label: "Projects",
      description: "Innovative solutions delivered",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: "8+",
      label: "Certificates",
      description: "Professional skills validated",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: "4+",
      label: "Volunteering",
      description: "Tech community contributions",
      animation: "fade-left",
    },
  ]

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-16">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                About Me
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Transforming ideas into digital experiences
              <Sparkles className="w-5 h-5 text-purple-400" />
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
                <p className="text-gray-300 leading-relaxed">
                  Software Engineering graduate from King Saud University with a passion for AI, UX/UI, and web and app
                  development. Skilled in collaboration, problem-solving, and creating user-centered solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm eager to grow professionally and contribute to impactful technologies. My journey in software
                  development began with a curiosity about how technology can solve real-world problems, which has
                  evolved into a career focused on creating elegant and efficient solutions.
                </p>
                <div className="pt-4">
                  <h4 className="text-lg font-medium text-white mb-3">Key Strengths:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { icon: Code, text: "Web & App Development" },
                      { icon: Server, text: "Software Design & Architecture" },
                      { icon: Globe, text: "UI/UX Design" },
                      { icon: Database, text: "Database Management" },
                      { icon: Cpu, text: "AI Integration" },
                      { icon: Lightbulb, text: "Problem Solving" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <item.icon className="w-5 h-5 text-purple-400" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      const portfolioSection = document.querySelector("#Portfolio")
                      if (portfolioSection) {
                        portfolioSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-[#a855f7]/10"
                  >
                    <Code className="w-5 h-5" /> View Projects
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="relative group">
                <div
                  className={`relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between`}
                >
                  <div
                    className={`absolute -z-10 inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-white">{stat.value}</span>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{stat.label}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-400">{stat.description}</p>
                      <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
