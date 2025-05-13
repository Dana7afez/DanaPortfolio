"use client"

import { useEffect, useRef } from "react"

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<any[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      starsRef.current = []
      const starCount = Math.min(Math.floor(window.innerWidth / 4), 300) // Increased star count

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.8, // Increased minimum size
          color: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.4})`, // Increased opacity
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1,
          originalX: Math.random() * canvas.width,
          originalY: Math.random() * canvas.height,
          twinkleSpeed: Math.random() * 0.05 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawStars = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Update twinkle phase
        star.twinklePhase += star.twinkleSpeed
        if (star.twinklePhase > Math.PI * 2) star.twinklePhase = 0

        // Calculate opacity based on twinkle phase
        const opacity = 0.3 + Math.sin(star.twinklePhase) * 0.5 // Increased base opacity

        // Calculate distance from mouse
        const dx = mouseRef.current.x - star.x
        const dy = mouseRef.current.y - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          // Move away from mouse
          const angle = Math.atan2(dy, dx)
          const force = (maxDistance - distance) / maxDistance
          star.vx -= Math.cos(angle) * force * 0.3
          star.vy -= Math.sin(angle) * force * 0.3
        } else {
          // Return to original position
          star.vx += (star.originalX - star.x) * 0.01
          star.vy += (star.originalY - star.y) * 0.01
        }

        // Apply velocity with damping
        star.vx *= 0.98
        star.vy *= 0.98
        star.x += star.vx
        star.y += star.vy

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color.replace(/[\d.]+\)$/g, `${opacity})`)
        ctx.fill()

        // Connect stars that are close to each other
        starsRef.current.forEach((otherStar) => {
          const dx = star.x - otherStar.x
          const dy = star.y - otherStar.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(otherStar.x, otherStar.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 80)})`
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(drawStars)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    resizeCanvas()
    drawStars()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-80 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  )
}

export default StarryBackground
