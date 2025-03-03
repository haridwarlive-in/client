import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Script from 'next/script';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "haridwarlivein - City's online platform",
  description: 'Discover the spiritual city of Haridwar - temples, news, hotels, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RRTTR7ELD2"></Script>
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RRTTR7ELD2');
          `}
          
        </Script>
      </head>
      <body className={poppins.className}>
        <Navbar/>
        <main>{children}</main>
        <footer className="relative bg-[#343333] text-yellow-300 pt-8 pb-16">
          <div className="container mx-auto px-4">
            {/* Footer Content */}
            <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
              {/* About Section */}
              <div className='col-span-2'>
                <h3 className="text-xl font-bold mb-4">haridwarlive.in</h3>
                <p className="text-yellow-300">
                  Discover the spiritual essence of India in Haridwar, where the holy Ganges descends from the Himalayas.
                </p>
                
              </div>

              {/* Quick Links Section */}
              <div>
                <h3 className="text-xl md:text-center font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-left md:mx-auto w-fit text-yellow-300">
                  <li>
                    <Link href="/hotels" className="hover:text-yellow-300 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/hotels" className="hover:text-yellow-300 transition-colors">
                      Hotels
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="hover:text-yellow-300 transition-colors">
                      Latest Updates
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="hover:text-yellow-300 transition-colors">
                      Temples
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-yellow-300 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect With Us Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-yellow-300">
                  Email: <a href="mailto:haridwarlive06@gmail.com" className="hover:text-yellow-300">haridwarlive06@gmail.com</a>
                  <br />
                  Phone: <a href="tel:+916395438784" className="hover:text-yellow-300">+91 6395438784</a>
                </p>
                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://www.youtube.com/shorts/-CU_-yLReHo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href="https://instagram.com/haridwarlive.in" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
          </div>

          <div className="w-full mx-auto py-2 absolute bottom-0 left-0 right-0 bg-black px-4 text-thin text-sm text-center text-yellow-300">
            <p>&copy; {new Date().getFullYear()} haridwarlive.in. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}