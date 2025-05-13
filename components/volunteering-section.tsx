"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Calendar, Award } from "lucide-react"
import Image from "next/image"

interface VolunteeringExperience {
  organization: string
  role: string
  period: string
  description: string
  logo?: string
}

const volunteeringExperiences: VolunteeringExperience[] = [
  {
    organization: "Applied Technology and Research Society Club",
    role: "Development Committee Member",
    period: "Jan 2025 - Present",
    description:
      "Contributed to technology research projects and development initiatives within the university community.",
    logo: "/club-logos/atrs-club.png",
  },
  {
    organization: "Future Technology Club",
    role: "Design Team Member - Media Committee",
    period: "Jan 2025 - Present",
    description:
      "Created visual content and managed social media presence for technology-focused events and initiatives.",
    logo: "/club-logos/ftc-club.png",
  },
  {
    organization: "Future U Initiative",
    role: "Design Committee Member",
    period: "Aug 2024 - Present",
    description:
      "Designed materials for educational initiatives aimed at preparing students for future technology careers.",
    logo: "/club-logos/future-u.png",
  },
  {
    organization: "Artificial Intelligence Club",
    role: "AI Labs Committee Member",
    period: "Jan 2025 - Present",
    description:
      "Facilitated AI workshops and contributed to research projects exploring artificial intelligence applications.",
    logo: "/club-logos/ai-club.png",
  },
]

const VolunteeringSection = () => {
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
      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="space-y-8">
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Volunteering Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Contributing to the tech community through various roles and initiatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteeringExperiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  {experience.logo ? (
                    <div className="relative w-8 h-8">
                      <Image
                        src={experience.logo || "/placeholder.svg"}
                        alt={experience.organization}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <Users className="w-6 h-6 text-purple-400" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {experience.organization}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-sm text-blue-400">
                      <Award className="w-4 h-4" />
                      {experience.role}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default VolunteeringSection
