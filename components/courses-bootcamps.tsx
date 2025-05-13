"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Calendar, Clock, MapPin, Award } from "lucide-react"
import Image from "next/image"

interface Course {
  title: string
  instructor?: string
  organization: string
  date: string
  duration?: string
  location: string
  description: string
  certificates: {
    title: string
    image: string
  }[]
}

const courses: Course[] = [
  {
    title: "Journey to AI World",
    instructor: "M. Sulaiman Ureiga",
    organization: "AI Club & Google Developer Groups",
    date: "March 17-20, 2025",
    duration: "4 days",
    location: "Online",
    description:
      "A comprehensive bootcamp focused on key topics in Artificial Intelligence, Machine Learning, Deep Learning, and AI Agents. The program included workshops on AI fundamentals, machine learning principles, generative deep learning, and AI agents.",
    certificates: [
      {
        title: "Certificate of Attendance",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20bootcamp%20attendance%20certificate-daHHGLRldjuFZGgapACSLxme7KX236.png",
      },
      {
        title: "Project Completion - Outstanding Grade",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20bootcamp%20project%20certificate-U7gjnmxYXnljSaXD4nJwJ8erLAnfOs.png",
      },
    ],
  },
  {
    title: "Drahim Fintech Internship",
    organization: "Drahim",
    date: "November 2024",
    duration: "1 week",
    location: "Riyadh, Saudi Arabia",
    description:
      "During my one-week internship at Drahim, I had the opportunity to explore various aspects of the fintech industry, working closely with a talented team of professionals. I contributed to ongoing projects, learned about the challenges and strategies in financial technology, and gained hands-on experience in a dynamic work environment. This experience allowed me to deepen my understanding of the intersection between technology and finance while connecting with experts in Drahim.",
    certificates: [
      {
        title: "Certificate of Appreciation",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drahim%20internship-tdhezqMoY0dg7gZgEyTtyYKrA7EEzz.png",
      },
    ],
  },
]

const CoursesBootcamps = () => {
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

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-16">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Courses & Professional Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Continuous learning and hands-on experience that have shaped my professional journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-semibold text-white">{course.title}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{course.organization}</span>
                      </div>

                      {course.instructor && (
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">Instructor: {course.instructor}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{course.date}</span>
                      </div>

                      {course.duration && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">{course.duration}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{course.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{course.description}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-white mb-4">Certificates</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.certificates.map((cert, certIndex) => (
                      <div
                        key={certIndex}
                        className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors duration-300"
                      >
                        <div className="relative w-full h-64 mb-4 overflow-hidden rounded-md">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.title}
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h5 className="text-center text-white font-medium">{cert.title}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CoursesBootcamps
