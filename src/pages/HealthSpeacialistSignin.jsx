// // src/pages/HealthSpecialistLogin.jsx
// import React, { useState } from "react";
// import Specilaist from "../../src/assets/images/specialist.png"; // your image

// const HealthSpecialist = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Only one slide for now
//   const slides = [Specilaist];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <div className="flex h-screen w-full bg-white">
//       {/* Left Section (Form) */}
//       <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 lg:px-24">
//         <div className="max-w-md w-full">
//           {/* Title */}
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
//             Health Specialist Log In
//           </h2>
//           <p className="text-gray-500 mb-8">
//             Use your information to sign into your account.
//           </p>

//           {/* Form */}
//           <form className="space-y-5">
//             {/* Health Specialist Type */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Health Specialist Type
//               </label>
//               <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none">
//                 <option>Doctor</option>
//                 <option>Nurse</option>
//                 <option>Pharmacist</option>
//               </select>
//             </div>

//             {/* Hospital */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 passkey
//               </label>
//               <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none">
//                 <option>Jos University Teaching Hospital (JUTH)</option>
//                 <option>Abuja National Hospital</option>
//                 <option>Lagos State Teaching Hospital</option>
//               </select>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 defaultValue="josuniversityhospital@gmail.com"
//                 className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
//               />
//             </div>

//             {/* License Number */}
            

//             {/* Password */}
            

//             {/* Button */}
//             <button
//               type="button"
//               onClick={nextSlide}
//               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg shadow-md transition font-medium"
//             >
//               Log In
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Section (Slider) */}
//       <div className="hidden md:flex w-1/2 relative items-center justify-center">
//         <img
//           src={slides[currentSlide]}
//           alt="Specialist"
//           className="h-full w-full object-cover transition-all duration-500"
//         />

//         {/* Dots */}
//         <div className="absolute bottom-4 flex space-x-2">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`w-3 h-3 rounded-full ${
//                 currentSlide === idx ? "bg-indigo-600" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthSpecialist;
// src/pages/HealthSpecialistLogin.jsx
import React, { useState } from "react";
import Specilaist from "../../src/assets/images/specialist.png"; // your image

const HealthSpecialist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Only one slide for now
  const slides = [Specilaist];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Section (Slider) → moved here */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center">
        <img
          src={slides[currentSlide]}
          alt="Specialist"
          className="h-full w-full object-cover transition-all duration-500"
        />

        {/* Dots */}
        <div className="absolute bottom-4 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Section (Form) → moved here */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-md w-full">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            Health Specialist sign In
          </h2>
          <p className="text-gray-500 mb-8">
            Use your information to sign into your account.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Health Specialist Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Health Specialist Type
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none">
                <option>Doctor</option>
                <option>Nurse</option>
                <option>Pharmacist</option>
              </select>
            </div>

            {/* Hospital */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                passkey
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none">
                <option>Jos University Teaching Hospital (JUTH)</option>
                <option>Abuja National Hospital</option>
                <option>Lagos State Teaching Hospital</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="josuniversityhospital@gmail.com"
                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg shadow-md transition font-medium"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HealthSpecialist;
