"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";
import { useEffect, useState } from "react";
import { Temple } from "@/types";
import axios from "axios";
import { Button } from "@/components/ui/button";

// Main component
export default function TempleDetailPage() {
  const params = useParams();
  const id = params.id;

  const [temple, setTemple] = useState<Temple | null>(null);
  const [otherTemples, setOtherTemples] = useState<Temple[] | null>([]);

  // Fetch temple data
  const fetchTemple = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/temples/${id}`);
    const data = response.data;
    setTemple(data);
  };

  const fetchOtherTemples = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/temples?limit=8`);
    const data = response.data;
    setOtherTemples(data.filter((item: Temple) => item._id !== id));
  };

  useEffect(() => {
    fetchTemple();
    fetchOtherTemples();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // URL for sharing
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (!temple) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-10 flex flex-col lg:flex-row gap-8 max-md:gap-2">
      {/* Main Content */}
      <div className="lg:w-2/3">
        <Image
          src={temple?.image as string ?? null}
          alt={temple?.title as string}
          className="w-full h-96 object-cover rounded-md"
          priority
          unoptimized
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          width={1200}
          height={600}
        />
        {/* Share buttons */}
        <ShareButton url={shareUrl} />
        <div className="py-6">
          <h1 className="md:text-4xl text-2xl font-semibold mb-4">{temple?.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {temple?.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700">📍 <strong>Address</strong><br></br>{temple?.location}</p>
          <Link
          href={temple?.locationUrl as string}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Button
            variant={"secondary"}
            className="mb-10 border"
            >View on Map</Button>
            
          </Link>
          
          <div className="px-2" dangerouslySetInnerHTML={{ __html: temple?.description as string }}></div>
        </div>
        
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/3 max-md:border-t max-md:pt-4">
        <h2 className="text-xl font-bold mb-4">More Temples To Visit</h2>
        <ul className="space-y-4">
          {otherTemples?.map((item) => (
            <li key={item._id}>
              <Link href={`/temples/${item._id}`} className="flex items-center gap-4">
                <Image
                  src={item.image as string ?? null}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                  priority
                  unoptimized
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-lg max-md:text-sm font-medium">{item.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
