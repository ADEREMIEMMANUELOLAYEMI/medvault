// import React from "react";
// import { Mail, Phone, MapPin } from "lucide-react";
// import Office from "../assets/images/office.png";
// import Machine from "../assets/images/machine.png";
// import Macbook from "../assets/images/macbook.png";
// import Grace from "../assets/images/grace.png";

// export default function Healthcare() {
//   return (
//     <div className="bg-[#EAE9FB] min-h-[756px] flex flex-col items-center font-sans">
//       {/* Services Section */}
//       <section className="w-full max-w-6xl px-6 py-12 text-center">
//         <h2 className="text-[28px] md:text-[36px] inter font-medium mb-4 leading-tight text-[#000] max-w-3xl mx-auto">
//           Our Services
//         </h2>

//         <p className="text-[#2E2E2E] max-w-2xl mx-auto">
//           <span className="inter">
//             Connecting every hospital and patient with one secure ID — making
//             healthcare seamless,
//           </span>
//           <span className="block inter">
//             transparent, and accessible anytime, anywhere.
//           </span>
//         </p>

//         <div className="grid gap-8 md:grid-cols-3 mt-10">
//           {/* Card 1 */}
//           <div className="bg-[#F8F8F8] rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center w-full max-w-sm mx-auto">
//             <img
//               src={Office}
//               alt="Medical Staff Tools"
//               className="rounded-[8px] mb-4 w-full h-[200px] object-cover"
//             />
//             <h3 className="font-medium text-[20px] md:text-[24px] mb-[12px] inter leading-[28px] text-center">
//               Medical Staff Tools
//             </h3>
//             <p className="text-gray-600 text-sm text-center">
//               Providing essential digital tools for healthcare professionals to
//               improve service delivery and efficiency.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-[#F8F8F8] rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center w-full max-w-sm mx-auto">
//             <img
//               src={Machine}
//               alt="Unified Patient Health Record"
//               className="rounded-[8px] mb-4 w-full h-[200px] object-cover"
//             />
//             <h3 className="font-medium text-[20px] md:text-[24px] mb-[12px] inter leading-[28px] text-center">
//               Unified Patient Health Record
//             </h3>
//             <p className="text-gray-600 text-sm text-center">
//               A centralized health record accessible across hospitals for better
//               diagnosis, treatment, and patient outcomes.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-[#F8F8F8] rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center w-full max-w-sm mx-auto">
//             <img
//               src={Macbook}
//               alt="Appointment & Scheduling"
//               className="rounded-[8px] mb-4 w-full h-[200px] object-cover"
//             />
//             <h3 className="font-medium text-[20px] md:text-[24px] mb-[12px] inter leading-[28px] text-center">
//               Appointment & Scheduling
//             </h3>
//             <p className="text-gray-600 text-sm text-center">
//               Patients can easily book and manage appointments with healthcare
//               providers, saving time and improving access.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="w-full max-w-6xl px-6 py-12 text-center">
//         <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//         <p className="text-gray-600 mb-8">
//           Your questions matter. Reach out, we’re here to help.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Contact Info */}
//           <div className="flex flex-col items-start space-y-4 text-left">
//             <p className="flex items-center gap-2 text-gray-700">
//               <MapPin className="w-5 h-5 text-red-500" /> Address: [Insert Office
//               Address]
//             </p>
//             <p className="flex items-center gap-2 text-gray-700">
//               <Phone className="w-5 h-5 text-red-500" /> +234 806 123 4567
//             </p>
//             <p className="flex items-center gap-2 text-gray-700">
//               <Mail className="w-5 h-5 text-red-500" /> support@healthid.ng
//             </p>
//             <p className="text-gray-700">
//               Working Hours: Monday – Friday, 9:00 AM – 6:00 PM
//             </p>
//           </div>

//           {/* Contact Image */}
//           <div className="flex justify-center">
//             <img
//               src={Grace}
//               alt="Contact"
//               className="rounded-lg shadow-md max-w-sm w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Office from "../assets/images/office.png";
import Machine from "../assets/images/machine.png";
import Macbook from "../assets/images/macbook.png";
import Grace from "../assets/images/grace.png";

export default function Healthcare() {
  return (
    <div className="bg-[#EAE9FB] min-h-screen flex flex-col items-center font-sans overflow-x-hidden">
      {/* Services Section */}
      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-12 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight text-[#000] max-w-3xl mx-auto">
          Our Services
        </h2>

        <p className="text-[#2E2E2E] max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          <span>
            Connecting every hospital and patient with one secure ID — making
            healthcare seamless,
          </span>
          <span className="block">
            transparent, and accessible anytime, anywhere.
          </span>
        </p>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {/* Card 1 */}
          <div className="bg-[#F8F8F8] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center w-full max-w-sm mx-auto">
            <img
              src={Office}
              alt="Medical Staff Tools"
              className="rounded-lg mb-4 w-full h-40 sm:h-52 object-cover"
            />
            <h3 className="font-medium text-lg sm:text-xl md:text-2xl mb-3 leading-snug text-center">
              Medical Staff Tools
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
              Providing essential digital tools for healthcare professionals to
              improve service delivery and efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F8F8] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center w-full max-w-sm mx-auto">
            <img
              src={Machine}
              alt="Unified Patient Health Record"
              className="rounded-lg mb-4 w-full h-40 sm:h-52 object-cover"
            />
            <h3 className="font-medium text-lg sm:text-xl md:text-2xl mb-3 leading-snug text-center">
              Unified Patient Health Record
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
              A centralized health record accessible across hospitals for better
              diagnosis, treatment, and patient outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F8F8] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center w-full max-w-sm mx-auto md:col-span-2 lg:col-span-1">
            <img
              src={Macbook}
              alt="Appointment & Scheduling"
              className="rounded-lg mb-4 w-full h-40 sm:h-52 object-cover"
            />
            <h3 className="font-medium text-lg sm:text-xl md:text-2xl mb-3 leading-snug text-center">
              Appointment & Scheduling
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
              Patients can easily book and manage appointments with healthcare
              providers, saving time and improving access.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-12 py-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg">
          Your questions matter. Reach out, we're here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <p className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <MapPin className="w-5 h-5 text-red-500" />
              Address: [Insert Office Address]
            </p>
            <p className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <Phone className="w-5 h-5 text-red-500" />
              +234 806 123 4567
            </p>
            <p className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <Mail className="w-5 h-5 text-red-500" />
              support@healthid.ng
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Working Hours: Monday – Friday, 9:00 AM – 6:00 PM
            </p>
          </div>

          {/* Contact Image */}
          <div className="flex justify-center order-first md:order-last">
            <img
              src={Grace}
              alt="Contact"
              className="rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
