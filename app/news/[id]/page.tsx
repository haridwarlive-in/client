"use client"
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { Calendar } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useEffect, useState } from "react";
import { News } from "@/types";
import LocaleDate from "@/components/LocaleDate";
import Loading from "../Loading";

// Main component
export default function NewsDetailPage() {
  const params = useParams();
  const id = params.id;
  
  const [news, setNews] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News|null>(null);
  const [otherNews, setOtherNews] = useState<News[]|null>([]);

  // Fetch news data
  const fetchNews = async () => {
    // Fetch news data from the backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news?limit=8`);
    const data = await response.json();
    setNews(data.news);
  };

  const fetchSelectedNews = async () => {
    // Fetch news data from the backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/${id}`);
    const data = await response.json();
    setSelectedNews(data);
  };

  useEffect(()=>{
    fetchNews()
    fetchSelectedNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      setOtherNews(news.filter((item) => item._id !== id));
    }
  }, [news, id]);
  
  
  // URL for sharing
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (!selectedNews) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-10 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="lg:w-2/3">
        <Image
          src={selectedNews?.image as string ?? null}
          alt={selectedNews?.title as string}
          className="w-full h-96 object-cover rounded-md"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          width={1200}
          height={600}
        />
        {/* Share buttons */}
        <ShareButton url={shareUrl} />
        <div className="py-6">
          <h1 className="md:text-4xl text-2xl font-semibold mb-4">{selectedNews?.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <LocaleDate date={selectedNews?.date as string} />
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedNews?.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div dangerouslySetInnerHTML={{ __html: selectedNews?.content as string }}>
          </div>
          
          
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Other News</h2>
        <ul className="space-y-4">
          {otherNews?.map((item) => (
            <li key={item._id}>
              <Link href={`/news/${item._id}`} className="flex items-center gap-4">
                <Image
                  src={item.image as string ?? null}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-lg max-md:text-sm font-medium">{item.title}</h3>
                  <div className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
