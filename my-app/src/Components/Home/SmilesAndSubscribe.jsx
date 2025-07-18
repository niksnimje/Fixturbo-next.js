import Image from 'next/image';
import { FaArrowRight, FaHeadset, FaCarAlt, FaTools } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";

const SmilesAndSubscribe = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "Quality Support",
      icon: <FaHeadset className="text-4xl text-theam" />,
      description: "Ut elementum et mollis eu sapien neque tempus. Tristique nisl nibh tincidunt proin sit down dkuleu",
    },
    {
      step: "STEP 2",
      title: "All Car Makes",
      icon: <FaCarAlt className="text-4xl text-theam" />,
      description: "Ut elementum et mollis eu sapien neque tempus. Tristique nisl nibh tincidunt proin sit down dkuleu",
    },
    {
      step: "STEP 3",
      title: "Variety Services",
      icon: <FaTools className="text-4xl text-theam" />,
      description: "Ut elementum et mollis eu sapien neque tempus. Tristique nisl nibh tincidunt proin sit down dkuleu",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:pb-[295px] " style={{backgroundImage:"url('/process-bg.png')"}}>
      {/* Miles of Smiles Section */}
      <div className="max-w-7xl mx-auto mb-20">

        <div className="text-center mb-12 font-yantramanav font-black">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-theam"></div>
          <span className="text-theam text-md uppercase font-extrabold font-yantramanav-900">work process</span>
          <div className="w-12 h-[2px] bg-theam"></div>
        </div>
        <h2
          className="text-4xl md:text-4xl lg:text-5xl text-white font-yantramanav-900">
            Miles Of Smiles, One <br /> Repair A Time
            </h2>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
  {steps.map((step, index) => (
    <div key={index} className="relative">
      <div className="mt-5 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border-3 border-[#2F2F2F] relative">
        
        {/* STEP (Top label center aligned) */}
        <span className="text-xl font-semibold block mb-2 absolute left-1/2 transform -translate-x-1/2 -top-6 bg-theam text-white py-4 px-4 min-w-[217px] rounded-lg font-yantramanav-900">
          {step.step}
        </span>
      <br />
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white ">{step.title}</h3>

        {/* Description */}
        <p className="text-sm md:text-base text-white mb-6 leading-[32px]">
          {step.description}
        </p>
      <br />  
        {/* Read More */}
       <a
  href="#"
  className="relative text-sm text-white font-semibold transition-colors duration-300 inline-flex items-center group"
>
  READ MORE
  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
  
  {/* Animated underline */}
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
      </div>

      {/* Arrow after card, not after last card */}
      {index !== steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-9 transform -translate-y-1/2">
          <MdKeyboardArrowRight size={40} className="text-[#2F2F2F]" />
        </div>
      )}
    </div>
  ))}
</div>

      </div>

      {/* Subscribe Section */}
     <div className="container mx-auto bg-theam rounded-lg ps-6 md:pe-0 md:ps-12  text-white overflow-hidden relative lg:absolute left-1/2 transform -translate-x-1/2 -bottom-25">
  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
    {/* Left Content */}
    <div className=' pt-10 '> {/* Added left padding for desktop */}
      <h2 className="text-4xl font-bold mb-6">Subscribe To Stay Connected</h2>
      <p className="text-red-100 mb-10 leading-[30px]"> {/* Replaced <br> with proper margin */}
        A car repair is a service provided to fix any issues or damages with vehicle. It's involves diagnosing the problem, repairing or replacing necessary parts.
      </p>
      
      <div className="flex pe-4">
        <input 
          type="email" 
          placeholder="Your Email Address" 
          className="flex-grow px-6 h-14 w-full rounded-l-lg focus:outline-none text-white border-2 border-border placeholder-white"
    
        />
        <button className="bg-white hover:bg-gray-100 text-black h-14  px-6 flex items-center justify-center rounded-r-lg transition-colors duration-300 font-medium">
          Subscribe <FaArrowRight className="md:ml-2" />
        </button>
      </div>
    </div>
    
    {/* Right Image - aligned to end */}
    <div className='flex justify-end'> {/* Added flex justify-end */}
      <Image 
        src="/call1.png" 
        className='object-contain max-h-[450px]' 
        width={500} 
        height={450} 
        alt='Customer service call'
      />
    </div>
  </div>
</div>
    </section>
  );
};

export default SmilesAndSubscribe;