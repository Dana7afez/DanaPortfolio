"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Award, Clock, MapPin, ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CertificateViewer from "@/components/certificate-viewer"
import { useRouter } from "next/navigation"

interface Certificate {
  title: string
  image: string
}

interface CourseData {
  id: string
  title: string
  organization: string
  date: string
  duration?: string
  location?: string
  description: string
  category: "course" | "bootcamp" | "program" | "certificate"
  image: string
  certificates: Certificate[]
  skills?: string[]
  topics?: string[]
  instructors?: string[]
  organizers?: string[]
}

export default function CourseDetails({ course }: { course: CourseData }) {
  const router = useRouter()
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

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
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10" />
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className="object-cover object-top"
            />
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 text-sm rounded-full bg-white/20 backdrop-blur-sm text-white capitalize">
                {course.category}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{course.title}</h1>
              <div className="flex flex-wrap gap-y-3 gap-x-6">
                <div className="flex items-center gap-1 text-purple-300">
                  <Award className="w-4 h-4" />
                  <span>{course.organization}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{course.date}</span>
                </div>
                {course.duration && (
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                )}
                {course.location && (
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{course.location}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Description</h2>
                <p className="text-gray-300 leading-relaxed">{course.description}</p>
              </div>

              {course.topics && course.topics.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Topics Covered</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {course.skills && course.skills.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Skills Gained</h2>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, index) => (
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

              {course.instructors && course.instructors.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Instructors</h2>
                  <ul className="space-y-1">
                    {course.instructors.map((instructor, index) => (
                      <li key={index} className="text-gray-300">
                        {instructor}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {course.organizers && course.organizers.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">Organizing Institutions</h2>
                  <ul className="space-y-1">
                    {course.organizers.map((organizer, index) => (
                      <li key={index} className="text-gray-300">
                        {organizer}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-xl font-semibold text-white mb-3">Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.certificates.map((certificate, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors duration-300 cursor-pointer"
                      onClick={() => setSelectedCertificate(certificate.image)}
                    >
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          fill
                          className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-center text-white font-medium">{certificate.title}</h3>
                      <div className="flex justify-center mt-2">
                        <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          <span>View Full Size</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <CertificateViewer
          src={selectedCertificate}
          alt={course.certificates.find((cert) => cert.image === selectedCertificate)?.title || "Certificate"}
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  )
}
