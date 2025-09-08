import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from '../assets/images/logo.png'
export default function HealthcareWebsite() {
  return (
    <div className="bg-white  w-full flex flex-col font-sans h-[254px]">
      {/* Navbar */}
      <header className="w-full py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="font-bold text-blue-700 text-lg">Med Vault</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex  text-gray-700 font-medium gap-6">
          <a href="#home" className="hover:text-blue-700 transition text-blue-700">
            Home
          </a>
          <a href="#about" className="hover:text-blue-700 transition">
            About
          </a>
          <a href="#services" className="hover:text-blue-700 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-700 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content Placeholder (Services, About, etc.) */}
      <main className="flex-1">
        {/* Existing sections will be placed here */}
      </main>

      {/* Footer */}
      <footer className="w-full  py-4 text-center text-gray-600 text-sm">
        <p className="flex items-center justify-center gap-2">
          <span className="text-red-500">📌</span> Copyright © 2025 HealthID. All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
}


