"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

const news = [
  // Generate 30 news items dynamically
  ...Array(30)
    .fill(0)
    .map((_, index) => ({
      title: `News Article ${index + 1}`,
      date: new Date(2024, 2, 20 - index).toISOString(), // Dynamic date
      category: ["Events", "Festival", "Tourism"][index % 3], // Rotate categories
      content: `This is a brief description of News Article ${
        index + 1
      }. Stay updated with the latest.`,
      image: `https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    })),
];

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 12;

  // Filtered news based on category
  const filteredNews = news.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Filtered news based on search query
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 max-md:pt-20 pb-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl max-md:text-xl border-l-yellow-300 py-2 md:py-6 md:px-8 px-4 border-l-4 mb-4 md:mb-8">
          Latest News from <span className="font-bold">Haridwar</span>
        </h1>

        {/* Fallback Content */}
        {filteredNews.length === 0 ? (
          <p className="text-center text-gray-700">No news available.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-8 gap-2 md:mb-8">
              {/* Main Article (Left side, bigger) */}
              <div className="lg:col-span-3 flex flex-col items-flex-end gap-2 md:gap-8">
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <Image
                    src={paginatedNews[0].image}
                    alt={`Image for ${paginatedNews[0].title}`}
                    className="w-full h-96 object-cover"
                    loading="lazy"
                    width={2940}
                    height={1960}
                  />
                  <CardHeader className="max-md:p-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {new Date(paginatedNews[0].date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle>
                      {paginatedNews[0].title.length > 60
                        ? `${paginatedNews[0].title.slice(0, 60)}...`
                        : paginatedNews[0].title}
                    </CardTitle>
                    <span className="inline-block w-fit bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      {paginatedNews[0].category}
                    </span>
                  </CardHeader>
                  <CardContent className="max-md:p-2">
                    <p className="text-gray-600">
                      {paginatedNews[0].content.length > 150
                        ? `${paginatedNews[0].content.slice(0, 150)}...`
                        : paginatedNews[0].content}
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-600 mt-2 px-0"
                      onClick={() =>
                        alert("Read More functionality coming soon!")
                      }
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                {/* Right-side Articles (3 articles) placed below the main article */}
              <div className="grid col-span-2 lg:grid-cols-1 gap-2 md:gap-4">
                {paginatedNews.slice(1, 4).map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow transition-shadow"
                  >
                    <CardHeader className="max-md:p-2 p-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <CardTitle className="text-md">
                        {item.title.length > 25
                          ? `${item.title.slice(0, 25)}...`
                          : item.title}
                      </CardTitle>
                      <span className="inline-block w-fit bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </CardHeader>
                    <CardContent className="max-md:p-2 p-3">
                      <p className="text-gray-600 text-sm">
                        {paginatedNews[0].content.length > 150
                          ? `${paginatedNews[0].content.slice(0, 150)}...`
                          : paginatedNews[0].content}
                      </p>
                      <Button
                        variant="link"
                        className="text-blue-600 mt-2 px-0"
                        onClick={() =>
                          alert("Read More functionality coming soon!")
                        }
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              </div>
              {/* Viral News */}
              <div className="col-span-2 rounded-md">
                <h1 className="text-md font-semibold mb-2">Trending News</h1>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 lg:col-span-2">
                {paginatedNews.slice(1, 6).map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow transition-shadow"
                  >
                    <div className="md:text-xl text-yellow-900 p-1 px-2 font-bold w-full bg-yellow-300">
                      {index+1}
                    </div>
                    <CardHeader className="p-2">
                      
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <CardTitle className="text-md">
                        {item.title.length > 25
                          ? `${item.title.slice(0, 25)}...`
                          : item.title}
                      </CardTitle>
                      <span className="inline-block w-fit bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </CardHeader>
                    <CardContent className="p-2">
                      <p className="text-gray-600 text-sm">
                        {paginatedNews[0].content.length > 150
                          ? `${paginatedNews[0].content.slice(0, 150)}...`
                          : paginatedNews[0].content}
                      </p>
                      <Button
                        variant="link"
                        className="text-blue-600 mt-2 px-0"
                        onClick={() =>
                          alert("Read More functionality coming soon!")
                        }
                      >
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            </div>

            <h1 className="text-md md:text-xl font-semibold mt-8">Latest Top News</h1>
            {/* More Articles (Grid below) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-3">
              
              {paginatedNews.slice(4).map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow transition-shadow"
                >
                  <Image
                    src={item.image}
                    alt={`Image for ${item.title}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width={2940}
                    height={1960}
                  />
                  <CardHeader className="p-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <CardTitle className="text-md">
                      {item.title.length > 100
                        ? `${item.title.slice(0, 25)}...`
                        : item.title}
                    </CardTitle>
                    <span className="w-fit inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </CardHeader>
                  <CardContent className="p-2">
                    <p className="text-gray-600 text-sm">
                      {item.content.length > 100
                        ? `${item.content.slice(0, 100)}...`
                        : item.content}
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-600 mt-2 px-0"
                      onClick={() =>
                        alert("Read More functionality coming soon!")
                      }
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Controls */}
            <div
              className="flex justify-center gap-10 items-center mt-8 mb-20"
              aria-live="polite"
            >
              <Button
                disabled={currentPage === 1}
                onClick={handlePrevious}
                className="bg-gray-300 rounded-none hover:bg-gray-400 text-black"
                aria-label="Go to previous page"
              >
                Previous
              </Button>
              <span className="text-gray-700 border bg-gray-100 p-2">
                {currentPage} / {totalPages}
              </span>
              <Button
                disabled={currentPage === totalPages}
                onClick={handleNext}
                className="bg-gray-300 rounded-none hover:bg-gray-400 text-black"
                aria-label="Go to next page"
              >
                Next
              </Button>
            </div>
          </div>
        )}

      <NewsByCategory category="Events" />
      <NewsByCategory category="Festival" />
      <NewsByCategory category="Tourism" />
      </div>
      
    </div>
  );
}

function NewsByCategory({ category }: { category: string }) {
  // Filter the news based on the selected category
  const filteredNews = news.filter((item) => item.category === category);

  return (
    <div className="mb-4 mt-4 border p-2 md:p-4">
      {/* Category Title */}
      <h2 className="md:text-xl text-md font-semibold md:mb-6 mb-2">Latest {category} News</h2>

      {/* Displaying 4 news items in a row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {filteredNews.slice(0, 4).map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow transition-shadow">
            <Image
              src={item.image}
              alt={`Image for ${item.title}`}
              className="w-full h-24 md:h-48 object-cover"
              loading="lazy"
              width={2940}
              height={1960}
            />
            <CardHeader className="max-md:p-2 p-3">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(item.date).toLocaleDateString()}</span>
              </div>
              <CardTitle className="text-md">
                {item.title.length > 25 ? `${item.title.slice(0, 25)}...` : item.title}
              </CardTitle>
              <span className="w-fit inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                {item.category}
              </span>
            </CardHeader>
            <CardContent className="max-md:p-2 p-3">
              <p className="text-gray-600 text-sm">
                {item.content.length > 100 ? `${item.content.slice(0, 100)}...` : item.content}
              </p>
              <Button
                variant="link"
                className="text-blue-600 mt-2 px-0"
                onClick={() => alert("Read More functionality coming soon!")}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}