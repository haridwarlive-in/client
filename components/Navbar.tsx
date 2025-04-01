"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const exploreMenu = [
  {
    href: "/explore/history-of-haridwar",
    title: "History of Haridwar"
  },
  {
    href: "/explore/weather-of-haridwar",
    title: "Weather of Haridwar"
  },
  {
    href: "/explore/how-to-reach",
    title: "How to reach Haridwar"
  },
  {
    href: "/explore/haridwar-ganga-aarti",
    title: "Haridwar Ganga Aarti"
  },
  {
    href: "/explore/kawad-yatra",
    title: "Kawad Yatra"
  },
  {
    href: "/explore/city-map",
    title: "City Map"
  }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 w-full z-50 ${
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
        <div
          className={`container mx-auto px-4 py-0 md:my-1 flex justify-between md:justify-center items-center ${
            isMobileMenuOpen ? "bg-[#343333]" : "transparent"
          }`}
        >
          <div className={`md:hidden ${isScrolled ? "hidden" : "block"}`}></div>

          <div
            className={`text-md md:hidden font-thin text-yellow-300 ${
              isScrolled ? "block" : "hidden"
            }`}
          >
            haridwarlive.in
          </div>

          {/* Desktop Menu */}
          <div className="hidden bg-[#343333] px-4 py-2 rounded-full md:flex flex-row gap-6 justify-center">
            {[
              "/home",
              "/temples",
              "/hotels",
              "/news",
              "/contact",
              "/about",
              "/blog"
            ].map((path, index) => (
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

            {/* Explore */}
            <div className="relative max-md:hidden">
              <button
                onClick={() => setIsExploreMenuOpen((prev) => !prev)}
                className="text-white flex items-center gap-1 hover:underline"
              >
                Explore <ChevronDown className="w-4 h-4" />
              </button>
              {isExploreMenuOpen && (
                <div className="absolute left-5 right-5 w-72 mt-4 bg-yellow-300 text-black py-2 shadow-lg rounded-md">
                  {exploreMenu.map(
                    (item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-yellow-400"
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
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
                <Menu
                  className={`h-6 w-6 ${
                    isScrolled
                      ? "text-yellow-300"
                      : pathname === ""
                      ? "text-white"
                      : "text-[#343333]"
                  }`}
                />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#343333] pb-6">
            <ul className="flex flex-col items-center gap-4 py-4">
              {["/home", "/temples", "/hotels", "/news", "/contact", "/blog"].map(
                (path, index) => (
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
                )
              )}

              <li>
                {/* Explore */}
                <div className="relative w-screen md:hidden">
                  <button
                    onClick={() => setIsExploreMenuOpen((prev) => !prev)}
                    className="mx-auto text-white text-lg flex items-center gap-1 hover:underline"
                  >
                    Explore <ChevronDown className="w-4 h-4" />
                  </button>
                  {isExploreMenuOpen && (
                    <div className="absolute left-5 right-5 mt-4 bg-yellow-400 text-black py-2 shadow-lg rounded-md">
                      {exploreMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={()=>{
                            setIsExploreMenuOpen(false)
                            setIsMobileMenuOpen(false)
                          }}
                          className="block px-4 py-2 hover:bg-gray-700"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
