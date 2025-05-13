"use client"

import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Contact from "@/components/contact"
import LoadingScreen from "@/components/loading-screen"
import SkillsSection from "@/components/skills-section"
import ProjectsGrid from "@/components/projects-grid"
import { motion } from "framer-motion"
import HorizontalTimeline from "@/components/horizontal-timeline"
import ProfessionalCertificates from "@/components/professional-certificates"
import CoursesSummary from "@/components/courses-summary"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="Home" className="min-h-screen flex items-center pt-16">
          <Hero />
        </section>

        <section id="About" className="py-20">
          <About />
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Skills & Expertise
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <SkillsSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-16"
          id="Experience"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Experience Timeline
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              My educational and professional journey through the years
            </p>
          </div>
          <HorizontalTimeline />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Professional Certificates
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <ProfessionalCertificates />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
          className="py-16"
          id="Courses"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Courses & Programs
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Continuous learning through courses, bootcamps, and specialized programs
            </p>
          </div>
          <CoursesSummary />
        </motion.section>

        <section id="Portfolio" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                My Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and projects, demonstrating my skills and expertise in software development.
            </p>
          </div>
          <ProjectsGrid />
          <div className="flex justify-center mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section id="Contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Get In Touch
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to contact me.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Contact />
          </div>
        </section>

        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Dana Hafez. All rights reserved.</p>
        </footer>
      </div>
    </Suspense>
  )
}
