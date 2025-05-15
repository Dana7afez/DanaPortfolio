"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import LoadingScreen from "@/components/loading-screen"
import Image from "next/image"
import Link from "next/link"
import CertificateViewer from "@/components/certificate-viewer"

interface Certificate {
  id: string
  title: string
  organization: string
  date: string
  image: string
  category: "course" | "bootcamp" | "program" | "certificate" | "professional"
  detailsLink: string
}

export default function CertificatesPageContent({ certificates }: { certificates: Certificate[] }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "course" | "bootcamp" | "program" | "certificate" | "professional">(
    "all",
  )
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  const filteredCertificates = certificates.filter((cert) => filter === "all" || cert.category === filter)

  return (
    <div className="min-h-screen bg-[#030014] py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8 text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              All Certificates
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A collection of my educational achievements, courses, and professional certifications.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("course")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "course"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            Courses
          </button>
          <button
            onClick={() => setFilter("bootcamp")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "bootcamp"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            Bootcamps
          </button>
          <button
            onClick={() => setFilter("program")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "program"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            Programs
          </button>
          <button
            onClick={() => setFilter("certificate")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "certificate"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            Certificates
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full group"
            >
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedCertificate(certificate.image)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 z-20">
                  <span className="px-2 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white capitalize">
                    {certificate.category}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 z-20">
                  <span className="px-2 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white">
                    Click to view
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-2">
                  {certificate.title}
                </h3>
                <div className="flex items-center gap-1 text-purple-300 mb-1">
                  <span className="text-sm line-clamp-1">{certificate.organization}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 mb-4">
                  <span className="text-sm">{certificate.date}</span>
                </div>
                <div className="mt-auto pt-2">
                  <Link
                    href={certificate.detailsLink}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors w-full justify-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <CertificateViewer
          src={selectedCertificate}
          alt={certificates.find((cert) => cert.image === selectedCertificate)?.title || "Certificate"}
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  )
}
