"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0,
      },
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0,
      },
    },
    button: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "tween",
        ease: "linear",
        duration: 0,
      },
    },
  }

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.closest("button") || target.tagName === "A" || target.closest("a")) {
        setCursorVariant("button")
      } else if (
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3")
      ) {
        setCursorVariant("text")
      } else {
        setCursorVariant("default")
      }
    }

    window.addEventListener("mouseover", handleMouseOver)
    return () => {
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 999,
          pointerEvents: "none",
        }}
      >
        <div
          className={`pointer-events-none fixed z-50 h-6 w-6 -ml-3 -mt-3 rounded-full border-2 border-purple-500 transition-all duration-200 ease-out ${
            cursorVariant === "button"
              ? "scale-150 border-blue-500"
              : cursorVariant === "text"
                ? "scale-125 border-indigo-500"
                : ""
          }`}
        />
        <div
          className={`pointer-events-none fixed z-50 h-1.5 w-1.5 -ml-0.75 -mt-0.75 rounded-full bg-purple-500 transition-all duration-300 ease-out ${
            cursorVariant === "button" ? "scale-0" : cursorVariant === "text" ? "scale-0" : ""
          }`}
        />
      </motion.div>
      <style jsx global>{`
        body {
          cursor: auto;
        }
      `}</style>
    </>
  )
}

export default CursorEffect
