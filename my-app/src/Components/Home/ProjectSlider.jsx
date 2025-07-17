"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa"

export default function ProjectSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/pro-1.png",
      title: "Engine Diagnostics",
      subtitle: "Professional Service",
      description: "Complete engine analysis and repair solutions",
    },
    {
      id: 2,
      image: "/pro-2.png",
      title: "Innovate Grow Succeed",
      subtitle: "VoIP Services",
      description: "Advanced automotive technology solutions",
    },
    {
      id: 3,
      image: "/pro-3.png",
      title: "Precision Repair",
      subtitle: "Expert Solutions",
      description: "Detailed mechanical repair services",
    },
    {
      id: 4,
      image: "/pro-1.png",
      title: "Quality Service",
      subtitle: "Trusted Mechanics",
      description: "Professional automotive maintenance",
    },
    {
      id: 5,
      image: "/pro-2.png",
      title: "Modern Equipment",
      subtitle: "Latest Technology",
      description: "State-of-the-art repair facilities",
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const getVisibleSlides = () => {
    const visibleSlides = []
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % slides.length
      visibleSlides.push(slides[index])
    }
    return visibleSlides
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-red-500"></div>
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Our Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Affordable Car Repair
              <br />
              The Best Solutions
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border-2 border-red-500 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {/* Desktop View - Show 3 slides */}
            <div className="hidden md:flex w-full gap-6">
              {getVisibleSlides().map((slide, index) => (
                <div key={`${slide.id}-${currentSlide}-${index}`} className="flex-1 group cursor-pointer">
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={slide.image || "/placeholder.svg?height=400&width=600"}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content Overlay */}
                    {index === 1 && ( // Show content on center slide
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="bg-white text-gray-900 px-4 py-2 rounded-lg inline-block mb-4">
                          <h3 className="font-bold text-lg">{slide.title}</h3>
                          <p className="text-sm text-gray-600">{slide.subtitle}</p>
                        </div>
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center ml-auto">
                          <FaArrowRight className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View - Show 1 slide */}
            <div className="md:hidden w-full">
              <div className="group cursor-pointer">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={slides[currentSlide].image || "/placeholder.svg?height=400&width=600"}
                    alt={slides[currentSlide].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Mobile Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="bg-white text-gray-900 px-4 py-2 rounded-lg inline-block mb-4">
                      <h3 className="font-bold text-lg">{slides[currentSlide].title}</h3>
                      <p className="text-sm text-gray-600">{slides[currentSlide].subtitle}</p>
                    </div>
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center ml-auto">
                      <FaArrowRight className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white border-2 border-red-500 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 shadow-lg"
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>

      </div>
    </section>
  )
}
