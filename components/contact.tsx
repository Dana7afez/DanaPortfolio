"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function ContactEnhanced() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dana7afez@gmail.com",
      link: "mailto:dana7afez@gmail.com",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+966 577 320 401",
      link: "tel:+966577320401",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Riyadh, Saudi Arabia",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect Professionally",
      link: "https://www.linkedin.com/in/dana-hafez-1ab2232a9/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View My Projects",
      link: "https://github.com/Dana7afez",
      color: "from-gray-700 to-gray-800",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-3">
            Let's Connect
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a question or want to work together? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative group overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
              ></div>
              <div className="relative flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shrink-0`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">{item.label}</h3>
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="text-white group-hover:text-purple-300 transition-colors flex items-center gap-2 font-medium"
                    >
                      {item.value}
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <p className="text-white font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + 0.1 * index }}
            >
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm text-gray-400">{item.label}</h3>
                  <p className="text-white font-medium group-hover:text-purple-300 transition-colors">{item.value}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            Looking forward to connecting with you and discussing potential collaborations!
          </p>
        </div>
      </div>
    </div>
  )
}
