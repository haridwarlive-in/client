"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";

const hotels = [
  {
    name: "Haveli Hari Ganga",
    rating: 4.5,
    description: "Heritage hotel on the banks of the Ganges with traditional architecture and modern amenities.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    location: "Har Ki Pauri"
  },
  {
    name: "Radisson Blu",
    rating: 5,
    description: "Luxury hotel offering comfortable stays with river views and excellent service.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80",
    location: "Civil Lines"
  },
  {
    name: "Hotel Ganga Azure",
    rating: 4,
    description: "Modern hotel with traditional touches, perfect for spiritual travelers.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80",
    location: "Upper Road"
  },
  // Add more hotels as needed
];

export default function Hotels() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Places to Stay in Haridwar</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{hotel.name}</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1">{hotel.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{hotel.location}</span>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}