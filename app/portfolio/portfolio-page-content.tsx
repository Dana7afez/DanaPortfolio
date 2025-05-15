"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import ProjectsGrid from "@/components/projects-grid"
import LoadingScreen from "@/components/loading-screen"

export default function PortfolioPageContent() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

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
              All Projects
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A comprehensive showcase of my work, demonstrating my skills and expertise in software development.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </div>
  )
}
