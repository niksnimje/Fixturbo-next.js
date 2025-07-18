
import Title from '@/Cards/Title';
import { FaTools, FaClinicMedical, FaCarCrash, FaOilCan, FaWrench } from 'react-icons/fa';
import { IoCarOutline } from "react-icons/io5";

const WhatWeDo = () => {
  const services = [
    {
      category: "Appendix A",
      items: [
        {
          title: "Auto Fixers",
          icon: <IoCarOutline className="text-4xl" />,
          description: "A car repair is a service provided to fix any issues or damages with your vehicle it involves diagnosing"
        },
        {
          title: "Mechanic Masters",
          icon: <FaTools className="text-4xl" />,
          description: "A car repair is a service provided to fix any issues or damages with your vehicle it involves diagnosing"
        },
        {
          title: "Car Care Clinic",
          icon: <FaClinicMedical className="text-4xl" />,
          description: "A car repair is a service provided to fix any issues or damages with your vehicle it involves diagnosing"
        }
      ]
    },
    {
      category: "Appendix B",
      items: [
        {
          title: "Precision Auto Works",
          icon: <FaCarCrash className="text-4xl" />,
          description: "A car repair is a service provided to fix any issues or damages with your vehicle it involves diagnosing"
        },
        {
          title: "Drive-In Garage",
          icon: <FaOilCan className="text-4xl" />,
          description: "A car repair is a service provided to fix any issues or damages with your vehicle it involves diagnosing"
        },
        {
          title: "Speedy Auto Repair",
          icon: <FaWrench className="text-4xl" />,
          description: "A car repair is a service provided to fix any issues or damages with your vehicle it involves diagnosing"
        }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <Title title="What we do" content={`Dependable Car Repair <br /> The Solutions`} />

   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Left Section */}
  <div className="space-y-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      {services[0].items.map((item, idx) => (
        <div key={idx} className="p-6 rounded-lg transition-all duration-300 group">
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-4">
            {/* Title & Description */}
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-[22px] font-bold mb-2 break-words font-yantramanav-900">
                {item.title}
              </h4>
              <p className="text-gray-600 line-clamp-2">{item.description}</p>
            </div>
            {/* Icon */}
            <div className="relative w-16 h-16 shrink-0">
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 group-hover:rotate-y-180 transition-all duration-500 bg-[#FDE6EB] text-theam h-[64px] w-[64px]">
                {item.icon}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rotate-y-180 group-hover:rotate-y-0 transition-all duration-500 bg-[#FDE6EB] text-theam h-[64px] w-[64px]">
                {item.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Center Section (Image) */}
  <div className="flex justify-center items-center">
    <img
      src="/section3.png"
      alt="middle section car"
      className="w-full max-w-3xl object-cover rounded-full"
    />
  </div>

  {/* Right Section */}
  <div className="space-y-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      {services[1].items.map((item, idx) => (
        <div key={idx} className="p-6 rounded-lg transition-all duration-300 group">
          <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-4">
            {/* Icon */}
            <div className="relative w-16 h-16 shrink-0">
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 group-hover:rotate-y-180 transition-all duration-500 bg-[#FDE6EB] text-theam h-[64px] w-[64px]">
                {item.icon}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rotate-y-180 group-hover:rotate-y-0 transition-all duration-500 bg-[#FDE6EB] text-theam h-[64px] w-[64px]">
                {item.icon}
              </div>
            </div>
            {/* Title & Description */}
            <div className="flex-1 ">
              <h4 className="text-[22px] font-bold mb-2 break-words font-yantramanav-900">
                {item.title}
              </h4>
              <p className="text-gray-600 line-clamp-2">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  </div>
</section>

  );
};

export default WhatWeDo;