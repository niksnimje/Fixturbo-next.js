"use client"

import Image from "next/image"
import { FaUsers, FaTrophy, FaCar, FaGlobe } from "react-icons/fa"

export default function AboutUsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images and Stats */}
          <div className="relative">
            {/* Main Images Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Top Image */}
              <div className="col-span-2 ">
                <div className=" relative h-64 md:h-80 rounded-lg overflow-hidden w-[75%]]">
                  <Image
                    src="/about_1.png"
                    alt="Mechanic working on car engine"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Image */}
              <div className="col-span-2">
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                  <Image src="/about_2.png" alt="Car service garage" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* Floating Stats Boxes */}
            <div className="absolute top-4 left-4 floating-box-1">
              <div className="bg-theam text-white p-6 rounded-lg shadow-lg min-w-[180px]">
                <div className="flex items-center justify-center mb-2">
                  <FaUsers className="text-3xl" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5k+</div>
                  <div className="text-sm font-medium">Trusted Customer</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 floating-box-2">
              <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg min-w-[180px]">
                <div className="flex items-center justify-center mb-2">
                  <FaTrophy className="text-3xl" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm font-medium">Years Of Experiences</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-red-500"></div>
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Know About Us</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Non Leo Libero Amet The Maecenas Gravida
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A car repair is a service provided to fix any issues or damages with a your vehicle. It involves
                diagnosing the problem, repairing or replacing the necessary parts, and ensuring that the car
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {/* Elite Automotive Service */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaCar className="text-red-500 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Elite Automotive Service</h3>
                  <p className="text-gray-600">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed
                  </p>
                </div>
              </div>

              {/* Pro Drive Garage */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaGlobe className="text-red-500 text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Drive Garage</h3>
                  <p className="text-gray-600">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-box-1 {
          animation: floatUp 3s ease-in-out infinite;
        }

        .floating-box-2 {
          animation: floatDown 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes floatDown {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .floating-box-1,
          .floating-box-2 {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            margin: 1rem 0;
          }
        }

        @media (max-width: 1024px) {
          .floating-box-1 {
            animation: floatUp 2s ease-in-out infinite;
          }
          
          .floating-box-2 {
            animation: floatDown 2s ease-in-out infinite;
            animation-delay: 1s;
          }
        }
      `}</style>
    </section>
  )
}
