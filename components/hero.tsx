"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProfilePhoto from "./profile-photo"
import FloatingElement from "./floating-element"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the screen
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#About")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * 2}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 whitespace-nowrap">
                Hello, I'm Dana Hafez
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-white/80 mb-8">Software Engineer</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              I build innovative applications with modern technologies. Passionate about creating elegant solutions to
              complex problems.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mt-12"
            >
              <Button
                className="px-8 py-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5254cc] hover:to-[#9046d4] text-white rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                onClick={() => {
                  const contactSection = document.querySelector("#Contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Contact Me
              </Button>

              <Button
                variant="outline"
                className="px-8 py-6 bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl font-medium text-lg transition-all duration-300"
                onClick={() => {
                  const portfolioSection = document.querySelector("#Portfolio")
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-6 opacity-[25%] z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
                <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
              </div>
              <ProfilePhoto />
            </div>
          </motion.div>
        </div>

        <FloatingElement duration={3} distance={10}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mt-24"
          >
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <ArrowDown className="w-6 h-6 text-white/70" />
            </button>
          </motion.div>
        </FloatingElement>
      </div>
    </div>
  )
}

export default Hero
