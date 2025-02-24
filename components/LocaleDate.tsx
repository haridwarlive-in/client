"use client";  
import { useMemo } from "react";

export default function LocaleDate({ date }: { date: string }) {
  const formattedDate = useMemo(() => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [date]);

  return <span>{formattedDate}</span>;
}
