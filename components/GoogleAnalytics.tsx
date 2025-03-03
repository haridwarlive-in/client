"use client";

import { useEffect } from "react";
import Script from "next/script";

// Extend the Window type to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };

      gtag("js", new Date());
      gtag("config", "G-RRTTR7ELD2"); // Replace with your Measurement ID
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RRTTR7ELD2"
      />
    </>
  );
};

export default GoogleAnalytics;
