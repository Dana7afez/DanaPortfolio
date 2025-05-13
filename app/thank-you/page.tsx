"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#030014]">
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-6 animate-bounce-slow">
          <CheckCircle className="w-16 h-16 text-[#6366f1]" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Thank You!
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Your message has been received. I&apos;ll get back to you as soon as possible.
        </p>
        <Link href="/">
          <Button className="px-8 py-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:from-[#5254cc] hover:to-[#9046d4] text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
