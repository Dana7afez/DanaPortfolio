"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, ArrowRight, Briefcase, GraduationCap, Code } from "lucide-react"
import Link from "next/link"

interface TimelineItem {
  id: string
  title: string
  organization: string
  period: string
  year: number
  type: "education" | "work" | "volunteer" | "certificate"
  icon: React.ElementType
  color: string
}

const timelineItems: TimelineItem[] = [
  {
    id: "ksu",
    title: "Bachelor of Science in Software Engineering",
    organization: "King Saud University",
    period: "2021 - 2025",
    year: 2021,
    type: "education",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "drahim",
    title: "Fintech Internship",
    organization: "Drahim",
    period: "November 2024",
    year: 2024,
    type: "work",
    icon: Briefcase,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "ai-club",
    title: "AI Labs Committee Member",
    organization: "Artificial Intelligence Club",
    period: "Jan 2025 - Present",
    year: 2025,
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
  },
  {
    id: "ftc",
    title: "Design Team Member - Media Committee",
    organization: "Future Technology Club",
    period: "Jan 2025 - Present",
    year: 2025,
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
  },
  {
    id: "atrs",
    title: "Development Committee Member",
    organization: "Applied Technology and Research Society Club",
    period: "Jan 2025 - Present",
    year: 2025,
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
  },
  {
    id: "future-u",
    title: "Design Committee Member",
    organization: "Future U Initiative",
    period: "Aug 2024 - Present",
    year: 2024,
    type: "volunteer",
    icon: Code,
    color: "from-green-500 to-green-600",
  },
]

const ExperienceTimeline = () => {
  const [filter, setFilter] = useState<"all" | "education" | "work" | "volunteer">("all")

  const filteredItems = timelineItems
    .filter((item) => filter === "all" || item.type === filter)
    .sort((a, b) => b.year - a.year)

  return (
    <div className="w-full max-w-4xl mx-auto">
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
          onClick={() => setFilter("education")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "education"
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setFilter("work")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "work"
              ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
          }`}
        >
          Work
        </button>
        <button
          onClick={() => setFilter("volunteer")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "volunteer"
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
              : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
          }`}
        >
          Volunteer
        </button>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent transform md:translate-x-px"></div>

        <div className="space-y-12">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Year marker */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 -top-4 bg-[#030014] px-2 text-sm font-bold text-white/70">
                {item.year}
              </div>

              <div
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 z-10"></div>

                {/* Empty space for alignment */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content */}
                <Link
                  href={`/experience/${item.id}`}
                  className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex flex-col space-y-1">
                        <span className="text-purple-300">{item.organization}</span>
                        <span className="flex items-center gap-1 text-sm text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </span>
                      </div>
                      <div className="pt-2 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">View details</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceTimeline
