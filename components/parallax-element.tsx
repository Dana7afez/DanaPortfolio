"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

const ParallaxElement = ({ children, speed = 0.5, direction = "up", className = "" }: ParallaxElementProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const defaultTransform = useTransform(scrollYProgress, [0, 1], [0, 0])

  let x = defaultTransform
  let y = defaultTransform

  if (direction === "up") {
    y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  } else if (direction === "down") {
    y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
  } else if (direction === "left") {
    x = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])
  } else if (direction === "right") {
    x = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={`will-change-transform ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxElement
