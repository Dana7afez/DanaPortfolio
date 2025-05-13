"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CardProject from "./card-project"

const Portfolio = () => {
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
        staggerChildren: 0.2,
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

  const projects = [
    {
      id: "1",
      Title: "E-Commerce Platform",
      Description:
        "A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.",
      Img: "/placeholder.svg?height=600&width=800",
      Link: "https://example.com",
      Github: "https://github.com/danahafez/ecommerce",
    },
    {
      id: "2",
      Title: "Task Management App",
      Description: "A productivity application for managing tasks, projects, and team collaboration.",
      Img: "/placeholder.svg?height=600&width=800",
      Link: "https://example.com",
      Github: "https://github.com/danahafez/taskmanager",
    },
    {
      id: "3",
      Title: "Portfolio Website",
      Description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      Img: "/placeholder.svg?height=600&width=800",
      Link: "https://example.com",
      Github: "https://github.com/danahafez/portfolio",
    },
    {
      id: "4",
      Title: "Weather Dashboard",
      Description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
      Img: "/placeholder.svg?height=600&width=800",
      Link: "https://example.com",
      Github: "https://github.com/danahafez/weather",
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
                My Portfolio
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project represents a unique challenge and solution.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <CardProject
                key={project.id}
                Img={project.Img}
                Title={project.Title}
                Description={project.Description}
                Link={project.Link}
                id={project.id}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
