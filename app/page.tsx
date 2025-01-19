"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Hotel, Newspaper, Phone, ChevronRight, ArrowRight, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Har Ki Pauri Ghat"
            className="w-full h-full object-cover"
            height={1080}
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to Haridwar
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Where spirituality meets the sacred Ganges
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 rounded-full cursor-pointer text-[#343333] shadow-lg text-xl font-bold hover:scale-110 hover:bg-yellow-500 transition-all duration-300"
            >
              <Link href="#about">Explore</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 text-[#343333]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-normal text-left mb-4 px-8">About Haridwar</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center bg-yellow-400 rounded-3xl">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Temple in Haridwar"
                className="rounded-l-3xl"
                width={1470}
                height={980}
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                {`Haridwar, literally meaning "Gateway to God," is one of the
                seven holiest places for Hindus. Located in Uttarakhand where
                the Ganges emerges from the Himalayas, this ancient city
                attracts millions of pilgrims each year who come to take a dip
                in the holy waters of the Ganges at Har Ki Pauri ghat.`}
              </p>
              <Button
                asChild
                className="mt-6 bg-[#343333] text-yellow-500 group cursor-pointer"
              >
                <Link href="/about">
                  Learn More <ChevronRight className="ml-2 h-4 w-4 group-hover:ml-8 transition-all duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Temples Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-row justify-between items-center px-8 mb-4">
            <h2 className="text-4xl text-left text-[#343333] font-normal">
              Famous Temples in Haridwar
            </h2>
            <div className="">
              <Button
                asChild
                className="text-[#343333] bg-yellow-400 hover:bg-yellow-400 rounded-lg px-10 py-6 group font-normal text-lg"
              >
                <Link href="/temples">
                  View More
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:ml-8 transition-all duration-500" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* ShadCN Carousel */}
          <Carousel opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent className="flex space-x-4"> {/* Ensure horizontal scroll with space between items */}
              {[
                {
                  name: "Mansa Devi Temple",
                  image: "https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=800&auto=format&fit=crop",
                },
                {
                  name: "Chandi Devi Temple",
                  image: "https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=800&auto=format&fit=crop",
                },
                {
                  name: "Har Ki Pauri",
                  image: "https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=800&auto=format&fit=crop",
                },
                {
                  name: "Maya Devi Temple",
                  image: "https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=800&auto=format&fit=crop",
                },
                {
                  name: "Daksha Mahadev Temple",
                  image: "https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=800&auto=format&fit=crop",
                },
                {
                  name: "Bilkeshwar Mahadev Temple",
                  image: "https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=800&auto=format&fit=crop",
                },
              ].map((temple, index) => (
                <CarouselItem key={index} className="basis-1/3"> {/* Each item takes up 33% width */}
                  <Card className="hover:shadow-lg transition-shadow rounded-lg">
                    <div className="relative w-full h-48">
                      <Image
                        src={temple.image}
                        alt={temple.name}
                        layout="fill"
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-2 text-center rounded-b-lg bg-black text-white">
                      <h3 className="text-lg font-light">{temple.name}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-yellow-400 w-full text-[#343333]">
        <div className="container mx-auto w-full px-8">
          <h2 className="text-4xl font-normal text-left mb-4">Haridwar News</h2>
          <div className="text-left mb-8">
            <Button
              asChild
              className="bg-[#343333] text-yellow-500 rounded-lg px-10 py-6 group font-normal text-lg hover:bg-[#343333] hover:text-yellow-500 transition-all duration-300"
            >
              <Link href="/temples">
                View Latest Updates
                <ArrowRight className="ml-2 h-6 w-6 group-hover:ml-8 transition-all duration-500" />
              </Link>
            </Button>
          </div>

          {/* Full-Width Horizontal Scroll Container */}
          <div className="relative overflow-x-scroll py-4">
            <div className="flex gap-6 items-center">
              {[
                {
                  title: "Haridwar Ganga Aarti attracts record visitors.",
                  image:
                    "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "New eco-tourism initiatives announced.",
                  image:
                    "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Upcoming festivals: Plan your trip now!",
                  image:
                    "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Preserving Haridwar’s sacred ghats.",
                  image:
                    "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Har Ki Pauri’s historic significance explained.",
                  image:
                    "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "New cable car service inaugurated.",
                  image:
                    "https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((news, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 hover:shadow-xl border-none transition-shadow bg-white rounded-lg"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={news.image}
                      alt={news.title}
                      layout="fill"
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="bg-[#343333] rounded-b-lg text-white p-4">
                    <p className="text-lg mb-4">{news.title}</p>
                    <Button
                      variant="outline"
                      asChild
                      className="bg-yellow-500 text-[#343333] border-none hover:bg-yellow-500 hover:text-[#343333] group transition-all duration-300"
                    >
                      <Link href="/news">
                        Read More
                        <ChevronRight className="group-hover:ml-4 transition-all duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Featured Hotels */}
      <section className="py-12 bg-gray-100 text-[#343434] w-full">
        <div className="container mx-auto w-full px-8">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="text-4xl font-normal text-left">Featured Hotels</h2>
            <div className="text-left">
              <Button
                asChild
                className="text-[#343333] bg-yellow-500 hover:bg-yellow-600 rounded-lg px-10 py-6 group font-normal text-lg transition-all duration-300"
              >
                <Link href="/temples">
                  More Staying Options
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:ml-4 transition-all duration-500" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Full-Width Horizontal Scroll Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 animate-scroll"
              style={{
                animation: "scroll 25s linear infinite",
                willChange: "transform",
              }}
            >
              {[
                {
                  name: "Hotel Ganga View",
                  description: "Experience riverside serenity with top-notch amenities.",
                  image:
                    "https://images.unsplash.com/photo-1679310289994-9033a196b136?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Spiritual Inn",
                  description: "Modern comforts near Har Ki Pauri for pilgrims.",
                  image:
                    "https://images.unsplash.com/photo-1679310289994-9033a196b136?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Eco Stay Haridwar",
                  description: "Embrace nature with eco-friendly accommodations.",
                  image:
                    "https://images.unsplash.com/photo-1679310289994-9033a196b136?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Luxury Suites",
                  description: "Relax in premium rooms with breathtaking views.",
                  image:
                    "https://images.unsplash.com/photo-1679310289994-9033a196b136?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Budget Bliss",
                  description: "Affordable stays with convenient locations.",
                  image:
                    "https://images.unsplash.com/photo-1679310289994-9033a196b136?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  name: "Heritage Haven",
                  description: "Stay amidst Haridwar’s rich cultural heritage.",
                  image:
                    "https://images.unsplash.com/photo-1679310289994-9033a196b136?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
              ].map((hotel, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 hover:shadow-2xl border-none transition-shadow bg-white rounded-lg group"
                >
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      layout="fill"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="bg-[#343333] rounded-b-lg text-white p-4">
                    <h3 className="text-lg font-semibold">{hotel.name}</h3>
                    <p className="text-sm mb-4">{hotel.description}</p>
                    <Button
                      variant="outline"
                      asChild
                      className="bg-yellow-500 text-[#343333] border-none group hover:bg-yellow-500 hover:text-[#343333] transition-all duration-300"
                    >
                      <Link href="/hotels">
                        View {" "}
                        <ChevronRight className="group-hover:ml-4 transition-all duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>


{/* Contact Section */}
<section className="py-12 bg-yellow-400 w-full text-[#343333]">
  <div className="container mx-auto text-center px-8">
    {/* Section Title */}
    <div className="flex flex-row gap-8">
      <h2 className="text-4xl font-normal mb-2">Get in Touch</h2>
      {/* Contact Button */}
      <div className="flex justify-center mb-4">
        <Button
          asChild
          className="bg-[#343333] text-yellow-500 hover:text-yellow-500 hover:bg-[#343333] group transition-all duration-300 px-8 py-4 text-lg font-normal rounded-full"
        >
          <Link href="/contact">Contact Us <ArrowRight className="ml-2 group-hover:ml-8 transition-all duration-300"/></Link>
        </Button>
      </div>
    </div>
    
    <div className="text-left mb-2 mt-6 font-semibold">Connect with us today and let's create unforgettable experiences together!</div>
    <div className="w-full py-0 flex flex-col md:flex-row justify-between items-center md:space-x-8">
    {/* Contact Details */}
      <div className="flex flex-col md:flex-row justify-start items-center md:space-x-2">
        <div className="text-center flex flex-row gap-4 mb-8 md:mb-0 text-yellow-500 bg-[#343333] p-4 rounded-lg">
          <Phone className="h-6 w-6 text-yellow-500 mx-auto transition-transform duration-300 hover:scale-125" />
          <p className="text-lg font-normal">+91 1234567890</p>
        </div>
        <div className="text-center mb-8 md:mb-0 flex flex-row gap-4 text-yellow-500 bg-[#343333] p-4 rounded-lg">
          <MapPin className="h-6 w-6 text-yellow-500 mx-auto transition-transform duration-300 hover:scale-125" />
          <p className="text-lg font-normal">Haridwar, Uttarakhand, India</p>
        </div>
        <div className="text-center mb-8 md:mb-0 flex flex-row gap-4 text-yellow-500 bg-[#343333] p-4 rounded-lg">
          <Mail className="h-6 w-6 text-yellow-500 mx-auto transition-transform duration-300 hover:scale-125" />
          <p className="text-lg font-normal">info@example.com</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center space-x-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-8 w-8 text-gray-800 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-8 w-8 text-gray-800 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-8 w-8 text-gray-800 hover:text-white transition-all duration-300" />
        </a>
      </div>
    </div>
  </div>
</section>

</main>
  );
}
