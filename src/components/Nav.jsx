import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import Pharmacist from "../../src/assets/images/pharmacist.jpg";
import Medvault from "../../src/assets/icons/medvault.png";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='font-sans'>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <img src={Medvault} alt='Med Vault' className='h-8 w-8' />
            <span className='font-bold text-blue-700 text-lg'>Med Vault</span>
          </div>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-8'>
            {["Home", "About", "Services", "Contact"].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-[#FFFFFF] hover:text-gray-900 transition font-medium 
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full
                  ${idx === 0 ? "text-blue-700 after:w-full" : ""}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Register button */}
          <Link to='/sign'>
            <div className='hidden md:block'>
              <a
                href='#register'
                className='px-6 py-2 bg-[#1447e6] text-white rounded-lg shadow hover:bg-blue-800 transition'
              >
                Register
              </a>
            </div>
          </Link>

          {/* Mobile toggle */}
          <button
            className='md:hidden flex items-center'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className='md:hidden bg-white/90 backdrop-blur-md shadow-lg'>
            <div className='flex flex-col items-center py-4 space-y-4'>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className='text-[] hover:text-blue-700 transition font-medium'
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href='#register'
                className='px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition'
                onClick={() => setIsOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className='relative h-screen flex items-center justify-center text-center text-white'
        style={{
          backgroundImage: `url(${Pharmacist})`, // replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text visibility */}
        <div className='absolute inset-0 bg-black/20'></div>

        {/* Content */}
        <div className='relative z-10 px-4'>
          <h1 className=' md:text-[48px] leading-tight mb-6 .inter font-normal'>
            <span className='  whitespace-nowrap block'>
              Transforming Healthcare Through{" "}
            </span>
            <span className='block'> And Compassion</span>
          </h1>
          <p className='text-[20px] md:text-xl max-w-3xl mx-auto mb-8 leading-[32px font-normal'>
            <span className='block'>
              {" "}
              Our centralized hospital management system connects hospitals and
            </span>
            <span>caregivers in one seamless platform</span>
          </p>
          <a
            href='#register'
            className='px-8 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition'
          >
            Register
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
