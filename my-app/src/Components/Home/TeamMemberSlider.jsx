"use client"

import { useState } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight, FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

export default function TeamMemberSlider() {
  const [currentPair, setCurrentPair] = useState(0)

  const teamMembers = [
    {
      id: 1,
      name: "Darrell Steward",
      position: "Software Developer",
      image: "/team-1.png",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Wade Warren",
      position: "Ux Architect",
      image: "/team-3.png",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Jenny Wilson",
      position: "Car Mechanic",
      image: "/team-3.png",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Robert Fox",
      position: "Auto Technician",
      image: "/team-1.png",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#",
        twitter: "#",
      },
    },
  ]

  // Group members into pairs for desktop view
  const memberPairs = []
  for (let i = 0; i < teamMembers.length; i += 2) {
    memberPairs.push(teamMembers.slice(i, i + 2))
  }

  const nextPair = () => {
    setCurrentPair((prev) => (prev + 1) % memberPairs.length)
  }

  const prevPair = () => {
    setCurrentPair((prev) => (prev - 1 + memberPairs.length) % memberPairs.length)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-red-500"></div>
                <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">Team Member</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Car Repair The Best Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A car repair is a service provided to fix any issues or damages with your vehicle.
              </p>
            </div>

            {/* Navigation Arrows - Desktop */}
            <div className=" items-center gap-4 hidden md:flex">
              <button
                onClick={prevPair}
                className="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-sm"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                onClick={nextPair}
                className="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-sm"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>

          {/* Team Member Cards - Desktop (2 cards) */}
          <div className="lg:col-span-2  grid-cols-1 md:grid-cols-2 gap-6 hidden md:grid">
            {memberPairs[currentPair]?.map((member) => (
              <div key={member.id} className="group relative p-9 bg-[#F4F4F4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Social Media Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <a href={member.social.linkedin} className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                      <FaLinkedinIn className="text-sm" />
                    </a>
                    <a href={member.social.instagram} className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                      <FaInstagram className="text-sm" />
                    </a>
                    <a href={member.social.facebook} className="w-10 h-10 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors duration-300">
                      <FaFacebookF className="text-sm" />
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors duration-300">
                      <FaTwitter className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>

                {/* Red Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Single Card */}
        <div className="md:hidden mt-12">
          <div className="max-w-sm mx-auto">
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={teamMembers[currentPair * 2]?.image}
                  alt={teamMembers[currentPair * 2]?.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Mobile Social Media Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href={teamMembers[currentPair * 2]?.social.linkedin} className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                    <FaLinkedinIn className="text-sm" />
                  </a>
                  <a href={teamMembers[currentPair * 2]?.social.instagram} className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                    <FaInstagram className="text-sm" />
                  </a>
                  <a href={teamMembers[currentPair * 2]?.social.facebook} className="w-10 h-10 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors duration-300">
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a href={teamMembers[currentPair * 2]?.social.twitter} className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors duration-300">
                    <FaTwitter className="text-sm" />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{teamMembers[currentPair * 2]?.name}</h3>
                <p className="text-gray-600 text-sm">{teamMembers[currentPair * 2]?.position}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevPair}
                className="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-sm"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button
                onClick={nextPair}
                className="w-12 h-12 bg-white border-2 border-gray-300 text-gray-600 rounded-full flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-sm"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}