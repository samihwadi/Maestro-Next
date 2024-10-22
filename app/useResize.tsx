"use client";
import { useState, useEffect } from "react";

export default function useResize(size: number) {
  const [isMobile, setIsMobile] = useState<boolean>(false); // Default value for SSR (assume not mobile)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check screen size on the client side
      const handleResize = () => {
        setIsMobile(window.innerWidth <= size);
      };

      // Initial check
      handleResize();

      // Add event listener to track window resizing
      window.addEventListener("resize", handleResize);

      // Cleanup event listener when component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [size]);

  return isMobile;
}
