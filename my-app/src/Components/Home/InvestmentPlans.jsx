"use client"
import Title from '@/Cards/Title';
import { useState } from 'react';

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
      color: "bg-[#fbd7dd]"
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
      color: "bg-[#fbd7dd]"
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
      color: "bg-[#fbd7dd]"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
     {/* Header */}
               <Title title="Investment Plan" content={`Empowering Your Wealth <br /> Investment With Us`} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover background effect (always visible but more prominent on hover) */}
              <div 
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${plan.color} ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-10'
                }`}
              ></div>
              
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{plan.name}</h3>
                
                <div className="text-center mb-6">
                  <p className="text-gray-600 font-medium">{plan.minAmount}</p>
                  <p className="text-3xl font-bold">{plan.price}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`
                  w-full py-3 font-bold rounded-lg border-2 border-red-600
                  transition-all duration-300
                  ${hoveredCard === index ? 
                    'bg-red-600 text-white' : 
                    'bg-transparent text-red-600 hover:bg-red-600 hover:text-white'
                  }
                `}>
                  GET THIS PLAN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;