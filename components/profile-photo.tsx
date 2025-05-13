"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn, ZoomOut } from "lucide-react"

const ProfilePhoto = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartPosition = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0, left: 0, top: 0 })

  useEffect(() => {
    if (containerRef.current) {
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()
      setContainerDimensions({ width, height, left, top })
    }

    const handleResize = () => {
      if (containerRef.current) {
        const { width, height, left, top } = containerRef.current.getBoundingClientRect()
        setContainerDimensions({ width, height, left, top })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = containerDimensions
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel(zoomLevel + 0.25)
    }
  }

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.25)
    } else if (isZoomed) {
      setIsZoomed(false)
      setDragPosition({ x: 0, y: 0 })
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (isZoomed) {
      if (e.deltaY < 0) {
        handleZoomIn()
      } else {
        handleZoomOut()
      }
      e.preventDefault()
    }
  }

  const handleDragStart = (e: React.MouseEvent) => {
    if (isZoomed) {
      setIsDragging(true)
      dragStartPosition.current = {
        x: e.clientX - dragPosition.x,
        y: e.clientY - dragPosition.y,
      }
      e.preventDefault()
    }
  }

  const handleDragMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragPosition({
        x: e.clientX - dragStartPosition.current.x,
        y: e.clientY - dragStartPosition.current.y,
      })
      e.preventDefault()
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <>
      <motion.div
        ref={containerRef}
        className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsZoomed(true)}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${-mousePosition.x * 10}deg)`,
          }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${-mousePosition.x * 10}deg)`,
          }}
        />

        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${-mousePosition.x * 10}deg) scale(1.1)`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
          className="w-full h-full relative"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-12%2002_10_55.107%2B0300.jpg-12FqyUQIszATckybc3AiT6Q1MeTtBS.jpeg"
            alt="Dana Hafez"
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            sizes="(max-width: 768px) 18rem, 20rem"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
          <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => {
              if (!isDragging) {
                setIsZoomed(false)
                setDragPosition({ x: 0, y: 0 })
                setZoomLevel(1)
              }
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
              onWheel={handleWheel}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div
                className="relative overflow-hidden"
                style={{
                  transform: `scale(${zoomLevel}) translate(${dragPosition.x / zoomLevel}px, ${dragPosition.y / zoomLevel}px)`,
                  transition: isDragging ? "none" : "transform 0.3s ease",
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-12%2002_10_55.107%2B0300.jpg-12FqyUQIszATckybc3AiT6Q1MeTtBS.jpeg"
                  alt="Dana Hafez"
                  width={800}
                  height={800}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProfilePhoto
