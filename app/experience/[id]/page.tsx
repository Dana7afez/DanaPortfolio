"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Briefcase, GraduationCap, Award, Code, MapPin, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CertificateViewer from "@/components/certificate-viewer"
import LoadingScreen from "@/components/loading-screen"

interface ExperienceData {
  id: string
  title: string
  organization: string
  period: string
  location: string
  description: string
  type: "education" | "work" | "volunteer" | "certificate"
  icon: React.ElementType
  color: string
  certificates?: {
    title: string
    image: string
  }[]
  skills?: string[]
  responsibilities?: string[]
}

const experienceData: ExperienceData[] = [
  {
    id: "ksu",
    title: "Bachelor of Science in Software Engineering",
    organization: "King Saud University",
    period: "2021 - 2025",
    location: "Riyadh, Saudi Arabia",
    description:
      "Pursuing a comprehensive degree in Software Engineering, focusing on software design, development, and engineering principles. The program covers a wide range of topics including programming, algorithms, software architecture, database systems, and project management.",
    type: "education",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    skills: [
      "Software Development",
      "Object-Oriented Programming",
      "Database Design",
      "Software Architecture",
      "Web Development",
      "Mobile Development",
    ],
  },
  {
    id: "drahim",
    title: "Fintech Internship",
    organization: "Drahim",
    period: "November 2024",
    location: "Riyadh, Saudi Arabia",
    description:
      "During my one-week internship at Drahim, I had the opportunity to explore various aspects of the fintech industry, working closely with a talented team of professionals. I contributed to ongoing projects, learned about the challenges and strategies in financial technology, and gained hands-on experience in a dynamic work environment. This experience allowed me to deepen my understanding of the intersection between technology and finance while connecting with experts in Drahim. It was a rewarding experience that significantly broadened my perspective on the tech industry.",
    type: "work",
    icon: Briefcase,
    color: "from-purple-500 to-purple-600",
    certificates: [
      {
        title: "Certificate of Appreciation",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drahim%20internship-tdhezqMoY0dg7gZgEyTtyYKrA7EEzz.png",
      },
    ],
    responsibilities: [
      "Contributed to ongoing fintech projects",
      "Collaborated with cross-functional teams",
      "Learned about financial technology systems",
      "Participated in team meetings and discussions",
      "Gained exposure to industry best practices",
    ],
  },
  {
    id: "ai-club",
    title: "AI Labs Committee Member",
    organization: "Artificial Intelligence Club",
    period: "Jan 2025 - Present",
    location: "King Saud University",
    description:
      "As a member of the AI Labs Committee at the Artificial Intelligence Club, I facilitate AI workshops and contribute to research projects exploring artificial intelligence applications. This role involves organizing hands-on sessions, assisting students with AI tools and frameworks, and collaborating on innovative AI research initiatives.",
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Facilitate AI workshops and training sessions",
      "Contribute to AI research projects",
      "Assist students with AI tools and frameworks",
      "Organize technical events and competitions",
      "Collaborate with other committee members",
    ],
  },
  {
    id: "ftc",
    title: "Design Team Member - Media Committee",
    organization: "Future Technology Club",
    period: "Jan 2025 - Present",
    location: "King Saud University",
    description:
      "As a Design Team Member in the Media Committee of the Future Technology Club, I create visual content and manage social media presence for technology-focused events and initiatives. This role involves designing promotional materials, creating engaging social media content, and supporting the club's outreach efforts.",
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Design promotional materials for events",
      "Create engaging social media content",
      "Manage the club's social media presence",
      "Collaborate with other committee members",
      "Support technology-focused initiatives",
    ],
  },
  {
    id: "atrs",
    title: "Development Committee Member",
    organization: "Applied Technology and Research Society Club",
    period: "Jan 2025 - Present",
    location: "King Saud University",
    description:
      "As a Development Committee Member at the Applied Technology and Research Society Club, I contribute to technology research projects and development initiatives within the university community. This role involves participating in research activities, developing technical solutions, and supporting the club's mission to advance applied technology.",
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Contribute to technology research projects",
      "Develop technical solutions for community needs",
      "Participate in research activities",
      "Collaborate with other committee members",
      "Support the club's mission and initiatives",
    ],
  },
  {
    id: "future-u",
    title: "Design Committee Member",
    organization: "Future U Initiative",
    period: "Aug 2024 - Present",
    location: "King Saud University",
    description:
      "As a Design Committee Member at the Future U Initiative, I design materials for educational initiatives aimed at preparing students for future technology careers. This role involves creating educational resources, designing visual materials, and supporting the initiative's mission to bridge the gap between education and industry needs.",
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
    responsibilities: [
      "Design materials for educational initiatives",
      "Create visual resources for technology education",
      "Support the initiative's mission and goals",
      "Collaborate with other committee members",
      "Contribute to preparing students for future careers",
    ],
  },
]

export default function ExperiencePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [experience, setExperience] = useState<ExperienceData | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  useEffect(() => {
    // Get the experience ID from the URL
    const { pathname } = window.location
    const experienceId = pathname.split("/").pop()

    if (experienceId) {
      const foundExperience = experienceData.find((exp) => exp.id === experienceId)

      if (foundExperience) {
        setExperience(foundExperience)
      } else {
        router.push("/")
      }

      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [router])

  if (isLoading || !experience) {
    return <LoadingScreen />
  }

  const getIcon = () => {
    switch (experience.type) {
      case "education":
        return GraduationCap
      case "work":
        return Briefcase
      case "volunteer":
        return Code
      case "certificate":
        return Award
      default:
        return Briefcase
    }
  }

  const Icon = getIcon()

  return (
    <div className="min-h-screen bg-[#030014] py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8 text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl">
          <div className="p-6 md:p-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className={`p-4 rounded-xl bg-gradient-to-r ${experience.color} text-white`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{experience.title}</h1>
                <div className="flex flex-wrap gap-y-2 gap-x-4">
                  <div className="flex items-center gap-1 text-purple-300">
                    <Building className="w-4 h-4" />
                    <span>{experience.organization}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
                <p className="text-gray-300 leading-relaxed">{experience.description}</p>
              </div>

              {experience.responsibilities && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Responsibilities</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.skills && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {experience.certificates && experience.certificates.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Certificates</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {experience.certificates.map((certificate, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors duration-300 cursor-pointer"
                        onClick={() => setSelectedCertificate(certificate.image)}
                      >
                        <div className="relative w-full h-64 mb-4 overflow-hidden rounded-md">
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-center text-white font-medium">{certificate.title}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <CertificateViewer
          src={selectedCertificate}
          alt={experience.certificates?.find((cert) => cert.image === selectedCertificate)?.title || "Certificate"}
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  )
}
