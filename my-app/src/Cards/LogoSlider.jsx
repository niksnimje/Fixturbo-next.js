"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function LogoSlider() {
  const sliderRef = useRef(null)

  const logos = [
    { id: 1, name: "Auto Service", image: "/logo-1.png" },
    { id: 2, name: "Gasoline", image: "/logo-2.png" },
    { id: 3, name: "Engine Repair", image: "/logo-3.png" },
    { id: 4, name: "Car Parts", image: "/logo-4.png" },
    { id: 5, name: "Full Car Tuning", image: "/logo-5.png" },
    { id: 6, name: "Auto Service", image: "/logo-1.png" },
    { id: 7, name: "Gasoline", image: "/logo-2.png" },
    { id: 8, name: "Engine Repair", image: "/logo-3.png" },
  ]

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleMouseMove = (e) => {
      const rect = slider.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = x / rect.width
      const maxScroll = slider.scrollWidth - slider.clientWidth
      const scrollPosition = percentage * maxScroll

      slider.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }

    slider.addEventListener("mousemove", handleMouseMove)
    return () => slider.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="py-12  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={sliderRef}
          className="flex items-center gap-16 overflow-x-auto scrollbar-hide cursor-pointer"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 w-32 h-20 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-24 h-16 relative">
                <Image
                  src={logo.image || "/placeholder.svg?height=64&width=96"}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
