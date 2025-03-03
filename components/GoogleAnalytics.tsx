"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];

      // Define gtag globally
      window.gtag = function (...args) {
        window.dataLayer.push(args);
      };

      window.gtag("js", new Date());
      window.gtag("config", "G-RRTTR7ELD2"); // Replace with your Measurement ID
    }
  }, []);

  return (
    <>
      {/* Ensure Google Analytics script loads before using gtag */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RRTTR7ELD2"
        onLoad={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", "G-RRTTR7ELD2");
          }
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
