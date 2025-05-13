"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Calendar, Award, Clock, MapPin, ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CertificateViewer from "@/components/certificate-viewer"
import LoadingScreen from "@/components/loading-screen"

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
  certificates: {
    title: string
    image: string
  }[]
  skills?: string[]
  topics?: string[]
  instructors?: string[]
  organizers?: string[]
}

const coursesData: CourseData[] = [
  {
    id: "nvidia",
    title: "Fundamentals of Deep Learning",
    organization: "NVIDIA",
    date: "February 2025",
    duration: "40 hours",
    location: "Online",
    description:
      "Completed NVIDIA's comprehensive course on deep learning fundamentals, covering neural networks, convolutional networks, recurrent networks, and practical implementation using popular frameworks. The course provided hands-on experience with real-world deep learning applications and best practices for model development and deployment.",
    category: "course",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NIVIDIA-9CqStocb8YJrJC3525mwWFYjjNK0D0.png",
    certificates: [
      {
        title: "Certificate of Competency",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NIVIDIA-9CqStocb8YJrJC3525mwWFYjjNK0D0.png",
      },
    ],
    skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch", "Computer Vision"],
    topics: [
      "Neural Network Fundamentals",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Generative Adversarial Networks",
      "Transfer Learning",
      "Model Deployment",
    ],
  },
  {
    id: "google-ux",
    title: "Foundations of User Experience (UX) Design",
    organization: "Google via Coursera",
    date: "November 2024",
    duration: "6 weeks",
    location: "Online",
    description:
      "Completed Google's UX Design course covering fundamentals of user experience design. The course provided comprehensive training in UX research, wireframing, prototyping, and user testing. Through practical assignments and case studies, I developed skills in creating user-centered designs and understanding the UX design process from ideation to implementation.",
    category: "course",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20UX-6FTSx5yuQhA3vsZjQ6ietqorpNe8E3.png",
    certificates: [
      {
        title: "Course Certificate",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20UX-6FTSx5yuQhA3vsZjQ6ietqorpNe8E3.png",
      },
    ],
    skills: ["UX Design", "Wireframing", "Prototyping", "User Research", "Usability Testing"],
    topics: [
      "UX Design Process",
      "User Research Methods",
      "Wireframing and Prototyping",
      "Usability Testing",
      "Design Thinking",
      "Responsive Design",
    ],
    instructors: ["Amanda Brophy"],
  },
  {
    id: "aws",
    title: "AWS Cloud Services Essentials",
    organization: "AWS & Barmajoon Association",
    date: "January 2025",
    duration: "6 hours",
    location: "Online",
    description:
      "Completed training on essential AWS cloud services and their applications. The workshop covered fundamental AWS services including EC2, S3, RDS, Lambda, and more. Through hands-on exercises, I gained practical experience in deploying and managing cloud resources, understanding cloud architecture, and implementing best practices for cloud security and cost optimization.",
    category: "course",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20services-CYNYQayvMa1P2V2WC92ImRrcK6kIjo.png",
    certificates: [
      {
        title: "Workshop Completion Certificate",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20services-CYNYQayvMa1P2V2WC92ImRrcK6kIjo.png",
      },
    ],
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "RDS", "Lambda"],
    topics: [
      "AWS Core Services",
      "Cloud Architecture",
      "Serverless Computing",
      "Database Services",
      "Storage Solutions",
      "Cloud Security",
    ],
    organizers: ["Barmajoon Association", "Amazon Web Services"],
  },
  {
    id: "design-thinking",
    title: "Design Thinking Skills for AI Applications",
    organization: "King Saud University",
    date: "February 2025",
    duration: "6 hours",
    location: "King Saud University, Riyadh",
    description:
      "Attended a workshop on applying design thinking to AI application development at King Saud University. The workshop focused on integrating human-centered design principles with artificial intelligence development, covering topics such as user research for AI applications, prototyping AI interfaces, and ethical considerations in AI design. Through collaborative exercises, I gained practical skills in designing AI solutions that address real user needs.",
    category: "course",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20thinking%20certificate-Emm1TXQakebgReFny1cBPsLGfFnvL7.png",
    certificates: [
      {
        title: "Workshop Attendance Certificate",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design%20thinking%20certificate-Emm1TXQakebgReFny1cBPsLGfFnvL7.png",
      },
    ],
    skills: ["Design Thinking", "AI Applications", "User-Centered Design", "Prototyping", "Ethical AI"],
    topics: [
      "Design Thinking Process",
      "User Research for AI",
      "AI Interface Design",
      "Prototyping AI Solutions",
      "Ethical Considerations in AI",
      "Human-AI Interaction",
    ],
    instructors: ["Dr. Loulwa bint Yasim Al-Subaie"],
  },
  {
    id: "energy-systems",
    title: "Sustainable Energy Systems Program",
    organization: "Mohammed bin Salman Center for Future Science and Technology",
    date: "July 2024",
    duration: "15+ hours",
    location: "Online (University of Tokyo)",
    description:
      "Completed an intensive course on sustainable energy systems provided by the Mohammed bin Salman Center for Future Science and Technology at the University of Tokyo. The program covered global sustainable energy systems, photovoltaic cells, nuclear energy, water electrolysis, wind power, renewable hydrogen, and future energy scenarios. Through live online seminars and interactive sessions, I gained comprehensive knowledge of cutting-edge sustainable energy technologies and their applications in addressing global energy challenges.",
    category: "program",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Energy%20systems%20program-BO2FTDXkypQ8TjKsH5UizzueJxo44c.png",
    certificates: [
      {
        title: "Certificate of Completion",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Energy%20systems%20program-BO2FTDXkypQ8TjKsH5UizzueJxo44c.png",
      },
    ],
    skills: ["Sustainable Energy", "Renewable Energy", "Energy Systems", "Environmental Science"],
    topics: [
      "Global Sustainable Energy Systems",
      "Photovoltaic Cells",
      "Nuclear Energy",
      "Water Electrolysis",
      "Wind Power",
      "Renewable Hydrogen",
      "Future Energy Scenarios",
    ],
    instructors: ["Prof. Hiroaki Aihara"],
    organizers: ["Mohammed bin Salman Center for Future Science and Technology", "University of Tokyo"],
  },
  {
    id: "ai-bootcamp",
    title: "Journey to AI World",
    organization: "AI Governance Association & Partner Universities",
    date: "March 17-20, 2025",
    duration: "4 days",
    location: "Online",
    description:
      "Participated in the 'Journey to AI World' bootcamp focused on key topics in Artificial Intelligence, Machine Learning, Deep Learning, and AI Agents. The program included workshops on AI fundamentals, machine learning principles, generative deep learning, and AI agents. Through hands-on projects and collaborative learning, I developed practical skills in AI application development and received an Outstanding grade for my project submission. The bootcamp was organized by the Artificial Intelligence Governance Association in collaboration with multiple university partners.",
    category: "bootcamp",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI%20bootcamp%20attendance%20certificate-daHHGLRldjuFZGgapACSLxme7KX236.png",
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
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "AI Agents"],
    topics: [
      "Introduction to Artificial Intelligence",
      "Machine Learning Fundamentals",
      "Generative Deep Learning",
      "AI Agents",
      "Practical AI Applications",
    ],
    instructors: ["Eng. Sulaiman Ureiga"],
    organizers: [
      "Artificial Intelligence Governance Association",
      "AI Club at Arab Open University",
      "Google Developer Groups on Campus at Prince Mohammed Bin Fahd University",
      "TechClub at Al Yamama University",
    ],
  },
  {
    id: "oxford",
    title: "Oxford Online Placement Test",
    organization: "Oxford University Press",
    date: "August 2019",
    location: "Alfaisal University",
    description:
      "Completed the Oxford Online Placement Test, achieving a B1/B2 level in English proficiency. The test assessed language skills including grammar, vocabulary, reading, and listening comprehension. This certification demonstrates intermediate to upper-intermediate English language proficiency according to the Common European Framework of Reference for Languages (CEFR).",
    category: "certificate",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oxford%20test-pD8APuKQspB4hnfIgwBTCf8YTBBlDl.png",
    certificates: [
      {
        title: "Oxford Online Placement Test Result",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oxford%20test-pD8APuKQspB4hnfIgwBTCf8YTBBlDl.png",
      },
    ],
    skills: ["English Language", "Communication", "Reading Comprehension", "Listening Comprehension"],
    topics: ["Grammar", "Vocabulary", "Reading", "Listening", "Language Proficiency"],
  },
]

export default function CoursePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [course, setCourse] = useState<CourseData | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  useEffect(() => {
    // Get the course ID from the URL
    const { pathname } = window.location
    const courseId = pathname.split("/").pop()

    if (courseId) {
      const foundCourse = coursesData.find((course) => course.id === courseId)

      if (foundCourse) {
        setCourse(foundCourse)
      } else {
        router.push("/")
      }

      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [router])

  if (isLoading || !course) {
    return <LoadingScreen />
  }

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
