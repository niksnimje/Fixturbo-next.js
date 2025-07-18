"use client"

import { useState } from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section className="relative bg-gray-50 w-full h-auto min-h-[800px]">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom z-0"
        style={{ backgroundImage: "url('/macanic-bg1.png')" }}
      ></div>
  
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Left Side - Form */}
          <div className="bg-white p-8 md:p-12 lg:p-16 my-16 lg:my-24 shadow-xl">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-red-500"></div>
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Send A Request</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our One-Stop Car Repair Shop
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 bg-white"
                    required
                  >
                    <option value="">Choose a Option</option>
                    <option value="engine-repair">Engine Repair</option>
                    <option value="brake-service">Brake Service</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="tire-service">Tire Service</option>
                    <option value="diagnostic">Diagnostic</option>
                    <option value="maintenance">General Maintenance</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message here.."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-red-600 transition-all duration-300 flex items-center gap-3 group"
                >
                  <span>Appointment Now</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Mechanic Image */}
          <div className="relative flex items-end h-full">
            <div className="relative w-full h-[500px] lg:h-[700px] -mb-16 lg:-mb-1">
              <Image
                src="/macanic-1.png"
                alt="Professional Mechanic"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}