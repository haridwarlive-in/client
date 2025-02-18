"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  let pathname = usePathname();
  pathname = pathname.split("/")[1];

  // Detect scroll to toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled ? "bg-[#343333] shadow-lg backdrop-blur" : "bg-transparent"
      } transition-all duration-300`}
    >
      {/* Title Section */}
      <div
        className={`${
          isScrolled ? "hidden" : "block"
        } bg-black py-0 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-2 text-center">
          <Link href="/" className="text-2xl font-thin text-yellow-300">
            haridwarlive.in
          </Link>
        </div>
      </div>

      {/* Links Section */}
      <nav
        className={`${
          isScrolled ? "bg-[#343333]" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className={`container mx-auto px-4 py-0 my-1 flex justify-between md:justify-center items-center ${
          isMobileMenuOpen ? 'bg-[#343333]' : 'transparent'
        }`}>
          <div className={`md:hidden ${
            isScrolled ? 'hidden' : 'block'
          }`}></div>

          <div className={`text-md md:hidden font-thin text-yellow-300 ${
            isScrolled ? 'block' : 'hidden'
          }`}>haridwarlive.in</div>

          {/* Desktop Menu */}
          <div className="hidden bg-[#343333] px-4 py-2 rounded-full md:flex flex-row gap-6 justify-center">
            {["/home", "/temples", "/hotels", "/news", "/contact", "/about"].map((path, index) => (
              <Link
                key={index}
                href={path}
                className={`transition-all duration-300 hover:underline ${
                  "/" + pathname === path
                    ? "font-bold text-yellow-300"
                    : "text-white"
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className={`h-6 w-6 ${
                  isScrolled? 'text-yellow-300' : pathname==="" ? 'text-white':'text-[#343333]'
                }`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#343333] pb-6">
            <ul className="flex flex-col items-center gap-4 py-4">
              {["/", "/temples", "/hotels", "/news", "/contact"].map((path, index) => (
                <li key={index}>
                  <Link
                    href={path}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                    className={`block text-lg transition-all duration-300 hover:underline ${
                      "/" + pathname === path
                        ? "text-yellow-500 font-bold"
                        : "text-white"
                    }`}
                  >
                    {path === "/"
                      ? "Home"
                      : path.charAt(1).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
