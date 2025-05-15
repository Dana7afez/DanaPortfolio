import { notFound } from "next/navigation"
import ProjectDetails from "./project-details"

interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  tags: string[]
  techStack: string[]
  features: string[]
  achievements?: string[]
  link?: string
  github?: string
  year: string
}

const projects: Project[] = [
  {
    id: "aidpulse",
    title: "AidPulse AI",
    description:
      "AI-Powered Humanitarian Relief Platform developed for the King Salman Relief Hackathon, ranking in the Top 5 teams.",
    longDescription:
      "AidPulse is an AI-Powered Humanitarian Relief Platform developed as part of the King Salman Relief Hackathon: AI in Humanitarian Relief. Our team, Premise, proudly achieved 5th place out of numerous competing teams. The project leverages AI technologies to enhance humanitarian response, focusing on real-time crisis mapping, medical data management, and optimized resource distribution. This achievement and experience was a unique opportunity to contribute to Vision 2030 and support the mission of King Salman Humanitarian Aid and Relief Centre (KSrelief) by building innovative solutions to improve emergency healthcare delivery in crisis zones.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AidPulse%20AI%20logo-TvajfRkw7K8Sk7FTvwWtqe2AznVbUC.png",
    tags: ["React.js", "Next.js", "TypeScript", "AI Integration"],
    techStack: ["React.js", "Next.js", "TypeScript", "AI SDK", "API Integration", "UI/UX Design"],
    features: [
      "Real-time crisis mapping",
      "Medical data management",
      "Optimized resource distribution",
      "Emergency healthcare delivery",
      "AI-driven decision support",
    ],
    achievements: [
      "5th place in the King Salman Relief Hackathon",
      "Recognition for innovative use of AI in humanitarian aid",
      "Successful implementation of real-time data processing",
    ],
    github: "https://github.com/Dana7afez/AidPulse-AI",
    year: "2025",
  },
  {
    id: "face-auth",
    title: "Face Authentication Login System",
    description:
      "A login system using facial recognition technology with features like real-time selfie capture and unauthorized login prevention.",
    longDescription:
      "The Face Authentication Login System allows users to register and log in using facial recognition technology. It includes features such as face detection and recognition, registration with real-time selfie capture, unauthorized login attempt handling, and duplicate user registration prevention. This system was implemented as part of my involvement with the ATRS Club at King Saud University, showcasing skills in cutting-edge biometric technology.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Face%20Authentication%20logo-IJj8lR7vJtP8SFCEGHWdVpOLnTAHHg.png",
    tags: ["Python", "Flask", "OpenCV", "Computer Vision"],
    techStack: ["Python", "Flask", "OpenCV", "SQLAlchemy", "Cryptography", "Computer Vision"],
    features: [
      "Face detection and recognition",
      "Registration with real-time selfie capture",
      "Unauthorized login attempt handling",
      "Duplicate user registration prevention",
      "Secure authentication workflow",
    ],
    github: "https://github.com/Dana7afez/face-authentication-login-system",
    year: "2025",
  },
  {
    id: "elevate",
    title: "Elevate",
    description:
      "Android application for professional networking and career growth with AI-powered skills testing and personalized feedback.",
    longDescription:
      "Elevate is a cutting-edge Android application designed to transform professional networking and career growth. By integrating AI-powered skills testing, Elevate enables users to showcase their expertise, receive detailed feedback, and build essential skills. The app streamlines the hiring process for recruiters while empowering job seekers to grow in their careers. Through an intuitive design, Elevate offers features like interactive quizzes, personalized feedback, guided skill-building, and performance tracking to make professional development more accessible and effective. Developed over a semester as part of the SWE 444 course, the project followed Agile methodologies across four sprints.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elevate%20logo-4tCR1swm0E2bgUcX4SPX4JljuL3cK9.png",
    tags: ["Android", "Firebase", "AI Integration", "FlutterFlow"],
    techStack: ["Android", "Firebase", "AI Integration", "FlutterFlow", "Dart", "Flutter"],
    features: [
      "AI-powered skills assessment",
      "Personalized feedback system",
      "Interactive learning modules",
      "Career growth tracking",
      "Recruiter-candidate matching",
    ],
    github: "https://github.com/Dana7afez/Elevate-Application",
    year: "2024",
  },
  {
    id: "morse-code",
    title: "Morse Code Translator",
    description:
      "A SwiftUI application that translates text to Morse code and vice versa with audio playback capabilities.",
    longDescription:
      "The Morse Code Translator is a SwiftUI application that allows users to translate text to Morse code and vice versa. The app features a clean, intuitive interface with real-time translation, audio playback of Morse code signals, and support for multiple languages. This project demonstrates my skills in iOS development and accessibility-focused design.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morse%20Code%20Translator%20logo-QNCv5gXW2ZcNCKPWG1xitSaPOs8xbP.png",
    tags: ["Swift", "SwiftUI", "iOS", "Accessibility"],
    techStack: ["Swift", "SwiftUI", "iOS", "AVFoundation", "Accessibility"],
    features: [
      "Text to Morse code translation",
      "Morse code to text translation",
      "Audio playback of Morse code",
      "Visual representation of signals",
      "Customizable playback speed",
    ],
    github: "https://github.com/Dana7afez/swiftui-morse-code-translator",
    year: "2025",
  },
  {
    id: "askccis",
    title: "AskCCIS",
    description: "AI-powered chatbot to help CCIS students with questions about events, courses, and campus resources.",
    longDescription:
      "AskCCIS is an innovative AI-powered platform designed to assist students at the College of Computer Information and Science in navigating their academic journey effectively. The system features an interactive interface that addresses a wide range of inquiries related to the college, including student clubs, events, training courses, graduation projects, and important announcements. By leveraging advanced artificial intelligence technology, AskCCIS aims to provide students with comprehensive support, enabling them to access essential information effortlessly and in real time. A key objective of AskCCIS is to facilitate seamless communication between students and administrative staff, enhancing collaboration and mentorship opportunities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AskCCIS%20logo-n9sevdEi8ceLOitg08gEtmhL5R8Pjy.png",
    tags: ["AI", "Chatbot", "Web Development"],
    techStack: ["AI", "Natural Language Processing", "Web Development", "Database Design", "User Experience"],
    features: [
      "AI-powered question answering",
      "Event and course information",
      "Campus resource directory",
      "Administrative process guidance",
      "Real-time notifications",
    ],
    github: "https://github.com/Dana7afez",
    year: "2025",
  },
]

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((project) => project.id === params.id)

  if (!project) {
    notFound()
  }

  return <ProjectDetails project={project} />
}
