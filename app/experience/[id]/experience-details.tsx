"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Briefcase, GraduationCap, Award, Code, MapPin, Building, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CertificateViewer from "@/components/certificate-viewer"

interface ExperienceData {
  id: string
  title: string
  organization: string
  period: string
  location: string
  description: string
  type: "education" | "work" | "volunteer" | "certificate"
  icon: string
  color: string
  certificates?: {
    title: string
    image: string
  }[]
  skills?: string[]
  responsibilities?: string[]
}

export default function ExperienceDetails({ experience }: { experience: ExperienceData }) {
  const router = useRouter()
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const getIcon = () => {
    switch (experience.icon) {
      case "GraduationCap":
        return GraduationCap
      case "Briefcase":
        return Briefcase
      case "Code":
        return Code
      case "Award":
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
