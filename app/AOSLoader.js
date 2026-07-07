"use client";

import Script from "next/script";

export default function AOSLoader() {
  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.AOS) {
          window.AOS.init({
            duration: 900,
            once: false,
            offset: 80,
          });
        }
      }}
    />
  );
}
