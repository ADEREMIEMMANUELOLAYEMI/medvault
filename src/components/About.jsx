// src/pages/About.jsx
import React from "react";
import Guardian from "../assets/images/guardian.png";

const About = () => {
  return (
    <main className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      {/* About Med-Vault Section */}
      <section className="mb-16 md:mb-20">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-snug mb-4">
          About Med-Vault
        </h2>

        {/* Subheading */}
        <p className="text-center max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-[#2E2E2E] leading-relaxed mb-10 px-2">
          <span className="block">
            We are a health technology company dedicated to connecting
            hospitals, healthcare professionals,
          </span>
          <span className="block">
            and patients through a single, secure Patient ID system.
          </span>
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Guardian}
              alt="Doctor with patient"
              className="rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed space-y-3 px-2 md:px-0 text-justify">
            <p>
              <span className="font-semibold text-lg sm:text-xl md:text-2xl">
                We
              </span>{" "}
              are a health technology company dedicated to building a smarter,
              safer, and more connected healthcare system. Our platform provides
              every patient with a unique identification number that links their
              medical records across all verified hospitals in the country.
            </p>
            <p>
              This ensures doctors, nurses, pharmacists, and lab technicians can
              access accurate information anytime, improving diagnosis,
              treatment, and collaboration.
            </p>
            <p>
              For hospitals, we simplify operations with tools for managing
              departments, staff, compliance, and payments.
            </p>
            <p>
              For patients, we make healthcare seamless by allowing them to book
              appointments, manage their data, and receive quality care wherever
              they go.
            </p>
            <p>
              Our mission is simple: to put patients first while empowering
              hospitals with the technology they need to deliver world-class
              care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
