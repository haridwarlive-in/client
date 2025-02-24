"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

export default function Pagination({ totalPages, currentPage }: { totalPages: number, currentPage: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`, { scroll: true });
  };

  return (
    <div className="flex justify-center gap-10 items-center mt-8 mb-20">
      <Button 
        disabled={currentPage === 1} 
        onClick={() => handlePageChange(currentPage - 1)}
        className="bg-gray-300 rounded-none hover:bg-gray-400 text-black"
      >
        Previous
      </Button>
      <span className="text-gray-700 border bg-gray-100 p-2">
        {currentPage} / {totalPages}
      </span>
      <Button 
        disabled={currentPage === totalPages} 
        onClick={() => handlePageChange(currentPage + 1)}
        className="bg-gray-300 rounded-none hover:bg-gray-400 text-black"
      >
        Next
      </Button>
    </div>
  );
}
