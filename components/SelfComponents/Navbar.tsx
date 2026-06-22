"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ShoppingCart, MessageCircleMore } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Cakes", href: "#cake" },
  { label: "Categories", href: "#category" },
  { label: "About Us", href: "#whyUs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/Images/SSDBakers.png" alt="No Image" className="w-25 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium transition hover:text-[#D86B2B]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">

            <div className="flex items-center gap-2 border border-orange-200 rounded-full px-4 py-2">
              <Phone size={16} className="text-[#D86B2B]" />
              <span className="text-sm font-medium">
                +91 70076 56589
              </span>
            </div>

            <a
              href={`https://wa.me/917007656589?text=${encodeURIComponent(
                "Hi SSD Bakers, I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="bg-[#D86B2B] hover:bg-[#bf5e25] text-white rounded-full px-6 py-3 flex items-center gap-2 font-medium transition">
                ORDER NOW
                <MessageCircleMore size={20} />
              </button>
            </a>

          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="cursor-pointer" /> : <Menu size={28} className="cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="bg-white border-t px-4 py-4">

          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-neutral-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex items-center gap-2">
            <Phone size={16} className="text-[#D86B2B]" />
            <span>+91 70076 56589</span>
          </div>

          <a
            href={`https://wa.me/917007656589?text=${encodeURIComponent(
              "Hi SSD Bakers, I would like to place an order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >

            <button className="w-full mt-4 bg-[#D86B2B] text-white rounded-full py-3 flex items-center justify-center gap-2 cursor-pointer">
              ORDER NOW
              <MessageCircleMore size={20} />
            </button>
          </a>

        </div>
      </div>
    </header>
  );
}