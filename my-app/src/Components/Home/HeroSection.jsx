"use client";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center min-h-[90vh] text-white flex items-center px-6 lg:px-20 "
      style={{ backgroundImage: 'url("/hero_bg.png")',backgroundColor:"balck" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-5"></div>

      {/* Primary Skewed Shape */}
      <div className="absolute top-[-160px] left-[326px] w-[445px] h-[calc(100%+160px)] z-10 opacity-75 transform skew-x-[30deg] bg-[linear-gradient(180deg,#e8092e,rgba(232,9,46,0))] pointer-events-none"></div>

      {/* Secondary Skewed Shape */}
      <div className="absolute bottom-10 left-[175px] w-[300px] h-[279px] z-1 opacity-75 transform skew-x-[-31deg] bg-[linear-gradient(180deg,#e8092e,rgba(232,9,46,0))] pointer-events-none"></div>

 <div className="container ms-0 lg:ms-[250px]">
  <div className="relative z-20 max-w-4xl text-left">
    <p className="uppercase tracking-widest text-sm font-medium mb-4">Growth Accelerator</p>

    <h1 className="text-4xl md:text-7xl font-black font-yantramanav relative">
      Crafting <span className="relative inline-block">
        <span className="text-theam z-10">Automotive</span>
        <Image
          src="/hero_shape_1.png"
          alt="underline"
          width={300}
          height={20}
          className="absolute bottom-1 left-0 w-0 h-auto z-0 animate-slideReveal"
        />
      </span> Excellence One <br /> Repair At Time
    </h1>

    <p className="mt-6 text-base md:text-lg max-w-xl">
      Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque, in convallis massa tempus in.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
      <button className="relative px-6 py-3 font-semibold rounded overflow-hidden text-white bg-red-600 group">
        <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Learn More</span>
        <span className="absolute inset-10 before:absolute before:inset-0 before:rounded-full before:bg-white before:animate-sweep"></span>
      </button>

      <div className="flex items-center gap-3">
        <div className="bg-red-600 p-3 rounded-full">
          <FaPhoneAlt className="text-white text-lg" />
        </div>
        <div className="text-left text-white">
          <p className="text-xs">Requesting A Call:</p>
          <p className="font-bold text-lg">(629) 555-0129</p>
        </div>
      </div>
    </div>
  </div>
</div>



      <style jsx>{`
        .animate-slideReveal {
          animation: slideReveal 1.5s ease-out forwards;
        }

        @keyframes slideReveal {
          0% {
            width: 0%;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes sweep {
          0% {
            clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
          }
          50% {
            clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          }
        }
      `}</style>
    </section>
  );
}
