"use client"

import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
import Title from "./Title"

export default function CarServices() {
  const services = [
    {
      id: 1,
      title: "Mechanic Masters",
      image: "/service-1.png",
      description: "Professional diagnostic and repair services",
    },
    {
      id: 2,
      title: "Speedy Auto Repair",
      image: "/service-2.png",
      description: "Fast and efficient automotive solutions",
    },
    {
      id: 3,
      title: "Precision Auto Works",
      image: "/service-3.png",
      description: "Expert precision in every repair",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
          <Title title="Our Services" content={`Trusted Car Repair the <br /> Professionals`} />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3] service-card">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Bottom to Top Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/80 opacity-100 visible group-hover:opacity-90 transition-all duration-500 bottom-overlay"></div>

                {/* Title and Content with Animation */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight relative title-underline mb-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hidden Content that appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white/90 text-sm leading-relaxed">
                      Customer satisfaction is crucial for amohlo di business as it leads to customer loyalty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Read More Button with Diagonal Fill Effect */}
              <div className="relative inline-block">
                <button className="flex items-center bg-[#f4f4f4] gap-2 text-gray-800 font-semibold text-sm tracking-wider uppercase transition-all duration-300 group-hover:gap-4 relative overflow-hidden px-6 py-3 rounded read-more-btn">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Read More</span>
                  <FaArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 relative z-10 group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card {
          perspective: 1000px;
        }

        .bottom-overlay {
          transform: translateY(100%);
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
        }

        .group:hover .bottom-overlay {
          transform: translateY(0);
        }

        .title-underline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.6s ease-in-out;
        }

        .group:hover .title-underline::after {
          width: 100%;
        }

        .read-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          background-color: var(--color-theam, #ef4444);
          transition: all 0.5s ease-in-out;
          z-index: 1;
        }

        .read-more-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 0;
          background-color: var(--color-theam, #ef4444);
          transition: all 0.5s ease-in-out;
          z-index: 1;
        }

        .group:hover .read-more-btn::before {
          width: 100%;
          height: 100%;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .group:hover .read-more-btn::after {
          width: 100%;
          height: 100%;
          clip-path: polygon(100% 100%, 0 100%, 100% 0);
        } 

        .group:hover .read-more-btn {
          background-color: var(--color-theam, #ef4444);
        }

        @keyframes slideUpFromBottom {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .group:hover .bottom-overlay {
          animation: slideUpFromBottom 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
