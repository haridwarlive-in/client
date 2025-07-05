"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Advertisement = {
  _id: string;
  title: string;
  url: string;
  image: string;
  expiry: string;
  status: string;
  key: string;
  duration: number; 
};

export default function AdvertisementSlider() {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/advertisements`);
        const data = await res.json();

        const publishedAds = data.filter(
          (ad: Advertisement) =>
            ad.status === "Published" &&
            new Date(ad.expiry).getTime() > Date.now()
        );

        setAds(publishedAds);
      } catch (err) {
        console.error("Failed to fetch ads:", err);
      }
    };

    fetchAds();
  }, []);

  useEffect(() => {
    if (ads.length === 0) return;

    const duration = (ads[current]?.duration || 5) * 1000;

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [ads, current]);

  if (!ads.length) return null;

  const ad = ads[current];

  return (
    <div className="my-10">
      <div className="w-fit rounded-full mb-2 p-2"><h2 className="text-md max-md:text-sm font-medium">Sponsored</h2></div>
      
      <a href={ad.url} target="_blank" rel="noopener noreferrer">
        <div className="w-full aspect-video overflow-hidden rounded-lg border hover:shadow transition-all duration-300">
          <Image
            src={ad.image}
            alt={ad.title}
            className="object-cover w-full h-full"
            width={400}
            height={225}
            unoptimized
          />
        </div>
      </a>
    </div>
  );
}
