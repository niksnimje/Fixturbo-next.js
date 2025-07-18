"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaChevronDown, FaTools } from "react-icons/fa"

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [animateStats, setAnimateStats] = useState(true)

  const faqData = [
    {
      id: 1,
      question: "What is the purpose of a business plan?",
      answer:
        "A business plan serves as a roadmap for your business, outlining your goals, strategies, target market, and financial projections. It helps you stay focused, secure funding, and measure progress toward your objectives.",
    },
    {
      id: 2,
      question: "How can I register my business name?",
      answer:
        "To register your business name, you need to check availability, choose a business structure, file the necessary paperwork with your state or local government, and obtain required licenses and permits for your industry.",
    },
    {
      id: 3,
      question: "How can I protect my intellectual property?",
      answer:
        "You can protect intellectual property through patents for inventions, trademarks for brand names and logos, copyrights for creative works, and trade secrets for confidential business information. Consult with an IP attorney for specific guidance.",
    },
  ]

  // Stats box animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateStats(prev => !prev)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-red-500"></div>
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Ask Anything</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering businesses
                <br />
                For A Brighter Future
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full px-6 py-5 text-left transition-colors duration-300 flex items-center justify-between group ${
                      activeIndex === index ? 'bg-red-500 ' : 'bg-gray-50 hover:bg-gray-100 '
                    }`}
                  >
                    <span className={`text-lg font-semibold text-gray-900 pr-4 ${
                        activeIndex === index ? "text-white" : ""
                      }`}>{item.question}</span>
                    <FaChevronDown
                      className={`text-red-500 text-lg transition-transform duration-300 flex-shrink-0 ${
                        activeIndex === index ? "rotate-180 text-white" : ""
                      }`}
                    />
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 py-5 bg-white border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="relative">
            {/* Red Background Shape */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500 transform translate-x-5 translate-y-8 z-0"></div>

            {/* Main Image */}
            <div className="relative z-10">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image 
                  src="/faq-1.png" 
                  alt="Professional business woman" 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Animated Stats Box */}
              <div className={`absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg border border-gray-100 min-w-[200px] transition-transform duration-1000 ease-in-out ${
                animateStats ? 'translate-y-0' : 'translate-y-5'
              }`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaTools className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">250+</div>
                    <div className="text-sm text-gray-600">Services we provide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}