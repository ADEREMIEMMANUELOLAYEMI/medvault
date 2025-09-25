// src/pages/HowItWorks.jsx
import React from "react";
import { Icon } from "@iconify/react";

import Receiptionist from "../assets/images/receiptionist.png"

const steps = [
  {
    icon: "eos-icons:system-re-registered", // ✅ works
    title: "Register or login",
    desc: "Access the hospital management system through the web or mobile app.",
  },
  {
    icon: "mdi:password-outline", // ✅ works
    title: "Enter Your Credentials",
    desc: "Provide your Email / Staff ID / Patient ID and Password in the login form.",
  },
  {
    icon: "uiw:verification", // ✅ works
    title: "Role Verification",
    desc: "The system detects your role (Patient, Doctor, Nurse, Lab, Admin) and grants the right access.",
  },
  {
    icon: "ri:secure-payment-fill", // ✅ works
    title: "Subscription",
    desc: "Pay a subscription fee to access our software services.",
  },
  {
    icon: "bx:universal-access", // ✅ works
    title: "Dashboard Access",
    desc: "You are redirected to your personalized dashboard with the tools and information you need.",
  },
];

const How = () => {
  return (
    <main className="bg-white px-6 md:px-20 lg:px-32 py-16">
      {/* Section Heading */}
      <section className="text-center mb-[12px]">
        <h2 className="md:text-3xl text-[32px] mt-[40px] text-[#000] inter font-medium leading-[42px] tracking-tight">
          How it Works
        </h2>
        <p className="text-[#2E2E2E] max-w-2xl mx-auto text-[20px] leading-[32px] font-normal inter mt-4 mb-[64px]">
          <span className="block whitespace-nowrap inter">
            Connecting every hospital and patient with one secure ID — making
            healthcare seamless,
          </span>
          <span className="block inter">
            transparent, and accessible anytime, anywhere.
          </span>
        </p>
      </section>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 items-center gap-12">
        {/* Left Side - Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-[16px]">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1B36A733] flex items-center justify-center">
                <Icon
                  icon={step.icon}
                  className="text-[#100C8D] text-xl h-[25px] w-[27.5px] "
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-medium text-[#000] text-[24px] leading-[25px] inter">
                  {step.title}
                </h3>
                <p className="text-[#464255] text-[16px] leading-[24px] font-normal mt-[8px] inter mb-[40px]">
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
            className="rounded-[8px] shadow-md max-w-full w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default How;


