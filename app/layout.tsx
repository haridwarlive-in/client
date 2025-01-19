import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Link from "next/link";
import { Facebook, Instagram, Twitter } from 'lucide-react';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Haridwar Tourism - Gateway to Spirituality',
  description: 'Discover the spiritual city of Haridwar - temples, ghats, hotels, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Navbar/>
        <main>{children}</main>
        <footer className="bg-[#343333] text-yellow-500 py-12">
          <div className="container mx-auto px-4">
            {/* Footer Content */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">haridwarlive.in</h3>
                <p className="text-yellow-400">
                  Discover the spiritual essence of India in Haridwar, where the holy Ganges descends from the Himalayas.
                </p>
              </div>

              {/* Quick Links Section */}
              <div>
                <h3 className="text-xl text-center font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-center text-yellow-400">
                  <li>
                    <Link href="/hotels" className="hover:text-yellow-500 transition-colors">
                      Hotels
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="hover:text-yellow-500 transition-colors">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-yellow-500 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect With Us Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-yellow-400">
                  Email: <a href="mailto:info@haridwar-tourism.com" className="hover:text-yellow-500">info@haridwar-tourism.com</a>
                  <br />
                  Phone: <a href="tel:+911234567890" className="hover:text-yellow-500">+91 1234567890</a>
                </p>
                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-yellow-400 mt-8 pt-8 text-center text-yellow-400">
              <p>&copy; {new Date().getFullYear()} haridwarlive.in. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}