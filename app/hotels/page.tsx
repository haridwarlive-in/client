"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe2, Link } from "lucide-react";
import Image from "next/image";
import { Hotel } from "@/types";
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function Hotels() {  

  const router = useRouter();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/hotels`);
        setHotels(data);
      } catch (error) {
        console.error('Failed to fetch hotels', error);
      }
    };
    fetchHotels();
  },
  []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(hotels.length / itemsPerPage);

  const paginatedHotels = hotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl max-md:text-3xl border-l-yellow-300 py-6 px-8 border-l-4 mb-8">
          Places to Stay in <span className="font-bold">Haridwar</span>
        </h1>
        <div className="space-y-2">
          {paginatedHotels.map((hotel, index) => (
            <Card
              key={index}
              className="flex flex-col md:flex-row max-md:pb-4 md:items-start bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <div className="w-fit h-full items-center justify-center">
              <Image
                src={hotel.image}
                alt={hotel.title}
                className="w-full h-full md:rounded-l-lg"
                loading="lazy"
                width={400}
                height={300}
              />
              </div>
              
              <div className="flex flex-col justify-between md:flex-1">
                <CardHeader className="max-md:p-3">
                  <CardTitle className="text-xl max-md:text-lg font-bold">
                    {hotel.title}
                  </CardTitle>
                  <div className="flex max-md:text-sm items-center text-gray-500 mt-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{hotel.address}</span>
                  </div>
                </CardHeader>
                <CardContent className="py-0 max-md:text-sm max-md:p-3">
                  <div className="flex items-center text-gray-500 mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{hotel.contact.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Link className="h-4 w-4 mr-2" />
                    <span>{hotel.contact.website}</span>
                  </div>
                  {/** Booking Dialog Trigger */}
                  
                </CardContent>

                <CardFooter className="max-md:p-2">
                  <Button
                  onClick={() => {
                    router.push(`/hotels/${hotel._id}`);
                  }}
                  className="md:mt-4 px-6 py-0 rounded-full bg-yellow-300 text-[#343333] hover:text-yellow-300"
                  >
                    View more
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-8">
          <Button
            disabled={currentPage === 1}
            onClick={handlePrevious}
            className="bg-gray-300 hover:bg-gray-400 text-black"
          >
            Previous
          </Button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            disabled={currentPage === totalPages}
            onClick={handleNext}
            className="bg-gray-300 hover:bg-gray-400 text-black"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

