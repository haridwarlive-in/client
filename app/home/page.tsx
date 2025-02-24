"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, ChevronRight, ArrowRight, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { Hotel, News, Temple } from "@/types";


export default function Home() {

  const [news, setNews] = useState<News[]>([]);
  const fetchNews = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/news?limit=8`);
      const data = await res.data.news;
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const [temples, setTemples] = useState<Temple[]>([]);
  const fetchTemples = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/temples?limit=6`);
      const data = res.data;
      setTemples(data);
    } catch (error) {
      console.log(error);
    }
  }

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const fetchHotels = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/hotels?limit=6`);
      const data = res.data;
      setHotels(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    fetchNews();
    fetchTemples();
    fetchHotels()
  }, [])


  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(()=>{
    if (window.innerWidth < 768) {
      setMobileScreen(true);
    }
  }, [])
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1653392171376-63cb323fb31e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Har Ki Pauri Ghat"
            className="w-full h-full object-cover"
            height={1080}
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative px-6 md:px-20 text-left h-full flex flex-col items-start justify-center">
          <h1 className="text-3xl md:text-6xl font-extrabold text-yellow-300 mb-4 md:mb-6">
            Discover Haridwar
            <br />
            <span className="text-yellow-300 font-extralight block text-2xl md:text-4xl">
              The Gateway to Spirituality
            </span>
          </h1>
          <p className="text-sm md:text-lg border-l-white border-l-4 md:border-l-8 px-4 md:px-8 text-white/90 max-w-full md:max-w-2xl mb-6 md:mb-8">
            Explore temples, stay updated with the latest news, find hotels, and
            plan your journey to the sacred city of Haridwar.
          </p>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Link
              href="#explore"
              className="group flex flex-row gap-2 justify-center items-center px-4 md:px-6 py-3 border-none w-full md:w-72 bg-yellow-300 text-[#343333] cursor-pointer text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-300 hover:text-[#343333] transition-all duration-300"
            >
              <div className="text-sm md:text-lg font-medium">
                Explore Haridwar
              </div>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-4 transition-all duration-300" />
            </Link>
            <Link
              href="/news"
              className="group flex flex-row gap-2 justify-center items-center px-4 md:px-6 py-3 border-none w-full md:w-72 bg-yellow-300 text-[#343333] cursor-pointer text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-300 hover:text-[#343333] transition-all duration-300"
            >
              <div className="text-sm md:text-lg font-medium">
                View Latest News
              </div>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-4 transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group flex flex-row gap-2 justify-center items-center px-4 md:px-6 py-3 border-none w-full md:w-72 bg-yellow-300 text-[#343333] cursor-pointer text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-yellow-300 hover:text-[#343333] transition-all duration-300"
            >
              <div className="text-sm md:text-lg font-medium">Reach out to us</div>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-4 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>


      {/* About Section */}
      <section id="explore" className="py-16 text-[#343333]">
        <div className="container mx-auto px-4">
          <h2 className="border-l-4 border-yellow-400 py-4 text-4xl max-md:text-2xl font-normal text-left mb-4 px-8">About <span className="font-bold">Haridwar</span></h2>
          <div className="grid md:grid-cols-2 md:gap-12 items-center bg-yellow-300 rounded-3xl">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Temple in Haridwar"
                className="md:rounded-l-3xl max-md:rounded-t-3xl"
                width={1470}
                height={980}
              />
            </div>
            <div className="max-md:p-4">
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
      <section className="md:py-16 pb-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-md:mb-14 border-l-4 border-yellow-400 py-4 flex flex-col md:flex-row max-md:gap-2 justify-between md:items-center px-8 mb-4">
            <h2 className="text-4xl max-md:text-2xl text-left text-[#343333] font-normal">
              Famous Temples <br></br>in <span className="font-bold">Haridwar</span>
            </h2>
            <div className="">
              <Button
                asChild
                className="text-[#343333] bg-yellow-300 hover:bg-yellow-300 rounded-lg px-10 py-6 group font-normal text-lg"
              >
                <Link href="/temples">
                  View More
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:ml-8 transition-all duration-500" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* ShadCN Carousel */}
          <Carousel 
          orientation={mobileScreen ? "vertical" : "horizontal"}
          opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent className="flex max-md:h-[510px]"> {/* Ensure horizontal scroll with space between items */}
              {
              temples.map((temple, index) => (
                <CarouselItem key={index} className="basis-1/3"> {/* Each item takes up 33% width */}
                  <Card className="hover:shadow-lg transition-shadow rounded-lg">
                    <div className="relative w-full h-48">
                      <Image
                        src={temple.image}
                        alt={temple.title}
                        layout="fill"
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-2 text-center rounded-b-lg bg-[#343333] text-white">
                      <h3 className="text-lg font-light">{temple.title}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#343333] text-white" />
            <CarouselNext className="bg-[#343333] text-white" />
          </Carousel>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-yellow-300 w-full text-[#343333]">
        <div className="container mx-auto w-full px-8 max-md:px-4">
          <div className="px-8 py-4 border-l-4 border-l-[#343333] md:flex md:flex-row flex-col justify-between md:items-center mb-4">
            <h2 className="text-4xl max-md:text-2xl font-normal text-left max-md:mb-2 mb-0">Latest <span className="font-bold">Haridwar</span> News <br></br>on your device</h2>
            <div className="text-left md:mb-8">
              <Button
                asChild
                className="bg-[#343333] text-yellow-500 max-md:text-md rounded-lg px-10 py-6 group font-normal text-lg hover:bg-[#343333] hover:text-yellow-500 transition-all duration-300"
              >
                <Link href="/news">
                  View More
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:ml-8 transition-all duration-500" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Infinite Scroll Container */}
          <div className="relative overflow-scroll">
            <div className="flex animate-scroll gap-6 items-center">
              {news.map((news, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 bg-[#343333] w-80 cursor-pointer transition-all duration-200 border-none bg-white rounded-lg"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={news.image as string}
                      alt={news.title}
                      layout="fill"
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="bg-[#343333] rounded-b-lg text-white p-4">
                    <p className="text-md mb-4">{news.title}</p>
                    <Button
                      variant="outline"
                      asChild
                      className="bg-yellow-300 text-[#343333] border-none hover:bg-yellow-300 hover:text-[#343333] group transition-all duration-300"
                    >
                      <Link href={`/news/${news._id}`}>
                        Read More
                        <ChevronRight className="group-hover:ml-4 transition-all duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {/* Duplicate items for infinite loop */}
              {news.map((news, index) => (
                <Card
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 w-80 hover:shadow-xl border-none transition-shadow bg-white rounded-lg"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={news.image as string}
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
                      className="bg-yellow-300 text-[#343333] border-none hover:bg-yellow-300 hover:text-[#343333] group transition-all duration-300"
                    >
                      <Link href={`/news/${news._id}`}>
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

      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll ${mobileScreen? '10s':'30s'} linear infinite;
        }
      `}</style>



      {/* Featured Hotels */}
      <section className="py-16 bg-gray-100 text-[#343333] w-full">
      <div className="container mx-auto px-4">
          <div className="border-l-4 border-yellow-400 py-4 flex md:flex-row flex-col justify-between md:items-center px-8 mb-4">
            <h2 className="text-2xl md:text-4xl text-left text-[#343333] font-normal max-md:mb-2">
              Where to Stay <br></br>in <span className="font-bold">Haridwar</span>
            </h2>
            <div className="text-left">
              <Button
                asChild
                className="text-[#343333] bg-yellow-300 hover:bg-yellow-300 rounded-lg px-10 py-6 group font-normal text-lg transition-all duration-300"
              >
                <Link href="/hotels">
                  View More
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:ml-8 transition-all duration-500" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Full-Width Horizontal Scroll Container */}
          <div className="relative overflow-scroll px-8">
            <div
              className="flex gap-6 animate-scroll"            
              >
              {
               hotels.map((hotel, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-80 hover:shadow-2xl border-none transition-shadow bg-white rounded-lg group"
                >
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={hotel.image}
                      alt={hotel.title}
                      layout="fill"
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="bg-[#343333] h-full rounded-b-lg text-white p-4">
                    <h3 className="text-lg font-semibold">{hotel.title}</h3>
                    <Button
                      variant="outline"
                      asChild
                      className="bg-yellow-300 mt-2 text-[#343333] border-none group hover:bg-yellow-300 hover:text-[#343333] transition-all duration-300"
                    >
                      <Link href={`/hotels/${hotel._id}`}>
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
      <section className="py-12  w-full text-[#343333]">
        <div className="container mx-auto text-center px-8">
          {/* Section Title */}
          <div className="flex flex-row items-center gap-8">
            <h2 className="text-4xl font-normal mb-2">Get in Touch</h2>
            {/* Contact Button */}
            <div className="flex justify-center mb-4">
              <Button
                asChild
                className="text-[#343333] bg-yellow-300 hover:text-yellow-500 hover:bg-[#343333] group transition-all duration-300 p-8 text-xl font-normal rounded-full"
              >
                <Link href="/contact">Contact Us <ArrowRight className="ml-2 group-hover:ml-8 transition-all duration-300"/></Link>
              </Button>
            </div>
          </div>
          
          <div className="text-left mb-2 mt-6 font-thin">Connect with us today and lets create unforgettable experiences together!</div>
          <div className="w-full py-0 flex flex-col md:gap-12 gap-6 justify-between md:space-x-8">
          {/* Contact Details */}
            <div className="flex flex-col justify-start max-md:gap2 items-left gap-2">
              <div className="flex flex-row gap-4 bg-gray-200 text-[#343333] p-4 rounded-lg">
                <Phone className="h-6 w-6 text-[#343333] transition-transform duration-300 hover:scale-125" />
                <p className="text-lg font-normal">+91 1234567890</p>
              </div>
              <div className="flex flex-row gap-4 bg-gray-200 text-[#343333] p-4 rounded-lg">
                <MapPin className="h-6 w-6 text-[#343333] transition-transform duration-300 hover:scale-125" />
                <p className="text-lg font-normal">Haridwar, Uttarakhand, India</p>
              </div>
              <div className="flex flex-row gap-4 bg-gray-200 text-[#343333] p-4 rounded-lg">
                <Mail className="h-6 w-6 text-[#343333] transition-transform duration-300 hover:scale-125" />
                <p className="text-lg font-normal">info@example.com</p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex justify-center space-x-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-8 w-8 text-gray-800 hover:scale-105 transition-all duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-8 w-8 text-gray-800 hover:scale-105 transition-all duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-8 w-8 text-gray-800 hover:scale-105 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

</main>
  );
}
