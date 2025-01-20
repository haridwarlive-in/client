"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const hotels = [
  // Repeat similar objects with different details to make 30 hotels.
  ...Array(30).fill(0).map((_, index) => ({
    name: `Hotel ${index + 1}`,
    description: `This is a description of Hotel ${index + 1}. Perfect for your stay.`,
    image: `https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80`,
    location: `Location ${index + 1}`,
    phone: `+91-98765432${index}`,
    email: `hotel${index + 1}@example.com`,
  })),
];

export default function Hotels() {
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
        <div className="space-y-6">
          {paginatedHotels.map((hotel, index) => (
            <Card key={index} className="flex flex-col md:flex-row max-md:pb-4 items-center md:items-start bg-white shadow-sm rounded-lg overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                className="w-full md:w-1/3 h-full object-cover md:rounded-l-lg"
                loading="lazy"
                width={400}
                height={300}
            />
              <div className="flex flex-col justify-between md:flex-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{hotel.name}</CardTitle>
                  <div className="flex items-center text-gray-500 mt-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{hotel.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-gray-600 mb-4">{hotel.description}</p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{hotel.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{hotel.email}</span>
                  </div>
                  <Button className="w-fit bg-yellow-300 hover:bg-yellow-300/80 text-black">
                    View Details
                  </Button>
                </CardContent>
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
