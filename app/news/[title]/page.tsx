"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, UserPen } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { useEffect, useState } from "react";
import { News } from "@/types";
import LocaleDate from "@/components/LocaleDate";
import axios from "axios";
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}
// Main component
export default function NewsDetailPage() {
  const params = useParams();
  const title = params.title;
  
  const [news, setNews] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [otherNews, setOtherNews] = useState<News[] | null>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news?limit=10`);
      const data = await response.json();
      setNews(data.news);
    };

    const fetchSelectedNews = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/news/title/${title}`);
      const data = await response.json();
      setSelectedNews(data[0]);
      const id = data[0]._id;
      await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/news/${id}/click`);

    };

    fetchNews();
    fetchSelectedNews();
  }, [title]);

  useEffect(() => {
    if (news.length > 0) {
      setOtherNews(news.filter((item) => item.urlTitle !== title));
    }
  }, [news, title]);

  // Ensure Twitter script runs after content update
  useEffect(() => {
    if (selectedNews?.content.includes("twitter-tweet")) {
      if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
      } else if (window.twttr?.widgets) {
        window.twttr.widgets.load();
      }
    }
  }, [selectedNews]);

  const ArticleContent = ({ content }: { content: string }) => {
    useEffect(() => {
      const loadTwitterScript = () => {
        // If Twitter script is already added, just reload the widgets
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
          return;
        }
  
        // Check if script is already present
        if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
          const script = document.createElement("script");
          script.src = "https://platform.twitter.com/widgets.js";
          script.async = true;
          script.onload = () => {
            if (window.twttr && window.twttr.widgets) {
              window.twttr.widgets.load();
            }
          };
          document.body.appendChild(script);
        }
      };
  
      loadTwitterScript();
    }, [content]); // Reload script if content updates
  
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (!selectedNews) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <div className="container mx-auto px-3 pt-32 pb-4 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="lg:w-2/3">
        <h1 className="md:text-4xl text-2xl font-semibold mb-4">{selectedNews?.title}</h1>
        <Image
          src={selectedNews?.image as string ?? ""}
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
          <div className="flex flex-row items-center mb-4">
            <div className="flex items-center border-r pr-4 text-md text-gray-500">
              <UserPen className="h-4 w-4 mr-2" />
              <p>{selectedNews?.author}</p>
            </div>
            <div className="flex items-center pl-4 text-md text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              <LocaleDate date={selectedNews?.date as string} />
            </div>
          </div>

          <ArticleContent content={selectedNews?.content} />

          <div className="flex flex-wrap gap-2 mb-6 mt-4">
            {selectedNews?.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Other News</h2>
        <ul className="space-y-4">
          {otherNews?.map((item) => (
            <li key={item._id}>
              <Link href={`/news/${item.urlTitle}`} className="flex items-center gap-4">
                <Image
                  src={item.image as string ?? ""}
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
                  <div className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
