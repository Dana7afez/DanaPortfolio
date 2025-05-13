"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar, GraduationCap, BookOpen } from "lucide-react"
import Image from "next/image"

interface Certificate {
  title: string
  issuer: string
  date: string
  image: string
  type: "professional" | "academic"
}

const certificates: Certificate[] = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "February 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NIVIDIA-9CqStocb8YJrJC3525mwWFYjjNK0D0.png",
    type: "professional",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google via Coursera",
    date: "November 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20UX-6FTSx5yuQhA3vsZjQ6ietqorpNe8E3.png",
    type: "professional",
  },
  {
    title: "Oxford Online Placement Test",
    issuer: "Oxford University Press",
    date: "August 2019",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oxford%20test-pD8APuKQspB4hnfIgwBTCf8YTBBlDl.png",
    type: "academic",
  },
  {
    title: "Sustainable Energy Systems Program",
    issuer: "Mohammed bin Salman Center for Future Science and Technology",
    date: "July 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Energy%20systems%20program-BO2FTDXkypQ8TjKsH5UizzueJxo44c.png",
    type: "academic",
  },
  {
    title: "AWS Cloud Services Essentials",
    issuer: "AWS & Barmajoon Association",
    date: "January 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20services-CYNYQayvMa1P2V2WC92ImRrcK6kIjo.png",
    type: "professional",
  },
  {
    title: "Design Thinking Skills for AI Applications",
    issuer: "King Saud University",
    date: "February 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20thinking%20certificate-Emm1TXQakebgReFny1cBPsLGfFnvL7.png",
    type: "professional",
  },
]

const EducationCertificates = () => {
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

  const professionalCertificates = certificates.filter((cert) => cert.type === "professional")
  const academicCertificates = certificates.filter((cert) => cert.type === "academic")

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-16">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Education & Certifications
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center flex items-center justify-center gap-2">
            <GraduationCap className="w-6 h-6 text-purple-400" />
            <span>Education</span>
          </h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-xl font-semibold text-white">King Saud University</h4>
                <p className="text-purple-300">Bachelor of Science in Software Engineering</p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">2021 - 2025</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <p className="text-gray-400">Riyadh, Saudi Arabia</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                  Software Engineering
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-purple-400" />
            <span>Professional Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-40 bg-white/10 rounded-lg overflow-hidden">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-sm text-blue-400">
                        <Award className="w-4 h-4" />
                        {cert.issuer}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Academic Certifications */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-2xl font-semibold text-white text-center flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <span>Academic Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-40 bg-white/10 rounded-lg overflow-hidden">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 text-sm text-blue-400">
                        <Award className="w-4 h-4" />
                        {cert.issuer}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EducationCertificates
