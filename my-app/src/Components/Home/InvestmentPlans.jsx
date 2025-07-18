"use client"
import Title from '@/Cards/Title';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaCarAlt, FaTools, FaOilCan } from 'react-icons/fa';
import Image from 'next/image';


const InvestmentPlans = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      name: "Silver Plan",
      minAmount: "MIN 500/USD",
      price: "1.00/USD",
      features: [
        "Stoke Market",
        "Every Day",
        "Return Account 30%",
        "For 15 days"
      ],
      color: "bg-[#fbd7dd]",
      icon: "/picingicon-1.svg"
    },
    {
      name: "Gold Plan",
      minAmount: "MIN 600/USD",
      price: "1.00/USD",
      features: [
        "Stoke Market",
        "Every Day",
        "Return Account 30%",
        "For 15 days"
      ],
      color: "bg-[#fbd7dd]",
      icon: "/picingicon-2.svg",
      isCenter: true
    },
    {
      name: "Millions Plan",
      minAmount: "MIN 1000/USD",
      price: "1.00/USD",
      features: [
        "Stoke Market",
        "Every Day",
        "Return Account 30%",
        "For 15 days"
      ],
      color: "bg-[#fbd7dd]",
      icon: "/picingicon-3.svg"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-30">
      <div className="max-w-7xl mx-auto">
     {/* Header */}
               <Title title="Investment Plan" content={`Empowering Your Wealth <br /> Investment With Us`} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <div 
          key={index}
          className="relative  rounded-lg shadow-md overflow-hidden bg-[#F4F4F4]"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Hover background effect */}
          <div 
            className={`absolute inset-0 rounded-lg transition-all duration-300 ${plan.color} ${
              plan.isCenter ? 'opacity-100' : // Center card always has some opacity
              hoveredCard === index ? 'opacity-100' : 'opacity-10'
            }`}
          ></div>
          
          <div className="relative z-10 min-h-[512px]">
            <div className="flex justify-between items-center mb-6 ps-8 pt-8">
              <div className="text-3xl">
                <Image src={plan.icon} alt="hello" height={65} width={65} />
                {/* {plan.icon} */}
              </div>
              <div>

              <h3 className="text-xs sm:text-sm md:text-base min-w-[180px] sm:min-w-[200px] md:min-w-[220px] font-bold text-center bg-theam flex-grow text-white py-3 px-3 md:py-4 md:px-4 rounded-s-lg">
  {plan.name}
</h3>

              </div>
            </div>
            <hr className='border-[#e1e1e1] mx-3' />
            <div className='p-8'>
                <div className=" mb-6">
                <p className="text-black text-2xl font-yantramanav-900 font-bold">{plan.minAmount}</p>
                <p className="text-xl ">{plan.price}</p>
              </div>

              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {/* <MdKeyboardArrowRight className="text-red-600" /> */}
                    <MdKeyboardArrowRight className="text-red-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`
                w-full py-3 font-bold rounded-lg 
               
                ${hoveredCard === index || plan.isCenter ? 
                  'bg-white text-black hover:border-2 border-theam' : 
                  'bg-transparent  hover:text-white  '
                }
              `}>
                GET THIS PLAN
              </button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;