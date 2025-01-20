"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

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

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled ? "bg-black shadow-lg backdrop-blur" : "bg-transparent"
      } transition-all duration-300`}
    >
      {/* Title Section */}
      <div
        className={`${
          isScrolled ? "hidden" : "block"
        } bg-black py-1 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-2 text-center">
          <Link href="/" className="text-2xl font-thin text-yellow-300">
            haridwarlive.in
          </Link>
        </div>
      </div>

      {/* Links Section */}
      <nav className={`${
        isScrolled ? "bg-[#343333]" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-2">
            <div className="hidden transition-all duration-300 md:flex flex-row gap-6 justify-center">
              {["/", "/temples", "/hotels", "/news", "/contact"].map((path, index) => (
                <Link
                  key={index}
                  href={path}
                  className={`transition-all duration-300 hover:underline ${
                    "/" + pathname === "/"
                      ? isScrolled ? 
                        "/" + pathname === path
                          ? "text-yellow-500 font-bold"
                          : "text-white"
                        : "/" + pathname === path
                          ? "text-yellow-500 font-bold"
                          : "text-white"
                        
                      : isScrolled ? 
                        "/" + pathname === path
                          ? "text-yellow-500 font-bold"
                          : "text-white"
                        : "/" + pathname === path
                          ? "text-yellow-500 font-bold"
                          : "text-black"
                  }`}
                >
                  {path === "/"
                    ? "Home"
                    : path.charAt(1).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
