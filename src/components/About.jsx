// src/pages/About.jsx
import React from "react";
import Guardian from "../assets/images/guardian.png";
// <-- replace with your image path

const About = () => {
  return (
    <main className='bg-[#FFFFFF] px-6 md:px-20 lg:px-32 py-12  h-[795px]'>
      {/* About Med-Vault Section */}
      <section className='mb-20'>
        <h2 className=' md:text-3xl font-medium inter text-center mb-[12px] text-[#000000] leading-[42px] text-[32px] .inter max-w-[-5px]'>
          About Med-Vault
        </h2>
        <p className='text-center  mx-auto text-[20px] text-[#2E2E2E] leading-[32px] mb-[64px] inter font-normal  h-[54px] .inter  '>
         <span className="inter block px-[10px] text-center">
  We are a health technology company dedicated to connecting hospitals,
  healthcare professionals,
</span>


          <span className='block inter'>
            and patients through a single, secure Patient ID system.
          </span>
        </p>

        <div className='grid md:grid-cols-2 mr-30 space-x-20 items-center gap-[8px]  '>
          {/* Image */}
          <div className='flex justify-center items-center'>
            <img
              src={Guardian}
              alt='Doctor with patient'
              className='rounded-[8px] shadow-md max-w-[550px] h-[433px] bg-cover bg-no-repeat bg-cente '
            />
          </div>

          {/* Text Content */}
          <div className='gap-[8px]  w-[635px] h-[390px] leading-[35px] '>
            <p className='text-[#000]  font-medium  '>
              <span className='block .inter text-justify  tracking-wide '>
                <span className='font-medium text-2xl'>We</span> are a health
                technology company dedicated to building a smarter,
              </span>
              <span className='block .inter text-justify  '>
                safer, and more connected healthcare system. Our platform
                provides every
              </span>
              <span className='block .inter text-justify  '>
                patient with a unique identification number that links their
                medical records
              </span>{" "}
              <span className='block .inter text-justify  tracking-wide'>
                across all verified hospitals in the country. This ensures
                doctors, nurses,
              </span>
              <span className='block .inter text-justify tracking-'>
                pharmacists, and lab technicians can access accurate information
                anytime,
              </span>
              <span className='block .inter text-justify  '>
                improving diagnosis, treatment, and collaboration. For
                hospitals, we simplify
              </span>
              <span className='block .inter text-justify  tracking-wide'>
                operations with tools for managing departments, staff,
                compliance, and
              </span>
              <span className='block .inter text-justify  tracking-wide'>
                payments. For patients, we make healthcare seamless by allowing
                them to
              </span>
              <span className='block .inter text-justify  tracking-wide'>
                book appointments, manage their data, and receive quality care
                wherever
              </span>
              <span className='block .inter text-justify tracking-wider'>
                they go. Our mission is simple: to put patients first while
                empowering
              </span>
              <span className='block .inter text-justify  tracking-wider'>
                hospitals with the technology they need to deliver world-class
                care.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
    </main>
  );
};

export default About;
