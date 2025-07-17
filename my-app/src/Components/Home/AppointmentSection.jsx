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
    <section className="relative py-16 px-4 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/appointment-bg.png" alt="Background pattern" fill className="object-cover" />
      </div>

      {/* Gear Background Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5">
        <div className="w-64 h-64 border-2 border-red-200 rounded-full gear-outline">
          <div className="w-full h-full relative">
            {/* Gear teeth */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-8 bg-red-200 rounded-sm"
                style={{
                  top: "-16px",
                  left: "50%",
                  transformOrigin: "50% 144px",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              />
            ))}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-red-200 rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute left-8 bottom-8 opacity-5">
        <div className="w-32 h-32 border-2 border-red-200 rounded-full gear-outline">
          <div className="w-full h-full relative">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-6 bg-red-200 rounded-sm"
                style={{
                  top: "-12px",
                  left: "50%",
                  transformOrigin: "50% 76px",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                }}
              />
            ))}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-red-200 rounded-full" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="space-y-8">
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="relative">
            {/* Red Diagonal Stripes Background */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-red-500 opacity-10"
                    style={{
                      width: "60px",
                      height: "120%",
                      right: `${i * 80 - 200}px`,
                      top: "-10%",
                      transform: "rotate(15deg)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Mechanic Image */}
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 lg:w-96 lg:h-[500px]">
                <Image
                  src="/macanic-1.png"
                  alt="Professional Mechanic"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gear-outline {
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Custom select arrow */
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='/macanic-bg1.png' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style>
    </section>
  )
}
