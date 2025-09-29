import React from "react";
import { Icon } from "@iconify/react";

import Receiptionist from "../assets/images/receiptionist.png";

const steps = [
  {
    icon: "eos-icons:system-re-registered",
    title: "Register or login",
    desc: "Access the hospital management system through the web or mobile app.",
  },
  {
    icon: "mdi:password-outline",
    title: "Enter Your Credentials",
    desc: "Provide your Email / Staff ID / Patient ID and Password in the login form.",
  },
  {
    icon: "uiw:verification",
    title: "Role Verification",
    desc: "The system detects your role (Patient, Doctor, Nurse, Lab, Admin) and grants the right access.",
  },
  {
    icon: "ri:secure-payment-fill",
    title: "Subscription",
    desc: "Pay a subscription fee to access our software services.",
  },
  {
    icon: "bx:universal-access",
    title: "Dashboard Access",
    desc: "You are redirected to your personalized dashboard with the tools and information you need.",
  },
];

const How = () => {
  return (
    <main className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 overflow-x-hidden">
      {/* Section Heading */}
      <section className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-10 text-[#000] font-semibold leading-snug tracking-tight">
          How it Works
        </h2>
        <p className="text-[#2E2E2E] max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed font-normal mt-4 mb-12">
          <span className="block">
            Connecting every hospital and patient with one secure ID — making
            healthcare seamless,
          </span>
          <span className="block">
            transparent, and accessible anytime, anywhere.
          </span>
        </p>
      </section>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-16 lg:gap-20">
        {/* Left Side - Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B36A733] flex items-center justify-center">
                <Icon
                  icon={step.icon}
                  className="text-[#100C8D] h-6 w-6 md:h-7 md:w-7"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-medium text-[#000] text-lg sm:text-xl md:text-2xl leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#464255] text-sm sm:text-base md:text-lg leading-relaxed font-normal mt-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={Receiptionist}
            alt="How it works"
            className="rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default How;
