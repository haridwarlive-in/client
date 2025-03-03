"use client";

import { CopyIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

// Share button component
export const ShareButton: FC<{ url: string }> = ({ url }) => {
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent("Check out this news article!")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    instagram: `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    telegram: ` https://t.me/share/url?url=${encodeURIComponent(url)}`
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex flex-row items-center gap-2 mt-6">
      <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-600">
        <Image
          src={"/icons/WhatsappIcon.svg"}
          alt="whatsapp icon"
          height={28}
          width={28}
        ></Image>
      </a>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        <Image
          src={"/icons/TwitterIcon.svg"}
          alt="twitter icon"
          height={28}
          width={28}
        ></Image>
      </a>
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700">
        <Image
          src={"/icons/FacebookIcon.svg"}
          alt="facebook icon"
          height={28}
          width={28}
        ></Image>
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700">
        <Image
          src={"/icons/LinkedinIcon.svg"}
          alt="linkedin icon"
          height={25}
          width={25}
        ></Image>
      </a>
      <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-blue-700">
        <Image
          src={"/icons/TelegramIcon.svg"}
          alt="telegram icon"
          height={26}
          width={26}
        ></Image>
      </a>
      <button onClick={handleCopyLink} className="text-gray-700">
        <CopyIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ShareButton;
