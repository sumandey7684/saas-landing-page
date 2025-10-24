"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import XIcon from "@/assets/x.svg"; // Assuming you have an X icon SVG

import { useState } from "react";
import { div } from "framer-motion/client";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40}></Image>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <MenuIcon className="h-6 w-6 text-black/65" />
            </button>
            <nav className="hidden md:flex gap-4 text-black/65 items-center justify-between">
              <a
                href="#about"
                className="transition duration-300 ease-in-out hover:text-black "
              >
                About
              </a>
              <a
                href="#features"
                className="transition duration-300 ease-in-out hover:text-black "
              >
                Features
              </a>
              <a
                href="#customers"
                className="transition duration-300 ease-in-out hover:text-black "
              >
                Customers
              </a>
              <a
                href="#pricing"
                className="transition duration-300 ease-in-out hover:text-black "
              >
                Pricing
              </a>
              <a
                href="#signup"
                className="transition duration-300 ease-in-out hover:text-black "
              >
                Help
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-white">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="relative">
          <div className="absolute right-0 top-[-65px] bg-white z-50 flex flex-col items-center py-8 px-4 md:hidden animate-fadeIn">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <XIcon className="h-6 w-6 text-black/65" />
            </button>

            <nav className="flex flex-col gap-6 text-black text-lg mt-10 items-center">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="transition duration-300 ease-in-out hover:text-gray-700"
              >
                About
              </a>
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="transition duration-300 ease-in-out hover:text-gray-700"
              >
                Features
              </a>
              <a
                href="#customers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="transition duration-300 ease-in-out hover:text-gray-700"
              >
                Customers
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="transition duration-300 ease-in-out hover:text-gray-700"
              >
                Pricing
              </a>
              <a
                href="#signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="transition duration-300 ease-in-out hover:text-gray-700"
              >
                Help
              </a>
              <button
                className="bg-black text-white px-6 py-3 rounded-lg font-medium tracking-tight transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-white mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get for free
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
