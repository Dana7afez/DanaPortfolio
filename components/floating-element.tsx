"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  delay?: number
  distance?: number
  className?: string
}

const FloatingElement = ({
  children,
  duration = 4,
  delay = 0,
  distance = 15,
  className = "",
}: FloatingElementProps) => {
  return (
    <motion.div
      className={`will-change-transform ${className}`}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElement
