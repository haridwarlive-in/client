"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { Temple } from "@/types";
import { useRouter } from "next/navigation";


export default function Temples() {

  const router = useRouter();
  const [temples, setTemples] = useState<Temple[]>([]);
  const fetchTemples = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/temples`);
    const data = response.data;
    setTemples(data);
  }

  useEffect(()=>{
    fetchTemples();
  }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
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
        <h1 className="text-4xl max-md:text-2xl border-l-yellow-300 py-6 px-8 border-l-4 mb-8">
          Temples of <span className="font-bold">Haridwar</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-md:gap-2">
          {paginatedTemples.map((temple, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={temple.image}
                alt={temple.title}
                className="w-full max-md:h-30 h-48 object-cover"
                loading="lazy"
                unoptimized
                width={200}
                height={100}
              />
              <CardHeader className="px-3 py-4">
                <CardTitle className="p-0">{temple.title}</CardTitle>
              </CardHeader>

              <CardFooter className="px-3 py-2">
                <Button 
                variant={"secondary"}
                className="border"
                onClick={() => router.push(`temples/${temple._id}`)}
                >Read More</Button>
              </CardFooter>
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
