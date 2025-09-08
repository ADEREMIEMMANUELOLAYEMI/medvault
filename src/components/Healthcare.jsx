import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Office from '../assets/images/office.png'
import Machine from '../assets/images/machine.png'
import Macbook from '../assets/iMAGES/macbook.png'
import Grace from '../assets/images/grace.png'
export default function Healthcare() {
  return (
    <div className="bg-[#EAE9FB] min-h-[756px] w-[1440px] flex flex-col items-center font-sans ">
      {/* Services Section */}
      <section className="w-full max-w-6xl px-6 py-12 text-center">
        <h2 className=" text-[36px] inter font-medium mb-4 leading-[42px] text-[#000] w-[963px] h-[64px] items-center justify-center">Our Services</h2>


        <p className="text-[#2E2E2E] max-w-2xl mx-auto  w-[963px] h-[64px]">
        <span className="whitespace-nowrap inter"> Connecting every hospital and patient with one secure ID — making
          healthcare seamless,</span> 
          <span className="block inter">transparent, and accessible anytime, anywhere.</span> 
        </p>

        <div className="grid gap-50 md:grid-cols-3 justify-around   ">
          {/* Card 1 */}
          <div className="bg-[#F8F8F8] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col items-center w-[402px] h-[353px] ">
            <img
              src={Office}
              alt="Medical Staff Tools"
              className="rounded-[8px] mb-4 w-[384px] h-[199px] "
            />
            <h3 className="font-medium text-[24px] mb-[12px] inter w-[382px] h-[28px] leading-[28px]">Medical Staff Tools</h3>
            <p className="text-gray-600 text-sm">
              Providing essential digital tools for healthcare professionals to
              improve service delivery and efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F8F8] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col items-center w-[402px] h-[353px]">
            <img
              src={Machine}
              alt="Unified Patient Health Record"
              className="rounded-[8px] mb-4 w-[384px] h-[199px]"
            />
            <h3 className="font-medium text-[24px] mb-[12px] inter w-[382px] h-[28px] leading-[28px]">
              Unified Patient Health Record
            </h3>
            <p className="text-gray-600 text-sm">
              A centralized health record accessible across hospitals for better
              diagnosis, treatment, and patient outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F8F8] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition p-4 flex flex-col items-center w-[402px] h-[353px]">
            <img
              src={Macbook}
              alt="Appointment & Scheduling"
              className="rounded-[8px] mb-4 w-[384px] h-[199px] ]"
            />
            <h3 className="font-medium text-[24px] mb-[12px] inter w-[382px] h-[28px] leading-[28px]">
              Appointment & Scheduling
            </h3>
            <p className="text-gray-600 text-sm">
              Patients can easily book and manage appointments with healthcare
              providers, saving time and improving access.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-6xl px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Your questions matter. Reach out, we’re here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div className="flex flex-col items-start space-y-4 text-left">
            <p className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-red-500" /> Address: [Insert Office
              Address]
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5 text-red-500" /> +234 806 123 4567
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Mail className="w-5 h-5 text-red-500" /> support@healthid.ng
            </p>
            <p className="text-gray-700">
              Working Hours: Monday – Friday, 9:00 AM – 6:00 PM
            </p>
          </div>

          {/* Contact Image */}
          <div className="flex justify-center">
            <img
              src={Grace}
              alt="Contact"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

