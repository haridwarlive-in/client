"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  let pathname = usePathname();
  pathname = pathname.split('/')[1];

  // Detect scroll to add background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled ? 'bg-black shadow-sm backdrop-blur-2xl' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-2xl font-bold text-yellow-500`}>
            haridwarlive.in
          </Link>
          <div className="hidden md:flex space-x-6 text-white">
            {['/', '/hotels', '/news', '/contact'].map((path, index) => (
              <Link
                key={index}
                href={path}
                className={`transition-colors hover:text-yellow-500 ${
                  '/'+pathname === path ? 'text-yellow-500 font-bold' : ''
                } `}
              >
                {path === '/'
                  ? 'Home'
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
