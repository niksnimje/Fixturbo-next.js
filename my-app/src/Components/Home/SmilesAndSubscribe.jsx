import Image from 'next/image';
import { FaArrowRight, FaHeadset, FaCarAlt, FaTools } from 'react-icons/fa';

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
    <section className="relative py-16 px-4 sm:px-6 lg:px-8  " style={{backgroundImage:"url('/process-bg.png')"}}>
      {/* Miles of Smiles Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Miles Of Smiles, One Repair A Time</h2>
          <div className="w-20 h-1 bg-theam mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="mb-4">{step.icon}</div>
              <span className="text-sm font-semibold text-theam block mb-2">{step.step}</span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <a href="#" className="text-theam font-semibold hover:text-theam transition-colors duration-300 flex items-center justify-center">
                READ MORE <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="max-w-7xl mx-auto bg-theam rounded-lg p-2 md:ps-20 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Subscribe To Stay Connected</h2>
            <p className="text-red-100">
              A car repair is a service provided to fix any issues or damages with vehicle. It's involves diagnosing the problem, repairing or replacing necessary parts.
            </p>
            <br /><br />
            <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-grow px-6 h-14 rounded-l-lg focus:outline-none text-white border border-border"
            />
            <button className="bg-black hover:bg-gray-900 text-white h-14 w-14 flex items-center justify-center rounded-r-lg transition-colors duration-300">
              <FaArrowRight />
            </button>
          </div>
          </div>
          
          <div>
            <Image src={"/call1.png"} width={500} height={450} alt='hello call'/>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SmilesAndSubscribe;