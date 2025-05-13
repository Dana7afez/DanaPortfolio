"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { X, ZoomIn, ZoomOut, RotateCw, Download } from "lucide-react"
import Image from "next/image"

interface CertificateViewerProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

const CertificateViewer = ({ src, alt, isOpen, onClose }: CertificateViewerProps) => {
  const [zoomLevel, setZoomLevel] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [rotation, setRotation] = useState(0)
  const dragStartPosition = useRef({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
      // Reset state when closed
      setZoomLevel(1)
      setPosition({ x: 0, y: 0 })
      setRotation(0)
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleZoomIn = () => {
    if (zoomLevel < 3) {
      setZoomLevel((prev) => prev + 0.25)
    }
  }

  const handleZoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel((prev) => prev - 0.25)
    }
  }

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStartPosition.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  const handleDragMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStartPosition.current.x,
        y: e.clientY - dragStartPosition.current.y,
      })
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
    e.preventDefault()
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = src
    link.download = alt.replace(/\s+/g, "-").toLowerCase() + ".jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleZoomIn()
          }}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleZoomOut()
          }}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleRotate()
          }}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Rotate"
        >
          <RotateCw className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleDownload()
          }}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Download"
        >
          <Download className="w-5 h-5" />
        </button>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={imageRef}
        className="relative max-w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          style={{
            transform: `rotate(${rotation}deg) scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${
              position.y / zoomLevel
            }px)`,
            transformOrigin: "center",
            transition: isDragging ? "none" : "transform 0.2s ease",
          }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1000}
            height={800}
            className="object-contain max-h-[80vh]"
            unoptimized
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
        Drag to move • Scroll to zoom • Click outside to close
      </div>
    </motion.div>
  )
}

export default CertificateViewer
