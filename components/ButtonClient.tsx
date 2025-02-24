"use client"
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

const ButtonClient = ({id, allowClick=true}: {id: string, allowClick?: boolean}) => {
  const router = useRouter();
  
  const handleClick = async () => {
    if (allowClick) await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/news/${id}/click`);
    router.push(`/news/${id}`);
  };
  return (
    <Button variant="link" className="text-blue-600 px-0"
    onClick={handleClick}
    >
      Read More
    </Button>
  );
};

export default ButtonClient;
