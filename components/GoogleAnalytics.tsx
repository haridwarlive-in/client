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

      window.gtag = function (...args) {
        window.dataLayer.push(args);
      };

      window.gtag("js", new Date());
      window.gtag("config", "G-RRTTR7ELD2", { debug_mode: true }); // Debug mode enabled
    }
  }, []);

  return (
    <>
      {/* Load Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RRTTR7ELD2"
        onLoad={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", "G-RRTTR7ELD2", { debug_mode: true });
          }
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
