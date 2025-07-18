"use client"

import { useState } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import LogoSlider from "@/Cards/LogoSlider"

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "James Anderson",
      position: "Software Engineer",
      image: "/testimonialc-1.png",
      testimonial:
        "Working with this company has been a game-changer for my business. Their expertise and innovative approach have helped us achieve",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Business Owner",
      image: "/testimonialc-1.png",
      testimonial:
        "Outstanding service and professional team. They delivered exactly what we needed and exceeded our expectations in every way possible.",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Project Manager",
      image: "/testimonialc-1.png",
      testimonial:
        "The quality of work and attention to detail is impressive. I would highly recommend their services to anyone looking for reliable solutions.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-16 bg-gray-900 text-white md:overflow-hidden lg:overflow-visible lg:mb-[250px]" style={{backgroundImage:"url('/client-bg.png')"}}>
      {/* Left Side - Mechanic Image (edge-to-edge) */}
      <LogoSlider/>
      <div className="absolute left-0 top-0 lg:top-55 h-full w-1/2">
        <div className="relative h-full w-full">
          <Image
            src="/testimonial1.png"
            alt="Mechanic working on car wheel"
            fill
            className="object-cover object-left hidden sm:block"
            priority
          />
        </div>
      </div>

      {/* Right Side - Testimonial Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Empty div to balance grid (occupies left space) */}
          <div className="hidden lg:block"></div>

          {/* Testimonial Content Container */}
          <div className="relative bg-black p-8 lg:p-12 lg:ml-8 lg:my-16">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-red-500"></div>
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Clients Reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">WHAT OUR CLIENT SAYS</h2>
            </div>

            {/* Large Quote Icon */}
            <div className="absolute top-20 right-8 opacity-10">
              <FaQuoteRight className="text-8xl lg:text-9xl text-red-500" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-red-500">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-400 text-sm">{testimonials[currentSlide].position}</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-300 mb-8">{testimonials[currentSlide].testimonial}</p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              {/* Arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 border-2 border-red-500 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 border-2 border-red-500 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-red-500 w-8" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}