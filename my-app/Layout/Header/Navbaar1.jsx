// app/components/Navbar.jsx
"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

const navItems = [
  { label: "Home", sub: ["Home 1", "Home 2"] },
  { label: "About Us" },
  { label: "Services", sub: ["Service 1", "Service 2"] },
  { label: "Projects", sub: ["Project 1", "Project 2"] },
  { label: "Blog", sub: ["Blog 1", "Blog 2"] },
  { label: "Pages", sub: ["Page 1", "Page 2"] },
  { label: "Contact" },
];

export default function Navbaarmain() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (

      <nav className="bg-[var(--primary-color)] text-white px-4 py-3 relative z-10">
            <div className="container mx-auto">

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center ms-5 me-5">
        <ul className="flex gap-6 items-center text-sm font-medium">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link href="#" className="hover:text-black  flex items-center gap-1 ">
                {item.label} {item.sub && (openIndex === idx ? <IoIosArrowUp /> : <IoIosArrowDown />)}
              </Link>
              {item.sub && openIndex === idx && (
                <ul className="absolute top-5 left-0 bg-white text-black shadow-md py-2 px-4 rounded w-40 transition all ease-in duration-500">
                  {item.sub.map((subItem, subIdx) => (
                    <li key={subIdx} className="hover:text-red-600 py-1 ">
                      <Link href="#">{subItem}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 text-white text-lg">
          <FaFacebookF className="hover:text-black cursor-pointer" />
          <FaInstagram className="hover:text-black cursor-pointer" />
          <FaTwitter className="hover:text-black cursor-pointer" />
          <FaLinkedinIn className="hover:text-black cursor-pointer" />
        </div>
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex justify-between items-center  text-gray-800 px-4 py-2 rounded">
        <div className="flex items-center gap-2">
          <Image src="/logo-white.svg" alt="Logo" width={130} height={30} />
        </div>
        <button onClick={() => setMobileMenu(!mobileMenu)} className="text-2xl bg-white px-2 py-[1px] rounded-md">
          ☰
        </button>
      </div>

      {/* Mobile Nav Items */}
      {mobileMenu && (
        <div className="md:hidden mt-4 bg-white text-gray-800 p-4 rounded shadow">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <details>
                  <summary className="flex justify-between items-center cursor-pointer">
                    {item.label} {item.sub && <IoIosArrowDown />}
                  </summary>
                  {item.sub && (
                    <ul className="ml-4 mt-1">
                      {item.sub.map((subItem, subIdx) => (
                        <li key={subIdx} className="hover:text-red-600 py-1">
                          <Link href="#">{subItem}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 text-xl justify-center">
            <FaFacebookF className="hover:text-red-600 cursor-pointer" />
            <FaInstagram className="hover:text-red-600 cursor-pointer" />
            <FaTwitter className="hover:text-red-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
    </nav>
  );
}