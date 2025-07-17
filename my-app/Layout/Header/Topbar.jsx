"use client";
import { MdLocationOn } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="bg-white  flex-col hidden md:flex md:flex-row justify-between items-center px-4 py-3 border-b border-gray-200 text-sm gap-3 md:gap-0">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={170} height={40} />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-6 text-gray-700 text-center md:text-left">
        <div className="flex items-center gap-2 sm:border-e sm:pe-5 border-gray-300">
          <FaClock className="text-red-600 text-3xl" />
          <span className="text-lg" style={{ fontFamily: "var(--font-yantramanav)" }}>
            Sunday - Friday <br />
            <strong className="text-black text-xl">9 am - 8 pm</strong>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-red-600 text-3xl" />
          <span className="text-lg" style={{ fontFamily: "var(--font-yantramanav)" }}>
            6391 Elgin St. Celina, Delaware <br />
            <strong className="text-black text-xl">Kentucky</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
