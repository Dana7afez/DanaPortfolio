"use client"
import { Award, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Course {
  id: string
  title: string
  organization: string
  date: string
  image: string
  category: "course" | "bootcamp" | "program" | "certificate"
  important: boolean
}

const courses: Course[] = [
  {
    id: "nvidia",
    title: "Fundamentals of Deep Learning",
    organization: "NVIDIA",
    date: "February 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NIVIDIA-9CqStocb8YJrJC3525mwWFYjjNK0D0.png",
    category: "course",
    important: true,
  },
  {
    id: "google-ux",
    title: "Foundations of User Experience (UX) Design",
    organization: "Google via Coursera",
    date: "November 2024",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20UX-6FTSx5yuQhA3vsZjQ6ietqorpNe8E3.png",
    category: "course",
    important: true,
  },
  {
    id: "aws",
    title: "AWS Cloud Services Essentials",
    organization: "AWS & Barmajoon Association",
    date: "January 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20services-CYNYQayvMa1P2V2WC92ImRrcK6kIjo.png",
    category: "course",
    important: true,
  },
  {
    id: "design-thinking",
    title: "Design Thinking Skills for AI Applications",
    organization: "King Saud University",
    date: "February 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20thinking%20certificate-Emm1TXQakebgReFny1cBPsLGfFnvL7.png",
    category: "course",
    important: false,
  },
  {
    id: "energy-systems",
    title: "Sustainable Energy Systems Program",
    organization: "Mohammed bin Salman Center for Future Science and Technology",
    date: "July 2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Energy%20systems%20program-BO2FTDXkypQ8TjKsH5UizzueJxo44c.png",
    category: "program",
    important: false,
  },
  {
    id: "ai-bootcamp",
    title: "Journey to AI World",
    organization: "AI Governance Association & Partner Universities",
    date: "March 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20bootcamp%20attendance%20certificate-daHHGLRldjuFZGgapACSLxme7KX236.png",
    category: "bootcamp",
    important: true,
  },
  {
    id: "oxford",
    title: "Oxford Online Placement Test",
    organization: "Oxford University Press",
    date: "August 2019",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oxford%20test-pD8APuKQspB4hnfIgwBTCf8YTBBlDl.png",
    category: "certificate",
    important: false,
  },
]

const CoursesSummary = () => {
  // Filter to show only important courses
  const importantCourses = courses.filter((course) => course.important)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {importantCourses.map((course) => (
          <Link
            key={course.id}
            href={`/course/${course.id}`}
            className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 z-20">
                <span className="px-2 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white capitalize">
                  {course.category}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-2">
                {course.title}
              </h3>
              <div className="flex items-center gap-1 text-purple-300 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-sm line-clamp-1">{course.organization}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{course.date}</span>
              </div>
              <div className="mt-auto pt-2 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">View details</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/certificates">
          <Button className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5254cc] hover:to-[#9046d4] text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-2">
            View All Certificates
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CoursesSummary
