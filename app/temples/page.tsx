"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const temples = [
  // Generate 30 temple items dynamically
  ...Array(30).fill(0).map((_, index) => ({
    name: `Temple ${index + 1}`,
    location: `Location ${index + 1}`,
    description: `Temple ${index + 1} is a sacred site known for its spiritual significance and beautiful architecture.`,
    image: `https://plus.unsplash.com/premium_photo-1691030925370-f31017a5aca1?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  })),
];

export default function Temples() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(temples.length / itemsPerPage);

  const paginatedTemples = temples.slice(
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
          Temples of <span className="font-bold">Haridwar</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedTemples.map((temple, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={temple.image}
                alt={temple.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <CardHeader>
                <CardTitle>{temple.name}</CardTitle>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{temple.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{temple.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-8">
          <Button
            disabled={currentPage === 1}
            onClick={handlePrevious}
            className="bg-gray-300 hover:bg-gray-400 text-black"
            aria-label="Go to previous page"
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
            aria-label="Go to next page"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
