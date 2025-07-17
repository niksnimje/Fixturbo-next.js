import Button from "@/CVA/Buttons";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function FooterDetails() {
  return (
    <>
      <footer
        className="footer bg-black text-white"
        style={{ backgroundImage: "url(/footerbg.png)" }}
      >
        <div className="container mx-auto pt-20">
          <div className="footer_box bg-[#232323] p-[20px] sm:p-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-5 ">
            <img src="/logo-white.svg" alt="" />
            <h3>Subscribe our newsletter for updates</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Your Email Address"
                className="px-4 h-[60px] w-[250px] sm:w-[auto] lg:w-[250px] border-[var(--border-color)] border rounded-lg"
              />
              <button
                className="
    h-[60px] 
    w-[60px] 
    rounded-e-lg 
    bg-[var(--primary-color)] 
    relative 
    overflow-hidden 
    group
  "
              >
                {/* Top-Left to Bottom-Right Fill */}
                <span
                  className="
      absolute 
      inset-0 
      bg-white 
      origin-top-left 
      transform 
      -translate-x-full 
      -translate-y-full 
      group-hover:translate-x-0 
      group-hover:translate-y-0 
      transition-all 
      duration-300
    "
                ></span>

                {/* Bottom-Right to Top-Left Fill */}
                <span
                  className="
      absolute 
      inset-0 
      bg-white 
      origin-bottom-right 
      transform 
      translate-x-full 
      translate-y-full 
      group-hover:translate-x-0 
      group-hover:translate-y-0 
      transition-all 
      duration-300
    "
                ></span>

                <FaArrowRight className="mx-auto relative z-10 group-hover:text-black transition-colors duration-300" />
              </button>
            </div>
          </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-20 pb-8 ms-5 sm:ms-0">
          {/* About Us Section */}
          <div className="space-y-4 ">
            <h3 className="text-2xl font-bold mb-10">About Us</h3>
            <p className="text-gray-400 mb-8 break-font">
              It is a long established fact that a reader will be distracted
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-10">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Team</a></li>
              <li><a href="#" className="hover:text-white transition">Faq</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-10">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Mechanic Masters</a></li>
              <li><a href="#" className="hover:text-white transition">Speedy Auto Repair</a></li>
              <li><a href="#" className="hover:text-white transition">Mobile Car Repair</a></li>
              <li><a href="#" className="hover:text-white transition">Pro Auto Fix</a></li>
              <li><a href="#" className="hover:text-white transition">Precision Auto Works</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-10 ">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <p>66 Broklyant, New York</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone />
                <p>012 345 678 9101</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <p>abcd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © Fixturbo 2024 | All Rights Reserved
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms & Condition</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Contact Us</a>
            </div>
          </div>
        </div>

        </div>
      </footer>
    </>
  );
}

export default FooterDetails;
