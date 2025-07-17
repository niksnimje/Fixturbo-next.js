
import Title from '@/Cards/Title';
import { FaCarSide, FaTools, FaClinicMedical, FaCarCrash, FaOilCan, FaWrench } from 'react-icons/fa';

const WhatWeDo = () => {
  const services = [
    {
      category: "Appendix A",
      items: [
        {
          title: "Auto Fixers",
          icon: <FaCarSide className="text-4xl" />,
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
      {/* First Section - Appendix A */}
      <div className="space-y-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {services[0].items.map((item, idx) => (
            <div 
              key={idx} 
              className=" p-6 rounded-lg transition-all duration-300 group"
            >
              <div className="relative h-16 w-16 mb-4 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 group-hover:rotate-y-180 transition-all text-theam duration-500">
                  {item.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rotate-y-180 group-hover:rotate-y-0 transition-all duration-500 text-red-600">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-medium text-center mb-2">{item.title}</h4>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Image Between A and B */}
      <div className="flex justify-center my-16">
        <img
          src="/section3.png"
          alt="middle section car"
          className="w-full max-w-3xl object-cover rounded-full"
        />
      </div>

      {/* Second Section - Appendix B */}
      <div className="space-y-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {services[1].items.map((item, idx) => (
            <div 
              key={idx} 
              className=" p-6 rounded-lg transition-all duration-300 group"
            >
              <div className="relative h-16 w-16 mb-4 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 group-hover:rotate-y-180 transition-all duration-500 text-theam">
                  {item.icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 rotate-y-180 group-hover:rotate-y-0 transition-all duration-500 text-red-600">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-medium text-center mb-2">{item.title}</h4>
              <p className="text-gray-600 text-center">{item.description}</p>
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