"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const news = [
  {
    title: "Ganga Aarti Schedule Updated",
    date: "2024-03-20",
    category: "Events",
    content: "New timings announced for the daily Ganga Aarti ceremony at Har Ki Pauri ghat...",
    image: "https://images.unsplash.com/photo-1589308454676-22a0e7e1f916?auto=format&fit=crop&q=80"
  },
  {
    title: "Kumbh Mela Preparations Begin",
    date: "2024-03-18",
    category: "Festival",
    content: "Local authorities start early preparations for the upcoming Kumbh Mela...",
    image: "https://images.unsplash.com/photo-1590766940554-195c81af5756?auto=format&fit=crop&q=80"
  },
  {
    title: "New Tourist Guidelines Released",
    date: "2024-03-15",
    category: "Tourism",
    content: "Updated guidelines for tourists visiting temples and ghats in Haridwar...",
    image: "https://images.unsplash.com/photo-1590067154367-5c9a3e8c7175?auto=format&fit=crop&q=80"
  },
  // Add more news items as needed
];

export default function News() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Latest News from Haridwar</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <CardTitle>{item.title}</CardTitle>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                  {item.category}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}